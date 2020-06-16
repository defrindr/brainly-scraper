# BrainlyScrapper
Package to scrape ```www.brainly.co.id```

## Install
```
npm install @defrindr/brainly-scraper@1.0.0
```
or
```
npm i brainly-scraper
```

## Example
```javascript
const brainly = require('./brainly.js');


brainly("nkri").then(res => {
	console.log(res);
})
```
Output : 
```json
[
  {
    pertanyaan: 'pengertian NKRI, tujuan NKRI, unsur NKRI, dan fungsi NKRI',
    jawaban: [ [Object] ],
    questionMedia: []
  },
  {
    pertanyaan: 'NKRI adalah \n\n NKRI adalah',
    jawaban: [ [Object] ],
    questionMedia: []
  },
  {
    pertanyaan: 'NKRI NKRI diperoleh melalui... ',
    jawaban: [ [Object] ],
    questionMedia: []
  },
  {
    pertanyaan: 'Apa yang dimaksud dengan NKRI ? (NKRI adalah...)',
    jawaban: [ [Object] ],
    questionMedia: []
  },
  {
    pertanyaan: 'Apa yang dimaksud dengan NKRI ? (NKRI adalah...)',
    jawaban: [ [Object], [Object] ],
    questionMedia: []
  }
]
```
	Tips :
	You can use JSON.stringify() to get string output

## Contribution
Contributions are welcome.
