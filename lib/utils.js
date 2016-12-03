/**
 * Created by a on 03.12.16.
 */

var Symbols = require('./constants').Symbols;
var Quotation = require('./constants').Quotation;

var findStrings = function (validation) {

  var coverage = [];
  var prevSymbol = '';
  var curSymbol;
  var curQuoteState;
  var nextQuoteState = Quotation.NOT_QUOTED;

  for (var i = 0; i < validation.length; i++) {
    curQuoteState = nextQuoteState;
    curSymbol = validation.charAt(i);
    switch (curSymbol) {
      case Symbols.DOUBLE_QUOTE:
        if (curQuoteState === Quotation.DOUBLE && prevSymbol !== Symbols.BACKSLASH) {
          nextQuoteState = Quotation.NOT_QUOTED;
        } else {
          if (curQuoteState !== Quotation.SINGLE) {
            curQuoteState = nextQuoteState = Quotation.DOUBLE;
          }
        }
        break;
      case Symbols.SINGLE_QUOTE:
        if (curQuoteState === Quotation.SINGLE && prevSymbol !== Symbols.BACKSLASH) {
          nextQuoteState = Quotation.NOT_QUOTED;
        } else {
          if (curQuoteState !== Quotation.DOUBLE) {
            curQuoteState = nextQuoteState = Quotation.SINGLE;
          }
        }
        break;
    }

    coverage.push(curQuoteState);
    prevSymbol = curSymbol;
  }

  return coverage;
};

module.exports = {
  'findStrings': findStrings
};