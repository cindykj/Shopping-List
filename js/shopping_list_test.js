// All tests in here!
let expect = chai.expect;
let should = chai.should();

// Before and after??
describe('everything', function () {

  describe('everythingShoppingListItem', function(){
    let potato;
    let param1 = 'potato';
    let param2 = 'starchy';
    

  beforeEach(function () {
    // this creates an instance
    potato = new ShoppingListItem(param1, param2);
  })
  
  // ShoppingListItem
  describe('ShoppingListItem', function () {
    describe('constructor', function () {
      it('should have a name', function () {
        potato.name.should.equal(param1);
      });
      
      it('should have a description', function () {
        potato.description.should.equal(param2);
      });
  
      it('parameters should be a string', function (){
        expect(param1).to.be.a('string');
        expect(param2).to.be.a('string');
      })

    })

    it.skip('should only have two parameters', function(){
    
    })
    
    it('is_done should be false', function () {
      potato.is_done.should.equal(false); // potato begins as false
    });
    
  }); //closing bracket for ShoppingListItem
  
  // Check method
  describe('.check', function (){
    it('should be a function', function (){
      expect(potato.check).to.be.a('function');
    });
  
    it('should set done property to true', function (){
      potato.check(); 
      potato.is_done.should.equal(true); // potato is changed to true
    })
    
  })// closing bracket for check

  // Uncheck method
  describe('.uncheck', function () {
    it('should be a function', function () {
      expect(potato.uncheck).to.be.a('function');
    });

    it('should set done property to false', function() {
      potato.uncheck();
      potato.is_done.should.equal(false); // potato is changed back to false
    })
  }); //closing for uncheck

  // Render method
  describe('.render', function(){
   
    it('should be a function', function(){
      expect(potato.render).to.be.a('function');
    });

    it('should return something', function (){
      expect(potato.render()).to.not.be.empty
    })

    it('should return a string', function(){
      expect(potato.render()).to.be.a('string');
    });
    
    it('string content should return an element that includes is_done, name, description', function(){
      let test = '<li class="completed_false"><span>potato</span> <span>starchy</span></li>'
      expect(potato.render()).to.equal(test);
    });
  }) // closing for render

}) // end of everythingshopinglistitem

describe('everythingShoppingList', function(){
  let shoppingList;
  let array = [];
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
})// closes everythingshoppinglist
}) // closes everything