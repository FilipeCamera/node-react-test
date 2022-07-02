export class AppError extends Error {
  statuscode: number = 500;
  constructor(message: string, code: number) {
    super(message);
    this.statuscode = code;
  }
}
