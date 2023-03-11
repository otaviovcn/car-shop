import { Router } from 'express';
import carRoutes from './car.routes';
import motorcycleRoutes from './motorcycle.routes';

const routes = Router();

routes.use('/cars', carRoutes);
routes.use('/motorcycles', motorcycleRoutes);

export default routes;
