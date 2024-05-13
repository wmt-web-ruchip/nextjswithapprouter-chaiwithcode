import sgMail from '@sendgrid/mail';

export const sendEmail = async (to:any, subject:any, text:string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to,
    from: 'ruchip@webmobtech.com',
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};