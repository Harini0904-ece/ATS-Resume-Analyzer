// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>20){

        navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.12)";

    }

    else{

        navbar.style.boxShadow="none";

    }

});


// ===============================
// Upload Preview
// ===============================

const fileInput = document.getElementById("resume");
const fileName = document.getElementById("fileName");

if (fileInput) {
    fileInput.addEventListener("change", function () {
        if (this.files.length > 0) {
            fileName.textContent = "Selected: " + this.files[0].name;
        } else {
            fileName.textContent = "No file selected";
        }
    });
}


// ===============================
// Drag & Drop Upload
// ===============================




// ===============================
// Loading Button
// ===============================

const form=document.querySelector("form");

const button=document.querySelector("button");

if(form){

form.addEventListener("submit",()=>{

button.innerHTML=

`<i class="fa-solid fa-spinner fa-spin"></i>
Analyzing Resume...`;

button.disabled=true;

});

}



// ===============================
// Animate ATS Score
// ===============================

const score=document.querySelector(".score-circle");

if(score){

let finalScore=parseInt(score.innerText);

let current=0;

const interval=setInterval(()=>{

current++;

score.innerText=current+"%";

if(current>=finalScore){

clearInterval(interval);

}

},20);

}



// ===============================
// Fade Animation
// ===============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".feature-card,.stat-box,.upload-container,.hero-card,.summary-box,.keyword-card,.suggestion-card")

.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});



// ===============================
// Card Hover Animation
// ===============================

document.querySelectorAll(".feature-card,.summary-box").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});



// ===============================
// Ripple Effect
// ===============================

document.querySelectorAll("button,.hero-btn,.buttons a,.cta a").forEach(btn=>{

btn.addEventListener("click",function(e){

let ripple=document.createElement("span");

let x=e.clientX-this.offsetLeft;

let y=e.clientY-this.offsetTop;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});