var stream = require('stream');
process.stdin.setEncoding('utf8');

var Transform = stream.Transform;
var whiteSpaceDelete = new Transform();


whiteSpaceDelete._transform = function(chunk, encoding, callback){
  var string = "";
  string += chunk;
  string = string.replace(/\s/g, "").replace(/(\/\*).*(\*\/)/g, "");
  process.stdout.write(string, 'utf8');
};

 process.stdin
    .pipe(whiteSpaceDelete)
    .pipe(process.stdout);
