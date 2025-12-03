function open() {
    window.open('https://google.com')
    open()
}

document.querySelector('button').addEventListener('click', () => {
    open()
})
