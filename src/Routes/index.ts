import { Router } from 'express';
import carRoutes from './car.routes';

const routes = Router();

routes.use('/cars', carRoutes);

export default routes;
