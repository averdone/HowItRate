//E-Mail fucntion will send email to user

//*
var nodemailer = require('nodemailer');
const { readFile } = require('fs');
const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'howitrate@hotmail.com',
        pass: 'Orange!1'
    }
});


//When Adding parameters, it should look something like this
//transporter.sendMail(FromAddress, ToAddress{
transporter.sendMail({
    from: 'howitrate@hotmail.com',
    to: 'amverdon@syr.edu',
    subject: 'Verify Your HowItRate Account',
    //html: '<style>button{text-align: center;}</style><h1>Hi There! Verify Your Account!</h1><button type="button">Verify!</button>',
    html: '<p>Click <a href="http://howitrate.tk" >here</a> to reset your password</p>'

    //If you want to add attacments, remove this comment
    /*,
    attachments: [{
        filename: 'Verify Image.png',
        //This must ba changes in when moving location of the file
        path: __dirname + '/path/to/file'
    }
    ]*/
});

// verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("MESSAGE SENT");
    }
  });
//*/



console.log("SENDING MESSAGE...");