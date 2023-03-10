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

  public async getAll() {
    const carModel = new CarModel();
    const cars = await carModel.getAll();

    const carsList = cars.map((car) => ({
      id: car._id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty,
    }));

    return { type: statusCode.HTTP_OK, message: carsList };
  }

  public async getById(id: string) {
    const carModel = new CarModel();
    const car = await carModel.getById(id);

    if (!car) {
      return { type: statusCode.HTTP_NOT_FOUND, message: 'Car not found' };
    }

    const carFound = {
      id: car._id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty,
    };

    return { type: statusCode.HTTP_OK, message: carFound };
  }
}

export default CarService;
