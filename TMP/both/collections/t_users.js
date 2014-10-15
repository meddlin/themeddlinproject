TUser = function (document){
	_.extend(this, document);
};

TUser.prototype = {
	constructor: TUser
};

TUsersCollection = new Mongo.Collection('t_users', {
	transform: function (document){
		return new TUser(document);
	}
});

/*
 * Add query methods like this:
 *  TUsers.findPublic = function () {
 *    return TUsers.find({is_public: true});
 *  }
 */
