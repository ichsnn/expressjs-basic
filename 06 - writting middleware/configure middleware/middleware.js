module.exports = (options) => {
    return  (req, res, next) => {
        // Implement the middleware function based on the options object
        console.log(options)
        next();
    }
}