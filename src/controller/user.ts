import { UserInterface } from "./../model/user";
import { Request, Response } from "express";

import User from "../model/user";

class UserController {
  async index(req: Request, res: Response) {
    const data: UserInterface[] = User.map(item => item);

    return res.status(200).json({
      message: "OK",
      data
    });
  }

  async store(req: Request, res: Response) {
    const { name, username, password, email } = req.body;

    User.push({
      name,
      username,
      password,
      email
    });

    const data: UserInterface[] = User.map(item => item);

    return res.json({
      message: "OK",
      data
    });
  }
}

export default new UserController();
