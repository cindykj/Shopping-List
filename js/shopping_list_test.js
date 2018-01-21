// All tests in here!
let expect = chai.expect;
let should = chai.should();

// Before and after??
describe('everything', function () {
  // this creates an instance
  let param1 = 'potato';
  let param2 = 'starchy';
  let potato = new ShoppingListItem(param1, param2);
  let array = [];


  // ShoppingListItem
  describe('ShoppingListItem', function () {
    describe('constructor', function () {
      it('should have a name', function () {
        potato.name.should.equal(param1);
      });

      it('should have a description', function () {
        potato.description.should.equal(param2);
      });

      it('parameters should be a string', function () {
        expect(param1).to.be.a('string');
        expect(param2).to.be.a('string');
      })

    }) //closing constructor

    it.skip('should only have two parameters', function () {
    })

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
      })

      // it('should have a single argument', function () {
      //   expect(list.addItem).arguments.length.to.be(1)
      
      // });
      it('should invoke addItem by passing ShoppingListItem into items', function () {
        let apple = new ShoppingListItem ('apple', 'red');
        let banana = new ShoppingListItem ('banana', 'yellow');
        let kiwi = new ShoppingListItem ('kiwi', 'fuzzy');

        list.addItem(apple);
        list.addItem(banana);
        list.addItem(kiwi);

        expect(list.items).to.contain(apple, banana, kiwi);
      })

      it('should throw an error if it is not a ShoppingListItem', function () {
        expect(list.addItem.bind(list, 'poop')).to.throw();
      })

      // it('should add the item to the shopping list', function () {
      //   list.addItem(potato);
      //   list.items.should.include(potato);
      // })


    }) // closes add item



  }) // closes everythingshoppinglist
}) // closes everything