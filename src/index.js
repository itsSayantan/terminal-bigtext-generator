const {
    paint,
} = require('./helpers')

function print(stringToPrint) {
    paint({ stringToPrint })
}

// print('CHATCLI                                    ChatCLI')
print('ZION')

module.exports = {
    print,
}
