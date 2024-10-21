//Typing Animation
// Typed.js Initialization
var typed = new Typed(".typing", {
    strings: ["MERN STACK DEVELOPER", "web Developer"],
    typeSpeed:100,
    backSpeed: 60, // Fix typo here
    loop: true
});

// Navigation Logic
const nav = document.querySelector('.nav'),
navList = nav.querySelectorAll('li');
totalNavList = navList.length;
allSection=document.querySelectorAll(".section"),
totalSection=allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener('click', () => {


        for(let i=0;i<totalSection;i++){
            allSection[i].classList.remove("back-section");
        }


        for (let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
                
            }

            navList[j].querySelector("a").classList.remove("active");
        }

        a.classList.add("active"); // Use 'a' instead of 'this'
        showSection(a); // Pass the clicked anchor element to showSection
    });
}

function showSection(element) {
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
