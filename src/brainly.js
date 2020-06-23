/**
 * Hanif Dwy Putra S
 * Updated on 6 Juni 2020
 * 
 */

// depend package
const req = require('request-promise');

// configurations
const config = require('../config.json');


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
                        proxy: 'http://118.97.41.50:8080',
			headers: {
				"content-type": "application/json; charset=utf-8",
				"user-agent": config['user-agent']
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

	return await req.get(services).then(res => {
	
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
