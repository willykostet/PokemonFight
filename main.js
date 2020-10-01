const $btn = document.getElementById("btn-kick");

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

$btn.addEventListener("click", function () {
  console.log("Kick");
  character.changeHP(random(20));
  enemy.changeHP(random(20));
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
  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

init();
