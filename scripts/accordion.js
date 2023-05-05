var acc1 = document.getElementById("acc1-btn");
var panel1 = document.getElementById("acc1");
var fotka = document.getElementById("fotka");

if ($(window).width() < 960) {
  mobile = true;
}
else {
  mobile = false;
}

setTimeout(function () {
    if (mobile == true) {
        panel1.style.maxHeight = (fotka.height*9)+"px";
    } else if (mobile == false) {
        panel1.style.maxHeight = (fotka.height*3.5)+"px";
    }
}, 100)

acc1.addEventListener("click", function() {
  this.classList.toggle("active");
  var panel = document.getElementById("acc1")
  if (mobile == false) {
    if (panel.style.maxHeight != (fotka.height*3.5)+"px") {
        panel.style.maxHeight = (fotka.height*3.5)+"px";
        this.innerHTML = "<span>More...</span>"
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.innerHTML = "<span>Less...</span>"
    }
  } else if (mobile == true) {
    if (panel.style.maxHeight != (fotka.height*9)+"px") {
      panel.style.maxHeight = (fotka.height*9)+"px";
      this.innerHTML = "<span>More...</span>"
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.innerHTML = "<span>Less...</span>"
    }
  }
});