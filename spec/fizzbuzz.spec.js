var fizzbuzz = require('../app/fizzbuzz')()

describe('fizzbuzz', function() {
    describe('When sending one', function() {
        it('Should return number one string', function() {
            var result = fizzbuzz.run(1)
            expect(result).toBe('1')
        })
    })
})
