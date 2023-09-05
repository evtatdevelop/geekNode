const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const consolidate = require('consolidate')

app.use(bodyParser.json()); 

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);




//* MySQL

const Task = require('./models/task');

app.get('/', async(req, res) => {
  const tasks = await Task.getAll();
  res.render('tasks', tasks);
})
// the same:  Task.getAll().then(tasks = render('tasks', tasks)) 

//*/





/* Express

app.use((req, res, next) => {
  req.test = "test-1";
  console.log("test-1");
  if ( true ) next()
  else res.redirect('/')
})

app.all('/', (req, res, next) => {
  console.log('all - any method');
  // res.send('all - any method');
  next();
})

app.get('/users', (req, res) => (
  res.send('Users page')
))
app.get('/users/:id', (req, res, next) => {
  console.log('id');
  res.send(`User ${req.params.id} page`);
  // http://localhost:8888/users/1833
  // next();
})
app.get('/users/:name', (req, res) => {
  console.log('name');
  res.send(`User ${req.params.id} page`);
  // http://localhost:8888/users/vasya
})
// app.get('/users/:branch/:name', (req, res) => (
//   res.send(`User ${req.params.name} from ${req.params.branch} branch`)
//   // http://localhost:8888/users/Main/Jonhn
// ))
app.get('/users/:branch/:name', (req, res) => {
  res.send(`User ${req.params.name} from ${req.params.branch} branch`);
  console.log(req.query);
  // http://localhost:8888/users/Main/Jonhn?mail=test@test.tst&age=47
})


// app.get('/', (req, res) => {
//   console.log("Hey! express!");
//   res.send('Hey! express!');
// });

app.post('/', (req, res) => {
  console.log(req.test);
  console.log(req.body);
  res.send('Ok');
})




app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello, world',
    features: [
      {
        name: 'Прочность',
        value: 10,
      },
      {
        name: 'Сила',
        value: 124,
      },
      {
        name: 'Интеллект',
        value: 0,
      }
    ]
  });
})
 
*/

app.listen(8000);