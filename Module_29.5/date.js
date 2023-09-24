const today = new Date();
console.log(today);

const date1 = new Date("1971-03-26");
const date2 = new Date("1971-12-16");

if (date1.getTime() < date2.getTime()) {
  console.log("march was before december", date1.getTime(), date2.getTime());
} else {
  console.log("march was not before december");
}



// moment.js is needed for different type of comparison
