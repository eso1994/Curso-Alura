import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(
    express.json(),
    express.urlencoded({extended: true})
)

app.get('/teste', (req, res) => res
    .status(200)
    .json({ msg: 'Boas vindas à API'
}))

app.listen(port, () => console.log('Server is running'))

export default app;