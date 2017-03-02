
module.exports = (fn, onSuccess = console.log, onError = console.error) => {
    return fn().then(onSuccess).catch(onError)
}

