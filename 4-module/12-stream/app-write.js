const fs = require('fs');

const writeStream = fs.createWriteStream('./file3.txt');
writeStream.on('finish', () => {
  // 모든 write가 끝나면
  console.log('finished!');
});

writeStream.write('hello!');
writeStream.write('world!');

// finish 이벤트를 발생시킴
writeStream.end();
