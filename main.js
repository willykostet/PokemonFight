function init() {
  player1.changeHP(num);
  player2.changeHP(num);
}

import Pokemon from "./pokemon.js";
import random from "./utils.js";

const player1 = new Pokemon({
  name: "Pikachu",
  type: "electric",
  hp: 100,
  selectors: "character",
});

const player2 = new Pokemon({
  name: "Charmander",
  type: "fire",
  hp: 100,
  selectors: "enemy",
});

const $btn = document.getElementById("btn-kick");
const $btn2 = document.getElementById("btn-hit");

function counter() {
  let hits = 0;
  function countUp() {
    hits++;
    return hits;
  }
  return countUp;
}

const joltHits = counter();
const shockHits = counter();

$btn.addEventListener("click", function () {
  console.log("Kick");
  player1.changeHP(random(20), function (count) {
    console.log(generateLog(player1, player2, count));
  });
  player2.changeHP(random(20), function (count) {
    console.log(generateLog(player2, player1, count));
  });

  let max = 8;
  let thunderJolt = joltHits();
  console.log(thunderJolt + " осталось: " + (max - thunderJolt));
  if (thunderJolt >= max) {
    $btn.disabled = true;
  }
});

$btn2.addEventListener("click", function () {
  console.log("Hit");
  player1.changeHP(random(30), function (count) {
    console.log(generateLog(player1, player2, count));
  });
  player2.changeHP(random(30), function (count) {
    console.log(generateLog(player2, player1, count));
  });

  let max = 4;
  let thunderShock = shockHits();
  console.log(thunderShock + " осталось: " + (max - thunderShock));
  if (thunderShock >= max) {
    $btn2.disabled = true;
  }
});

function changeHP(count) {
  this.hp.current -= count;
  logger(fightLog);
  if ((this.hp.current = 0)) {
    console.log("Бедный" + this.name + "проиграл бой");
    $btn.disabled = true;
  }
}

function logger(logName) {
  const fightLog =
    this === player2
      ? generateLog(this, player1, count)
      : generateLog(this, player2, count);

  const $logs = document.querySelector("#logs");

  const $p = document.createElement("p");
  $p.innerText = fightLog; // вот сюда передать переменную log, которая во втором уроке выводилась в консоль

  $logs.insertBefore($p, $logs.children[0]);
}

function generateLog(player1, player2, count) {
  const {
    name,
    hp: { current, total },
  } = player1;
  const { name: enemyName } = player2;
  const logs = [
    `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага.-${count}, [${current}/${total}]`,
    `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага.-${count}, [${current}/${total}]`,
    `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил.-${count}, [${current}/${total}]`,
    `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар.-${count}, [${current}/${total}]`,
    `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком <вырезанно цензурой> противника.-${count}, [${current}/${total}]`,
    `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар.-${count}, [${current}/${total}]`,
    `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар.-${count}, [${current}/${total}]`,
    `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника.-${count}, [${current}/${total}]`,
    `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника.-${count}, [${current}/${total}]`,
    `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику.-${count}, [${current}/${total}]`,
  ];

  return logs[random(logs.length) - 1];
}
init();
