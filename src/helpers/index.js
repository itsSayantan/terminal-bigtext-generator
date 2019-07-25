const util = require('util')
const debuglog = util.debuglog('tbg')

const characterConstants = require('../constants')

function createUniqueArray(array) {
    return Array.from(new Set(array))
}

function checkValidCharacters(character) {
    return characterConstants.validCharacters[character]
}

function resolveCharacters(characterString, spaceBetweenCharacters) {
    let characterArray = characterString.toString().trim().split('')
    characterArray = characterArray.map(character => {
        switch(character) {
            case ' ': return 'blank'
            case '-': return 'hyphen'
            case '!': return 'exclamationMark'
            case '0': return 'zero'
            case '1': return 'one'
            case '2': return 'two'
            case '3': return 'three'
            case '4': return 'four'
            case '5': return 'five'
            case '6': return 'six'
            case '7': return 'seven'
            case '8': return 'eight'
            case '9': return 'nine'
            default: return character
        }
    })
    let checkValidCharactersResponse = {
        allCharactersValid: true,
        invalidCharacters: []
    }

    const characterArrayLength = characterArray.length

    for (let i = 0; i < characterArrayLength; ++i) {
        const character = characterArray[i]

        if (checkValidCharacters(character)) {
            continue
        } else {
            checkValidCharactersResponse.allCharactersValid = false
            checkValidCharactersResponse.invalidCharacters.push(character)
        }
    }

    if (checkValidCharactersResponse && checkValidCharactersResponse.allCharactersValid) {
        return characterArray
    } else if (checkValidCharactersResponse && !checkValidCharactersResponse.allCharactersValid && checkValidCharactersResponse.invalidCharacters.length > 0) {
        throw new Error(`ERR:1-> Yikes! The following array of characters are not supported in this library, ['${createUniqueArray(checkValidCharactersResponse.invalidCharacters).join('\', \'')}']`)
    } else {
        throw new Error('ERR:2-> We have stumbled on some unknown issue while resolving the characters in your given string input.')
    }
}

function paint(printObj = { stringToPrint: '' }) {
    const characterArray = resolveCharacters(printObj.stringToPrint, printObj.spaceBetweenCharacters)
    const characterArrayLength = characterArray.length

    let finalStringMap = {}

    for (let i = 0; i < characterConstants.CHARACTER_ROW_COUNT; ++i) {
        finalStringMap[`${i}`] = ''
    }

    for (let i = 0; i < characterArrayLength; ++i) {
        const character = characterArray[i]
        const characterConstantsArr = characterConstants[character].split('\n')

        for (let j = 0; j < characterConstants.CHARACTER_ROW_COUNT; j++) {
            finalStringMap[j] += characterConstantsArr[j]
        }
    }

    for (let i = 0; i < characterConstants.CHARACTER_ROW_COUNT; ++i) {
        process.stdout.write(finalStringMap[i])
        console.log('')
    }
}

module.exports = {
    paint,
}