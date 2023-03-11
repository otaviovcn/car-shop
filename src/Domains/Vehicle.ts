import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  public id: string | undefined;
  protected model: string;
  public year: number;
  public color: string;
  public buyValue: number;
  public status: boolean | undefined;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
  }: IVehicle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.status = status;
  }
}

export default Vehicle;
