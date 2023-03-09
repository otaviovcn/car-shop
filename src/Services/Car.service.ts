import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/Car.model';
import statusCode from '../utils/statusCode';

class CarService {
  public async create(car: ICar) {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);

    return { type: statusCode.HTTP_CREATED, message: new Car(newCar) };
  }
}

export default CarService;
