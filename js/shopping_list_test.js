// All tests in here!
let expect = chai.expect;
let should = chai.should();

// Before and after??
describe('everything', function () {
  let shoppingListItem;
  let param1 = 'potato';
  let param2 = 'starchy';
  let shoppingList;
  let array = [];
  

  beforeEach(function () {
    shoppingListItem = new ShoppingListItem(param1, param2);
  })
  
  // ShoppingListItem
  describe('ShoppingListItem', function () {
    describe('constructor', function () {
      it('should have a name', function () {
        shoppingListItem.name.should.equal(param1);
      });
      
      it('should have a description', function () {
        shoppingListItem.description.should.equal(param2);
      });
  
      it('parameters should be a string', function (){
        expect(param1).to.be.a('string');
        expect(param2).to.be.a('string');
      })

    })

    it.skip('should only have two parameters', function(){
    
    })
    
    it('is_done should be false', function () {
      shoppingListItem.is_done.should.equal(false);
    });
    
  }); //closing bracket for ShoppingListItem
  
  // Check method
  describe('.check', function (){
    it('should be a function', function (){
      expect(shoppingListItem.check).to.be.a('function');
    });
    
    it('should set done property to true', function (){
      shoppingListItem.check();
      shoppingListItem.is_done.should.equal(true);
    })
    
  })// closing bracket for check

  // Uncheck method
  describe('.uncheck', function () {
    it('should be a function', function () {
      expect(shoppingListItem.uncheck).to.be.a('function');
    });

    it('should set done property to false', function() {
      shoppingListItem.uncheck();
      shoppingListItem.is_done.should.equal(false);
    })
  }); //closing for uncheck

  // Render method
  describe('.render', function(){
   
    it('should be a function', function(){
      expect(shoppingListItem.render).to.be.a('function');
    });

    it('should create a string', function(){
      expect(shoppingListItem.render()).to.be.a('string');
    });
    
    it('string content should be wrapped in li tags', function(){
      expect(shoppingListItem.render()).to.equal(`$<li>`);
    });
  }) // closing for render

// START SHOPPING LIST TESTS

  describe('ShoppingList', function () {
    describe('constructor', function () {
      it('should have an items property', function () {
        shoppingList.items.should.equal(array);
      });

      it('items should be an array', function () {
        expect(shoppingList.items).to.be.an('Array');
      })

      it('array should be empty', function(){
        expect(shoppingList.items).to.be.empty;
      })
    }); // closes constructor

    describe(`addItem`, function (){
      it('should have a method named add item', function(){
        shoppingList.should.haveOwnProperty(items);
      })

      it('should have a single argument ShoppingListItem', function(){
        expect(shoppingList.addItem).args.length.to.equal(1);
        expect(shoppingList.addItem).args.to.be.a('ShoppingListItem');
      });
    }) // closes add item


  }) // closes shopping list
}) // closes everything