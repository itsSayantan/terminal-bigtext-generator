const {
    paint,
} = require('./helpers')

function print(stringToPrint) {
    paint({ stringToPrint })
}

print('CHATCLI - sayantan')

module.exports = {
    print,
}
