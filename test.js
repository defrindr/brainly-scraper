const brainly = require("./index");

(async function(){
    for (let i = 0; i < 100; i++) {
        // await brainly("nkri").then(res => { return res;});
        // if (i == 100) {
            await brainly("nkri").then(res => {
                console.log(res);
            });
        // }
    }
})();