const elsFeaturesItem = document.querySelectorAll('.features__item');
const elsFeaturesLink = document.querySelectorAll('.features__link');
const elsBlock = document.querySelectorAll('.block')


function Close() {
    elsFeaturesItem.forEach(function (item , index) {
        item.classList.remove('active');
        elsBlock[index].classList.remove('show')

    })
}
elsFeaturesLink.forEach(function (item, index) {
    item.addEventListener('click', function () {
        Close()
        elsFeaturesItem[index].classList.add('active')
        elsBlock[index].classList.add('show')
    })
})





// elSearchLink.addEventListener('click', function () {
//     elSearch.classList.toggle('show')
//     elSimple.classList.toggle('hidden')
//     elShare.classList.toggle('hidden')
// })
// elShareLink.addEventListener('click', function () {
//     elShare.classList.toggle('show')
//     elSimple.classList.toggle('hidden')
//     elSearch.classList.toggle('hidden')
// })

