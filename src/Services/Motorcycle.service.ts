import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/Motorcycle.model';
import statusCode from '../utils/statusCode';

class MotorcycleService {
  public async create(motorcycle: IMotorcycle) {
    const motorcycleModel = new MotorcycleModel();
    const newMotorcycle = await motorcycleModel.create(motorcycle);

    return { type: statusCode.HTTP_CREATED, message: new Motorcycle(newMotorcycle) };
  }
}

export default MotorcycleService;
