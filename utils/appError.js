class AppError extends Error {
  constructor(statusCode, status, message) {
    super(message);

    this.timeStamp = new Date().toLocaleString();
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    this.message = message;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
