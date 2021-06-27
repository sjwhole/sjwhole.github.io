const IMG_NUM = 3;

function getRandomImg() {
  const randomNum = Math.floor(Math.random() * 3);
  return `${randomNum}.jpg`;
}

document.body.style.backgroundImage = `url('./img/${getRandomImg()}')`;
