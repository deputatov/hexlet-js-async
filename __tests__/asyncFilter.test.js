import asyncFilter from '../src/asyncFilter';

test('should work', (done) => {
  const coll = [];
  asyncFilter(
    coll,
    (x) => x,
    (result) => {
      expect(result).toEqual(coll);
      expect(result).not.toBe(coll);
      done();
    }
  );
});

test('should work 2', (done) => {
  const coll = [10, 53, true, false, '', NaN, 22];
  asyncFilter(
    coll,
    (x) => x,
    (result) => {
      expect(result).toEqual([10, 53, true, 22]);
      expect(result).not.toBe(coll);
      done();
    }
  );
});

test('should work async', (done) => {
  const coll = [1, 5, 2, 3, 4, 10, 9];
  asyncFilter(
    coll,
    (x) => x,
    (result) => {
      expect(result).toEqual(coll);
      expect(result).not.toBe(coll);
      done();
    }
  );
});

test('function should be asynchronous', (done) => {
  const coll = [1, 2, 3];
  let actual = null;
  asyncFilter(
    coll,
    (x) => x,
    (result) => {
      actual = result;
      done();
    }
  );
  expect(actual).toBeNull();
});
