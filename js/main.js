/*----------------------About Section Tabs------------------------------*/

(() => {
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click",(event) =>{
        /* if event.target contains 'tab-items' class and not contains 'actoive' class */
        if(event.target.classList.contains("tab-item") && 
        !event.target.classList.contains("active")){
        const target = event.target.getAttribute("data-target");
        //deactivate existing active "tab-item'
        tabsContainer.querySelector(".active").classList.remove("outer-shadow","active")
        //activate new 'tab-item'
        event.target.classList.add("active","outer-shadow");
        //deactivate existing active 'tab-content'
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        //activate new tab content
        aboutSection.querySelector(target).classList.add("active");``
        }
    })
})();


/*-----------Portfolio Filter & Popup---------------------*/

(() =>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemContainer = document.querySelector("portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = document.querySelector(".pp-prev"),
    nextBtn = document.querySelector(".pp-next"),
    closeBtn = document.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let itemIndex, slideIndex,screenshots;
/* -------------filter portfolio items------------------------- */
  filterContainer.addEventListener("click",(event)=>{
  if(event.target.classList.contains("filter-item") && 
  !event.target.classList.contains("active")){
     
//deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("outer-shadow",
    "active");
//activate new 'filter item'
event.target.classList.add("active", "outer-shadow");
  const target = event.target.getAttribute("data-target");
  portfolioItems.forEach((item) =>{
    if(target === item.getAttribute("data-category")|| target ==='all'){
       item.classList.remove("hide"); 
       item.classList.add("show"); 
    }

    else{
        item.classList.remove("show");
        item.classList.add("hide"); 
     }
   })
 }
  })

 portfolioItemsContainer.addEventListener("click",(event) =>{
     console.log(event.target)
 })

})();