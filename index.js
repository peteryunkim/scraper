const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
	uri: `https://newyork.craigslist.org/search/sss?query=gdiaper&sort=rel`,
	transform: function (body) {
		return cheerio.load(body)
	}
}

rp(options)
	.then(function(data){
		console.log(data)
	})
	.catch(function(err){
		console.log('ERROR')
	})