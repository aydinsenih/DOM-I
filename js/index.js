const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

document.querySelector("title").textContent = "Great Idea!";

const navBar = document.querySelectorAll("nav a");

let counter = 1;
navBar.forEach(element => {
  let string = "nav-item-"+ counter
  element.textContent = siteContent["nav"][string]
  counter++
});

navBar.forEach(item => item.setAttribute("style","color:green"));
let clone = document.querySelectorAll("nav a")[0].cloneNode(true);
clone.textContent = "New Ideas";
document.querySelector("nav").appendChild(clone);
clone.textContent = "Home";
document.querySelector("nav").prepend(clone);


const cta = document.querySelector(".cta");
cta.querySelector("h1").textContent = siteContent["cta"]["h1"];
cta.querySelector("button").textContent = siteContent["cta"]["button"];
document.getElementById("cta-img").setAttribute("src", siteContent["cta"]["img-src"]);

const topContent = document.querySelector(".top-content");
topContent.children[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
topContent.children[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];
topContent.children[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];

document.getElementById("middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const bottomContent = document.querySelector(".bottom-content");
bottomContent.children[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
bottomContent.children[0].querySelector("p").textContent = siteContent["main-content"]["services-content"];
bottomContent.children[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
bottomContent.children[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];
bottomContent.children[2].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
bottomContent.children[2].querySelector("p").textContent = siteContent["main-content"]["vision-content"];

const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

let contactSibling = document.querySelectorAll(".contact p");
contactSibling[0].textContent = siteContent["contact"]["address"];
contactSibling[1].textContent = siteContent["contact"]["phone"];
contactSibling[2].textContent = siteContent["contact"]["email"];

document.querySelector("footer").textContent = siteContent["footer"]["copyright"];


