// Code to pass tests - as list
class ShoppingList {
  constructor(items) {
    this.items = [];
  }

  addItem(itemToAdd) {
    if (itemToAdd instanceof ShoppingListItem) {
      this.items.push(itemToAdd);
    } else {
      throw new Error(itemToAdd);
      console.log('not on the list!');
      // console.log(this.items);
    }

  };

  removeItem(itemToRemove) {
    let itemIndex = this.items.indexOf(itemToRemove);
    if (itemIndex >= 0) {
      this.items.splice(itemIndex, 1);
      return true;
    } else if (itemIndex === -1) {
      return false;
    } else if (itemToRemove === undefined) {
      this.items.pop();
    }

  }
}