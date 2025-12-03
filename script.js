function open() {
    window.open('https://google.com')
}

document.querySelector('button').addEventListener('click', () => {
    open()
})
