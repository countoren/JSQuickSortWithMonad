const sort = require('./sort');

test('quicksort should arrange simple array', () => {
  expect(sort([3,2,1]).get()).toEqual([1,2,3]);
});
test('quicksort should throw error when invalid elm is present', () => {
  expect(sort([3,2,'invalid elm',1]).toString()).toEqual('Either.Left(error there was invalid element)');
});
