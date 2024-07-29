class scripty{
  constructor(mobileMenu ,ul, ulLinks ){
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList= document.querySelector(ul)
    this.ullinks = document.querySelectorAll(ulLinks);
    this.activeClass = "active";

    this.handleClick =this.handleClick.bind(this);
  }
  
 handleClick(){
  this.navList.classList.toggle(this.activeClass);
  this.mobileMenu.classList.toggle(this.activeClass);
 }
  addClickEvent(){
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init(){
    if (this.mobileMenu){
       this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new scripty(
  ".mobile-menu",
  ".ul",
  ".ul li",
);
mobileNavbar.init();
