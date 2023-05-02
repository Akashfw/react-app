const express = require("express");
const aws = require("aws-sdk");
const app = express();

app.use(express.json());

const awsConfig = {
  accessKeyId: "",
  secretAccessKey: "",
  region: "us-east-1",
};

const ses = new aws.SES(awsConfig);
app.post("/email", async function (req, res) {
  const fromEmail = "sd12062020@gmail.com";
  const toEmail = "sourav.das@masaischool.com";
  const shortCode = Date.now();

  const params = {
    Source: fromEmail,
    Destination: {
      ToAddresses: [toEmail],
    },
    Message: {
      Subject: {
        Charset: "utf-8",
        Data: "OTP is here",
      },
      Body: {
        Html: {
          Charset: "utf-8",
          Data: `<h1>Your OTP is:- ${shortCode}</h1>`,
        },
      },
    },
  };

  const email = await ses.sendEmail(params).promise();
  res.send(email);
});

app.listen(3001, () => {
  console.log("Server Started");
});
