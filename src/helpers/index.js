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

    for (let i = 0; i < 6; ++i) {
        finalStringMap[`${i}`] = ''
    }

    for (let i = 0; i < characterArrayLength; ++i) {
        const character = characterArray[i]
        const characterConstantsArr = characterConstants[character].split('\n')
// console.log(characterConstantsArr)
        for (let j = 0; j < 6; j++) {
            finalStringMap[j] += characterConstantsArr[j]
        }
        // finalStringMap[i] += characterConstantsArr[i][0]
        // finalStringMap[i] += characterConstantsArr[i][1]
        // finalStringMap[i] += characterConstantsArr[i][2]
        // finalStringMap[i] += characterConstantsArr[i][3]
        // finalStringMap[i] += characterConstantsArr[i][4]
        // finalStringMap[i] += characterConstantsArr[i][5]
    }

    console.log(finalStringMap)

    const finalStringMapKeys = Object.keys(finalStringMap)
    const finalStringMapKeysLength = finalStringMapKeys.length

    for (let i = 0; i < 6; ++i) {
        // process.stdout.write('\n' + finalStringMap[`0-${i}`])
        // process.stdout.write('\n' + finalStringMap[`1-${i}`])
        // process.stdout.write('\n' + finalStringMap[`2-${i}`])
        // process.stdout.write('\n' + finalStringMap[`3-${i}`])
        // process.stdout.write('\n' + finalStringMap[`4-${i}`])
        // process.stdout.write('\n' + finalStringMap[`5-${i}`])

        process.stdout.write(finalStringMap[i])
        console.log('')
    }
}

module.exports = {
    print,
}