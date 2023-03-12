import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/Motorcycle.model';
import statusCode from '../utils/statusCode';
import IResponseDefault from '../Interfaces/IResponseDefault';

class MotorcycleService {
  public async create(motorcycle: IMotorcycle) {
    const motorcycleModel = new MotorcycleModel();
    const newMotorcycle = await motorcycleModel.create(motorcycle);

    return { type: statusCode.HTTP_CREATED, message: new Motorcycle(newMotorcycle) };
  }

  public async getAll(): Promise<IResponseDefault<IMotorcycle[]>> {
    const motorcycleModel = new MotorcycleModel();
    const motorcycles = await motorcycleModel.getAll();

    const motorcyclesList = motorcycles.map((motorcycle) => ({
      id: motorcycle._id,
      model: motorcycle.model,
      year: motorcycle.year,
      color: motorcycle.color,
      status: motorcycle.status,
      buyValue: motorcycle.buyValue,
      engineCapacity: motorcycle.engineCapacity,
      category: motorcycle.category,
    }));

    return { type: statusCode.HTTP_OK, message: motorcyclesList };
  }

  public async getById(id: string): Promise<IResponseDefault<IMotorcycle>> {
    const motorcycleModel = new MotorcycleModel();
    const motorcycle = await motorcycleModel.getById(id);

    if (!motorcycle) {
      return { type: statusCode.HTTP_NOT_FOUND, message: 'Motorcycle not found' };
    }

    const motorcycleFound = {
      id: motorcycle._id,
      model: motorcycle.model,
      year: motorcycle.year,
      color: motorcycle.color,
      status: motorcycle.status,
      buyValue: motorcycle.buyValue,
      engineCapacity: motorcycle.engineCapacity,
      category: motorcycle.category,
    };

    return { type: statusCode.HTTP_OK, message: motorcycleFound };
  }
}

export default MotorcycleService;
