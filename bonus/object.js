const student = {
  name: "Sakib Khan",
  id: 121,
  address: "movie cinema",
  isSignle: true,
  friends: ["Apu", "Raaz", "Salman", "aamir"],
  movies: [
    {
      name: "no. 1",
      year: 2015,
    },
    {
      name: "King Khan",
      year: 2018,
    },
  ],
  act: function(){
    console.log('Acting like sakib khan');
  },
  car: {
    brand: "tesla",
    price: 5000000,
    made: 2025,
    manfacturer: {
      name: "tesla",
      ceo: "Elon Musk",
      country: "USA",
    },
  },
};


student.act();
