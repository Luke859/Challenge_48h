import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send('Hello here is my back end !');
});

app.get('/categories', (req, res) => {
  res.send('Here are the categories')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});