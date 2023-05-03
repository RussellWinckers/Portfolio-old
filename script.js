let cont = document.querySelector("#outer-container");
let character = document.querySelector("#character_spritesheet");
let character2 = document.querySelector("#character");
let containerMobile = document.querySelector("#mobile-container");

userHasScrolled = false;
lastScrollTop = 0;

let layer = document.querySelectorAll(".layer");

cont.onscroll = function(){
    
    let X = cont.scrollTop;

    layer[0].style.left = X/4 + "px";
    layer[1].style.left = X/8 + "px";
    layer[2].style.left = X/1.5 + "px";


// //////////////////////////////////////////////////////////////////////// player movement
userHasScrolled = true;
  setTimeout(() => {
    userHasScrolled = false;
    character.style.animation = "none";
  }, 100);

  let currentScrollTop = cont.scrollTop;
  if (currentScrollTop > lastScrollTop) {
    character.classList.remove("face-left");
    character.classList.add("face-right");
  } else {
    character.classList.remove("face-right");
    character.classList.add("face-left");
  }
  lastScrollTop = currentScrollTop;
  character.style.animation = "moveSpritesheet 0.1s steps(2) infinite";
};

character2.addEventListener("mouseover", function() {
    character2.style.pointerEvents = "none";
  });
  
  character2.addEventListener("mouseout", function() {
    character2.style.pointerEvents = "auto";
  });
  
  character2.addEventListener("wheel", function(e) {
    if (!scrolling) {
      e.stopPropagation();
    }
  });






// INTRO Funtion
let welkom = document.getElementById("welcomeText");
// Show the website on button click
welkom.onclick = function(){
   document.getElementById("nameText").style.bottom = "30%";
   welkom.style.display = "none";
   document.getElementById("mobile-name").style.top = "200px";
   welkom.style.display = "none";
   
   setTimeout(() => {
    document.getElementById("uitleg").style.display = "block";
    document.getElementById("character").style.bottom = "170px";
   cont.style.overflowY = "scroll";
   document.getElementById("mCharacter").style.top = "0px";
   document.body.style.overflowY = "scroll";
   }, 1000);
};



// **********************************************************************
// *                              mobile                                *
// **********************************************************************

window.addEventListener('scroll', function(){
let w1Value = window.scrollY + 100 * 4;
let w2Value = window.scrollY + 300 * 4;
let w3Value = window.scrollY + 800 * 4;
let w4Value = window.scrollY + 1100 * 4;
let w5Value = window.scrollY + 1700 * 4;
document.querySelector('.een-mobile').style.top = w1Value * 0.25 + 'px';
document.querySelector('.twee-mobile').style.top = w2Value * 0.25 + 'px';
document.querySelector('.drie-mobile').style.top = w3Value * 0.25 + 'px';
document.querySelector('.vier-mobile').style.top = w4Value * 0.25 + 'px';
document.querySelector('.vijf-mobile').style.top = w5Value * 0.25 + 'px';
})



// scroll move character to side
let mCharacter = document.getElementById('mCharacter');
let mCharacterSprite = document.getElementById('mCharacterSprite');
window.addEventListener('scroll', function () {
  let value = window.scrollY;
  console.log(value);
  if(value > 0 && value < 100){
    mCharacter.style.transition = '1.2s';
    mCharacter.style.left = 60 + value * 0.25 + '%';
  }
  if(value > 100){
    mCharacter.style.left = 85 + '%';
    mCharacterSprite.classList.add('left');
    mCharacterSprite.classList.remove('right');
  }
  if(value > 1630){
    mCharacter.style.left = 15 + '%';
    mCharacterSprite.classList.remove('left');
    mCharacterSprite.classList.add('right');
  }
  if(value > 4100){
    mCharacter.style.left = 85 + '%';
    mCharacterSprite.classList.add('left');
    mCharacterSprite.classList.remove('right');
  }

})
    
