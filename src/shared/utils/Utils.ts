class Utils {
  static responseBuilder(data: unknown, status = 200, message = "Success") {
    return {
      data,
      message,
      status,
    };
  }
}

export { Utils };
