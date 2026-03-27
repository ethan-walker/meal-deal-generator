function randomItem(list) {
   return list[Math.floor(Math.random() * list.length)];
}

function randBetween(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomDeal() {
   [mainOptions, snackOptions, drinkOptions].forEach( (optionList, i) => {
      let item = document.querySelector(`:nth-child(${i + 1} of .receipt-row)`)

      let choice = randomItem(optionList);

      // let itemImg = item.querySelector(".item-img");
      // itemImg.src = choice.img;

      let itemName = item.querySelector(".item-name");
      itemName.textContent = choice.title;

      let priceTag = item.querySelector(".item-price")
      priceTag.textContent = choice.price;

      rotate = randBetween(-3, 3);

      document.querySelector(".receipt-wrapper").style.rotate = rotate + "deg";
   })

   sumPrice();
}

function sumPrice() {
   let prices = [];
   
   document.querySelectorAll(".item-price").forEach(price => {
      num = price.textContent.substring(1);

      prices.push(parseFloat(num))
   })

   var totalPrice = prices.reduce((add, sum) => add + sum);
   var subtotal = (Math.round(totalPrice * 100) / 100).toFixed(2);
   document.querySelector(".subtotal").textContent = "£" + subtotal;

   totalPrice -= 3.85
   totalPrice = Math.round(totalPrice * 100) / 100 // get rid of floating pount, round to 2dp
   totalPrice = totalPrice.toFixed(2);
   
   document.querySelector(".saved-price").textContent = "-£" + totalPrice;
}

randomDeal();