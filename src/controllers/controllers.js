import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/UsersModels";

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "username", "email"],
    });
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};

const register = async (req, res) => {
  const { username, email, password, confPassword } = req.body;
  if (password !== confPassword) {
    res.status(400).json({
      messege: "Password tidak sesuai",
      code: 400,
    });
  }
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await Users.create({
      username,
      email,
      password: hashPassword,
    });
    res.json({
      messege: "Akun Berhasil dibuat",
    });
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) res.status(400).json({ msg: "Wrong Password" });
    const userId = user[0].id;
    const { name } = user[0];
    const { email } = user[0];
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15s",
      },
    );
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      },
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email not found" });
  }
};

const logout = async (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) res.sendStatus(204);

  const user = await Users.findAll({
    where: {
      refreshToken,
    },
  });

  if (!user[0]) res.sendStatus(204);

  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    },
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

export { getUsers, register, login, logout };
