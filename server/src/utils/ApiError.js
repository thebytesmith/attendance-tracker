class ApiError extends Error {
  constructor(
    statusCode, 
    message = "Something went wrong",
    error = [],
    stack = ""
  ) {
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.successs = false
    this.errors = errros

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace()
    }
  }
}

export { ApiError }