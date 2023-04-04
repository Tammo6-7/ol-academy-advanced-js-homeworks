//Factory functions
function createCar (make, model, year){
    return {
        make: make,
        model: model,
        year: year,
        getCarInfo(){
            return make + ' ' + model + ' ' + year;
        },

    };
};

function createperson(name, surname, age, gender, cars = [],){
    return {
        name : name,
        surname : surname,
        age: age,
        gender : gender,
        cars: cars,
        getPersonInfo(){
            return name + ' ' + surname + ' ' + age + ' ' + gender + ' ' + cars ;
        },
        getFullName(){
            return name + ' ' + surname;
        },
        countCars (){
            return  cars.length;
        },
    };
};

const car1 = createCar('Tesla', 'Model S', 2020);
console.log(car1.getCarInfo());
const car2 = createCar('Audi', 'Tetta', 2017);
console.log(car2.getCarInfo());

const person1 = createperson ('Daniel', 'Barbakadze', 21, 'Male ', ['tesla']);
console.log(person1.getPersonInfo())
console.log(person1.getFullName());
console.log(person1.countCars()); 

const person2 = createperson ('Elon', 'Mask', 31, 'Female ', [ 'bwm' , 'tesla']);
console.log(person2.getPersonInfo());
console.log(person2.getFullName());
console.log(person2.countCars());













