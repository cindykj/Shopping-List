// All tests in here!
let expect = chai.expect;
let should = chai.should();
let shoppingListItem;
// Before and after??
beforeEach(function () {
  shoppingListItem = new ShoppingListItem('potato', 'starchy');
})

// ShoppingListItem
describe('ShoppingListItem', function () {
  it('should be a function', function () {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a name', function () {
    shoppingListItem.name.should.equal('potato');
  });

  it('should have a description', function () {
    shoppingListItem.description.should.equal('starchy');
  });

  it('should be done', function () {
    shoppingListItem.is_done.should.equal(false);
  });

}); //closing bracket for ShoppingListItem

describe('.check', function (){
  it('should be a function', function (){
    expect(shoppingListItem.check).to.be.a('function');
  });

  it('should set done property to true', function (){
    shoppingListItem.check();
    shoppingListItem.is_done.should.equal(true);
  })

})// closing bracket for check