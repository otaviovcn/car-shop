import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car.service';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
      status: this.req.body.status ? this.req.body.status : false,
    };

    try {
      const { type, message } = await this.service.create(car);
      return this.res.status(type).json(message);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;

    try {
      const { type, message } = await this.service.getById(id);
      if (type === 200) {
        return this.res.status(type).json(message);
      }

      return this.res.status(type).json({ message });
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const { type, message } = await this.service.getAll();
      return this.res.status(type).json(message);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
      status: this.req.body.status ? this.req.body.status : false,
    };

    try {
      const { type, message } = await this.service.update(id, car);
      if (type === 200) {
        return this.res.status(type).json(message);
      }

      return this.res.status(type).json({ message });
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
