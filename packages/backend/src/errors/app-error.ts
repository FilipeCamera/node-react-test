export class AppError extends Error {
  statuscode: number;
  constructor(message: string, code: number) {
    super(message);
    this.statuscode = code;
  }
}
