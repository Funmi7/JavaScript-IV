// CODE here for your Lambda Classes

class Person1 {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

const vivian = new Person1 ({
    name: 'Vivian',
    age: 23,
    location: 'Benin'
});

const john = new Person1 ({
    name: 'John',
    age: 20,
    location: 'Lagos'
})
console.log(vivian.speak());
console.log(john.speak());


class Instructor extends Person1 {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage =attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
        }

    demo (subject) {
        return `Today we are learning about ${subject}`
    }

    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

const gabe = new Instructor({
    name: 'Gabe',
    age: 40,
    location: 'London',
    specialty: 'LESS',
    favLanguage: 'javascript',
    catchPhrase: 'Latest and greatest'
});

const ryan = new Instructor({
    name: 'Ryan',
    age: 30,
    location: 'Carlifornia',
    specialty: 'react',
    favLanguage: 'Java',
    catchPhrase: 'Trust the process!'
})

console.log(gabe.demo('Semantic HTML'));
console.log(gabe.grade({name:'Funmi'}, 'Flex-box'));

console.log(ryan.demo('Git'));
console.log(ryan.grade({name: 'Dami'}, 'Array prototype methods'));

class Student extends Person1 {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects  = attributes.favSubjects;
    }

    listsSubjects () {
        this.favSubjects.forEach(function(subjects){
         console.log(subjects);
        });
        return `${this.name} favorite subjects are ${this.favSubjects}`;
    }

    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

const dave = new Student({
    name: 'Dave',
    age: 20,
    location: 'Lagos',
    previousBackground: 'Banker',
    className: 'WEBEU3',
    favSubjects: ['Html', 'CSS', 'Javascript']
})

const jessy = new Student ({
    name: 'Jessy',
    age: 24,
    location: 'Abuja',
    previousBackground: 'Auditor',
    className: 'WEBEU2',
    favSubjects: ['Javascript', 'Java', 'CSS']
})

console.log(dave.listsSubjects());
console.log(dave.PRAssignment('Semantic Html'));
console.log(dave.sprintChallenge(`User-Interface 1`));

console.log(jessy.listsSubjects());
console.log(jessy.PRAssignment('CSS-FlexBox display'));
console.log(jessy.sprintChallenge(`User-interface-2`));

class ProjectManagers extends  Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel stand up time!`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const anna = new ProjectManagers ({
    name: 'Anna',
    age: 21,
    location: 'Manchester',
    specialty: 'Javascript Objects',
    favLanguage: 'Javscript',
    catchPhrase: 'I believe in you',
    gradClassName: 'WEBEU1',
    favInstructor: 'Gabe'
});

const patrick = new ProjectManagers ({
    name: 'Patrick',
    age: 25,
    location: 'Ireland',
    specialty: 'redux',
    favLanguage: 'Python',
    catchPhrase: 'Howdy cowgirls and cowboys',
    gradClassName: 'WEBEU1',
    favInstructor: 'Josh'
});

console.log(anna.standUp('webeu3_anna'));
console.log(anna.debugsCode({name:'Funmi'}, 'Javascript-2'));

console.log(patrick.standUp('webeu3_help'));
console.log(patrick.debugsCode({name:'Jessy'}, 'User-interface-3'));

