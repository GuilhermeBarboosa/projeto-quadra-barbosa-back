function authRole(role) {
    return function(req, res, next) {
        if (req.role !== role) {
            res.status(401).send('Unauthorized');
        } else {
            next();
        }
    };
}

module.exports = authRole;