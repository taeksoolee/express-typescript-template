import express, {Request, Response} from 'express';

const r = express.Router();

r.get('/', (req: Request, res: Response): void => {
    res.json('this is heros!');
});

r.post('/', (req: Request, res: Response): void => {
    const {name} = req.body;

    res.json({
        'msg': `saved hero ::: ${name}`,
    });
});

r.put('/:id', (req: Request, res: Response): void => {
    const {id} = req.params;
    const {name} = req.body;

    res.json({
        'msg': `put hero ${id} ::: ${name}`,
    });
});

r.delete('/:id', (req: Request, res: Response): void => {
    const {id} = req.params;

    res.json({
        'msg': `put hero ::: ${id}`,
    });
});

export default r;
