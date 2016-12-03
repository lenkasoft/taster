# taster

## Usage

```javascript
var taster = require ('taster');

var tastedObject = {
  character: [
    { 
      name: {firstName: 'Mary', surName: 'Poppins'},
      age: 102,
      canFly: true
    },
    {
      name: {firstName: 'Winnie', surName: 'the Pooh'},
      age: 3,
      canFly: false
    }
  ],
  What_is_done : 'done',
  bargain: 'What is it?'  
};

var rules = [
  'A.What_is_done cannot be "undone"',
  'A.bargain is A.bargain'
];

var result = taster (tastedObject, rules);
```
