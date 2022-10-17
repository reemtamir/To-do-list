const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const app = express();
let items = ['Do something'];
let workTasks = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  let day = today.toLocaleDateString('en-US', options);

  res.render('list', {
    listTitle: day,
    newListItem: items,
  });
});
app.post('/', function (req, res) {
  let item = req.body.newItem;
  if (req.body.list === 'work') {
    workTasks.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.get('/work', function (req, res) {
  res.render('list', { listTitle: 'work list', newListItem: workTasks });
});


app.listen(3000, () => {
  console.log('The server is running on port 3000');
});
