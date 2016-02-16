// "Hello world" with Babel, async functions, and Regenerator

require('regenerator/runtime');

async function sayHello() {
  console.log(await Promise.resolve('hello world'));
}

// At the top level, we have to use the promise format
// rather than the async format
sayHello().catch(err => console.log(err));
