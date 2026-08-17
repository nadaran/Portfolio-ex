const items = [
  "プログラミングは難しいけど、できると気持ちいい",
  "切実に友達が欲しい",
  "DELTARUNEめっちゃおもしろい",
  "コンビニのおにぎりで一番美味しいのは焼き鮭",
  "ポジティブシンキングが何よりも大切",
  "5000垓円欲しい",
  "嫌なことはきっぱり断ろう",
  "エンディングは、1つじゃない"
];

const gachabtn = document.getElementById("gacha-btn");
const result = document.getElementById("gacha-result");

gachabtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * items.length);
  result.textContent = items[randomIndex];
});