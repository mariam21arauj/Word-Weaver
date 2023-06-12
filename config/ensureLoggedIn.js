module.exports = function(req, res, next){
    // check to see if thers an user in the req{}
    // if req.user returns null set 401(unauthorized)
    if(!req.user) return res.status(401).json('Unauthorized!')
    next()
}