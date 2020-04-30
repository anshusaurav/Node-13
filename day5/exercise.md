Q1. Create a user Schema
    - require mongoose
    - create a schema using mongoose
    - define name, email, age field with appropriate types
    - add {timestamps: true } for createAt and updatedAt date fields

```js
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    age: Number,
},{timestamps:true});

module.exports = mongoose.model("User", userSchema);
```

Q2. Create a model named 'User' based on user schema.

```js
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    age: Number,
},{timestamps:true});

module.exports = mongoose.model("User", userSchema);
```

Q3. Insert a User into database using User.create

```js
const mongoose = require('mongoose');
var User = require("./models/user");
mongoose.connect('mongodb://localhost:27017/Day5-exercise', 
{useNewUrlParser: true, useUnifiedTopology: true},
(err) =>{
    console.log(err);
});

var obj = {name: "Tim Collins", email: "timc@america.com", age: 29};

User.create(obj, (err, data) => {
    if(err) return console.log({err});
    console.log('User added');
});
```

Q4. Add required validator on name and unique index on email field in user schema.

```js
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true;
    },
    age: Number,
},{timestamps:true});

module.exports = mongoose.model("User", userSchema);
```

Q5. Add a default value to age field in user schema i.e 18.

```js
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true;
    },
    age: {
        type: Number,
        default: 18
    }

},{timestamps:true});

module.exports = mongoose.model("User", userSchema);
```


Q6. Insert a User again 
    - with just name field and observe the error returned

    ```text
     err: Error [ValidationError]: User validation failed: email: Path `email` is required.
    ```

    - with name as blank string and observe error

    ```text
     err: Error [ValidationError]: User validation failed: email: Path `email` is required., name: Path `name` is required.
    ```
    - try inserting 2 document with same email and observe error.

    ```text
    err: Error [ValidationError]: 'Error, expected `email` to be unique. Value: `nav@gmail.com`',
    ```

Q7. Add a nested address object inside user schema with fields street, city, state and pin.

```js
    const mongoose = require("mongoose");
    var Schema = mongoose.Schema;

    var userSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        age: {
            type: Number,
            default: 18
        },//fields street, city, state and pin.
        address: {
            street: {
                type: String
            },
            city:{
                type: String
            },
            state: {
                type: String
            },
            pin:{
                type: Number
            }


        }
    },{timestamps:true});

    module.exports = mongoose.model("User", userSchema);
```

Q8. Try inserting user schema with nested address fields.

```js
    
var obj5 = {name: "prateek", email:"nav@gmail.com", address:{street: "Downing", city: "Kolkata", state: "West-Bengal", pin:201452}};

User.create(obj5, (err, data) => {
    if(err) {console.log({err}); return;}
    console.log('User added');
}
```

Q9. Create a seperate address schema and model with fields street name, city, state and PIN and user of type ObjectId to store user's id.

```js
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var addressSchema = new Schema({
        user_object_id: {
            type: String,
            required: true
        },
        street: {
            type: String
        },
        city:{
            type: String
        },
        state: {
            type: String
        },
        pin:{
            type: Number
        }

},{timestamps:true});

module.exports = mongoose.model("Address", addressSchema);
```

Q10. Insert into address model street, city, state, pin and user with a user id from one of the users created previously. 

```js
var addressObj = {user_object_id: "5eab1545bdf5a6408c62be7e", street: "Preet Vihar", city: "New Delhi", state: "Delhi", pin: 110006 };
Address.create(addressObj, (err, data) => {
    if(err) {console.log({err}); return;}
    console.log('Address added');
});
```

Q11. Create a article Schema
    - insert fields title, description, likes, author(ObjectId of User)
    - add required validation on title and author field
    - default likes to 0.
    - create a model named 'Article'
    - Insert 2 document using Atricle Model

Q12. Create a comment Schema
    - insert name, timestamps, user(ObjectId of user), article(ObjectId of Article)
    - add required validator to name and user
    - create a Comment model
    - insert 2 documents each for an article created in Q11. 
