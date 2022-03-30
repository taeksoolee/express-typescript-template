"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const r = express_1.default.Router();
r.get('/', (req, res) => {
    res.json('this is heros!');
});
r.post('/', (req, res) => {
    const { name } = req.body;
    res.json({
        'msg': `saved hero ::: ${name}`,
    });
});
r.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    res.json({
        'msg': `put hero ${id} ::: ${name}`,
    });
});
r.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        'msg': `put hero ::: ${id}`,
    });
});
exports.default = r;
