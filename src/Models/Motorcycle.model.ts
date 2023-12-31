import { Model, Schema, model, models } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleModel {
  private schema: Schema;
  private model: Model<IMotorcycle>;
  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycle || model('Motorcycle', this.schema);
  }

  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }

  public async getAll(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<IMotorcycle | null> {
    const result = await this.model.findById(id);
    return result;
  }

  public async update(id: string, motorcycle: IMotorcycle) {
    return this.model.updateOne({ _id: id }, { id, ...motorcycle });
  }
}

export default MotorcycleModel;
