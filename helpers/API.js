const instance = require('./axios')
let number = Math.floor(Math.random() * 731) + 1; 
let hero = {}

module.exports = function(req, res, next) {
    instance.get(`/${number}/image`)
            .then(result => {
                hero.image = result.url 
                return instance.get(`/${number}/biography`)
            })
            .then( bio => {
                hero.fullname = bio.full-name
                hero.universe = bio.publisher
                return instance.get(`/${number}/work`)
            })
            .then( info => {
                hero.occupation = info.occupation
                res.status(200).json({hero})
            })
            .catch(err => {
                next(err)
            })
}


