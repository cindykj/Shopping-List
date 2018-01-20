// All tests in here!
let expect = chai.expect;
let should = chai.should();

// Before and after??

// ShoppingListItem
describe('ShoppingListItem', function () {
  it('should be a function', function () {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a name', function () {
    let shoppingListItem = new ShoppingListItem('potato', 'starchy', true);
    shoppingListItem.name.should.equal('potato');
  });

  it('should have a description', function () {
    let shoppingListItem = new ShoppingListItem('potato', 'starchy', true);
    shoppingListItem.description.should.equal('starchy');
  });

  it('should be done', function () {
    let shoppingListItem = new ShoppingListItem('potato', 'starchy', true);
    shoppingListItem.is_done.should.equal(true);
  });

}); //closing bracket for ShoppingListItem