// All tests in here!
let expect = chai.expect;
let should = chai.should();

// Before and after??
describe('everything', function () {
  // this creates an instance
  let potato = new ShoppingListItem('potato', 'starchy');
  let array = [];
  let apple = new ShoppingListItem('apple', 'red');
  let banana = new ShoppingListItem('banana', 'yellow');
  let kiwi = new ShoppingListItem('kiwi', 'fuzzy');



  // ShoppingListItem
  describe('ShoppingListItem', function () {
    describe('constructor', function () {
      it('should have a name', function () {
        potato.name.should.equal('potato');
      });

      it('should have a description', function () {
        potato.description.should.equal('starchy');
      });

      it('parameters should be a string', function () {
        expect('potato').to.be.a('string');
        expect('starchy').to.be.a('string');
      })

    }) //closing constructor

    it.skip('should only have two parameters', function () {})

    it('is_done should be false', function () {
      potato.is_done.should.equal(false); // potato begins as false
    });

  }); //closing bracket for ShoppingListItem

  // Check method
  describe('.check', function () {
    it('should be a function', function () {
      expect(potato.check).to.be.a('function');
    });

    it('should set done property to true', function () {
      potato.check();
      potato.is_done.should.equal(true); // potato is changed to true
    })

  }) // closing bracket for check

  // Uncheck method
  describe('.uncheck', function () {
    it('should be a function', function () {
      expect(potato.uncheck).to.be.a('function');
    });

    it('should set done property to false', function () {
      potato.uncheck();
      potato.is_done.should.equal(false); // potato is changed back to false
    })
  }); //closing for uncheck

  // Render method
  describe('.render', function () {

    it('should be a function', function () {
      expect(potato.render).to.be.a('function');
    });

    it('should return something', function () {
      expect(potato.render()).to.not.be.empty
    })

    it('should return a string', function () {
      expect(potato.render()).to.be.a('string');
    });

    it('string content should return an element that includes is_done, name, description', function () {
      let test = '<li class="completed_false"><span>potato</span> <span>starchy</span></li>'
      expect(potato.render()).to.equal(test);
    });
  }) // closing for render


  // START SHOPPING LIST TESTS

  describe('ShoppingList', function () {
    let list = new ShoppingList();


    describe('constructor', function () {
      it('should have an items property', function () {
        // list.items.should.equal(array);
        expect(list).to.have.ownPropertyDescriptor('items');
      });

      it('items should be an array', function () {
        expect(list.items).to.be.an('Array');
      })

      it('array should be empty', function () {
        expect(list.items).to.be.empty;
      })
    }); // closes constructor

    describe(`addItem`, function () {

      it('should be a function', function () {
        expect(list.addItem).to.be.a('function');
      });

      it('should invoke addItem by passing ShoppingListItem into items', function () {       
        list.addItem(apple);
        list.addItem(potato);
        list.addItem(banana);
        list.addItem(kiwi);
        expect(list.items).to.contain(apple);
        expect(list.items).to.contain(potato);
        expect(list.items).to.contain(banana);
        expect(list.items).to.contain(kiwi);
      });

      it('should throw an error if it is not a ShoppingListItem', function () {
        expect(list.addItem.bind(list, 'poop')).to.throw();
      });

    }); // closes add item

    describe('removeItem', function () {

      it('should be a function', function () {
        expect(list.removeItem).to.be.a('function');
      });

      // items currently has three things in array
      it('should remove an item from the shopping list', function () {

        list.removeItem(apple).should.equal(true);
        list.items.should.not.contain(apple);
        list.items.should.contain(potato);
        list.items.should.contain(banana);
        list.items.should.contain(kiwi);
        
      });

      // console.log(list.items);
      // should only have potato, banana, kiwi, and  in the items
      it('should remove the last item in the list if no itemToRemove is declared', function(){

        list.removeItem(kiwi).should.equal(true);
        list.items.should.not.contain(kiwi);
        list.items.should.contain(potato);
        list.items.should.contain(banana);

      });

      it('should throw an error if its not in the items list', function (){
        expect(list.removeItem.bind(list.items, 'poop')).to.throw();
      })
    })
      //should have potato and banana in items
    describe('render', function () {
      it('should be a function', function () {
        expect(list.render).to.be.a('function');
      });

      it('should return something', function () {
        expect(list.render()).to.not.be.empty
      })
  
      it('should return a string', function () {
        expect(list.render()).to.be.a('string');
      });

      it('string content should return an element that concats shoppinglistitem.render() with ul tags', function () {
        let newTest = '<ul><li class="completed_false"><span>potato</span> <span>starchy</span></li><li class="completed_false"><span>banana</span> <span>yellow</span></li></ul>';
        expect(list.render()).to.equal(newTest);
      });

    })


  }) // closes everythingshoppinglist
}) // closes everything