// switch
/*
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert(2,3)
}
*/

//function
/*
function checkAge(age) {
    return age>18 || confirm('Did parents allow you?');
}
// checkAge(17)
checkAge(20)
*/


//object
/*
let user = {};

user.name = 'John';
user.surname = 'Smith';
console.log(user);

user.name = 'Pete';
console.log(user);

delete user.name
console.log(user);
*/

//--------------

/*
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
};

let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );
*/

//-------------------

/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let totalSalary = 0;


for (let key in salaries) {
    totalSalary+=salaries[key];
}

console.log(totalSalary);
*/

//----------------

/*
let calculator = {
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
    read(){
        this.a = +prompt('a?',0);
        this.b = +prompt('b?',0);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/