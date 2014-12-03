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
		TCompanyModel.company = data[i][0];
		TCompanyModel.description = data[i][1];
		TCompanyModel.module = data[i][2];
		/*testParsing();*/
		TCompanies.insert(TCompanyModel);
		//toastr.success("TCompany insert");
	}
};

var testParsing = function(){
	console.log(tempCompany);
}