UserDataLog = function (document){
	_.extend(this, document);
};

UserDataLog.prototype = {
	constructor: UserDataLog
};

UserDataLogsCollection = new Meteor.Collection('user_data_log', {
	transform: function(document){
		return new UserDataLog(document);
	}
});

/*
 * Add query methods like this:
 *  UserLog.findPublic = function () {
 *    return UserLog.find({is_public: true});
 *  }
 */
