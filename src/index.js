const {
    paint,
} = require('./helpers')

function print(stringToPrint) {
    paint({ stringToPrint })
}

// print('CHATCLI - sayantan')
print('A+-B')

module.exports = {
    print,
}
