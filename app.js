let Personne = function (name, firstName, age, sex) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.sex = sex;

    this.myPerson = function () {
        return `Ma personne s'appelle ${this.name} ${this.firstName}, elle a ${this.age} ans et est de sexe ${this.sex}`
    }

    this.setNameAndFirstName = function (name, firstName) {
        this.name = name;
        this.firstName = firstName;
    }
}

let Person1 = new Personne('nom', 'prénom', 'age', 'sexe');
let Person2 = new Personne('nom2', 'prénom2', 'age2', 'sexe2');

document.getElementById('name').innerText = Person1.name;
document.getElementById('firstName').innerText = Person1.firstName;
document.getElementById('age').innerText = Person1.age;
document.getElementById('sex').innerText = Person1.sex;

document.getElementById('name2').innerText = Person2.name;
document.getElementById('firstName2').innerText = Person2.firstName;
document.getElementById('age2').innerText = Person2.age;
document.getElementById('sex2').innerText = Person2.sex;

document.getElementById('method1').innerText = Person1.myPerson() + '\n' + Person2.myPerson();

Person1.setNameAndFirstName('nom3', 'prénom3');
Person2.setNameAndFirstName('nom4', 'prénom4');

document.getElementById('method2').innerText = Person1.myPerson() + '\n' + Person2.myPerson();
