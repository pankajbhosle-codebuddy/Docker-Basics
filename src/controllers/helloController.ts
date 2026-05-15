import { Request, Response } from "express";




export const sayHelloFromParams = (req: Request, res: Response) => {
  const username = req.params.username;

  res.json({ message: `Hello, ${username}!` });
};

export const sayHelloFromBody = (req: Request, res: Response) => {
  
    if (!req?.body?.username) {
      return res.status(400).json({ message: "Username is required" });
    }
  const username = req.body.username;

  res.json({ message: `Hello, ${username}!` });
};

export const sayHello = (req: Request, res: Response) => {


  res.json({ message: `Hello, world!` });
};