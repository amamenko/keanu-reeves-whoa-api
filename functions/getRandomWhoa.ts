import { Request, Response } from "express";
import { whoaArr } from "../arrays/whoaArr";
import sampleSize from "lodash.samplesize";
import { substituteGroupedWhoas } from "../utils/substituteGroupedWhoas";

export const getRandomWhoa = (req: Request, res: Response) => {
  const numResults = Number(req.query.results);
  const year = Number(req.query.year);
  const numberCurrentWhoa = Number(req.query.whoa_in_movie);
  const movieName = (req.query.movie as string) || "";
  const directorName = (req.query.director as string) || "";
  const sortBy = req.query.sort;
  const direction = req.query.direction;
  // Whoas are grouped by default unless explicitly turned off
  const groupWhoaAssets =
    req.query.group_whoa_assets === "false" ? false : true;

  let viableWhoas = whoaArr;

  if (movieName) {
    viableWhoas = viableWhoas.filter(
      (whoa) => whoa.movie.toLowerCase() === movieName.toLowerCase()
    );
  }

  if (directorName) {
    viableWhoas = viableWhoas.filter((whoa) =>
      whoa.director.toLowerCase().includes(directorName.toLowerCase())
    );
  }

  if (year) {
    viableWhoas = viableWhoas.filter((whoa) => whoa.year === year);
  }

  if (numberCurrentWhoa) {
    viableWhoas = viableWhoas.filter(
      (whoa) => whoa.current_whoa_in_movie === numberCurrentWhoa
    );
  }

  let randomWhoa = sampleSize(viableWhoas, numResults ? numResults : 1);

  if (sortBy) {
    if (sortBy === "movie") {
      if (direction === "desc") {
        randomWhoa = randomWhoa.sort((a, b) => b.movie.localeCompare(a.movie));
      } else {
        randomWhoa = randomWhoa.sort((a, b) => a.movie.localeCompare(b.movie));
      }
    } else if (sortBy === "release_date") {
      if (direction === "desc") {
        randomWhoa = randomWhoa.sort((a, b) =>
          b.release_date.localeCompare(a.release_date)
        );
      } else {
        randomWhoa = randomWhoa.sort((a, b) =>
          a.release_date.localeCompare(b.release_date)
        );
      }
    } else if (sortBy === "year") {
      if (direction === "desc") {
        randomWhoa = randomWhoa.sort((a, b) => b.year - a.year);
      } else {
        randomWhoa = randomWhoa.sort((a, b) => a.year - b.year);
      }
    } else if (sortBy === "director") {
      if (direction === "desc") {
        randomWhoa = randomWhoa.sort((a, b) =>
          b.director.localeCompare(a.director)
        );
      } else {
        randomWhoa = randomWhoa.sort((a, b) =>
          a.director.localeCompare(b.director)
        );
      }
    } else {
      if (sortBy === "number_current_whoa") {
        if (direction === "desc") {
          randomWhoa = randomWhoa.sort(
            (a, b) => b.current_whoa_in_movie - a.current_whoa_in_movie
          );
        } else {
          randomWhoa = randomWhoa.sort(
            (a, b) => a.current_whoa_in_movie - b.current_whoa_in_movie
          );
        }
      }
    }
  }

  if (groupWhoaAssets) randomWhoa = substituteGroupedWhoas(randomWhoa);

  res.send(randomWhoa);
  return;
};
