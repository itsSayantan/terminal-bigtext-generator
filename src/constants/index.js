const {
    validCharacters,
} = require('./valid-characters')

const LowercaseAlphabets = require('./lowercase-alphabets')
const UppercaseAlphabets = require('./uppercase-alphabets')
const SpecialCharacters = require('./special-characters')

module.exports = {
    validCharacters,
    ...LowercaseAlphabets,
    ...UppercaseAlphabets,
    ...SpecialCharacters,
}