function firstpage_click(){
            alert('这个功能还没有完善，请耐心等待日后更新~(｡･ω･｡)ﾉ♡');
        }
function head_click() {
    alert('也许你想帮我换个头像？然则我拒绝XD');
}
function diary_click(d) {
    if (document.getElementById(d).style.display == "none")
        document.getElementById(d).style.display = '';
    else
        document.getElementById(d).style.display = "none";
}


const docStyle = document.documentElement.style
const aElem = document.querySelector('a')
const boundingClientRect = aElem.getBoundingClientRect()

aElem.onmousemove = function (e) {

    const x = e.clientX - boundingClientRect.left
    const y = e.clientY - boundingClientRect.top

    const xc = boundingClientRect.width / 2
    const yc = boundingClientRect.height / 2

    const dx = x - xc
    const dy = y - yc

    docStyle.setProperty('--rx', `${dy / -1}deg`)
    docStyle.setProperty('--ry', `${dx / 10}deg`)

}

aElem.onmouseleave = function (e) {
    docStyle.setProperty('--ty', '0')
    docStyle.setProperty('--rx', '0')
    docStyle.setProperty('--ry', '0')
}

aElem.onmousedown = function (e) {
    docStyle.setProperty('--tz', '-25px')
}

document.body.onmouseup = function (e) {
    docStyle.setProperty('--tz', '-12px')
}