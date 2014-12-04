TabularTablesLeaks = new Tabular.Table({
	name: "LeakTable",
	collection: TLeaks,
	columns: [
		{data: "leakId", title: "Leak ID"},
		{data: "description", title: "Description"},
		{data: "sourceRefs", title: "Source Refs"},
		{data: "leakType", title: "Leak Type"},
		{data: "title", title: "Title"},
		{data: "importDate", title: "Import Date"},
		{data: "leakDate", title: "Leak Date"},
		{data: "attackers", title: "Attackers"},
		{data: "numEntries", title: "Num Entries"},
		{data: "score", title: "Score"},
		{data: "numDomainsAffected", title: "Num Dom Aff."},
		{data: "attackMethod", title: "Attack Method"},
		{data: "targetIndustries", title: "Target Industries"},
		{data: "passwordHash", title: "Pass Hash"},
		{data: "targets", title: "Targets"},
		{data: "mediaRefs", title: "Media Refs"},
		{data: "module", title: "Module"}
	]
});