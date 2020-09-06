const brainly = require('../index');

describe('Brainly Scraper TDD', function(){
    it('Blank Parameter', function(done){
        brainly().then(res => {
            if (res.message !== "Param cant be blank") done(res);
            done();
        });
    });
    it('Simple Usage', function(done) {
        brainly("nkri", 5).then(res => {
            if (res.total !== 5) done("Length is not match");
            done();
        }).catch(error => {
            done(error);
        });
    });
    it('Test Limit', function (done) {
        for (let i=0;i<20;i++){
            brainly("nkri").then(res => {
                if (res.total === 0) done("Error !!!");
            })
        }
        done();
    });
});
