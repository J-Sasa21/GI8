function sharePizza(totalSlices, numberOfPeople) {
  const slicesPerPerson = totalSlices / numberOfPeople;

  return `Each person gets ${slicesPerPerson.toFixed(
    2
  )} slices of pizza; from our ${totalSlices} slice pizza`;
}

console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));
