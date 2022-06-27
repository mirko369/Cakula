"strict";

const drinks = {
  beer: {
    name: [
      "Karlovačko točeno / draught",
      "Karlovačko točeno / draught",
      "Karlovačko točeno / draught",
      "Karlovačko",
      "Karlovačko",
      "Karlovačko Crno / dark",
      "Karlovačko Radler",
      "Heineken",
      "Ožujsko",
      "Ožujsko",
      "Staropramen",
      "Bezalkoholno pivo / Nonalc.",
      "Paulaner",
    ],
    measure: [
      "0,20 l",
      "0,30 l",
      "0,50 l",
      "0,33 l",
      "0,50 l",
      "0,50 l",
      "0,50 l",
      "0,33 l",
      "0,33 l",
      "0,50 l",
      "0,33 l",
      "0,50 l",
      "0,50 l",
    ],
    price: [
      "16,00 kn",
      "22,00 kn",
      "26,00 kn",
      "22,00 kn",
      "26,00 kn",
      "26,00 kn",
      "26,00 kn",
      "25,00 kn",
      "22,00 kn",
      "26,00 kn",
      "23,00 kn",
      "24,00 kn",
      "33,00 kn",
    ],
  },
  wine: {
    name: [
      "Malvazija",
      "Malvazija",
      "Graševina",
      "Graševina",
      "Babić",
      "Babić kvalitetno",
      "Pelješac",
      "Zlatan Plavac",
      "Zlatna Žlahtina",
      "Rose",
    ],
    measure: [
      "0,187 l",
      "1,00 l",
      "0,187 l",
      "1,00 l",
      "0,187 l",
      "0,75 l",
      "1,00 l",
      "0,75 l",
      "0,75 l",
      "0,187 l",
    ],
    price: [
      "36,00 kn",
      "130,00 kn",
      "36,00 kn",
      "130,00 kn",
      "40,00 kn",
      "140,00 kn",
      "130,00 kn",
      "250,00 kn",
      "200,00 kn",
      "40,00 kn",
    ],
  },
  sparklingWine: {
    name: [
      "Bottega",
      "Bottega Gold",
      "Bottega Rose Gold",
      "Bottega White Gold",
      "Bottega Gold",
    ],
    measure: ["0,20 l", "0,75 l", "0,75 l", "0,75 l", "1,50 l"],
    price: ["50,00 kn", "400,00 kn", "400,00 kn", "400,00 kn", "600,00 kn"],
  },
  desertWine: {
    name: ["Martini Bianco", "Martini Rosso", "Martini Extra Dry"],
    measure: ["0,10 l", "0,10 l", "0,10 l"],
    price: ["22,00 kn", "22,00 kn", "22,00 kn"],
  },
  domesticAlcohol: {
    name: [
      "Amaro",
      "Cherry Brandy",
      "Gin",
      "Lavov",
      "Lozovača",
      "Konjak domaći - Brandy Prima",
      "Kruškovac",
      "Maraschino",
      "Medica",
      "Orahovac",
      "Pelinkovac",
      "Rum",
      "Stock",
      "Šljivovica",
      "Travarica",
      "Viljamovka",
      "Vodka",
      "Žutuja",
    ],
    measure: ["0,03 l"],
    price: [
      "12,00 kn",
      "14,00 kn",
      "14,00 kn",
      "12,00 kn",
      "12,00 kn",
      "12,00 kn",
      "12,00 kn",
      "14,00 kn",
      "12,00 kn",
      "12,00 kn",
      "12,00 kn",
      "12,00 kn",
      "12,00 kn",
      "12,00 kn",
      "12,00 kn",
      "12,00 kn",
      "12,00 kn",
      "12,00 kn",
    ],
  },
  importedAlcohol: {
    name: [
      "Bacardi tamni / dark",
      "Bacardi bijeli / white",
      "Bailey's",
      "Ballantines",
      "Campari",
      "Carolans",
      "Chivas Regal 12 Y.O.",
      "Gordons Gin",
      "Hennessy V.S.",
      "Jack Daniel's",
      "Jagermeister",
      "Jameson",
      "Johnny Walker Red Label",
      "Johnny Walker Black Label",
      "Martel V.S",
      "Tequila Silver",
      "Tequila Gold",
      "Vodka Smirnoff",
      "Rémy Martin",
      "Vodka Grey Goose",
    ],
    measure: ["0,03 l"],
    price: [
      "30,00 kn",
      "30,00 kn",
      "30,00 kn",
      "20,00 kn",
      "27,00 kn",
      "27,00 kn",
      "40,00 kn",
      "30,00 kn",
      "35,00 kn",
      "35,00 kn",
      "30,00 kn",
      "30,00 kn",
      "25,00 kn",
      "35,00 kn",
      "35,00 kn",
      "25,00 kn",
      "25,00 kn",
      "30,00 kn",
      "55,00 kn",
      "55,00 kn",
    ],
  },
  mixedDrinks: {
    name: [
      "Smirnoff - Tonic",
      "Smirnoff - Juice",
      "Vodka - Tonic",
      "Gordons - Tonic",
      "Gin - Tonic",
      "Rum - Cola",
      "Bacardi tamni / dark Bacardi - Cola",
      "Vodka - Juice",
      "Jack Daniel's - Cola",
      "Jagermeister Cola",
      "Johnny Walker Red Label - Cola",
      "Johnny Walker Black Label - Cola",
      "Ballantines - Cola",
      "Chivas - Cola",
      "Jameson - Cola",
      "Stock - Cola",
      "Domaći konjak / domestic cognac - Cola",
      "Bacardi bijeli / white Bacardi - Cola",
      "Campari - Juice",
      "Campari - Mineral water",
    ],
    measure: ["0,03 l + 0,10 l"],
    price: [
      "36,00 kn",
      "36,00 kn",
      "25,00 kn",
      "36,00 kn",
      "25,00 kn",
      "25,00 kn",
      "36,00 kn",
      "25,00 kn",
      "40,00 kn",
      "40,00 kn",
      "32,00 kn",
      "45,00 kn",
      "30,00 kn",
      "40,00 kn",
      "35,00 kn",
      "20,00 kn",
      "20,00 kn",
      "36,00 kn",
      "35,00 kn",
      "35,00 kn",
    ],
  },
  beverages: {
    name: [
      "Rose Lemonade Fetimans",
      "Orangina",
      "Spezi",
      "Pipi",
      "Coca Cola , Coca Cola Zero",
      "Fanta",
      "Sprite",
      "Cockta",
      "Tonic Water",
      "Bitter lemon",
      "Ledeni čaj / Ice tea",
      "Cedevita",
      "Prirodni sokovi / Natural juices",
      "Mineralna voda bočica / Mineral water bottle",
      "Mineralna voda bočica / Mineral water bottle",
      "Mineralna voda aroma / Mineral water flavour",
      "Voda negazirana / Natural water",
      "Voda negazirana / Natural water",
    ],
    measure: [
      "0,275 l",
      "0,25 l",
      "0,33 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,25 l",
      "0,20 l",
      "0,33 l",
      "0,75 l",
      "0,33 l",
      "0,33 l",
      "0,75 l",
    ],
    price: [
      "35,00 kn",
      "25,00 kn",
      "24,00 kn",
      "24,00 kn",
      "24,00 kn",
      "24,00 kn",
      "24,00 kn",
      "24,00 kn",
      "24,00 kn",
      "24,00 kn",
      "22,00 kn",
      "16,00 kn",
      "22,00 kn",
      "15,00 kn",
      "30,00 kn",
      "16,00 kn",
      "14,00 kn",
      "30,00 kn",
    ],
  },
  freshSqueezedJuices: {
    name: ["Limunada / lemonade", "Narančada / orange"],
    measure: ["0,30 l", "0,30 l"],
    price: ["26,00 kn", "32,00 kn"],
  },
  cider: {
    name: ["Somersby"],
    measure: ["0,33 l"],
    price: ["32,00 kn"],
  },
  energyDrinks: {
    name: ["Red Bull"],
    measure: ["0,25 l"],
    price: ["35,00 kn"],
  },
  warmDrinks: {
    name: [
      "Kava / Espresso",
      "Kava s mlijekom / Espresso with milk (small)",
      "Kava s mlijekom velika / Espresso with milk (big)",
      "Kava sa šlagom / Espresso with cream (small)",
      "Kava sa Ledo šlagom / Espresso with Ledo cream (small)",
      "Kava sa šlagom velika / Espresso with cream (big)",
      "Kava sa Ledo šlagom velika / Espresso with Ledo cream (big)",
      "Kava bez kofeina / decaffeinated espresso",
      "Kava bez kofeina s mlijekom / decaffeinated espresso with milk (small)",
      "Kava bez kofeina s mlijekom velika / decaffeinated espresso with milk (big)",
      "Kava bez kofeina sa šlagom / decaffeinated espresso with cream (small)",
      "Kava bez kofeina sa Ledo šlagom / decaffeinated espresso with Ledo Cream (small)",
      "Kava bez kofeina sa šlagom velika / decaffeinated espresso with cream (big)",
      "Kava bez kofeina sa Ledo šlagom velika / decaffeinated espresso with Ledo cream (big)",
      "Cappucino",
      "Cappucino bez kofeina / Decaffeinated cappucino",
      "Kakao / Cocoa",
      "Vruća čokolada / Hot chocolate",
      "Bijela kava / White coffee",
      "Bijela kava bez kofeina / Decaffeinated white coffee",
      "Latte Macchiato",
      "Nescaffee",
      "Nescaffee + šlag / Nescaffe with cream",
      "Irska kava / Irish coffee",
      "Americano",
      "Čaj / Tea",
      "Ledena kava sa sladoledom / Ice Coffee with ice cream",
      "Punč / Punch",
      "Mlijeko / Milk",
      "Šlag / Cream",
    ],
    measure: [
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "šal.",
      "0,10 l",
      "porcija/portion",
    ],
    price: [
      "8,00 kn",
      "10,00 kn",
      "12,00 kn",
      "10,00 kn",
      "11,00 kn",
      "12,00 kn",
      "13,00 kn",
      "11,00 kn",
      "13,00 kn",
      "15,00 kn",
      "13,00 kn",
      "15,00 kn",
      "15,00 kn",
      "16,00 kn",
      "24,00 kn",
      "24,00 kn",
      "16,00 kn",
      "20,00 kn",
      "16,00 kn",
      "17,00 kn",
      "31,00 kn",
      "17,00 kn",
      "18,00 kn",
      "40,00 kn",
      "15,00 kn",
      "11,00 kn",
      "37,00 kn",
      "12,00 kn",
      "7,00 kn",
      "4,00 kn",
    ],
  },
  coldDrinks: {
    name: [
      "Frappe Milkshake",
      "Ledeni sok (slushy)",
      "Ledeni sok (slushy)",
      "Ledeni sok + čaša (slushy + cup)",
      "Ledeni sok + čaša (slushy + cup)",
    ],
    measure: ["0,30 l", "0,30 l", "0,50 l", "0,30 l", "0,50 l"],
    price: ["30,00 kn", "25,00 kn", "35,00 kn", "45,00 kn", "55,00 kn"],
  },
  sweets: {
    name: [
      "Sladoled / Ice Cream",
      "Sladoled Premium / Ice Cream Premium",
      "Slatki kornet / Sweet Cone",
    ],
    measure: ["kugla/ball", "kugla/ball", "komad/piece"],
    price: ["12,00 kn", "15,00 kn", "2,00 kn"],
  },
};

const specialDrinks = {
  cocktails: {
    name: [
      "Pina Colada",
      "Cosmopolitan",
      "Cuba Libre",
      "Mojito",
      "Mojito 1L",
      "Mojito Strawberry",
      "Mojito Blueberry",
      "Long Beach Ice Tea",
      "Margarita",
      "Long Island Ice Tea",
      "Tequila Sunrise",
      "Sex On The Beach",
      "Sex On The Beach 1L",
      "Blue Lagoon",
      "Blue Hawaiian",
      "Caipirinha",
      "White Russian",
      "Aperol Spritz",
      "Caribbean Cruise",
      "Caribbean Cruise 1L",
      "Mai Tai",
      "Zombie",
      "Bahama Mama",
      "Bahama Mama 1L",
      "Little Engineer",
      "Simply Red",
    ],
    description: [
      ["white rum, dark rum, coconut cream, pineapple juice, cream"],
      ["vodka, triple sec, fresh lime, cranberry juice"],
      ["white rum, fresh lime, coca cola"],
      ["white rum, fresh lime, sugar, mint leaves, mineral water"],
      ["white rum, fresh lime, sugar, mint leaves, mineral water"],
      ["white rum, fresh lime, strawberry, sugar, mint leaves, mineral water"],
      ["white rum, fresh lime, blueberry, sugar, mint leaves, mineral water"],
      ["vodka, gin, white rum, tequila, triple sec, cranberry juice"],
      ["tequila, triple sec, lime juice"],
      ["vodka, gin, white rum, tequila, triple sec, coca cola, fresh lemon"],
      ["tequila, lime juice, orange juice, grenadine"],
      ["vodka, peach liqueur, orange juice, cranberry juice"],
      ["vodka, peach liqueur, orange juice, cranberry juice"],
      ["vodka, blue curacao, lime juice, sprite"],
      [
        `white rum,
        dark rum,
        blue curacao,
        pineapple juice,
        orange juice`,
      ],
      ["cachaca, brown sugar, lime"],
      ["vodka, coffe liqueur, cream"],
      ["aperol, sparkling wine, soda water"],
      [
        `white rum,
        vodka,
        malibu,
        grenadine,
        pineapple juice,
        lime juice,
        orange juice`,
      ],
      [
        `white rum,
        vodka,
        malibu,
        grenadine,
        pineapple juice,
        lime juice,
        orange juice`,
      ],
      [
        `white rum,
        dark rum,
        apricot liqueur,
        almond syrup,
        lime juice,
        orange juice`,
      ],
      [
        `white rum,
        dark rum,
        stroch 80%,
        cherry brandy,
        grenadine,
        fresh lemon juice,
        orange juice`,
      ],
      [
        `stroch 80%,
        dark rum,
        malibu,
        kahlua,
        fresh lemon juice,
        pineapple juice`,
      ],
      [
        `stroch 80%,
        dark rum,
        malibu,
        kahlua,
        fresh lemon juice,
        pineapple juice`,
      ],
      ["grenadine, lime juice, pineapple juice, orange juice"],
      [
        `coconut cream,
        grenadine,
        lime juice,
        pineapple juice,
        orange juice`,
      ],
    ],
    price: [
      "65,00 kn",
      "55,00 kn",
      "65,00 kn",
      "65,00 kn",
      "140,00 kn",
      "65,00 kn",
      "65,00 kn",
      "75,00 kn",
      "60,00 kn",
      "75,00 kn",
      "65,00 kn",
      "65,00 kn",
      "140,00 kn",
      "65,00 kn",
      "65,00 kn",
      "65,00 kn",
      "65,00 kn",
      "60,00 kn",
      "75,00 kn",
      "140,00 kn",
      "75,00 kn",
      "75,00 kn",
      "75,00 kn",
      "150,00 kn",
      "60,00 kn",
      "60,00 kn",
    ],
  },

  gins: {
    name: [
      "Monkey 47",
      "Tanqueray",
      "Hendrick's",
      "Gin Mare",
      "Tanqueray No. 10",
      "Bombay Sapphire",
      "1724 Tonic water",
      "Thomas Henry tonic water",
      "Thomas Henry Cherry Blossom tonic",
    ],
    measure: [
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,03 l",
      "0,2 l",
      "0,2 l",
      "0,2 l",
    ],
    price: [
      "45,00 kn",
      "25,00 kn",
      "35,00 kn",
      "45,00 kn",
      "35,00 kn",
      "25,00 kn",
      "30,00 kn",
      "25,00 kn",
      "25,00 kn",
    ],
  },
};

const drinkslist = document.querySelector(".btn-group");
const popup = document.querySelector(".table-menu");
const popupTitle = document.querySelector(".table-name");
const popupContent = document.querySelector(".popup");
const popupClose = document.querySelector(".close");
const slideImg = document.querySelector(".img");
const specialMen = document.querySelector(".specialMenu");
const popupSpecial = document.querySelector(".popup-content");
let slideCount = 0;
let specialCount = 0;

drinkslist.addEventListener("click", function (e) {
  const drink = e.target.textContent;
  let nameDrinks = "";
  if (drink.length > 30) return;
  if (drink === "Warm drinks") nameDrinks = "warmDrinks";
  if (drink === "Cold drinks") nameDrinks = "coldDrinks";
  if (drink === "Beverages") nameDrinks = "beverages";
  if (drink === "Fresh squeezed juices") nameDrinks = "freshSqueezedJuices";
  if (drink === "Cider") nameDrinks = "cider";
  if (drink === "Energy drinks") nameDrinks = "energyDrinks";
  if (drink === "Beer") nameDrinks = "beer";
  if (drink === "Wine") nameDrinks = "wine";
  if (drink === "Sparkling wine") nameDrinks = "sparklingWine";
  if (drink === "Desert wine") nameDrinks = "desertWine";
  if (drink === "Domestic alcohol drinks") nameDrinks = "domesticAlcohol";
  if (drink === "Imported alcohol drinks") nameDrinks = "importedAlcohol";
  if (drink === "Mixed drinks") nameDrinks = "mixedDrinks";
  if (drink === "Sweets") nameDrinks = "sweets";

  popupTitle.textContent = drink;
  popupContent.style.opacity = 1;
  popupContent.style.zIndex = 1;
  popupSpecial.style.backgroundColor = "#fefefe";
  popupSpecial.style.color = "black";

  popup.innerHTML = "";
  drinks[nameDrinks].name.forEach((el, pos) => {
    popup.insertAdjacentHTML(
      "beforeend",
      `
    <tr>
    <td>${drinks[nameDrinks].name[pos]}</td>
    <td>${
      drinks[nameDrinks].measure.length < 2
        ? drinks[nameDrinks].measure[0]
        : drinks[nameDrinks].measure[pos]
    }</td>
    <td>${drinks[nameDrinks].price[pos]}</td>
  </tr>`
    );
  });
});

specialMen.addEventListener("click", function (e) {
  const btn = e.target.textContent;
  if (btn !== "Cocktails" && btn !== "Gins") return;
  popupTitle.textContent = btn;
  popupContent.style.opacity = 1;
  popupContent.style.zIndex = 1;
  popup.innerHTML = "";
  popupSpecial.style.backgroundColor = "#9e7f6a";
  popupSpecial.style.color = "white";
  if (btn === "Cocktails") {
    popup.insertAdjacentHTML(
      "beforeend",
      `<img class="menuImg" src="cocktailimgs/0.jpg">
    <p class="specialName">Pina Colada<p>
    <p class="specialDescription">white rum, dark rum, coconut cream, pineapple juice, cream<p>
    <p class="specialPrice">65,00 kn<p>
    <div class="navigation">
            <button class="navigationBtn">&#8592;</button>
            <button class="navigationBtn">&#8594;</button>
          </div>`
    );
  }
  if (btn === "Gins") {
    popup.insertAdjacentHTML(
      "beforeend",
      `<img class="menuImg" src="ginimgs/0.jpg">
      <p class="specialGinName">Monkey 47 0,03 l<p>
      <p class="specialGinPrice">45,00 kn<p>
      <div class="navigation">
              <button class="navigationBtn">&#8592;</button>
              <button class="navigationBtn">&#8594;</button>
            </div>`
    );
  }
  let categorybtn = "";
  const navigationButtons = document.querySelector(".navigation");
  const specialImage = document.querySelector(".menuImg");
  const specialNam = document.querySelector(".specialName");
  const specialDesc = document.querySelector(".specialDescription");
  const specialPri = document.querySelector(".specialPrice");
  const specialGinNam = document.querySelector(".specialGinName");
  const specialGinPri = document.querySelector(".specialGinPrice");
  if (btn === "Cocktails") categorybtn = "cocktails";
  if (btn === "Gins") categorybtn = "gins";
  navigationButtons.addEventListener("click", function (e) {
    const btn = e.target.textContent;
    if (btn !== "←" && btn !== "→") return;
    if (btn === "←") specialCount--;
    if (btn === "→") specialCount++;
    if (categorybtn === "cocktails") {
      if (specialCount === -1) specialCount = 25;
      else if (specialCount === 26) specialCount = 0;
      specialImage.src = `cocktailimgs/${specialCount}.jpg`;
      if (
        specialCount === 4 ||
        specialCount === 12 ||
        specialCount === 19 ||
        specialCount === 23
      )
        specialImage.src = "";

      specialNam.textContent = specialDrinks[categorybtn].name[specialCount];
      specialDesc.textContent =
        specialDrinks[categorybtn].description[specialCount];
      specialPri.textContent = specialDrinks[categorybtn].price[specialCount];
    }
    if (categorybtn === "gins") {
      if (specialCount === -1) specialCount = 8;
      else if (specialCount === 9) specialCount = 0;
      specialImage.src = `ginimgs/${specialCount}.jpg`;
      specialGinNam.textContent = `${
        specialDrinks[categorybtn].name[specialCount]
      } ${(specialGinNam.innerHTML.textContent =
        specialDrinks[categorybtn].measure[specialCount])}`;
      specialGinPri.textContent =
        specialDrinks[categorybtn].price[specialCount];
    }
  });
});

popupClose.addEventListener("click", function () {
  popupContent.style.opacity = 0;
  popupContent.style.zIndex = -1;
  specialCount = 0;
});

const slideShow = function () {
  if (slideCount === 10) slideCount = 0;
  slideCount++;
  slideImg.src = `imgs/${slideCount}.jpg`;
  slideCounter();
};

const slideCounter = function () {
  setTimeout(function () {
    slideShow();
  }, 3000);
};

slideShow();
