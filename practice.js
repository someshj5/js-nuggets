const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "John",
    age: 30,
    position: "sr.developer",
  },
  {
    name: "Doe",
    age: 25,
    position: "designer",
  },
  {
    name: "Jane",
    age: 34,
    position: "Boss",
  },
  {
    name: "Venna",
    age: 18,
    position: "Intern",
  },
];

const getAges = (person) => {
  return person.age * 2;
};

const ages = people.map(getAges);
const names = people.map((person) => `<h2>${person.name}</h2>`);

// console.log(ages);
const newPeople = people.map((person) => {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const div = document.querySelector("#result");
div.innerHTML = names.join("");
