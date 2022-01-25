class HttpError extends Error {
    // adds a code property to Error
    constructor(message, errorCode) {
      super(message);
      this.code = errorCode;
    }
  }
  
  module.exports = HttpError;