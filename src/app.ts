import express, { Application, Request, Response } from 'express';
import hero from '@src/router/hero';

import path from 'path';

import 'dotenv/config'

console.log(process.env.ENV);

const app: Application = express();

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/hero', hero);

app.get('/', function(req: Request, res: Response): void {
    res.json('hello world');
});

app.listen(4000, () => {
    console.log('listen server');
});

