// scroll header nav
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    document.getElementById("main-header").style.top = "0";
  } else {
    document.getElementById("main-header").style.top = "-600px";
  }
}