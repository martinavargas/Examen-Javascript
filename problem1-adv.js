function multipleOfThree(numbersToVerify) {
  let sum = 0;
  numbersToVerify
    .toString()
    .split("")
    .forEach((numbersToVerify) => (sum += parseInt(numbersToVerify)));
  if (sum >= 3 && sum <= 9) {
    if (sum === 3 || sum === 6 || sum === 9) {
      console.log(`El número ${numbersToVerify} es divisible por 3`);
    } else console.log(`NO es divisible por 3 el número ${numbersToVerify}`);
  } else console.log(`El número ${numbersToVerify} no es PARA NADA divisible`);
}

