"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hero_1 = __importDefault(require("@src/router/hero"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
console.log(process.env.ENV);
const app = (0, express_1.default)();
app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'static')));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// routes
app.use('/hero', hero_1.default);
app.get('/', function (req, res) {
    res.json('hello world');
});
app.listen(4000, () => {
    console.log('listen server');
});
