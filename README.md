# BrainlyScrapper

## Install
```
git clone https://github.com/defrindr/BrainlyScrapper.git
```

## Sample
```
brainly = require('./brainly.js');


brainly("nkri").then(res => {
	console.log(res);
})
```
Output : 
```
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


