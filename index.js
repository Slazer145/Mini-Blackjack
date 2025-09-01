const cards = [
  {
    pattern: "🧡",
    number: "A",
    value: 11,
    used: null,
  },
  {
    pattern: "🧡",
    number: "2",
    value: 2,
    used: null,
  },
  {
    pattern: "🧡",
    number: "3",
    value: 3,
    used: null,
  },
  {
    pattern: "🧡",
    number: "4",
    value: 4,
    used: null,
  },
  {
    pattern: "🧡",
    number: "5",
    value: 5,
    used: null,
  },
  {
    pattern: "🧡",
    number: "6",
    value: 6,
    used: null,
  },
  {
    pattern: "🧡",
    number: "7",
    value: 7,
    used: null,
  },
  {
    pattern: "🧡",
    number: "8",
    value: 8,
    used: null,
  },
  {
    pattern: "🧡",
    number: "9",
    value: 9,
    used: null,
  },
  {
    pattern: "🧡",
    number: "10",
    value: 10,
    used: null,
  },
  {
    pattern: "🧡",
    number: "J",
    value: 10,
    used: null,
  },
  {
    pattern: "🧡",
    number: "Q",
    value: 10,
    used: null,
  },
  {
    pattern: "🧡",
    number: "K",
    value: 10,
    used: null,
  },
  {
    pattern: "🔶",
    number: "A",
    value: 11,
    used: null,
  },
  {
    pattern: "🔶",
    number: "2",
    value: 2,
    used: null,
  },
  {
    pattern: "🔶",
    number: "3",
    value: 3,
    used: null,
  },
  {
    pattern: "🔶",
    number: "4",
    value: 4,
    used: null,
  },
  {
    pattern: "🔶",
    number: "5",
    value: 5,
    used: null,
  },
  {
    pattern: "🔶",
    number: "6",
    value: 6,
    used: null,
  },
  {
    pattern: "🔶",
    number: "7",
    value: 7,
    used: null,
  },
  {
    pattern: "🔶",
    number: "8",
    value: 8,
    used: null,
  },
  {
    pattern: "🔶",
    number: "9",
    value: 9,
    used: null,
  },
  {
    pattern: "🔶",
    number: "10",
    value: 10,
    used: null,
  },
  {
    pattern: "🔶",
    number: "J",
    value: 10,
    used: null,
  },
  {
    pattern: "🔶",
    number: "Q",
    value: 10,
    used: null,
  },
  {
    pattern: "🔶",
    number: "K",
    value: 10,
    used: null,
  },
  {
    pattern: "♣",
    number: "A",
    value: 11,
    used: null,
  },
  {
    pattern: "♣",
    number: "2",
    value: 2,
    used: null,
  },
  {
    pattern: "♣",
    number: "3",
    value: 3,
    used: null,
  },
  {
    pattern: "♣",
    number: "4",
    value: 4,
    used: null,
  },
  {
    pattern: "♣",
    number: "5",
    value: 5,
    used: null,
  },
  {
    pattern: "♣",
    number: "6",
    value: 6,
    used: null,
  },
  {
    pattern: "♣",
    number: "7",
    value: 7,
    used: null,
  },
  {
    pattern: "♣",
    number: "8",
    value: 8,
    used: null,
  },
  {
    pattern: "♣",
    number: "9",
    value: 9,
    used: null,
  },
  {
    pattern: "♣",
    number: "10",
    value: 10,
    used: null,
  },
  {
    pattern: "♣",
    number: "J",
    value: 10,
    used: null,
  },
  {
    pattern: "♣",
    number: "Q",
    value: 10,
    used: null,
  },
  {
    pattern: "♣",
    number: "K",
    value: 10,
    used: null,
  },
  {
    pattern: "♠",
    number: "A",
    value: 11,
    used: null,
  },
  {
    pattern: "♠",
    number: "2",
    value: 2,
    used: null,
  },
  {
    pattern: "♠",
    number: "3",
    value: 3,
    used: null,
  },
  {
    pattern: "♠",
    number: "4",
    value: 4,
    used: null,
  },
  {
    pattern: "♠",
    number: "5",
    value: 5,
    used: null,
  },
  {
    pattern: "♠",
    number: "6",
    value: 6,
    used: null,
  },
  {
    pattern: "♠",
    number: "7",
    value: 7,
    used: null,
  },
  {
    pattern: "♠",
    number: "8",
    value: 8,
    used: null,
  },
  {
    pattern: "♠",
    number: "9",
    value: 9,
    used: null,
  },
  {
    pattern: "♠",
    number: "10",
    value: 10,
    used: null,
  },
  {
    pattern: "♠",
    number: "J",
    value: 10,
    used: null,
  },
  {
    pattern: "♠",
    number: "Q",
    value: 10,
    used: null,
  },
  {
    pattern: "♠",
    number: "K",
    value: 10,
    used: null,
  },
];

const betButton = document.getElementById("bet-button"),
  bet10 = document.getElementById("d10"),
  bet25 = document.getElementById("d25"),
  bet50 = document.getElementById("d50"),
  bet100 = document.getElementById("d100"),
  bet250 = document.getElementById("d250"),
  betInput = document.getElementById("bet-input"),
  dealer = document.getElementById("dealer-cards"),
  player = document.getElementById("player-cards"),
  bettingSection = document.getElementById("betting"),
  playerBalance = document.getElementById("player-balance"),
  balanceHeading = playerBalance.querySelector("h2"),
  dValue = document.getElementById("dealer-value"),
  pValue = document.getElementById("player-value"),
  result = document.getElementById("result"),
  roundReset = document.getElementById("round-end");

let card = {},
  playerCards = [],
  dealerCards = [],
  pHandValue,
  dHandValue,
  balance = 1000,
  chipsWon,
  nextRound = document.createElement("button");

nextRound.innerHTML = `⏭ NEXT ROUND`;
nextRound.style.backgroundImage = "linear-gradient(to right, green , yellow)";
nextRound.style.height = "40px";
nextRound.classList.add("hidden");
playerBalance.appendChild(nextRound);

bet10.addEventListener("click", () => {
  betInput.value = 10;
});

bet25.addEventListener("click", () => {
  betInput.value = 25;
});

bet50.addEventListener("click", () => {
  betInput.value = 50;
});

bet100.addEventListener("click", () => {
  betInput.value = 100;
});

bet250.addEventListener("click", () => {
  betInput.value = 250;
});

betButton.addEventListener("click", () => {
  balance -= betInput.value;
  balanceHeading.innerHTML = `Balance : $${balance}`;
  const dealerCardValue = document.createElement("p");
  const playerCardValue = document.createElement("p");
  playerCardValue.style.width = "100%";
  playerCardValue.style.textAlign = "center";
  playerCardValue.style.margin = "0";
  dealerCardValue.style.width = "100%";
  dealerCardValue.style.textAlign = "center";
  dealerCardValue.style.margin = "0";
  const dealerCard1 = document.createElement("div"); //Dealer card 1
  dealerCard1.style.height = "100px";
  dealerCard1.style.width = "75px";
  dealerCard1.style.fontSize = "1.5rem";
  dealerCard1.style.backgroundColor = "white";
  dealerCard1.style.border = "1px black solid";
  dealerCard1.style.display = "flex";
  dealerCard1.style.justifyContent = "center";
  dealerCard1.style.alignItems = "center";
  dealerCard1.style.borderRadius = "5px";
  dealer.appendChild(dealerCard1);
  card = cardDisplay(dealerCard1);
  dealerCards.push(card);
  const dealerCard2 = document.createElement("div"); //Dealer card 2
  dealerCard2.style.height = "100px";
  dealerCard2.style.width = "75px";
  dealerCard2.style.fontSize = "1.5rem";
  dealerCard2.style.backgroundColor = "black";
  dealerCard2.style.border = "1px black solid";
  dealerCard2.style.display = "flex";
  dealerCard2.style.justifyContent = "center";
  dealerCard2.style.alignItems = "center";
  dealerCard2.style.borderRadius = "5px";
  dealer.appendChild(dealerCard2);
  const playerCard1 = document.createElement("div");    //Player card 1
  playerCard1.style.height = "100px";
  playerCard1.style.width = "75px";
  playerCard1.style.fontSize = "1.5rem";
  playerCard1.style.backgroundColor = "white";
  playerCard1.style.border = "1px black solid";
  playerCard1.style.display = "flex";
  playerCard1.style.justifyContent = "center";
  playerCard1.style.alignItems = "center";
  playerCard1.style.borderRadius = "5px";
  player.appendChild(playerCard1);
  card = cardDisplay(playerCard1);
  playerCards.push(card);
  const playerCard2 = document.createElement("div");    //Player card 2
  playerCard2.style.height = "100px";
  playerCard2.style.width = "75px";
  playerCard2.style.fontSize = "1.5rem";
  playerCard2.style.backgroundColor = "white";
  playerCard2.style.border = "1px black solid";
  playerCard2.style.display = "flex";
  playerCard2.style.justifyContent = "center";
  playerCard2.style.alignItems = "center";
  playerCard2.style.borderRadius = "5px";
  player.appendChild(playerCard2);
  card = cardDisplay(playerCard2);
  playerCards.push(card);
  bettingSection.classList.toggle("hidden");    //Hiding betting options
  pHandValue = cardValue(playerCards);
  playerCardValue.innerHTML = `Hand value : ${pHandValue}`;
  pValue.appendChild(playerCardValue);
  if (pHandValue !== 21) {
    //HIT and STAND scenario
    const hit = document.createElement("button");
    const stand = document.createElement("button");
    hit.innerHTML = ` 🎯 HIT`;
    stand.innerHTML = ` 🧍‍♂️ STAND`;
    playerBalance.appendChild(hit);
    playerBalance.appendChild(stand);
    hit.addEventListener("click", () => {
      const playerCard = document.createElement("div");
      playerCard.style.height = "100px";
      playerCard.style.width = "75px";
      playerCard.style.fontSize = "1.5rem";
      playerCard.style.backgroundColor = "white";
      playerCard.style.border = "1px black solid";
      playerCard.style.display = "flex";
      playerCard.style.justifyContent = "center";
      playerCard.style.alignItems = "center";
      playerCard.style.borderRadius = "5px";
      player.appendChild(playerCard);
      card = cardDisplay(playerCard);
      playerCards.push(card);
      pHandValue = cardValue(playerCards);
      playerCardValue.innerHTML = `Hand value : ${pHandValue}`;
      if (pHandValue > 21) {
        //Lose condition #1 (Player Bust)
        playerCardValue.innerHTML = `BUST`;
        setTimeout(() => {
          result.innerHTML = `YOU LOSE`;
          hit.remove();
          stand.remove();
          nextRound.classList.remove("hidden");
          nextRound.addEventListener("click", () =>{
            resetRound(dealerCardValue, playerCardValue, dealerCard1, dealerCard2, playerCard1, playerCard2);
          });
        }, 500);
      }
    });
    stand.addEventListener("click", () => {
      dealerCard2.style.backgroundColor = "white";
      card = cardDisplay(dealerCard2);
      dealerCards.push(card);
      dHandValue = cardValue(dealerCards);
      while (dHandValue <= 16) {
        const dealerCard = document.createElement("div");
        dealerCard.style.height = "100px";
        dealerCard.style.width = "75px";
        dealerCard.style.fontSize = "1.5rem";
        dealerCard.style.backgroundColor = "white";
        dealerCard.style.border = "1px black solid";
        dealerCard.style.display = "flex";
        dealerCard.style.justifyContent = "center";
        dealerCard.style.alignItems = "center";
        dealerCard.style.borderRadius = "5px";
        dealer.appendChild(dealerCard);
        card = cardDisplay(dealerCard);
        dealerCards.push(card);
        dHandValue = cardValue(dealerCards);
      }
      dealerCardValue.innerHTML = `Hand value : ${dHandValue}`;
      dValue.appendChild(dealerCardValue);
      if (dHandValue > 21) {
        //Win condition #1 (Dealer Bust)
        dealerCardValue.innerHTML = `DEALER BUST!!!`;
        chipsWon = betInput.valueAsNumber * 2;
        balance += chipsWon;
        confetti({
          particleCount: 50,
          spread: 200,
          origin: { y: 0.6 },
        });
        setTimeout(() => {
          balanceHeading.innerHTML = `Balance : $${balance}`;
          result.innerHTML = `YOU WON : $${chipsWon}`;
          hit.remove();
          stand.remove();
          nextRound.classList.remove("hidden");
          nextRound.addEventListener("click", () =>{
            resetRound(dealerCardValue, playerCardValue, dealerCard1, dealerCard2, playerCard1, playerCard2);
          });
        }, 500);
        
      } else if (dHandValue < pHandValue) {
        //Win condition #2 (Point difference)
        chipsWon = betInput.valueAsNumber * 2;
        balance += chipsWon;
        confetti({
          particleCount: 50,
          spread: 200,
          origin: { y: 0.6 },
        });
        setTimeout(() => {
          balanceHeading.innerHTML = `Balance : $${balance}`;
          result.innerHTML = `YOU WON : $${chipsWon}`;
          hit.remove();
          stand.remove();
          nextRound.classList.remove("hidden");
          nextRound.addEventListener("click", () =>{
            resetRound(dealerCardValue, playerCardValue, dealerCard1, dealerCard2, playerCard1, playerCard2);
          });
        }, 500);
      } else if (dHandValue > pHandValue) {
        //Lose condition #2 (Point difference)
        setTimeout(() => {
          result.innerHTML = `YOU LOSE`;
          hit.remove();
          stand.remove();
          nextRound.classList.remove("hidden");
          nextRound.addEventListener("click", () =>{
            resetRound(dealerCardValue, playerCardValue, dealerCard1, dealerCard2, playerCard1, playerCard2);
          });
        }, 500);
      } else {
        //Draw condition (Push)
        chipsWon = betInput.valueAsNumber;
        balance += chipsWon;
        setTimeout(() => {
          balanceHeading.innerHTML = `Balance : $${balance}`;
          result.innerHTML = `PUSH`;
          hit.remove();
          stand.remove();
          nextRound.classList.remove("hidden");
          nextRound.addEventListener("click", () =>{
            resetRound(dealerCardValue, playerCardValue, dealerCard1, dealerCard2, playerCard1, playerCard2);
          });
        }, 500);
      }
    });
  } else {
    //Win condition #3 (Natural Blackjack)
    const blackjack = document.createElement("p");
    blackjack.innerHTML = `BLACKJACK!!!`;
    blackjack.style.fontSize = "2rem";
    blackjack.style.fontWeight = "600";
    playerBalance.appendChild(blackjack);
    chipsWon = betInput.valueAsNumber * 2.5;
    balance += chipsWon;
    setTimeout(() => {
      balanceHeading.innerHTML = `Balance : $${balance}`;
      result.innerHTML = `YOU WON : $${chipsWon}`;
      blackjack.remove();
      nextRound.classList.remove("hidden");
      nextRound.addEventListener("click", () =>{
        resetRound(dealerCardValue, playerCardValue, dealerCard1, dealerCard2, playerCard1, playerCard2);
      });
    }, 500);
    var defaults = {
      //Confetti
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  }
});

function cardDisplay(cardSection) {
  //Randomized Card generator
  let random = Math.floor(Math.random() * 52);
  let card = cards[random];
  while (card.used !== null) {
    random = Math.round(Math.random() * 52);
    card = cards[random];
  }
  card.used = "used";
  cardSection.innerHTML = `${card.pattern} ${card.number}`;
  return card;
}

function cardValue(cardCollection) {
  //Card value calculator
  let value = 0,
    aces = 0;
  cardCollection.forEach((item) => {
    value += item.value;
    if (item.value === 11) aces += 1;
  });
  if (value > 21) {
    for (let i = 1; i <= aces; ++i) {
      value -= 10;
      if (value < 21) return value;
    }
  }
  return value;
}

function resetRound(dealerCardValue, playerCardValue, dealerCard1, dealerCard2, playerCard1, playerCard2){
  dealerCardValue.remove();
  dealerCard1.remove();
  dealerCard2.remove();
  playerCardValue.remove();
  playerCard1.remove();
  playerCard2.remove();
  playerCards.length = 0;
  dealerCards.length = 0;
  dealer.innerHTML = `<h2>Dealer's Cards</h2>
            <div id="dealer-value" style="width: 100%;"></div>`;
  result.innerText = `Place Your Bet`;
  chipsWon = 0;
  cards.forEach((item) => {
    item.used = null;
  });
  bettingSection.classList.toggle("hidden");
  nextRound.classList.add("hidden");
}
