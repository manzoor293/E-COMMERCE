import jwt from "jsonwebtoken";

const auth = (request, response, next) => {
  try {
    const token =
      request.cookies?.access_token ||
      request.headers.authorization?.split(" ")[1];

    if (!token) {
      return response.status(401).json({
        message: "Provide token",
        error: true,
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

    request.userId = decode.id;
  } catch (error) {
    return response.status(401).json({
      message: "Invalid or expired token. Please log in again.",
      error: true,
      success: false,
    });
  }

  next();
};

export default auth;
