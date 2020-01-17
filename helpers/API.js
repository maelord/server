const instance = require('./axios')
let number = Math.floor(Math.random() * 731) + 1; 

module.exports = function(req, res, next) {
    let hero = {}
    instance.get(`/${number}/image`)
            .then(({data}) => {
                hero.image = data.url 
                return instance.get(`/${number}/biography`)
            })
            .then(({data}) => {
                hero.fullname = data['full-name']
                hero.universe = data.publisher
                return instance.get(`/${number}/work`)
            })
            .then( ({data}) => {
                hero.occupation = data.occupation
                res.status(200).json({hero})
            })
            .catch(err => {
                next(err)
            })
}


