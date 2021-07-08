import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/Pet";

export const search = (request: Request, response: Response): void => {
  const query = request.query.q as string;

  if (!query) {
    response.redirect("/");
    return;
  }

  const pets = Pet.getFromName(query);

  response.render("pages/page", {
    menu: createMenuObject(""),
    pets,
    query,
  });
};
