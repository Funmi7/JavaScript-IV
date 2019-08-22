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
    constructor(attributes, uniqueProps) {
        super(attributes);
        this.specialty = uniqueProps.specialty;
        this.favLanguage = uniqueProps.favLanguage;
        this.catchPhrase = uniqueProps.catchPhrase;
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
console.log(demo('Semantic HTML'));
console.log(grade({name:'Funmi'}, 'Flex-box'))