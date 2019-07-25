const {
    validCharacters,
} = require('./valid-characters')

const LowercaseAlphabets = require('./lowercase-alphabets')
const UppercaseAlphabets = require('./uppercase-alphabets')
const SpecialCharacters = require('./special-characters')
const Numbers = require('./numbers')

const CHARACTER_ROW_COUNT = 8

module.exports = {
    validCharacters,
    ...LowercaseAlphabets,
    ...UppercaseAlphabets,
    ...SpecialCharacters,
    ...Numbers,
    CHARACTER_ROW_COUNT,
}