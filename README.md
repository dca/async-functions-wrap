# async-functions-wrap

wrap your async function with catch.

## Usage

### before

```js
(async () => {
  try {
    await doSomething()
    console.log('It\'s ok!')
  } catch (err) {
    console.error(err)
  }
})()
```

### after

```js
const asyncWrap = require('async-functions-wrap')

asyncWrap(async () => {  
  await doSomething()
  return 'It\'s ok!'
})
```
