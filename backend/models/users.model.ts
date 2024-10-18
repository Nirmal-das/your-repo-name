import { model, Schema } from 'mongoose';
import { IUser } from '../common/interface';



const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    mern: {
        type: Boolean,
        required: true
    },

    mean: {
        type: Boolean,
        required: true
    },

    mevn: {
        type: Boolean,
        required: true
    },

    experience: {
        type: String,
        required: true
    },

    contactNumber: {
        type: String,
        required: true
    },
});

const UserModel = model<IUser>('User', userSchema, 'users');

export default UserModel;