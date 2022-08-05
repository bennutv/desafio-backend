class AppError {
  constructor(statusCode, message, log) {
    this.statusCode = statusCode
    this.message = message
    this.log = log
  }
}

export { AppError }