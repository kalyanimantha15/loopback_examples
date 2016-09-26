	module.exports = function(app) {   
    var ds = app.loopback.createDataSource({
        connector: require("loopback-connector-rest"),
        debug: false,
        baseURL: 'http://localhost:3000'
    });
	var config = {
		"name": "ServiceTransaction",
		"base": "PersistedModel",
		"resourceName": "transactions"
		}
		var ServiceTransaction = ds.createModel('ServiceTransaction', {}, config);
    var User = ds.createModel('user', {
        name: String,
        bio: String,
        approved: Boolean,
        joinedAt: Date,
        age: Number
    });
    User.create(new User({name: 'Mary'}), function (err, user) {
        console.log(user);
    });
    User.find(function (err, user) {
        console.log(user);
    });
    User.findById(1, function (err, user) {
        console.log(err, user);
    });
    User.update(new User({id: 1, name: 'Raymond'}), function (err, user) {
        console.log(err, user);
    });