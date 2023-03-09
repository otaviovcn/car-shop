import ICar from '../Interfaces/ICar';

class Car {
  public id: string | undefined;
  protected model: string;
  public year: number;
  public color: string;
  public buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  public status: boolean | undefined;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    doorsQty,
    seatsQty,
  }: ICar) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
    this.status = status;
  }
}

export default Car;