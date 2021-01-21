const { query } = require('express');

module.exports = function asyncMiddleware(handler) {
    return async (req, res, next) => {
        try {
            // Fetching index route for by passing it from redis key check
            await handler(req, res, next);
        }
        catch (ex) {
           next(ex);
        }
    }    
};
