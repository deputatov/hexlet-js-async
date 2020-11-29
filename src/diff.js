import fs from 'fs';

const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);
  const largerFile = lines1 > lines2 ? lines1 : lines2;
  return largerFile.reduce(
    (acc, _, index) =>
      lines1[index] !== lines2[index]
        ? [...acc, [lines1[index] ?? null, lines2[index] ?? null]]
        : acc,
    []
  );
};

export default (path1, path2, cb) => {
  fs.readFile(path1, 'utf-8', (err1, data1) => {
    if (err1) {
      cb(err1);
      return;
    }
    fs.readFile(path2, 'utf-8', (err2, data2) => {
      if (err2) {
        cb(err2);
        return;
      }
      cb(null, compare(data1, data2));
    });
  });
};
