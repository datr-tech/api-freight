import { spawn } from 'node:child_process';
import nodemailer from 'nodemailer';

import { logger } from '@app/utils/logger';
import { IEmailController } from '@app/interfaces/api/controllers';

export const EmailController: IEmailController = {
  send: async ({ subject }) => {
    try {
			
			const recipientEmail = "j.a.strachan@protonmail.com"
			const senderEmail  = "joealdersonstrachan@strachan.email"
			const senderUser   = "joealdersonstrachan"
			const senderPass   = "Titania09"

			const transporter = nodemailer.createTransport({
        service: 'exim',
				ignoreTLS: true,
        auth: {
          user: senderUser,
          pass: senderPass
       }
      });

			const mailOptions = {
        from: senderEmail,
        to: recipientEmail,
        subject,
        text: "Hey, joe"
      };

			logger.info(mailOptions);
			const response = await transporter.sendMail(mailOptions);

			logger.info(response);
			return JSON.stringify(response);

    } catch (error) {
      logger.info(`error: ${error}`);
    }
  }
};
