// Code to pass tests - as list
class ShoppingList {
  constructor (items) {
    this.items = [];
  }

  addItem (itemToAdd) {
    if (itemToAdd instanceof ShoppingListItem) {
      this.items.push(itemToAdd);
    } else {
      throw new Error(itemToAdd);
      console.log('not on the list!');
    }
  
  };
}