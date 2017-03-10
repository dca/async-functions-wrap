
const asyncWrap = require('../main')
const chai = require('chai')
const assert = chai.assert
const should = chai.should()

describe('wrap a async function', () => {
  it('shoult return success if success', async () => {
    let result = await asyncWrap(async () => 'success', (res) => res)

    assert.equal(result, 'success')
  })

  it('should throw error if failure', async () => {
    let result = await asyncWrap(async () => {
      throw new Error('failure')
    }, console.log, (error) => error)

    assert.instanceOf(result, Error)
  })
})


