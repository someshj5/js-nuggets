const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
    salary: 200,
  },
  {
    name: "John",
    age: 30,
    position: "sr.developer",
    salary: 400,
  },
  {
    name: "Doe",
    age: 25,
    position: "designer",
    salary: 100,
  },
  {
    name: "Jane",
    age: 34,
    position: "Boss",
    salary: 900,
  },
  {
    name: "Venna",
    age: 18,
    position: "Intern",
    salary: 70,
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

let coffeehouse = {
  success: true,
  message: "successfull",
  data: [
    {
      id: 0,
      name: "Corporate",
      address: "624 Broadway",
      city: "San Diego",
      state: "CA",
      email: "corporate@coffeehouse.com",
      amenities: [],
    },
    {
      id: 1,
      name: "Downtown",
      address: "Horton Plaza",
      city: "San Diego",
      state: "CA",
      email: "downtown@coffeehouse.com",
      amenities: [
        {
          id: 1,
          name: "Wifi",
          description: "Wifi service for internet",
        },
        {
          id: 3,
          name: "cakes",
          description: "cake  service in store",
        },
      ],
    },
    {
      id: 2,
      name: "Uptown",
      address: "1240 University Ave",
      city: "San Diego",
      state: "CA",
      email: "uptown@coffeehouse.com",
      amenities: [
        {
          id: 1,
          name: "Wifi",
          description: "Wifi service for internet",
        },
        {
          id: 4,
          name: "bike track",
          description: "bike tracks in parking",
        },
        {
          id: 5,
          name: "golf",
          description: "golf service in store",
        },
      ],
    },
    {
      id: 3,
      name: "Midtown",
      address: "784 W Washington St",
      city: "SanDiego",
      state: "CA",
      email: "midtown@coffeehouse.com",
      amenities: [],
    },
    {
      id: 4,
      name: "Corporate2",
      address: "634 Broadway",
      city: "San Diego",
      state: "CA",
      email: "corporate@coffeehouse.com",
      amenities: [],
    },
    {
      id: 5,
      name: "CCD",
      address: "624 Broadway",
      city: "",
      state: "CA",
      email: "ccd@coffeehouse.com",
      amenities: [],
    },
    {
      id: 8,
      name: "Bleekers cafe",
      address: "77A Bleekers street",
      city: "New York",
      state: "AM",
      email: "bleekers@coffeehouse.com",
      amenities: [
        {
          id: 1,
          name: "Wifi",
          description: "Wifi service for internet",
        },
      ],
    },
    {
      id: 9,
      name: "Bleekers cafe",
      address: "77A Bleekers street",
      city: "New York",
      state: "AM",
      email: "bleekers@coffeehouse.com",
      amenities: [
        {
          id: 1,
          name: "Wifi",
          description: "Wifi service for internet",
        },
      ],
    },
    {
      id: 10,
      name: "Bleekers cafe",
      address: "77A Bleekers street",
      city: "New York",
      state: "AM",
      email: "bleekers@coffeehouse.com",
      amenities: [
        {
          id: 1,
          name: "Wifi",
          description: "Wifi service for internet",
        },
      ],
    },
    {
      id: 11,
      name: "Malbu cafe",
      address: "77A Malibu street",
      city: "New York",
      state: "AM",
      email: "malibu@coffeehouse.com",
      amenities: [
        {
          id: 1,
          name: "Wifi",
          description: "Wifi service for internet",
        },
      ],
    },
    {
      id: 12,
      name: "Malbu cafe",
      address: "77A Malibu street",
      city: "New York",
      state: "AM",
      email: "malibu@coffeehouse.com",
      amenities: [
        {
          id: 1,
          name: "Wifi",
          description: "Wifi service for internet",
        },
        {
          id: 2,
          name: "pary_room",
          description: "party_room service in store",
        },
        {
          id: 4,
          name: "bike track",
          description: "bike tracks in parking",
        },
      ],
    },
    {
      id: 13,
      name: "Malbu cafe",
      address: "77A Malibu street",
      city: "New York",
      state: "AM",
      email: "malibu@coffeehouse.com",
      amenities: [
        {
          id: 1,
          name: "Wifi",
          description: "Wifi service for internet",
        },
        {
          id: 2,
          name: "pary_room",
          description: "party_room service in store",
        },
        {
          id: 4,
          name: "bike track",
          description: "bike tracks in parking",
        },
      ],
    },
    {
      id: 14,
      name: "Hammer cafe",
      address: "77A Hammer street",
      city: "New York",
      state: "AM",
      email: "hammer@coffeehouse.com",
      amenities: [
        {
          id: 1,
          name: "Wifi",
          description: "Wifi service for internet",
        },
        {
          id: 2,
          name: "pary_room",
          description: "party_room service in store",
        },
        {
          id: 4,
          name: "bike track",
          description: "bike tracks in parking",
        },
      ],
    },
    {
      id: 15,
      name: "Hammer cafe",
      address: "77A Hammer street",
      city: "New York",
      state: "AM",
      email: "hammer@coffeehouse.com",
      amenities: [
        {
          id: 1,
          name: "Wifi",
          description: "Wifi service for internet",
        },
        {
          id: 2,
          name: "pary_room",
          description: "party_room service in store",
        },
        {
          id: 4,
          name: "bike track",
          description: "bike tracks in parking",
        },
      ],
    },
    {
      id: 16,
      name: "Hammer cafe",
      address: "77A Hammer street",
      city: "New York",
      state: "AM",
      email: "hammer@coffeehouse.com",
      amenities: [
        {
          id: 1,
          name: "Wifi",
          description: "Wifi service for internet",
        },
        {
          id: 2,
          name: "pary_room",
          description: "party_room service in store",
        },
        {
          id: 4,
          name: "bike track",
          description: "bike tracks in parking",
        },
      ],
    },
    {
      id: 17,
      name: "Corporate2",
      address: "624 Broadway 2",
      city: "San Diegooo",
      state: "CA",
      email: "corporate2@coffeehouse.com",
      amenities: [],
    },
    {
      id: 18,
      name: "Corporate3",
      address: "624 Broadway 3",
      city: "San Diegooo2",
      state: "CA",
      email: "corporate3@coffeehouse.com",
      amenities: [
        {
          id: 2,
          name: "pary_room",
          description: "party_room service in store",
        },
        {
          id: 4,
          name: "bike track",
          description: "bike tracks in parking",
        },
      ],
    },
    {
      id: 19,
      name: "Corporate",
      address: "624 Broadway",
      city: "San Diego",
      state: "CA",
      email: "corporate@coffeehouse.com",
      amenities: [],
    },
  ],
  total_count: 18,
};

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
// div.innerHTML = category.join("");

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

const totalwage = people.reduce((acc, person) => {
  return (acc += person.salary);
}, 0);

// console.log(totalwage);

const bob_data = {
  first: "bob",
  last: "marley",
  city: "chicago",
  siblings: { sister: "jane" },
  age: 20,
  position: "developer",
};

const {
  first: firstName,
  last: lastName,
  city: residence,
  siblings: { sister: favoriteSibling },
  age,
  position,
} = bob_data;

// console.log(firstName, lastName, residence, favoriteSibling, age, position);

function printPerson({ first, last, age, siblings: { sister } }) {
  console.log(first, last, sister); // bob marley jane
}

// printPerson(bob_data);
const udemy = "udemy";
const boys = ["bob", "ram", "van", "dam"];
const girls = ["alice", "sabrina", "nirobi", "raquel"];
const bestfriend = "arnold";

const letters = [...udemy];
// console.log(letters); //["u", "d", "e", "m", "y"]

const friends = [...boys, bestfriend, ...girls];
// console.log(friends);

const updatedBob = { updated: true, ...bob_data };
// console.log(bob_data);
// console.log(updatedBob);

const fruits = ["apple", "oranges", "lemon", "banana", "pear"];

const [first, second, ...rest] = fruits;
// console.log(first, second, rest); // apple oranges ["lemon", "banana", "pear"]
const restOfTheFruits = rest.find((fruit) => fruit == "banana");
// console.log(restOfTheFruits); // banana
const findOrange = rest.find((fruit) => fruit == "oranges");
// console.log(findOrange); // undefined

const { city, ...restoftheobj } = bob_data;
// console.log(city, restoftheobj); // chicago {first: "bob", last: "marley", siblings: {…}, age: 20, position: "developer"}

// cart example

const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google Pixel",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Nokia Lumia 1040",
    price: 599.99,
    amount: 3,
  },
  {
    title: "Xiaomi Redmi Note7",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note5",
    price: 399.99,
    amount: 3,
  },
];

const cartTotal = cart.reduce((total, item) => {
  return (total += item.price);
}, 0);

let { totalItems, carttotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    total.totalItems += amount;
    total.carttotal += amount * price;
    return total;
  },
  {
    totalItems: 0,
    carttotal: 0,
  }
);

carttotal = parseFloat(carttotal.toFixed(2));
// console.log(totalItems, carttotal);
// console.log("cartTotal:", total);

const url = "https://api.github.com/users/john-smilga/repos?per_page=100"; // https://api.github.com/users/someshj5/repos?per_page=100

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    // if (language) {
    //   if (total[language]) {
    //     total[language] += 1;
    //   } else {
    //     total[language] = 1;
    //   }
    // }
    if (language) {
      total[language] = total[language] + 1 || 1;
      // ? (total[language] += 1)
      // : (total[language] = 1);
    }

    return total;
  }, {});
  // console.log(newData);
  // console.log(data);
};

// fetchRepos();

const text = document.querySelectorAll(".text");
// console.log(text);
const newText = Array.from(text).find((item) => item.textContent === "person");

// console.log(newText);

const items = Array.from({ length: 120 }, (_, idx) => {
  return idx;
});

const itemsPerpage = 10;
const pages = Math.ceil(items.length / itemsPerpage);

const newItems = Array.from({ length: pages }, (_, idx) => {
  const start = idx * itemsPerpage;
  const tempItems = items.slice(start, start + itemsPerpage);
  return tempItems;
});
// console.log(newItems);

const randomUser = [
  {
    gender: "male",
    name: {
      title: "mr",
      first: "brad",
      last: "gibson",
    },
    location: {
      street: "9278 new road",
      city: "kilcoole",
      state: "waterford",
      postcode: "93027",
      coordinates: {
        latitude: "20.9267",
        longitude: "-7.9310",
      },
      timezone: {
        // offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "brad.gibson@example.com",
  },
];
