var itemName,
  price,
  haveCoupon = "SELL200",
  discountPrice;

const card1 = getId("item-1");
const card2 = getId("item-2");
const card3 = getId("item-3");
const card4 = getId("item-4");
const card5 = getId("item-5");
const card6 = getId("item-6");
const card7 = getId("item-7");
const card8 = getId("item-8");
const card9 = getId("item-9");

// making an array of our all card so we can loop through
var items = [card1, card2, card3, card4, card5, card6, card7, card8, card9];

// looping througth the items
for (const item of items) {
  item.addEventListener("click", function () {
    eventHandling(item);
  });
}

function eventHandling(cardInfo) {
  // getting title and value
  itemName = cardInfo.childNodes[3].childNodes[3].innerText;
  var priceString =
    cardInfo.childNodes[3].childNodes[5].childNodes[0].innerText;
  itemPrice = parseFloat(priceString);

  //   making li for showing dynamic li
  const li = document.createElement("li");
  li.innerText = itemName;

  //   setting values
  getId("cart-items").appendChild(li);

  // calculating coupon and cart
  price = priceTotalCalculation(itemPrice);
}

getId("apply-coupon").addEventListener("click", function () {
  const couponField = getId('coupon-code').value;
  if(couponField === haveCoupon){
    discountPrice = ((20/100)*price).toFixed(2);
    getId('total-discount').innerText = discountPrice;

    const totalBill = price - discountPrice;
    getId('total-bill').innerText = totalBill.toFixed(2);
  }
});

getId('make-purchase').addEventListener('click', function(){
    popup.showModal();
});

// making a function so we don't have to do getElementByID again and again
function getId(cardId) {
  return document.getElementById(cardId);
}

// priceTotalCalculation function
function priceTotalCalculation(itemPrice) {
  var previousTotalPriceElement = getId("total-price");
  var previousTotalPriceString = previousTotalPriceElement.innerText;
  var previousTotalPrice = parseFloat(previousTotalPriceString);
  previousTotalPrice += itemPrice;

  if (previousTotalPrice > 0) {
    const purchaseBtn = getId("make-purchase");
    purchaseBtn.classList.remove("opacity-50");
    purchaseBtn.classList.add("active:scale-95");
    purchaseBtn.removeAttribute("disabled");
  }

  if (previousTotalPrice >= 200) {
    const couponBtn = getId("apply-coupon");
    couponBtn.classList.remove("opacity-50");
    couponBtn.classList.add("active:scale-95");
    couponBtn.removeAttribute("disabled");
  }

  //   showing data
  previousTotalPriceElement.innerText = previousTotalPrice.toFixed(2);

  return previousTotalPrice.toFixed(2);
  // console.log(previousTotalPriceString);
}
