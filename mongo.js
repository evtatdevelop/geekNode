const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://127.0.0.1:27017/test')
  // .then(() => console.log('Connected!'))
  .then(() => {
    const PersonSchema = new Schema({
      userName: {
        type: String,
        default: 'noname',
        required: true,
      },
      name: {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
      },
    });

    const Person = mongoose.model('person', PersonSchema);

    /* Insert 

    const user = new Person({
      userName: 'Tester',
      name: {
        firstName: 'John',
        lastName: 'Smith'
      }
    });
    user.save().then(user => {
      console.log('Document', user);
    }, err => {
      console.error(err);
    })
    //*/


    //* Select

      // Person.find({}).then(user => {
      // Person.findOne().then(user => {
      Person.findOne({userName: /t/ig }).then(user => {
        console.log('Document', user);
      }, err => {
        console.error(err);
      })
    //*/

  });