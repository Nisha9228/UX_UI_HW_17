const root=document.documentElement;
const marqueeElementDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elemnts", marqueeContent.children.length);

for(let i=0; i<marqueeElementDisplayed; i++){
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}