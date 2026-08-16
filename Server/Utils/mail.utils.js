import nodemailer from 'nodemailer'
import {APIERR, APIRES} from "./helper.utils.js"

const transporter = nodemailer.createTransport({
    host : process.env.MAIL_HOST,
    port : Number(process.env.MAIL_PORT),
    secure : Number(process.env.MAIL_PORT) === 465,
    auth : {
        user : process.env.MAIL_USER,
        pass : process.env.MAIL_PASS
    }
})


export const sendMail = async (to,subject,text) =>{
    try {
        if(!to || !subject || !text) throw new APIERR(400, "Need the required fields")
       await transporter.sendMail({
        to : to,
        subject : subject,
        html : text
    })
    console.log(`Successfully Sent the mail`)
    return res.status(200).json(new APIRES(200, 'Successfully sent the mail'))
    } catch (error) {
        console.log(`Err While Sending the mail`)
       new APIERR(500, 'Internal Server Err')
    }
}