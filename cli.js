// const minimist = require('minimist');
// console.log(minimist(process.argv.slice(2)));

// console.log(process.env.NODE_ENV);


// const readline = require('readline');
// const rl = readline.Interface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.on('line', line => {
//   if ( line === 'exit' ) rl.close();
//   else console.log(`>> ${line}`)
// });


const fs = require('fs')

fs.exists('./package.json', exists => {
  if ( exists ) {
    fs.readFile('./package.json', (err, data) => {
      console.log(data.toString());
    })
  }
})

// const exists = fs.existsSync('./package.json');
// if ( exists ) {
//   const data = fs.readFileSync('./package.json')
//   console.log(data.toString());
// }