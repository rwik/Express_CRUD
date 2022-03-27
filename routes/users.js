import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
    {
        
            "name": "Celtic",
            "type": "Druid",
            "source": "VGM",
            "page": "pg.28"
    }
];

router.get('/', (req, res) => {
    console.log('/ is requested');
    res.send('Hello World!');
})

router.get("/users", (req, res) => {
    console.log(users);
    res.send("Hello Users!");
});

router.post('/',(req, res) => {
    const user = req.body;
    user.id = uuidv4();
    users.push(user);
    res.send(`User ${user.name} was added`);
    });

    router.get('/user/:id', (req, res) => {
        const id = req.params.id;
        console.log(id);
        const foundUser = users.find((user) => user.id === id);
        if (foundUser) {
            res.send(foundUser);
        } else {
            res.status(404).send(`User with id ${id} was not found`);
        }
    });

router.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id === id);
    if (foundUser) {
        users.splice(users.indexOf(foundUser), 1);
        res.send(`User ${foundUser.name} was deleted`);
    } else {
        res.status(404).send(`User with id ${id} was not found`);
    }
});





export default router;