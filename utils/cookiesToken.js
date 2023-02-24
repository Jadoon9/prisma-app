import { getJWTToken } from "../helpers/getJwtToken.js";

const cookieToken = (user, res) => {
  const token = getJWTToken(user.id);
  const options = {
    expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  user.password = undefined;

  res.status(200).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};

export default cookieToken;
