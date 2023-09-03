
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. 
// При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.
// Додай методи класу:

//      getItems() — повертає масив поточних товарів

//      addItem(item) — отримує новий товар і додає його до поточних

//      removeItem(item) — отримує товар і, якщо він є, видаляє його з поточних

class  Storage{
    constructor(items) {
this.items = items;
    }

    getItems(){
        this.items.reduce((acc, item) => {
            console.log(item);

    })
    return this.items;
};
addItem(item1) {
    this.items.push(item1);
    return this.items;
  }
  removeItem(itemsRemove) {
    const indexOfItemRemove = this.items.findIndex(
      (item) => item === itemsRemove
    );
    const splicedItem = this.items.splice(indexOfItemsRemove, 1);
    console.log(splicedItem);
    return splicedItem;
  }
};


const storage = new Storage([
'Нанітоіди',
'Пролонгер',
'Залізні жупи',
'Антигравітатор',
]);
const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]