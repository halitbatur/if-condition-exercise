function checkNumber(num) {
  if (num >= 10 && num <= 20) {
    console.log(num);
  } else if (num < 100) {
    return num / 2;
  } else if (num > 20) {
    console.log(num ** 2);
  } else if (num >= 100 && num < 200) {
    return num;
  } else {
    return num * 2;
  }
  // Your code here
}

function checkStringLength() {
  // Your code here
}

module.exports = {
  checkNumber,
  checkStringLength,
};
