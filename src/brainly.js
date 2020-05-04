/**
 * Defri Indra Mahardika
 * Updated on 4 April 2020
 * 
 */

// depend package
const req = require('request-promise');

// setting format output dari graphql
const formatGraphQl = `query SearchQuery($query: String!, $first: Int!, $after: ID) {\n	questionSearch(query: $query, first: $first, after: $after) {\n	edges {\n	  node {\ncontent\n		attachments{\nurl\n}\n		answers {\n			nodes {\ncontent\n				attachments{\nurl\n}\n}\n}\n}\n}\n}\n}\n`
	
/**
 * 
 * @param q string
 * @param count integer
 * 
 * @return array
 */ 
const Brainly = async(q,count = 5) => {
	
	let services = {
			uri:'https://brainly.co.id/graphql/id',
			json: true,
			headers: {
				"content-type": "application/json; charset=utf-8",
				"user-agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0"
			},
			body : {
				"operationName":"SearchQuery",
				"variables": {
					"query": q,
					"after":null,
					"first": count
					
				},
				"query": formatGraphQl
			}
	}
	// replace all html syntax
	let clean = (data) => {
		regex = /(<([^>]+)>)/ig;
		data = data.replace(/(<br?\s?\/>)/ig, ' \n')
		return data.replace(regex, '')
	}

	return await req.post(services).then(res => {
	
			sources = res.data.questionSearch.edges
			
			if(sources.length > 0){
				
				finalData = []
	
				sources.forEach(source => {
					let jawaban = [],
						Qmedia = [];
					
					answers = source.node.answers.nodes
		
					// dump Question media
					if (source.node.attachments.length > 0) {
						Qmedia = source.node.attachments.map(q => q.url)
					}
		
					if(answers.length > 0){
						// dump answers
						answers.forEach(aws => {
							
							jawaban.push({
								"text": clean(aws.content),
								"media": (aws.attachments.length) ? aws.attachments.map(att => att.url) : []
							})
						});
					}
	
					finalData.push({
						"pertanyaan": clean(source.node.content),
						"jawaban": jawaban,
						"questionMedia": Qmedia,
					})
				})
	
				return finalData
			} else {
				return "Tidak terdapat data"
			}
	})
}


module.exports = Brainly
