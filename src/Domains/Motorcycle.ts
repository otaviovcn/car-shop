import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  public id: string | undefined;
  protected model: string;
  public year: number;
  public color: string;
  public buyValue: number;
  private category: string;
  private engineCapacity: number;
  public status: boolean | undefined;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    category,
    engineCapacity,
  }: IMotorcycle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.engineCapacity = engineCapacity;
    this.category = category;
    this.status = status;
  }
}

export default Motorcycle;
