import express from 'express';

import ClassesController from './controller/ClassesCrotroller';
import ConnectionsController from './controller/ConnectionsController';

const routes = express.Router()
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connection', connectionsController.index);
routes.post('/connection', connectionsController.create);

export default routes;
