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

const menu = [
  {
    id: 1,
    category: "Breakfast",
  },
  {
    id: 2,
    category: "Lunch",
  },
  {
    id: 3,
    category: "Dinner",
  },
  {
    id: 4,
    category: "Eve-meal",
  },
  {
    id: 5,
    category: "Snacks",
  },
  {
    id: 6,
    category: "Snacks",
  },
  {
    id: 7,
    category: "Dinner",
  },
  {
    id: 8,
    category: "Lunch",
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
// div.innerHTML = names.join("");

const category = [
  ...new Set(
    menu.map(
      (item) =>
        `<button class="ml-2 bg-danger text-white ">${item.category}</button>`
    )
  ),
];
div.innerHTML = category.join("");

let appState = "loading";

const app = {
  [appState]: true,
};

let keyName = "computer";

app[keyName] = "apple";

//console.log(app);

// React UseSate internal

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "bob");
updateState("job", "developer");
updateState("loading", false);
updateState("products", []);

//console.log(state); // {loading: false, name: "bob", job: "developer",products:[]}

const youngPeople = people.filter((person) => person.age < 30);
//console.log(youngPeople); // [{name: "bob", age: 20, position: "developer"}, {name: "Doe", age: 25, position: "designer"} ,{name: "Venna", age: 18, position: "Intern"}]

const developers = people.filter((person) => person.position === "developer");
// console.log(developers); // [{name: "bob", age: 20, position: "developer"}]
const oldPeople = people.filter((person) => person.age > 35);
// console.log(oldPeople); // []

const bob = people.find((person) => person.name === "bob");
// find returns a object or string else undefined
// console.log(bob); // {name: "bob", age: 20, position: "developer"}
const mob = people.find((person) => person.name === "mob");
// console.log(mob); // undefined
