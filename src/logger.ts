function info() {
    console.log(arguments);
}

function warn() {
    console.warn(arguments);
}

function error() {
    console.error(arguments)
}

export default { info, warn, error }