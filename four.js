class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  exercise() {
    console.log(
      `${this.name} says: "Exercise is important for maintaining a healthy lifestyle!"`
    );
  }

  fetchJob() {
    console.log(`${this.name} is a ${this.job}.`);
  }
}

class Programmer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }

  completeTask() {
    this.busy = false;
  }

  acceptNewTask() {
    this.busy = true;
  }

  offerNewTask() {
    if (this.busy) {
      console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
      console.log(`${this.name} would love to take on a new responsibility.`);
    }
  }

  learnLanguage(newLanguage) {
    this.languages.push(newLanguage);
  }

  listLanguages() {
    console.log(`${this.name} knows ${this.languages.join(", ")}.`);
  }
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const programmer1 = new Programmer("Liana", "DevOps", 35, [
  "HTML",
  "C#",
  "LUA",
]);

person1.exercise();
person1.fetchJob();

programmer1.completeTask();
programmer1.offerNewTask();
programmer1.learnLanguage("JavaScript");
programmer1.listLanguages();
