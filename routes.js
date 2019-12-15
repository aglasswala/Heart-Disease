const handler = require('./controllers/handler')

module.exports = (router) => {
	router.post('/api/heart', handler.heart);
};