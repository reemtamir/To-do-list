const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const app = express();
let tasks = ['Do something'];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  let day = today.toLocaleDateString('en-US', options);
  const currentDay = today.getDay();
  let image = '';
  switch (currentDay) {
    case 0:
      image = `https://images.squarespace-cdn.com/content/v1/583521fff5e231d20302bd1f/1543289922020-JLAL6J5PH56W5JP3Y2EI/SUNDAY_Logo-01.png`;
      break;
    case 1:
      image = `https://www.thefactsite.com/wp-content/uploads/2017/10/monday-facts.jpg`;
      break;
    case 2:
      image = `https://cdn-icons-png.flaticon.com/512/4213/4213584.png`;
      break;
    case 3:
      image = `https://img.freepik.com/premium-vector/wednesday-lettering-modern-handwritten-text-sticker-planner-bright-wednesday-text-days-week-planning-concept-vector-illustration_565728-466.jpg?w=2000`;
      break;
    case 4:
      image = `https://www.thefactsite.com/wp-content/uploads/2017/07/thursday-facts.jpg`;
      break;
    case 5:
      image = `https://occ-0-358-56.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYuCCESb6eFn3v8kSmjW5IoT0kkxY-XT2uBba3mjzHF195caOobu9eV2CxhFbQ9VWLqj420DYfftMEdrO9KARxegl-T7q3EFFyZVoDD53p5g.png?r=ea5`;
      break;
    case 6:
      image = `https://t4.ftcdn.net/jpg/04/14/02/93/360_F_414029381_HT6sZK4AqX8bKM6ZpOR0tKZcxWcbUvLc.jpg`;
      break;
    default:
      console.log('Error: current day is equal to ' + currentDay);
  }
  res.render('list', {
    kindOfDay: day,
    kindOfImage: image,
    tasks: tasks,
  });
  console.log('ff');
});
app.post('/', function (req, res) {
  let task = req.body.task;
  tasks.push(task);

  res.redirect('/');
});
app.listen(3000, () => {
  console.log('The server is running on port 3000');
});

