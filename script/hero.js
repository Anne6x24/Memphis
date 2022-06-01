var text = ['bæredygtige', 'hæklet i københavn', 'håndlavede'];

var index = 0;

function changeText() {
  document.getElementById("forside_hero_text").innerText = text[index];
  index = (index + 1) % 3;
}

var interval = window.setInterval(changeText, 2000);

window.onunload = function () {
  window.clearInterval(interval);
}






