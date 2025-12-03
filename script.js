function open() {
    window.open('https://google.com', '_blank')
}

document.querySelector('button').addEventListener('click', () => {
    open()
})
