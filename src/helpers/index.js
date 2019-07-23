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
    characterArray = characterArray.map(character => (character === ' ') ? 'blank' : character)
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

function print(printObj = { stringToPrint: '', spaceBetweenCharacters: 0 }) {
    const characterArray = resolveCharacters(printObj.stringToPrint, printObj.spaceBetweenCharacters)
    const characterArrayLength = characterArray.length

    let finalStringMap = {}
    let finalString = ''

    for (let i = 0; i < characterArrayLength; ++i) {
        const character = characterArray[i]
        const characterConstantsArr = characterConstants[character].split('\n')

        finalStringMap[`${i}-0`] = characterConstantsArr[0]
        finalStringMap[`${i}-1`] = characterConstantsArr[1]
        finalStringMap[`${i}-2`] = characterConstantsArr[2]
        finalStringMap[`${i}-3`] = characterConstantsArr[3]
        finalStringMap[`${i}-4`] = characterConstantsArr[4]
        finalStringMap[`${i}-5`] = characterConstantsArr[5]
    }

    debuglog(finalStringMap)

    const finalStringMapKeys = Object.keys(finalStringMap)
    const finalStringMapKeysLength = finalStringMapKeys.length

    for (let i = 0; i < characterArrayLength; ++i) {
        process.stdout.write(finalStringMap[`0-${i}`])
        process.stdout.write(finalStringMap[`1-${i}`])
        process.stdout.write(finalStringMap[`2-${i}`])
        process.stdout.write(finalStringMap[`3-${i}`])
        process.stdout.write(finalStringMap[`4-${i}`])
        process.stdout.write(finalStringMap[`5-${i}`])
        console.log()
    }
}

module.exports = {
    print,
}