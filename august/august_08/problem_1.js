function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please enter number only!";
  }
  return number * number * number;
}

console.log(cubeNumber(4));

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please enter string only!";
  } else if (string1.includes(string2)) {
    return true;
  }
  return false;
}

console.log(matchFinder("John Doe", "ohn"));

function sortMaker(arr) {
  if (arr[0] === arr[1]) {
    return "equal";
  } else if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else if (arr[0] >= 0 && arr[1] >= 0) {
    if (arr[0] < arr[1]) {
      var temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
      return arr;
    }else{
        return arr;
    }
  }
}
var arr = [4 , -2];
console.log(sortMaker(arr));



function findAddress(obj) {
    var street = obj.street;
    var house = obj.house;
    var society = obj.society;
    if(typeof street === "undefined"){
        street = "__";
    }
    if(typeof house === "undefined"){
        house = "__";
    }
    if(typeof society === "undefined"){
        society = "__";
    }
    var address = street + "," + house + "," + society;
    return address;
}

var myObj = {
    street:10,

    society:"Earth Perfect"
    
};
console.log(findAddress(myObj));

function canPay(changeArray, totalDue) {
    var totalMoney = 0;
    if(changeArray.length === 0){
        return "You don't have a single penny!";
    }

    for(let i = 0; i < changeArray.length; i++){
        totalMoney += changeArray[i];
    }

    if(totalMoney >= totalDue){
        return true;
    }else{
        return false;
    }
}

console.log(canPay([1, 5, 5], 10));