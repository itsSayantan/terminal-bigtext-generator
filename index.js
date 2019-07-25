const {
    paint,
} = require('./src/helpers')

function print(stringToPrint) {
    paint({ stringToPrint })
}

module.exports = {
    print,
}
