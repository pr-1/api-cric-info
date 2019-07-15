import { ModelType } from 'typegoose';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../auth/auth.service';
import { BaseService } from '../../services/base.service';
export declare class UsersService extends BaseService<UserModel> {
    private readonly userModel;
    readonly authService: AuthService;
    constructor(userModel: ModelType<UserModel>, authService: AuthService);
    register(vm: any): Promise<UserModel>;
    login(vm: any): Promise<any>;
}
