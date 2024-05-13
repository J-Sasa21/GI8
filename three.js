function createPII() {
  const pii = {
    name: "John Doe",
    ssn: "123-45-6789",
  };

  return {
    getName: function () {
      return pii.name;
    },
  };
}

const personInfo = createPII();

console.log(personInfo.getName());
console.log(personInfo.ssn);
