
// Напиши клас Account, яка створює об'єкт з властивостями login і email. 
// В prototype функції-конструктора добав метод getInfo(), 
// який виводить в консоль значення полів login і email об'єкта який його викликав.
// console.log(Account.prototype.getInfo);  function
// const mango = new Account({
// login: 'Mangozedog',
// email: 'mango@dog.woof',
// });
// mango.getInfo();  Login: Mangozedog, Email: mango@dog.woof
// const poly = new Account({
// login: 'Poly',
// email: 'poly@mail.com',
// });
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

class Account {
    constructor ({login = "", email = ""}) {
this.login = login;
this.email = email;
    }

getInfo() {
    console.log(`Email - ${this.email}. Login - ${this.login}`);
    return `Email - ${this.email}. Login - ${this.login}`;
}

}


console.log(Account.prototype.getInfo);
const mango = new Account({
login: 'Mangozedog',
email: 'mango@dog.woof',
});
mango.getInfo();
const poly = new Account({
login: 'Poly',
email: 'poly@mail.com',
});
poly.getInfo();