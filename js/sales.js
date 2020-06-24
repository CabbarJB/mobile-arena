let sortBtn = document.querySelector('.sort-btn');

sortBtn.addEventListener('click', e=>{
    e.currentTarget.classList.toggle('sort-btn-expanded');
    if (document.querySelector('.sort-options-wrapper').classList.contains('visible')){
        document.querySelector('.sort-plus-sign').innerText = '+'
    }
    else {
        document.querySelector('.sort-plus-sign').innerText = '-'

    }
    document.querySelector('.sort-options-wrapper').classList.toggle('visible');

});

let filterBtns = document.querySelectorAll('.filter-menu-item-btn');
filterBtns.forEach(item=>{
    item.addEventListener('click', (e)=>{
        if ( e.currentTarget.parentElement.children[1].classList.contains('dropdown-visible')){
            e.currentTarget.children[1].innerText = '+'
        }
        else {
            e.currentTarget.children[1].innerText = '-'

        }
        e.currentTarget.parentElement.children[1].classList.toggle('dropdown-visible');
    })
});



let inputLeft = document.getElementById("range-left");
let inputRight = document.getElementById("range-right");

let thumbLeft = document.querySelector(".custom-range > .range-thumb-left");
let thumbRight = document.querySelector(".custom-range > .range-thumb-right");
let range = document.querySelector(".custom-range > .range");
let minPrice = document.querySelector('.left-price');
let maxPrice = document.querySelector('.right-price');


function setLeftValue() {
    let _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    let percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
    minPrice.innerText = _this.value.toString()
}
setLeftValue();

function setRightValue() {
    let _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

    let percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
    maxPrice.innerText = _this.value.toString()

}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

let openFiltersBtn = document.querySelector('.filter-expand-btn');
let filtersMenu = document.querySelector('.filters');
openFiltersBtn.addEventListener('click', e=>{
    filtersMenu.classList.add('filters-expanded')
});

let filterCloseBtn = document.querySelector('.filters-close-btn');
filterCloseBtn.addEventListener('click',e=>{
    filtersMenu.classList.remove('filters-expanded')
})

