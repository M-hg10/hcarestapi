const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { username: 'admin', role: 'admin' }, // payload
  'supersecretkey',                     // .env'deki JWT_SECRET ile aynı
  { expiresIn: '1d' }
);

console.log("JWT Token:\n");
console.log(token);
console.log("\nToken'ı kullanarak API'ye istek yapabilirsiniz:\n");