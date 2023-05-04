// Header tagg

let Menubtn = document.getElementById('Menubtn')

Menubtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing effect
let typed = new Typed ('.auto-input',{
    strings: ['Front-End Developer!','Freelancer!','Programmer!'],
    typeSpeed: 60,
    backSpeed: 70,
    loop:true,
    

})