const areaSquare = document.querySelector(".areaSquare");
const BackgroundChange = document.querySelector(".changeBackground");

//mesure la largeur de la fenetre par rapport a sa taille dynamiquement
let compt = 0;

for (let i = 0; i < 470; i++) {
  let spanClone = areaSquare.appendChild(document.createElement("span"));
  spanClone.classList.add("carreDraw");
}

document.querySelector("#nav-icon3").addEventListener("click", () => {
  document.getElementById("nav-icon3").classList.toggle("open");

  compt++;
  if (compt % 2 == 0) {
    document.querySelector(".navigation-section").classList.add("disparait");
    document.querySelector(".navigation-section").classList.remove("apparait");
  } else {
    document.querySelector(".navigation-section").classList.remove("disparait");
    document.querySelector(".navigation-section").classList.add("apparait");
  }
});

const scrollProgress = document.getElementById("scroll-progress");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("change");
    } else {
    }
  });
});

// Tell the observer which elements to track
observer.observe(BackgroundChange);

document.querySelectorAll(".item").forEach((elementItemProject, index) => {
  switch (index) {
    case 0:
      elementItemProject.addEventListener("mouseenter", () => {
        console.log("eren");
        document.querySelectorAll(".hover-project").forEach((elementHover, index) => {
          if(index == 0){
            elementHover.classList.add("heightHover")
          }
        })
      });

      elementItemProject.addEventListener("mouseleave", () => {
        console.log("eren");
        document.querySelectorAll(".hover-project").forEach((elementHover, index) => {
          if(index == 0){
            elementHover.classList.remove("heightHover")
          }
        })
      });
      break;

    case 1:
      elementItemProject.addEventListener("mouseenter", () => {
        console.log("eren");
        document.querySelectorAll(".hover-project").forEach((elementHover, index) => {
          if(index == 1){
            elementHover.classList.add("heightHover")
          }
        })
      });

      elementItemProject.addEventListener("mouseleave", () => {
        console.log("eren");
        document.querySelectorAll(".hover-project").forEach((elementHover, index) => {
          if(index == 1){
            elementHover.classList.remove("heightHover")
          }
        })
      });
      break;

    case 2:
      elementItemProject.addEventListener("mouseenter", () => {
        console.log("eren");
        document.querySelectorAll(".hover-project").forEach((elementHover, index) => {
          if(index == 2){
            elementHover.classList.add("heightHover")
          }
        })
      });

      elementItemProject.addEventListener("mouseleave", () => {
        console.log("eren");
        document.querySelectorAll(".hover-project").forEach((elementHover, index) => {
          if(index == 2){
            elementHover.classList.remove("heightHover")
          }
        })
      });
      break;

    case 3:
      elementItemProject.addEventListener("mouseenter", () => {
        console.log("eren");
        document.querySelectorAll(".hover-project").forEach((elementHover, index) => {
          if(index == 3){
            elementHover.classList.add("heightHover")
          }
        })
      });

      elementItemProject.addEventListener("mouseleave", () => {
        console.log("eren");
        document.querySelectorAll(".hover-project").forEach((elementHover, index) => {
          if(index == 3){
            elementHover.classList.remove("heightHover")
          }
        })
      });
      break;

    case 4:
      elementItemProject.addEventListener("mouseenter", () => {
        console.log("eren");
        document.querySelectorAll(".hover-project").forEach((elementHover, index) => {
          if(index == 4){
            elementHover.classList.add("heightHover")
          }
        })
      });

      elementItemProject.addEventListener("mouseleave", () => {
        console.log("eren");
        document.querySelectorAll(".hover-project").forEach((elementHover, index) => {
          if(index == 4){
            elementHover.classList.remove("heightHover")
          }
        })
      });
      break;

    default:
      elementItemProject.addEventListener("mouseenter", () => {
        console.log("eren");
        document.querySelectorAll(".hover-project").forEach((elementHover, index) => {
          if(index == 5){
            elementHover.classList.add("heightHover")
          }
        })
      });

      elementItemProject.addEventListener("mouseleave", () => {
        console.log("eren");
        document.querySelectorAll(".hover-project").forEach((elementHover, index) => {
          if(index == 5){
            elementHover.classList.remove("heightHover")
          }
        })
      });
  }
});
