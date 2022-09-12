export class NewsErrors extends Error {
  private statusCode: number;
  constructor(message: string, statuscode: number) {
    super(message);
    this.name = 'User Error';
    this.statusCode = statuscode;
  }
}
