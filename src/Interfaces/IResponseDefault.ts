export default interface IResponseDefault<T> {
  type: number;
  message: T | string;
}
