/* ===========================
   ENJOY CREATOR ACADEMY
   script.js
=========================== */

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.onclick = () =>{
        navLinks.classList.toggle("active");
    };
}

// Sticky Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }

});

// Counter Animation
const counters=document.querySelectorAll(".counter");

const speed=80;

counters.forEach(counter=>{

function update(){

const target=+counter.getAttribute("data-target");

const count=+counter.innerText.replace(/,/g,'');

const increment=Math.ceil(target/speed);

if(count<target){

counter.innerText=(count+increment).toLocaleString();

setTimeout(update,20);

}else{

counter.innerText=target.toLocaleString();

}

}

update();

});

// Scroll Reveal
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.feature,.hero-left,.hero-right,.cta").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Scroll To Top
const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Floating Animation
const heroBox=document.querySelector(".youtube-box");

if(heroBox){

let angle=0;

setInterval(()=>{

angle+=0.03;

heroBox.style.transform=`translateY(${Math.sin(angle)*12}px) rotate(${Math.sin(angle)*2}deg)`;

},20);

}