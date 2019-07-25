const {
    paint,
} = require('./helpers')

function print(stringToPrint) {
    paint({ stringToPrint })
}

print('CHATCLI                                    ChatCLI')

module.exports = {
    print,
}
