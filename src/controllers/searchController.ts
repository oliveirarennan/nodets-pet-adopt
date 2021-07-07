import { Request, Response } from "express";

export const search = (request: Request, response: Response): void => {
  response.render("pages/page");
};
