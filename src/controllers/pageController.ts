import { Request, Response } from "express";

export const home = (request: Request, response: Response): void => {
  response.render("pages/page");
};

export const dogs = (request: Request, response: Response): void => {
  response.render("pages/page");
};

export const cats = (request: Request, response: Response): void => {
  response.render("pages/page");
};

export const fishes = (request: Request, response: Response): void => {
  response.render("pages/page");
};
