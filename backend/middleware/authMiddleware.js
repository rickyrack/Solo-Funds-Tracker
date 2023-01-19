const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

    }
});