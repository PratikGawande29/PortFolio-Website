/*=============== SHOW SIDEBAR ===============*/
const navMenu=document.getElementById('sidebar')
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const  tabs=document.querySelectorAll( '[data-target]' ),
        tabContent=document.querySelectorAll('[data-content]')
    tabs.forEach(tab=>{
        tab.addEventListener("click",()=>{
            const target=document.querySelector(tab.dataset.target) 
            tabContent.forEach(tabContents=>{
                tabContents.classList.remove("skills_active")
            })
            target.classList.add('skills_active')
            
            tabs.forEach(tab=>{
                tab.classList.remove("skills_active")
            })
            tab.classList.add('skills_active')
        })
    })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/*===== Link Active Work =====*/


/*===== Work Popup =====*/


/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/
const inputs=document.querySelectorAll(".input");
function focusFunc(){
    let parent=this.parentNode;
    parent.classList.add("focus")
}
function blurFunc(){
    let parent=this.parentNode;
    if(this.value ==""){
        parent.classList.remove("focus")
    }
    
}
inputs.forEach((input)=>{
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll

window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
let scrollY = window.pageYOffset;

// Now we loop through sections to get height, top and ID values for each 
sections.forEach(current =>{
const sectionHeight = current.offsetHeight;

const sectionTop = current.offsetTop - 50,

sectionId = current.getAttribute("id");

/* If our current scroll position enters the space where current section on scre corresponding navigation Link, else remove it
- To know which Link needs an active class, we use sectionId variable we are gettt sections as an selector*/
if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.add("active-link")

}

else{
document.querySelector('.nav_menu a[href*=' + sectionId+']').classList.remove("active-link")
}})
}
/*=============== SHOW SCROLL UP ===============*/
