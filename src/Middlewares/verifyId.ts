import { NextFunction, Request, Response } from 'express';

const verifyId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const idRegex = /^[a-f\d]{24}$/i;

  if (!idRegex.test(id)) return res.status(422).json({ message: 'Invalid mongo id' });

  return next();
};

export default verifyId;
