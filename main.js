const menuClick =document.querySelector(".menu-toggle");
const type = document.querySelector(".typeWriter")
const txt = "Welcome to my Digital home."
let i =0;

function typeWriter() {
    if (i < txt.length) {
      type.innerHTML+=txt.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }

  };
  type.style ="font-size:25px;"
  typeWriter();
  console.log("dom successful")

  menuClick.addEventListener("click",()=>{
    document.querySelector(".menuNavigation").classList.toggle("isClicked");
  })
