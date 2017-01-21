var orm = require('../config/org.js');

var burger = {
	all: function(cb) {
		org.all('burgers', function(res){
			cb(res)
		});
	},
	create: function(name,cb) {
		org.create('burgers', ['burger_name', 'devoured'], [name, false], cb);
	},
	update: function(id, cb) {
		var condition = 'id=' + id;
		org.update('burgers', {devoured : true}, condition, cb);
	}
};

module.exports = burger;