const blackbox = document.getElementById("blackbox");
const whitebox = document.getElementById("whitebox");
const car = document.getElementById("car");

var images = document.getElementsByTagName("img");
var srcList = [];
for (var i = 0; i < images.length; i++) {
  srcList.push(images[i].src);
}

function FlipImage(idenity) {
  var img = document.getElementById(idenity);
  img.rotate((20 * Math.PI) / 180);
}

$(function () {
  $(".draggable").draggable();
});

var timeline = new TimelineMax();
timeline
  .fromTo(
    blackbox,
    1,
    { height: "0%" },
    { height: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    whitebox,
    1,
    { height: "0%" },
    { height: "50%", ease: Power2.easeInOut }
  );

TweenMax.to(car, {
  duration: 1.5,
  x: 200,
  scale: 2,
  ease: "bounce",
});
