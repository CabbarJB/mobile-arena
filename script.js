// let a = document.querySelectorAll('.compare-btn');
// a.forEach(item=>{
//     item.addEventListener('click', e=>{
//         e.preventDefault();
//         console.log('aaaa')
//     })
// })

document.addEventListener('click', (e)=>{
    if (e.target === document.querySelector('.burger-btn-wrapper') || e.target === document.querySelector('.burger-btn') || e.target.classList.contains('burger-layer')){
        document.querySelector('main').classList.toggle('main-expanded');
        document.querySelector('.nav-menu').classList.toggle('nav-menu-expanded')
    }
});

let openSrchBtn = document.querySelector('.searchbar-btn');
let hiddenSearchbar = document.querySelector('.hidden-searchbar');
let searchbarCLoseBtn = document.querySelector('.hidden-searchbar-close-btn');
openSrchBtn.addEventListener('click', e=>{
    hiddenSearchbar.classList.add('hidden-searchbar-visible')
    document.body.style.overflow = 'hidden'
});
searchbarCLoseBtn.addEventListener('click',()=>{
    hiddenSearchbar.classList.remove('hidden-searchbar-visible')
    document.body.style.overflow = 'auto'

})