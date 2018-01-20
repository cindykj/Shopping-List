// Code to pass shopping list tests - as item

class ShoppingListItem {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;
  };

  check() {
    this.is_done = true;
  };

  uncheck() {
    this.is_done = false;
  }

  render() {

    let mainList = document.createElement('ul');
    mainList.innerHTML = 
    document.body.appendChild(ul)

    let list = document.createElement('li');
    list.className = `completed_`+ this.is_done;
    mainList.appendChild(list);

    let htmlName = document.createElement('span');
    htmlName.innerHTML = this.name;
    list.appendChild(htmlName);

    let htmlDescription = document.createElement('span');
    htmlDescription.innerHTML = this.description;    
    list.appendChild(htmlDescription);

    console.log(`${list}  ${htmlName}  ${htmlDescription}`)
   
   // return `${list}`
  }
}; //shoppinglist item closing