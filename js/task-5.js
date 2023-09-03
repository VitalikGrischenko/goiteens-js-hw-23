
// Напиши клас Car із зазначеними властивостями і методами.
// class Car {
/*
* Додай статичний метод `getSpecs(car)`,
* який приймає об'єкт-машину як параметр і виводить
* в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
*/
/*
* Конструктор отримує об'єкт налаштувань.
*
* Додай властивості майбутнього екземпляра класу:
* speed - поточна швидкість, початкова 0
* price - ціна автомобіля
* maxSpeed - максимальна швидкість
* isOn - заведений автомобіль, значення true або false. Спочатку false
* distance - загальний кілометраж, спочатку 0
*/
// constructor() {}
/*
* Додай геттер і сеттер для властивості price,
* який буде працювати з властивістю ціни автомобіля.
*/
/*
* Додай код для того, щоб завести автомобіль
* Записує у властивість isOn значення true
*/
// turnOn() {}
/*
* Додай код для того, щоб заглушити автомобіль
* Записує у властивість isOn значення false,
* і скидає поточну швидкість в 0
*/
// turnOff() {}
/*
* Додає до властивості speed отримане значення,
* за умови, що результуюча швидкість
* не більше, ніж значення властивості maxSpeed
*/
// accelerate(value) {}
/*
* Забирає від властивості speed отримане значення,
* за умови, що результуюча швидкість не менше нуля
*/
// decelerate(value) {}
/*
* Додає в поле distance кілометраж (hours * speed),
* але тільки в тому випадку, якщо машина заведена!
*/
// drive(hours) {}
// }
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);
// Car.getSpecs(mustang);
//  maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();
// Car.getSpecs(mustang);
//  maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
// console.log(mustang.price);  2000
// mustang.price = 4000;
// console.log(mustang.price);  4000


class Car {
    constructor({    speed = 0,
        price = 0,
        maxSpeed = 0,
        isOn = false,
        distance = 0,
    }) {
        this.speed = speed;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
    
    get viewPrices() {
        return this.price;
      }
      set changePrices(newPrice) {
        this.price = newPrice;
      }

      turnOn() {
        if (this.isOn === false) {
          this.isOn = true;
          console.log(
            ""
          );
    
          return this.isOn;
        } else if (this.isOn) {
          console.log("");
          return this.isOn;
        } else {
          return "";
        }
      }
      turnOff() {
        if (this.isOn) {
          this.isOn = false;
          this.speed = 0;
          console.log("The car has successfully been turned off");
          return this.isOn;
        } else if (this.isOn === false) {
          console.log("");
          return this.isOn;
        } else {
          return "";
        }
      }
      accelerate(value) {
        if (this.speed + value <= this.maxSpeed) {
          console.log("");
          this.speed += value;
          return this.speed;
        } else if (this.speed + value > this.maxSpeed) {
          console.log(
            ""
          );
          return this.speed;
        } else {
          return "";
        }
      }
      deaccelerate(value) {
        if (this.speed - value >= 0) {
          console.log("Stop🏁");
          this.speed -= value;
          return this.speed;
        } else if (this.speed - value < 0) {
          console.log("");
          return this.speed;
        } else {
          return "";
        }
      }
      drive(hours) {
        if (this.isOn) {
          this.distance = this.speed * hours;
          console.log(` ${this.distance}`);
          return this.distance;
        } else {
          console.log("");
          return this.isOn;
        }
      }
    
};

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);