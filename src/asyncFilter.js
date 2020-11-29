export default (coll, fn, cb) => {
  const iter = ([head, ...rest], acc) => {
    const newAcc = fn(head) ? [...acc, head] : acc;
    if (rest.length === 0) {
      cb(newAcc);
      return;
    }
    setTimeout(iter, 0, rest, newAcc);
  };
  iter(coll, []);
};
