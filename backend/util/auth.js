import jwt from "jsonwebtoken";

const key = process.env.SecretPassword;

export function checkHeaderToken(req) {
  if (!req.headers.authorization) {
    console.log("NOT AUTH. AUTH HEADER MISSING.");
    return null; 
  }

  const authFragments = req.headers.authorization.split(" ");

  if (authFragments.length !== 2) {
    console.log("NOT AUTH. AUTH HEADER FORMAT INCORRECT.");
    return null; 
  }

  return authFragments[1];
}

export function checkAuthMiddleware(req, res, next) {
  const authToken = checkHeaderToken(req);

  if (!authToken) {
    return next(new Error("No token provided"));
  }

  try {
    const validatedToken = jwt.verify(authToken, key);
    if (validatedToken) {
      req.token = validatedToken;
      next(); 
    } else {
      return next(new Error("Not authenticated."));
    }
  } catch (error) {
    return next(new Error("Not authenticated."));
  }
}

export function checkAuthMiddlewareTwo(req, res, next) {
  console.log("check two");

  const authToken = checkHeaderToken(req);

  if (!authToken) {
    console.log("No token provided.");
    return res.status(400).json({ message: "No token provided" });
  }

  console.log(`Received token: ${authToken}`);

  if (!key) {
    console.error("JWT Secret key is missing.");
    return res.status(500).json({ message: "Server configuration error" });
  }

  try {
    const validatedToken = jwt.verify(authToken, key);
    console.log("Decoded Token:", validatedToken);

    return res.status(200).json({ message: "Token is approved" });
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(400).json({ message: "Token is not approved" });
  }
}
