const {
    paint,
} = require('./helpers')

function print(stringToPrint) {
    paint({ stringToPrint })
}

// print('CHATCLI                                    ChatCLI')
print('ABCDaaa--EFGHI')

module.exports = {
    print,
}
