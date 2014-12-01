/*
RECON-NG SCHEMA OUTPUT
  +--------------------+
  |     companies      |
  +--------------------+
  | company     | TEXT |
  | description | TEXT |
  | module      | TEXT |
  +--------------------+
*/
var tempCompany = {
	company:  "",
	description:  "",
	module:  ""
};

parseCompaniesReconng = function(data) {
	for(var i = 0; i < data.length; i++){
		tempCompany.company = data[i][0];
		tempCompany.description = data[i][1];
		tempCompany.module = data[i][2];
	}
};