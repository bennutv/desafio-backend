import express from 'express';

import { routes } from './routes/routes';

const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(routes);

export { app };