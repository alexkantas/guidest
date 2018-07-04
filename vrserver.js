const express = require('express');
const app = express();
const port = 5056;
const multer = require('multer');
const upload = multer({ dest: 'tempFiles' });
const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
const fs = require('fs');
const cors = require('cors');

const visualRecognition = new VisualRecognitionV3({
    "iam_apikey": "5HfzKQM1OVjthDAWRplzzedcdP1lJNoLFoN0ta7054KQ",
    "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:watson-vision-combined:us-south:a/1ba826af97a44cef9bee2cb9bd5aa6f5:b501afd9-ceb4-4c85-b700-b0db24deb976::",
    "iam_apikey_name": "auto-generated-apikey-d55c1c14-4ea5-479c-bb17-c734135df962",
    "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
    "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/1ba826af97a44cef9bee2cb9bd5aa6f5::serviceid:ServiceId-7b0f82b7-eea1-4234-b562-a288479e9dc5",
    "url": "https://gateway.watsonplatform.net/visual-recognition/api",
    "version": "3",
    "version_date": "2016-05-17"
});

app.use(cors());
app.post('*', upload.single('vrimage'),
    (req, res) => {
        console.log('Image 4', req.body);
        if (!req.file) {
            res.status(500).json({ error: 'noFile' });
            return;
        }
        fs.rename(req.file.path, `./vr.jpg`, (error) => {
            if (error) {
                res.status(500).json({ error: "can't save image to server" });
                return;
            }
            const images_file = fs.createReadStream('./vr.jpg');
            const classifier_ids = ["Attractions_1732891373"];
            const threshold = 0.7;

            const params = {
                images_file,
                classifier_ids,
                threshold
            };

            visualRecognition.classify(params, (err, response) => {
                if (err) return err;
                console.log(JSON.stringify(response, null, 2));

                const spotlight = response.images[0].classifiers[0].classes[0];
                let responseText;
                responseText = (spotlight && spotlight.score > 0.85) ? 
                `Congratulations you visit ${spotlight.class} !!!!` :
                 "This place is unknown";
                 res.json({responseText});
            });

            
        })
    })

app.listen(port, () => { console.log(`Server Listen in port ${port}`); })