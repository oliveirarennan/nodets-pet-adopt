import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/Pet";

export const home = (request: Request, response: Response): void => {
  const pets = Pet.getAll();

  response.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
    pets,
  });
};

export const dogs = (request: Request, response: Response): void => {
  const pets = Pet.getFromType("dog");

  response.render("pages/page", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    pets,
  });
};

export const cats = (request: Request, response: Response): void => {
  const pets = Pet.getFromType("cat");

  response.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
    pets,
  });
};

export const fishes = (request: Request, response: Response): void => {
  const pets = Pet.getFromType("fish");

  response.render("pages/page", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
    pets,
  });
};
