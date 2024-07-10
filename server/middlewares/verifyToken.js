import jwt from "jsonwebtoken";
const verifyToken = (req, res, next) => {
  const token = req.cookies.ArtGallery_access_token;
  if (!token)
    return res.status(401).json({ success: false, message: "Token not found" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    req.user = decoded;
    next();
  });
};

export default verifyToken;
