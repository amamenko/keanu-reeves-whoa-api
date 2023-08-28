import { Request, Response } from "express";
import { whoaArr } from "../arrays/whoaArr";

export const getOrderedWhoa = (req: Request, res: Response) => {
  if (req.params.index) {
    if (Number(req.params.index) || req.params.index === "0") {
      if (whoaArr[Number(req.params.index)]) {
        res.send(whoaArr[Number(req.params.index)]);
      } else {
        res.send([]);
      }
    } else {
      const digitDashRegex = /^\d{1,2}-+\d{1,2}/gm;

      if (digitDashRegex.test(req.params.index)) {
        const splitIndeces = req.params.index.split("-");
        const firstNum = Number(splitIndeces[0]);
        const secondNum = Number(splitIndeces[1]);

        if ((firstNum || firstNum === 0) && (secondNum || secondNum === 0)) {
          const result = whoaArr.slice(firstNum, secondNum + 1);

          res.send(result);
        } else {
          res
            .status(400)
            .send(
              "400 Bad Request: Index should be a number or a range between two numbers"
            );
        }
      } else {
        res
          .status(400)
          .send(
            "400 Bad Request: Index should be a number or a range between two numbers"
          );
      }
    }
  } else {
    res.redirect("/whoas/ordered/0");
  }
  return;
};
