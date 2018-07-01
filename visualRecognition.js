const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

const visualRecognition = new VisualRecognitionV3({
    "iam_apikey": "5HfzKQM1OVjthDAWRplzzedcdP1lJNoLFoN0ta7054KQ",
    "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:watson-vision-combined:us-south:a/1ba826af97a44cef9bee2cb9bd5aa6f5:b501afd9-ceb4-4c85-b700-b0db24deb976::",
    "iam_apikey_name": "auto-generated-apikey-d55c1c14-4ea5-479c-bb17-c734135df962",
    "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
    "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/1ba826af97a44cef9bee2cb9bd5aa6f5::serviceid:ServiceId-7b0f82b7-eea1-4234-b562-a288479e9dc5",
	"url": "https://gateway.watsonplatform.net/visual-recognition/api",
	"version":"3",
	"version_date":"2016-05-17"
  });

var fs = require('fs');

var images_file= fs.createReadStream('./3.jpg');
var classifier_ids = ["Attractions_1732891373"];
var threshold = 0.7;

var params = {
	images_file,
	classifier_ids,
	threshold
};

visualRecognition.classify(params, function(err, response) {
	if (err)
	console.log(err);
	else
	console.log(JSON.stringify(response, null, 2));

	const spotlight = response.images[0].classifiers[0].classes[0];
	if(spotlight && spotlight.score > 0.85) console.log(`Congratulation you visit ${spotlight.class} !!!!`) 
	else console.log("This place is unkwown")
});