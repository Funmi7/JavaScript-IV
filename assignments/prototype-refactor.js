/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
*/

/*
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    greet() {
        return `Hello my name is ${this.name} and I'm ${this.age} years old`;
      }
      eatEdibles(edibles) {
        this.stomach.push(edibles);
        return `I am eating ${this.stomach}`;
      }
      poop() {
        this.stomach.length = 0;
        return `I pooped ${this.stomach}`;
      }
  }
  
  const funmi = new Person ('Funmi', 23);

  console.log(funmi.greet());
  console.log(funmi.eatEdibles('rice'));
  console.log(funmi.stomach);
  console.log(funmi.poop());
  console.log(funmi.stomach);


 /* TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.

  */

 class Car {
     constructor(modelName, modelMake){
        this.modelName = modelName;
        this.modelMake = modelMake;
        this.odometer = 0;
        this.hasCrashed = true;
     }

    drive(isDriving, distance){
        if (isDriving === true) {
            this.odometer += distance;
            return `The ${this.modelName} ${this.modelMake} has been driving for ${this.odometer} miles`;
        } else {
            return this.crash();
        }
    }

    crash () {
        this.hasCrashed = true;
        return `I crashed at ${this.odometer} miles!`
    }
    repair (distance) {
        this.hasCrashed = false;
        return `I am repaired so I can continue driving from ${this.odometer} miles`;
    }
  }

  const cars = new Car ('Toyota', 'Camry');

  console.log(cars.drive(true, 10));
  console.log(cars.drive(false, 10));
  console.log(cars.crash());
  console.log(cars.repair());
  /*

  TASK 3

  - Build a Baby constructor that subclasses the Person built earlier.
  - Babies of course inherit the ability to greet, which can be strange.
  - Babies should have the ability to play, which persons don't.
  - By playing, a string is returned with some text of your choosing.

  */


class Baby extends Person {
    constructor(name, age, playing) {
        super(name, age);
        this.playing = playing;
    }

    play() {
        return `My name is ${this.name}, I am ${this.age} years old and I love to play`;
    }
}

const littleOne = new Baby('Dami', 1);

console.log(littleOne.greet());
console.log(littleOne.play());


  /*
  TASK 4

  Use your imagination and come up with constructors that allow to build objects
  With amazing and original capabilities. Build 3 small ones, or a very
  complicated one with lots of state. Surprise us!

*/
//First Constructor
class Food {
    constructor(attributes) {
        this.class = attributes.class;
        this.name = attributes.name;
        this.source = attributes.source;
        this.calories = attributes.calories;
    }
    eat(destination) {
        return `When you eat ${this.name} it goes to the ${destination} and ${this.name} can be got from ${this.source}`;
    }
    amountOfCalories () {
        return `The calories of ${this.name} eaten are ${this.calories * 500}`;
    }
}

const rice = new Food({
  class: 'carbohydrate',
  name: 'Rice',
  source: 'Plants',
  calories: 50
})

console.log(rice.eat('stomach'));
console.log(rice.amountOfCalories());

// Second constructor
class Dancer {
    constructor(attributes){
        this.name = attributes.name;
        this.rank = attributes.isProfessional;
        this.experience = attributes.experience;
    }
    teachDance() {
        if (this.rank) {
            return `${this.name} Should teach dance`;
          }
          return `${this.name}Should not teach dance`;
        }
        leadDance() {
            if (this.experience > 9) {
                return `${this.name} should lead the dance`;
              }
              return `${this.name} should not lead dance`;
            }
        }
  
const florence = new Dancer({
  name: 'Florence',
  isProfessional: true,
  experience: 8
});  

const amanda = new Dancer({
  name: 'Amanda',
  isProfessional: true,
  experience: 7
});

console.log(florence.teachDance());
console.log(amanda.leadDance());

// Third Constructor
class Quiz {
    constructor(data){
        this.firstContestant = data.firstContestant;
        this.secondContestant = data.secondContestant;
        this.thirdContestant = data.secondContestant;
        this.firstContestantScore = 0;
        this.secondContestantScore = 0;
        this.thirdContestantScore = 0;
    }
    start(winner) {
    if (winner === 'firstContestant') {
        this.firstContestantScore +=10;
        return `The winner is ${this.firstContestant} with a score of ${this.firstContestantScore}`;
    } else if (winner === 'secondContestant') {
        this.secondContestantScore +=10;
        return `The winner is ${this.secondContestant} with a score of ${this.secondContestantScore}`;
    } else {
        this.thirdContestantScore +=10;
        return `The winner is ${this.thirdContestant} with a score of ${this.thirdContestantScore}`;
    }
    }
}

const theQuiz = new Quiz({
  firstContestant: 'Funmi',
  secondContestant: 'Dami',
  thirdContestant: 'Rita' 
});

console.log(theQuiz.start('firstContestant'));
console.log(theQuiz.start(`secondContestant`));
console.log(theQuiz.start(`thirdContestant`));

