const url = require('url');

const myUrl = new URL('http://mywebiste.com:3000/hello.html?id=100&status=active');

// serial URL
console.log(myUrl.href);
console.log(myUrl.toString());
// Host (roo domain)
console.log(myUrl.host);
// hostname --> does not get port
console.log(myUrl.hostname);
// pathname
console.log(myUrl.pathname);
// serialized query
console.log(myUrl.search);
// params object
console.log(myUrl.searchParams);
// add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.search);

// loop through the params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));




