import { getJWTToken } from "../helpers/getJwtToken.js";

const cookieToken = (user, res) => {
  const token = getJWTToken(user.id);

  res.status(200).json({
    success: true,
    token,
    user,
  });
};

export default cookieToken;
