import { Router } from 'express';
import CarController from '../Controllers/Car.controller';
import verifyId from '../Middlewares/verifyId';

const routes = Router();

routes.post('/', (req, res, next) => new CarController(req, res, next).create());
routes.get('/:id', verifyId, (req, res, next) => new CarController(req, res, next).getById());
routes.get('/', (req, res, next) => new CarController(req, res, next).getAll());
routes.put('/:id', verifyId, (req, res, next) => new CarController(req, res, next).update());

export default routes;
