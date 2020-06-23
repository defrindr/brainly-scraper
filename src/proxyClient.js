const proxy = require('proxy-lists');
let result;

module.exports = class ProxyClient {
  constructor() {

   this.readme = 'Spy menu.';
 }


 gen() {

  proxy.getProxies({ countries: ['id'] })
  .on('data', function(proxies) {
     console.log('Mendapatkan proxy!');

      let prox = proxies[0]
      if (prox.protocols) {
        result = `${prox.protocols[0]}://${prox.ipAddress}:${prox.port}`;
     } else {
        result = `http://${prox.ipAddress}:${prox.port}`;
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
