import { IApiResponse, IUser } from "../common/interface";
import UserModel from "../models/users.model";
import nodemailer from "nodemailer"



export const addUser = async (user: IUser): Promise<IApiResponse<IUser>> => {
    const response: IApiResponse<IUser> = {
        statusCode: 400,
        status: 'error',
        message: 'Something went wrong',
        data: null
    };

    try {
        const newUser = new UserModel(user);
        const savedUser = await newUser.save();
        response.statusCode = 200;
        response.status = 'success';
        response.message = 'User added successfully';
        response.data = savedUser;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nirmaldas.t@gmail.com',
                pass: 'zteb xmhj pchw qtun'
            }
        });

        let mailOptions = {
            from: 'nirmaldas.t@gmail.com',
            to: response?.data?.email,
            subject: 'Registration Sucessfull',
            text: 'Your Registration is Sucessfull',
            html: '<b>Hello Your Registration is Sucessfull</b>'
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
        
    } catch (error: any) {
        response.message = error.message || 'An error occurred while adding the user';
    }

    return response;
};
