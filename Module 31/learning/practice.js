// task - 1: console log the secondary school location of Shophia
let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },
          { location: "St Lorence" },
        ],
      },
    ],
  },
};

console.log(data.Sophia.study[1].secondary[1].location);
// task - 2: console log output: Petersburg, Herry
let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};


console.log(students[2222].address.city);
console.log(students[3333].name);
// task - 3 : acces and then show habluder adda
// show output Begginer
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluader adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};


console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookCategory);