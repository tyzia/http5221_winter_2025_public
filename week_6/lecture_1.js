window.onload = () => {







    // Plan


    // git merge conflicts

    // variables

    // values

    // truthy vs falsy

    // events

    // window

    // forms
















    // git merge conflict




    // occurs when two branches change the same line.







    // Demo

    // > mkdir 1
    // > cd 1
    // > git init
    // > vim index.html :i hello world :x
    // > git add index.html
    // > git commit -m "Create index.html file"
    // > git brach a
    // > git branch b
    // > git branch
    // > git checkout a
    // > vim index.html :i a :x
    // > git commit -am "Add a"
    // > git checkout b
    // > vim index.html :i b :x
    // > git commit -am "Add b"
    // > git merge a
    // > git status // Unmerged paths
    // > vim index.html

    //    <<<<<<< HEAD
    //    b hello world
    //    =======
    //    a hello world
    //    >>>>>>> a

    //     - `<<<<<<< HEAD` marks the beginning of the conflict.
    //     - `=======` separates the changes from the two branches.
    //     - `>>>>>>> a` marks the end of the conflict.


    // Resolve the conflict - means delete all that is not needed
    // and git add index.html

    // > git status // the conflict is still not resolved
    // > git addd index.html // resolve the conflict
    // > git commit // will create Merge commit
    // > git log --oneline

    // > git checkout a
    // > vim index.html // we don't see b


    // Summary
    //
    // 1. What causes merge conflicts?
    // When two branches modify the same part of a file,
    // and Git cannot automatically merge the changes.
    //
    // 2. How to see the conflicts?
    // Open the file and look for `<<<<<<<`, `=======`, and `>>>>>>>`.
    //
    // 3. How to resolve conflicts?
    // Manually edit the file.
    // Choose which changes to keep.
    // Delete all not needed and markers (`<<<<<<<`, `=======`, and `>>>>>>>`)
    // git add .
    // git commit


























    // Variables













    // What variable types do you know?


    // Answer:
























    // let
    // const
















    // let's talk about scopes first













    // Global - outside of any function
    // Function - inside of a function
    // Block - inside of block














    // Global scope
    // Variables declared in this scope can be accessed
    // from anywhere in the code.



    // Function scope
    // Variables declared inside a function are local to that function
    // and cannot be accessed outside of it.

    function iceAge() {
        const age = 1;
    }
    // console.log(age); // Cannot access before initialization



    // Block scope
    // Variables declared inside of a block are only
    // accessible within this block.

    if (true) {
        let a = 10;
        const b = 20;
    }
    // console.log(a); // ReferenceError: a is not defined
    // console.log(b); // ReferenceError: b is not defined













    // scopes protect your code from accidental
    // change of your variables and unexpected results













    // Why not var?











    // Accessible outside the block where it was declared

    if (true) {
        var x = 10;
    }
    // console.log(x); // 10


    // vars are hoisted to the top of their scope
    // meaning you can reference them before declaring them
    // and get unexpected results instead of error

    // console.log(y); // undefined
    var y = 20;

    // you can't do the same with 'let'
    // console.log(c); // ReferenceError: Cannot access 'c' before initialization
    // let c = 30;


    // vars can be redeclared
    var z = 5;
    var z = 15; // No error

    // you can't do the same with 'let'
    // let d = 5;
    // let d = 10; // SyntaxError: Identifier 'd' has already been declared


    // in the loop var doesn't create new scope
    // uncomment to demonstrate
    // for (var i = 0; i < 3; i++) {
    //     setTimeout(function() {
    //         console.log(i); // 3, 3, 3 (not 0, 1, 2 as expected)
    //     }, 100);
    // }







    // var allows you to do many 'crazy' things
    // and forgive you all, no errors
    // which can lead to dangerous and unexpected results











    // never use 'var'











    // let - use anytime when I will be changing it's value
    // e.g. counters, iterators












    // Constants

    const pi = 3.14;
    const city = 'Toronto';
    const person = { name: 'Leo', age: 1 };
    const arr = [ 1, 2, 3, 4 ];











    // Can I add new value to const arr?
    // const arr = [ 1, 2, 3, 4 ];





    // Answer:











    // Can I update property of const person?
    // const person = { name: 'Leo', age: 1 };


    // Answer:














    // We can change the const array
//    arr.push(5)
//    console.log(arr);












    // We can add new property to const object
    // console.log(person);
    // person.location = 'Canada';
//    console.log(person);














    // We can change value of existing property of const object
    // console.log(person);
    // person.location = 'France';
//    console.log(person);










    // We can't reassign const object
   // person = { width: 1, height: 2 };
//      arr = [ 'new', 'array' ];












    // We can't declare const without initial value
   // const country;



















    // types of values of your variables













    // string "", '', ``
    // number
    // array []
    // object {}
    // boolean true/false














    // what is the hardest thing in programming?













    // naming variables









    // it requires a balance between clarity, shortness, and context.

    // A well-named variable makes code:
    // -- easier to read,
    // -- easier to understand,
    // -- easier to maintain

    // A poorly named variable can lead to:
    // -- confusion,
    // -- bugs,
    // -- wasted time.







    // What to choose between?
    // user, customer, client






    // Bad short names:
    //
    // const x
    // const i
    // const tmp
    //
    // are quick to type but often lack meaning.








    // Bad long names
    //
    // const numberOfActiveUsersInTheCurrentSession
    //
    // are descriptive but can make code harder to read and maintain.










    // Best practice in naming your variables











    // Use descriptive and meaningful Names



    // Bad:
    // let x = 10;
    // let str = 'Hello';


    // Good
    // let numberOfRetries = 10;
    // let welcomeMessage = 'Hello';






    // Use nouns for variables
    // Use verbs for functions


    // let userAge = 25;
    // let isLoggedIn = true;

    // function calculateTotalPrice() {}
    // function validateUserInput() {}











    // Avoid abbreviations

    // Bad:
    // let usrCnt = 10;


    // Good:
    // let userCount = 10;














    // Consider scope when naming

    // the less scope (the shorter variable will 'live')
    // the shorter the name should be


    // Global scope
    // let maximumAllowedConnections = 100;

    // Local scope
    // for (let i = 0; i < 10; i++) {
    //     console.log(i);
    // }





    // Avoid reserved words

    // Bad:
    // let class = 'Math';


    // Good:
    // let className = 'Math';






    // Use boolean names that tmply true/false

    // Bad:
    // let loggedIn = true;

    // Good:
    // let isLoggedIn = true;















    // Arrays

    const colors = [ 'red', 'white', 'black' ];

    const transactions = [ 1000, 900, 14000 ];

    const emptyArray = [];

    const arrayWithNulls = [ 'person', null, 'another person', 3 ];

    const arrayWithObjects = [
        { name: 'Mona', age: 18 },
        { name: 'Rafael', age: 4 },
        { name: 'Lisa', age: 71 },
    ];













    // Classes













    // Let's recap what is an object










    // Task: create person data

    let name = 'Andrei';
    let age = 18;
    let location = 'Toronto';





    // Task: create another person data


    // We can NOT copy & update
    // we will get SyntaxError

    // let name = 'Michael';
    // let age = 4;
    // let location = 'Quebec';




    // try to solve the issue by removing let:
    // name = 'Michael';
    // age = 4;
    // location = 'Quebec';

    // now let's see what we have in our variables
//    console.log(name);
//    console.log(age);











    // How we can solve our problem? Rename variables!

//    let name2 = 'Michael';
//    let age2 = 4;
//    let location2 = 'Quebec';
//
//    console.log(name2);
//    console.log(age2);













    // Another issue - we can have the same data for different things









    // Task: create car data

//    let name = 'BMW'; // make
//    let age = 2;
//    let location = 'London';











    // To solve problem - we use Objects

    const man = {
        name: 'Andrei',
        age: 18,
        location: 'Toronto',
    };

   // console.log(man);

    const car = {
        name: 'BMW',
        age: 2,
        location: 'London',
    };

   // console.log(car);











    // We can work with individual properties of objects:

//    console.log('This man\'s name is ', man.name);










    // Reassign properties

    // man.name = 'John';

//    console.log('New name ', man.name);










    // Add new properties to the object

   //  man.income = '$1000';
   //  console.log(man);
   //
   // console.log(man.income);












    // Object can have methods/functions

    const developer = {
        name: 'Bill',
        showName: function() {
            return this.name;
        },
        showNameIfTrue: function(isTrue) {
            return isTrue ? this.name : false;
        }
    }

   // console.log(developer.showName());
   // console.log(developer.showNameIfTrue(true));
   // console.log(developer.showNameIfTrue(false));













    // What if we want to create similar objects?

    // We can copy

    const developer2 = {
        name: 'Marshal',
        showName: function() {
            return this.name;
        },
        showNameIfDay: function(isDay) {
            return isDay ? this.name : null;
        }
    }











    // That's where idea of a class comes in. It is like a template

    class Developer {
        name;
        income = 0;
        realEstate = [];
        showName() {
            return this.name;
        }
    }

    // Create object using Developer class
    const webDev = new Developer();
//    console.log(webDev);
//    console.log(webDev.s  howName());










    // Class constructor

    // To customize our object we can do something like this:

    const dev1 = new Developer();
    dev1.name = '1';

    const dev2 = new Developer();
    dev2.name = '2';










    // Instead let's have constructors

    // while creating object we can pass parameters to customize the object

    class Animal {
        name;
        age;
        breed;
        constructor(nameIn, ageIn) {
            this.name = nameIn;
            this.age = ageIn;
        }
    }

    const dog = new Animal(null, null);
//    console.log(dog);

    const mouse = new Animal('Micky', 1);
//    console.log(mouse);











    // We can extend other classes

    class Zoo extends Animal {
        city;
        constructor(cityIn, nameIn, ageIn) {
            super(nameIn, ageIn);
            this.city = cityIn;
        }
    }

    const monkey = new Zoo('Vancouver', 'ABC', 2);
//    console.log(monkey);

















    // Truthy & Falsy values













    // Falsy values

    // false
    // 0
    // ""
    // null
    // undefined
    // NaN



    // !! - explicitely converts a value into boolean


    // uncomment below
    // console.log('falsy values below')
    // console.log(!!false);
    // console.log(!!0);
    // console.log(!!"");
    // console.log(!!undefined);
    // console.log(!!null);
    // console.log(!!NaN);









    // Truthy values



    // true
    // any number (not 0)
    // strings (not empty)
    // Objects {}
    // Arrays []
    // Functions












    // uncomment below
    // console.log('truthy values below');
    // console.log(!!true);
    // console.log(!!1);
    // console.log(!!-3.14);
    // console.log(!!"hello");
    // console.log(!!{ key: "value" });
    // console.log(!![1, 2, 3]);
    // console.log(!!function() {});















    // what will be the output?

    // console.log('tricky outputs');
    // console.log(!!-1);
    // console.log(!!"0");
    // console.log(!!"false");
    // console.log(!!{});
    // console.log(!![]);





































    // Events












    // What are the event?

    // Answer:












    // Events are actions that happen in the browser:
    // -- user clicking a button
    // -- user pressing a key
    // -- user resizing the window
    // -- user submitting the form
    // and many more










    // JavaScript allows you to listen for these events
    // and respond to them by executing code.








    // There are three main concepts related to events:

    // target
    // listener
    // object












    // Event Target - The element that the event occurs on:
    // -- a button
    // -- an input field
    // -- form

    // Event Listener - our code (function) for a specific event.

    // Event Object - an object that contains information about the event:
    // -- which key was pressed
    // -- the mouse position
    // etc.








    // How to use events in JavaScript?













    // 1) Select the element
    // document.querySelector()
    // document.getElementById()

    // Example:
    // const btn = document.querySelector('#change_color');


    // 2) Attach an event listener
    // addEventListener()

    // Example:
    // btn.addEventListener('click', clickHandler);


    // 3) Define the event handler
    // a function that will execute when the event occurs.

    // Example:
    // function clickHandler() {
    //     const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    //     document.body.style.backgroundColor = rndCol;
    // }







    // window









    // window.onload is a JavaScript event
    // that fires when the entire webpage has fully loaded.
    // we wait for this event
    // before executing any JavaScript code.







    // Example:

    // window.onload = function() {
    //     console.log("The page has fully loaded!");
    // };







    // What will happen if I don't listen to window.onload?

    // demo: examples/window.html/js










    // Demo of button click event

    const btn = document.querySelector('#change_color');

    function random(number) {
      return Math.floor(Math.random() * (number + 1));
    }

    function clickHandler() {
        const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
    }

    btn.addEventListener('click', clickHandler);








    const btnFontChange = document.querySelector('#change_font');
    btnFontChange.addEventListener('click', () => {
        const fontWrapper = document.querySelector('#change_font_wrapper');
        const size = Math.floor(Math.random() * 50);
        fontWrapper.style.fontSize = `${size}px`;
    });













    // Demo of event object

    const btnChangeEvent = document.querySelector('#change_event');
    btnChangeEvent.addEventListener('click', changeHandler);

    function changeHandler(event) {
       console.log(event);
    }















    // Demo key events



    const txtIn = document.querySelector("#input-text");

    txtIn.addEventListener('keydown', keydownHandler);

    function keydownHandler(e) {
        const keydownDiv = document.querySelector('#keydown');
        keydownDiv.innerHTML = `<p>${e.keyCode}</p>${keydownDiv.innerHTML}`;
    }


    txtIn.addEventListener('keyup', keyupHandler);

    function keyupHandler(e) {
        const keyupDiv = document.querySelector('#keyup');
        keyupDiv.innerHTML = `<p>${e.keyCode}</p>${keyupDiv.innerHTML}`;
    }













    // Forms












    const locationsForm = document.forms.location_form;
    const locationData = document.getElementById('location-data');

    locationsForm.onsubmit = submitHandle;

    function submitHandle() {
        let locationName;
        let locationAddress;
        storeFormValues();
        showFormValues();
        return false;
    }

    function storeFormValues() {
        locationName = locationsForm.name1.value;
        locationAddress = locationsForm.address1.value;
//        console.log(locationName, locationAddress);
    }

    function showFormValues() {
        locationData.textContent = `Location name: ${locationName} and address: ${locationAddress}`;
//        console.log(locationData.textContent);
        locationData.style.display = 'block';
    }











    // Location

    console.log(window.location);









    // Let's change window.location

    const link = document.getElementById('google-link');
    link.onclick = () => {
       // window.location = 'https://humber.ca';
       // return false;
    }










    // Hint for the Lab


    // const names = [
    //      { name: 'Andrei' },
    //      { name: 'Justine' },
    // ];
    // let listOfNames = '';
    // for (let i = 0; i < 3; i++) {
    //     listOfNames += `<li>Name is ${names[i].name}</li>`;
    // }
    //
    // const listElem = document.getElementById('names-list');
    // listElem.innerHTML = listOfNames;


}

