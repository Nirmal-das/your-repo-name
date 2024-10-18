import Router from 'express-promise-router';
import { Request, Response } from 'express';
import { IUser } from '../common/interface';
import { addUser } from '../services/user.service';

const router = Router();

router.post('/add', async (req: Request, res: Response) => {
    try {
        const data: IUser = req.body;
        const user = await addUser(data);
        return res.status(user?.statusCode).send(user);
    } catch (error: any) {
        console.error('[ERROR] in user controller: ', error);
        return res.status(401).send({ statusCode: 401, status: 'error', message: error.message });
    }
});

export default router;
