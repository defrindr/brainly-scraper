const proxy = require('proxy-lists');
let result = [];

module.exports = class ProxyClient {
  constructor() {

   this.readme = 'Spy menu.';
 }


 gen() {

  proxy.getProxies({ countries: ['id'] })
  .on('data', function(proxies) {
     console.log('Mendapatkan proxy!');

      for (let i = 0; i < proxies.length; i++) {
       let proxData = proxies[i];
       let track;

       if (proxData.protocols) {
        track = `${proxData.protocols[0]}://${proxData.ipAddress}:${proxData.port}`;
    } else {
     track = `http://${proxData.ipAddress}:${proxData.port}`;
    }
    result.push(track);
   }
  })

   .on('error', function(error) {
     console.log('error!', error);
  })

   .once('end', function() {
     console.log('Sukses mendapatkan proxy!');
   })

  return result;
 }
}
