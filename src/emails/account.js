const sgMail =require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail =(email , name)=>{
    sgMail.send({
        to:email,
        from: 'kanchansikder1408@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}, Let me know how you get along with the app.`
    })
}

const sendDeleteEmail=(email , name)=>{
    sgMail.send({
        to: email,
        from: 'kanchansikder1408@gmail.com',
        subject: 'Why this cancelation?',
        text: `Dear ${name}! Did something went wrong? You can share with us. What troubled you! Will be pleased to hear from you!!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}