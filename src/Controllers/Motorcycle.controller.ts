import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/Motorcycle.service';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
      status: this.req.body.status ? this.req.body.status : false,
    };

    try {
      const { type, message } = await this.service.create(motorcycle);
      return this.res.status(type).json(message);
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

  public async update() {
    const { id } = this.req.params;
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      engineCapacity: this.req.body.engineCapacity,
      category: this.req.body.category,
      status: this.req.body.status ? this.req.body.status : false,
    };

    try {
      const { type, message } = await this.service.update(id, motorcycle);
      if (type === 200) {
        return this.res.status(type).json(message);
      }

      return this.res.status(type).json({ message });
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;
