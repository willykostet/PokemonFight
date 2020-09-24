const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";

function charCount(str, letter) {
  let letterCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      letterCount += 1;
    }
  }
  return letterCount;
}

const first = charCount("мама мыла раму", "а");
const second = charCount("собака друг человека", "а");

const result = function () {
  if (first > second) {
    console.log(firstRow);
  } else if (first == second) {
    console.log("Числа равны");
  } else {
    console.log(secondRow);
  }
};

result();
