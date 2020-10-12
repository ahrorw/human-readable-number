
module.exports = function toReadable (number) {
  let array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arrayDec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let strText = '';
  let numStr = String(number);

  if (number > 99) {
    strText += array[Number(numStr.substr(-3,1))]  + ' hundred ';
    numStr = numStr.substr(-2);
  }

  if (Number(numStr) > 19) {
    strText += arrayDec[Number(numStr[0]) - 2] + ' ';
    numStr = (numStr[1] === '0') ? '' : numStr[1];
  } else if (numStr === '00') {
    numStr = '';
  }

  strText += (numStr === '') ? '' : array[Number(numStr)];

  return strText.trim();
}
