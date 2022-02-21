const BtnMenu = document.querySelector('.menu'),
    nav = document.querySelector('.hamburger')

BtnMenu.onclick = () => {
    // alert('Cleck') test the event Listener

    // nav.style.left = 0
    if (BtnMenu.value === 'menu') {
        nav.style.left = 0

        BtnMenu.value = 'close'
        BtnMenu.textContent = 'Close'

    } else {
        BtnMenu.value = 'menu'
        BtnMenu.textContent = 'Menu'
        nav.style.left = '-230px'
    }
}