var to = 'Friend!';
// var gift_url = "https://drive.google.com/file/d/1ZzwDMrjFf6lzO134h04kH3lTVb4fQBGR/view?usp=sharing";
var gift_url ="#img_5";
var gift_image_url = 'xixi.png';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");
var card = document.getElementById("card")
var front = document.getElementById("flip")
var back = document.getElementById("flip2")

function init() {
  
  // var _giftLink, 
  //     _giftImg;
  
  // if (gift_url) {
  //   _giftLink = document.createElement("a");
  //   _giftLink.href = gift_url;
  //   _giftLink.target = "_blank";
  //   presentImage.appendChild(_giftLink);
  // }
  
  // if (gift_image_url) {
  //   _giftImg = document.createElement("img");
  //   _giftImg.alt = "can't see"
  //   _giftImg.src = gift_image_url;
  //   presentImage.appendChild(_giftImg);
  
  //   if(_giftLink) {
  //     _giftLink.appendChild(_giftImg);
  //   } else {
  //     presentImage.appendChild(_giftImg);
  //   }
  // }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
  }, false);
  
 
  
  // nametag.innerText = to;
}

init();