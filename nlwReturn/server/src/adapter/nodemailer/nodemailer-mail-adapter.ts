import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "880b4d09d292e8",
    pass: "58b8b81041a050"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body, }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Eduardo <edu@edu.com>',
      subject,
      html: body
    })

  };
}