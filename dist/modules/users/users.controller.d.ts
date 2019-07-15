import { UsersService } from './users.service';
import { UserModel } from '../../models/user.model';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    register(vm: UserModel): Promise<any>;
    login(vm: any): Promise<any>;
}
