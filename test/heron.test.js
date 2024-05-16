import { describe, it } from 'mocha'
import assert from 'assert'
import heron from '../src/heron.js'

describe('heron function', function () {
  it('should return the correct area for a valid triangle', function () {
    assert.strictEqual(heron(3, 4, 5), 6) // Right triangle
  })

  it('should return the correct area for another valid triangle', function () {
    assert.strictEqual(heron(7, 8, 9), Math.sqrt(180)) // Scalene triangle
  })
})
