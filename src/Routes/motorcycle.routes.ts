import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycle.controller';
import verifyId from '../Middlewares/verifyId';

const routes = Router();

routes.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());
routes.get('/', (req, res, next) => new MotorcycleController(req, res, next).getAll());
routes.get(
  '/:id',
  verifyId,
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

export default routes;
