let btn_menu1 = document.querySelector('  #btn_menu1');
let btn_menu2 = document.querySelector(' #btn_menu2');

let menuToggle = document.querySelector('.navigationMore900')


function menTog()
{
    btn_menu2.style.display = 'none';
 
    btn_menu1.addEventListener('click', () =>
    {  
        menuToggle.style.display = 'flex'
        menuToggle.classList.toggle('active');
        btn_menu2.style.display = 'flex'
        btn_menu1.style.display = 'none'
    })
    
    btn_menu2.addEventListener('click', () =>

    { 
        menuToggle.style.display = 'none'
        menuToggle.classList.remove('active');   
        btn_menu1.style.display = 'flex'
        btn_menu2.style.display = 'none'
    })
}

menTog()






function reload()
{
  setInterval(() => 
  {
    var bodyElements = document.querySelectorAll('[data-animation]');
    bodyElements.forEach(element => {
        element.classList.add('reloaded')
    });
  }, 10);
 
  setTimeout(() => {
    alert('Não é da nossa conta as consequências dos teus atos!')
  }, 10);

 
 
}

window.addEventListener('load', reload);



function scroller()
{
  setInterval(() => 
  {
    var bodyElements = document.querySelectorAll('p,h2');
    bodyElements.forEach(element => {
        element.classList.add('reloaded')
    });
  }, 10);

}
window.addEventListener('load', scroller)

 