import 'automapper-ts/dist/automapper';
import { Types } from 'mongoose';
import { InstanceType, ModelType, Typegoose } from 'typegoose';

export abstract class BaseService<T extends Typegoose> {
  protected model: ModelType<T>;
  // protected mapper: AutoMapperJs.AutoMapper;

  private get modelName(): string {
    return this.model.modelName;
  }

  private get viewModelName(): string {
    return `${this.model.modelName}Vm`;
  }

  // async map<K>(
  //   object: Partial<InstanceType<T>> | Array<Partial<InstanceType<T>>>,
  //   sourceKey: string = this.modelName,
  //   destinationKey: string = this.viewModelName,
  // ): Promise<K> {
  //   return this.mapper.map(sourceKey, destinationKey, object);
  // }

  async findAll(filter = {}): Promise<Array<InstanceType<T>>> {
    return this.model.find(filter).exec();
  }

  async findOne(filter = {}): Promise<InstanceType<T>> {
    return this.model.findOne(filter).exec();
  }

  async findById(id: string): Promise<InstanceType<T>> {
    return this.model.findById(this.toObjectId(id)).exec();
  }

  async create(item: InstanceType<T>): Promise<InstanceType<T>> {
    return this.model.create(item);
  }

  async delete(id: string): Promise<InstanceType<T>> {
    return this.model.findByIdAndRemove(this.toObjectId(id)).exec();
  }

  async update(id: string, item: InstanceType<T>): Promise<InstanceType<T>> {
    return this.model.updateOne(this.toObjectId(id), item, { new: true }).exec();
  }

  async clearCollection(filter = {}): Promise<any> {
    return this.model.deleteMany(filter).exec();
  }

  private toObjectId(id: string): Types.ObjectId {
    return Types.ObjectId(id);
  }
}
