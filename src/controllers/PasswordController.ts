import { Request, Response} from 'express'
import StrongPasswordService from '../service/StrongPasswordService';

class PasswordController {
    public index (req: Request, res: Response) : Response {
        const {password} = req.body;
        const newPassword = StrongPasswordService.execute(password);
        return res.status(200).json({newPassword});
    }
}

export default new PasswordController()