import 'automapper-ts/dist/automapper';
import { InstanceType, ModelType, Typegoose } from 'typegoose';
export declare abstract class BaseService<T extends Typegoose> {
    protected model: ModelType<T>;
    private readonly modelName;
    private readonly viewModelName;
    findAll(filter?: {}): Promise<Array<InstanceType<T>>>;
    findOne(filter?: {}): Promise<InstanceType<T>>;
    findById(id: string): Promise<InstanceType<T>>;
    create(item: InstanceType<T>): Promise<InstanceType<T>>;
    delete(id: string): Promise<InstanceType<T>>;
    update(id: string, item: InstanceType<T>): Promise<InstanceType<T>>;
    clearCollection(filter?: {}): Promise<any>;
    private toObjectId;
}
