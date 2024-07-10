import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const createUser = await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginUser = await prisma.users.findFirst({ where: { email } });

    if (loginUser) {
      const isPasswordValid = bcrypt.compareSync(password, loginUser.password);
      if (isPasswordValid) {
        // res.status(200).json({ success: true, message: "Login Successful" });

        const payload = {
          id: loginUser.id,
          name: loginUser.name,
          email: loginUser.email,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.cookie("token", token);
        res.status(200).json({ success: true, data: loginUser });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Wrong User Credentials" });
      }
    } else {
      res
        .status(400)
        .json({ success: false, message: "Wrong User Credentials" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
