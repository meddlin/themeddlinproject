TargetSchema = new SimpleSchema({
	hosts: {
		type: [THostSchema],
		optional: true
	},
	operatingSystems: {
		type: [TOperatingSystemSchema],
		optional: true
	},
	softwares: {
		type: [TSoftwareSchema],
		optional: true
	},
	users: {
		type: [TUserSchema],
		optional: true
	}
});