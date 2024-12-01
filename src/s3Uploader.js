const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');



require('dotenv').config({ path: '../.env' });

console.log('AWS_ACCESS_KEY_ID:', process.env.AWS_ACCESS_KEY_ID);
console.log('AWS_SECRET_ACCESS_KEY:', process.env.AWS_SECRET_ACCESS_KEY);
console.log('hy');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Set this in your environment
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-2', // Change to your S3 bucket's region
});

const s3 = new AWS.S3();

async function uploadToS3(filePath) {
    const fileStream = fs.createReadStream(filePath);
    const fileName = path.basename(filePath);


    const Params = {
        Bucket: process.env.BUCKET_NAME, // Set this in your environment
        Key: fileName,
        Body: fileStream
    }


    await s3.upload(Params, (err, data) => {
        if (err) {
            console.error(`Failed to upload ${filePath} to S3: ${err.message}`, err);
        } else {
            console.log(`Uploaded ${filePath} to S3: ${data.Location}`);
        }
    })
}

module.exports = uploadToS3;