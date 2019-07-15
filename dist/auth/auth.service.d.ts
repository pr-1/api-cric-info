import { UsersService } from '../modules/users/users.service';
import { UserModel } from '../models/user.model';
export declare class AuthService {
    readonly userService: UsersService;
    private readonly jwtOptions;
    private readonly jwtKey;
    constructor(userService: UsersService);
    signPayload(payload: any): Promise<string>;
    validateUser(validatePayload: any): Promise<UserModel>;
}
