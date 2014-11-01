UserLog = function (document){
	_.extend(this, document);
};

UserLog.prototype = {
	constructor: UserLog
};

UserLogsCollection = new Meteor.Collection('user_log', {
	transform: function(document){
		return new UserLog(document);
	}
});

/*
 * Add query methods like this:
 *  UserLog.findPublic = function () {
 *    return UserLog.find({is_public: true});
 *  }
 */
