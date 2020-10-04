const $btn = document.getElementById("btn-kick");
const $btn2 = document.getElementById("btn-hit");

const character = {
  name: "Pikachu",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-character"),
  elProgressbar: document.getElementById("progressbar-character"),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
};

const {
  name: characterName,
  defaultHP: characterDefaultHP,
  damageHP: characterDamageHP,
} = character;

const enemy = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-enemy"),
  elProgressbar: document.getElementById("progressbar-enemy"),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
};

const {
  name: enemyName,
  defaultHP: enemyDefaultHP,
  damageHP: enemyDamageHP,
} = enemy;

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
  character.changeHP(random(20));
  enemy.changeHP(random(20));

  let max = 8;
  let thunderJolt = joltHits();
  console.log(thunderJolt + " осталось: " + (max - thunderJolt));
  if (thunderJolt >= max) {
    $btn.disabled = true;
  }
});

$btn2.addEventListener("click", function () {
  console.log("Hit");
  character.changeHP(random(30));
  enemy.changeHP(random(30));

  let max = 4;
  let thunderShock = shockHits();
  console.log(thunderShock + " осталось: " + (max - thunderShock));
  if (thunderShock >= max) {
    $btn2.disabled = true;
  }
});

function init() {
  console.log("Start Game!");
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function renderHPLife() {
  this.elHP.innerText = this.damageHP + " / " + this.defaultHP;
}

function renderProgressbarHP() {
  this.elProgressbar.style.width = this.damageHP + "%";
}

function changeHP(count) {
  if (this.damageHP < count) {
    this.damageHP = 0;
    alert("Бедный " + this.name + " проиграл бой!");
    $btn.disabled = true;
  } else {
    this.damageHP -= count;
  }

  const log =
    this === enemy
      ? generateLog(this, character, count, this.damageHP)
      : generateLog(this, enemy, count, this.damageHP);

  const $logs = document.querySelector("#logs");

  const $p = document.createElement("p");

  $p.innerText = log; // вот сюда передать переменную log, которая во втором уроке выводилась в консоль

  $logs.insertBefore($p, $logs.children[0]);
  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function generateLog(firstPerson, secondPerson, damage, restHP) {
  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага.-${damage}, [${restHP}/100]`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.-${damage}, [${restHP}/100]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.-${damage}, [${restHP}/100]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.-${damage}, [${restHP}/100]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком <вырезанно цензурой> противника.-${damage}, [${restHP}/100]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.-${damage}, [${restHP}/100]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.-${damage}, [${restHP}/100]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника.-${damage}, [${restHP}/100]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.-${damage}, [${restHP}/100]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.-${damage}, [${restHP}/100]`,
  ];

  return logs[random(logs.length) - 1];
}

init();
