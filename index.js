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
  roundReset = document.getElementById("round-end"),
  pCardContainer = document.getElementById("pcard-container"),
  dCardContainer = document.getElementById("dcard-container"),
  gameHistory = document.getElementById("game-history");

let card = {},
  playerCards = [],
  dealerCards = [],
  pHandValue,
  dHandValue,
  balance = 1000,
  chipsWon = 0,
  nextRound = document.createElement("button");

nextRound.innerHTML = `⏭ NEXT ROUND`;
nextRound.style.backgroundImage = "linear-gradient(to right, green , yellow)";
nextRound.style.height = "40px";
nextRound.classList.add("hidden");
playerBalance.appendChild(nextRound);
nextRound.addEventListener("click", () => resetRound());

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
  let bet = Math.min(betInput.value, balance);
  balance -= bet;
  betInput.value = bet;
  playChipsSound();
  balanceHeading.innerHTML = `Balance : $${balance}`;
  const dealerCard1 = cardDisplay(); //Dealer card 1
  dCardContainer.appendChild(dealerCard1);
  card = cardGenerator(dealerCard1);
  dealerCards.push(card);
  const dealerCard2 = cardDisplay(); //Dealer card 2
  dealerCard2.style.backgroundColor = "black";
  dCardContainer.appendChild(dealerCard2);
  const playerCard1 = cardDisplay();    //Player card 1
  pCardContainer.appendChild(playerCard1);
  card = cardGenerator(playerCard1);
  playerCards.push(card);
  const playerCard2 = cardDisplay();    //Player card 2
  pCardContainer.appendChild(playerCard2);
  card = cardGenerator(playerCard2);
  playerCards.push(card);
  bettingSection.classList.toggle("hidden");    //Hiding betting options
  pHandValue = cardValue(playerCards);
  pValue.innerHTML = `Hand value : ${pHandValue}`;
  if (pHandValue !== 21) {
    //HIT and STAND scenario
    const hit = document.createElement("button");
    const stand = document.createElement("button");
    hit.innerHTML = ` 🎯 HIT`;
    stand.innerHTML = ` 🧍‍♂️ STAND`;
    playerBalance.appendChild(hit);
    playerBalance.appendChild(stand);
    hit.addEventListener("click", () => {
      playCardDealing();
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
      pCardContainer.appendChild(playerCard);
      card = cardGenerator(playerCard);
      playerCards.push(card);
      pHandValue = cardValue(playerCards);
      pValue.innerHTML = `Hand value : ${pHandValue}`;
      if (pHandValue > 21) {
        //Lose condition #1 (Player Bust)
        pValue.innerHTML = `BUST`;
        setTimeout(() => {
          result.innerHTML = `YOU LOSE`;
          hit.remove();
          stand.remove();
          nextRound.classList.remove("hidden");
        }, 500);
      }
    });
    stand.addEventListener("click", () => {
      playCardDealing();
      dealerCard2.style.backgroundColor = "white";
      card = cardGenerator(dealerCard2);
      dealerCards.push(card);
      dHandValue = cardValue(dealerCards);
      while (dHandValue <= 16) {
        const dealerCard = cardDisplay();
        dCardContainer.appendChild(dealerCard);
        card = cardGenerator(dealerCard);
        dealerCards.push(card);
        dHandValue = cardValue(dealerCards);
      }
      dValue.innerHTML = `Hand value : ${dHandValue}`;
      if (dHandValue > 21) {
        //Win condition #1 (Dealer Bust)
        dValue.innerHTML = `DEALER BUST!!!`;
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
        }, 500);
      } else if (dHandValue > pHandValue) {
        //Lose condition #2 (Point difference)
        setTimeout(() => {
          result.innerHTML = `YOU LOSE`;
          hit.remove();
          stand.remove();
          nextRound.classList.remove("hidden");
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
        }, 500);
      }
    });
  } else {
    //Win condition #3 (Natural Blackjack)
    const blackjack = document.createElement("p");
    playJackpot();
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
      playConfetti();
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

function cardGenerator(cardSection) {
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

function cardDisplay(){
  const card = document.createElement("div");
  card.style.height = "100px";
  card.style.width = "75px";
  card.style.fontSize = "1.5rem";
  card.style.backgroundColor = "white";
  card.style.border = "1px black solid";
  card.style.display = "flex";
  card.style.justifyContent = "center";
  card.style.alignItems = "center";
  card.style.borderRadius = "5px";
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

function resetRound(){
  playerCards = [];
  dealerCards = [];
  console.log("start");
  pCardContainer.innerHTML = '';
  dCardContainer.innerHTML = '';
  pValue.innerHTML = '';
  dValue.innerHTML = '';
  playCardShuffling();
  const history = document.createElement("div");
  if(chipsWon === 0){
    history.innerHTML = `↘ Lost ......$${betInput.valueAsNumber}`;
  }
  else if(chipsWon === betInput.valueAsNumber){
    history.innerHTML = `🔁 Push ...... $${chipsWon}`;
  }
  else
    history.innerHTML = `↗ Won ...... $${chipsWon}`;
  gameHistory.appendChild(history);
  result.innerText = `Place Your Bet`;
  chipsWon = 0;
  cards.forEach((item) => {
    item.used = null;
  });
  bettingSection.classList.toggle("hidden");
  nextRound.classList.add("hidden");
  if(balance <= 0){
    balanceHeading.innerHTML = `GAME OVER!!!`;
    playZeroBalance();
    return;
  }
}

function playChipsSound(){
  const audio = new Audio('./assets/sounds/poker_chips.mp3'); 
  audio.playbackRate = 4; 
  audio.play();
}

function playCardShuffling(){
  const audio = new Audio('./assets/sounds/card_shuffling.mp3'); 
  audio.playbackRate = 4; 
  audio.play();
}

function playCardDealing(){
  const audio = new Audio('./assets/sounds/card_dealing.mp3'); 
  audio.playbackRate = 4; 
  audio.play();
}

function playZeroBalance(){
  const audio = new Audio('./assets/sounds/lost.mp3'); 
  audio.playbackRate = 4; 
  audio.play();
}

function playJackpot(){
  const audio = new Audio('./assets/sounds/jackpot.mp3'); 
  audio.playbackRate = 1.5; 
  audio.play();
}

function playConfetti(){
  const audio = new Audio('./assets/sounds/confetti.mp3'); 
  audio.playbackRate = 1.5; 
  audio.play();
}

