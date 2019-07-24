const {
    validCharacters,
} = require('./valid-characters')

const LowercaseAlphabets = require('./lowercase-alphabets')
const UppercaseAlphabets = require('./uppercase-alphabets')
const SpecialCharacters = require('./special-characters')

const CHARACTER_ROW_COUNT = 8

module.exports = {
    validCharacters,
    ...LowercaseAlphabets,
    ...UppercaseAlphabets,
    ...SpecialCharacters,
    CHARACTER_ROW_COUNT,
}