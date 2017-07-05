const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10,(err,salt)=>{
  bcrypt.hash(password,salt,(err,hash)=>{
    console.log(hash);
  })
})











// const {SHA256} = require('crypto-js');
// const jws = require('jsonwebtoken');
//
// var data={
//   id:10
// }
//
// var token = jws.sign(data,'somesecret');
// console.log(token);
//
// var decoded = jws.verify(token,'somesecret');
// console.log('decoded: ',decoded);
// var message = 'this is a password';
//
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id:4
// };
//
// var token = {
//   data,
//   hash:SHA256(JSON.stringify(data)+'somesecret').toString()
// }
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash =  SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
// if(token.hash === resultHash){
//   console.log('SAFE');
// }else {
//   console.log('NOT SAFE');
// }
