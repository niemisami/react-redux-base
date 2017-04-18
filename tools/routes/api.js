import express from 'express';

const apiRouter = new express.Router();

apiRouter.get('/user', (req, res) => {
    res.status(200).send({
        user:
        { name: "Testijäbä", balance: 10 }
    });
});


export default apiRouter;