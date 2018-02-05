const { equal, assert } = require('zoroaster/assert')
const context = require('../context/')
const testPackage_66 = require('../..')

const testPackage_66TestSuite = {
    context,
    'should be a function'() {
        equal(typeof testPackage_66, 'function')
    },
    'should call package without error'() {
        assert.doesNotThrow(() => {
            testPackage_66()
        })
    },
}

module.exports = testPackage_66TestSuite
