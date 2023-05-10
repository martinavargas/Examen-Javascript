function multipleOfThree(numbersToVerify) {
  let sum = 0;
  numbersToVerify
    .toString()
    .split("")
    .forEach((numbersToVerify) => (sum += parseInt(numbersToVerify)));
  if (sum >= 3 && sum <= 9) {
    return sum === 3 || sum === 6 || sum === 9;
  }
}
