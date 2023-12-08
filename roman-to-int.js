const romanToInt = (roman) => {
  if (typeof roman !== "string") {
    const romanType = typeof roman;

    throw new Error(`Invalid input: string expected but got ` + romanType);
  }

  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = 0; i < roman.length; i++) {
    let currentValue = romanNumerals[roman[i].toUpperCase()];

    if (!currentValue) throw new Error(`Invalid roman`);

    if (prevValue < currentValue) {
      result -= prevValue;
    } else {
      result += prevValue;
    }

    prevValue = currentValue;
  }
  result += prevValue;
  return result;
};

const result = romanToInt("iv");
console.log(result);
