import _ from "lodash";
import chalk from "chalk";
import beeper from "beeper"

const users = [
  { "id": 1, "name": "One", "age": "*"},
  { "id": 2, "name": "Two", "age": "*"},
  { "id": 3, "name": "Three", "age": "*"},
  { "id": 77, "name": "Three", "age": "*"},
  { "id": 5, "name": "Five", "age": "*"},
];

const log = console.log;
const getUserById = id => _.find(users, {"id": id});
const getUserByName = name => _.filter(users, {"name": name})
const isNum = n => !isNaN(parseInt(n)) && isFinite(n);
const cls = obj => {
  Object.entries(obj).forEach(item => 
    ['id', 'name'].includes(item[0])
    ? log(`${chalk.yellow(item[0])}: ${ isNum(item[1]) ? chalk.red(item[1]) : chalk.blue(item[1])}`)
    : log(`${item[0]}: ${item[1]}`)
  );
  log('');
  beeper();
}

cls( getUserById(5) );
getUserByName('Three').map(item => cls(item));
