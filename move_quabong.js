let img1 = null;
img1 = document.getElementById('quabong1');
function init() {
    img1 = document.getElementById('quabong1');
    img1.style.position = 'relative';
    img1.style.left = '0px';
}
function moveright() {
img1.style.left = parseInt(img1.style.left) + '10 + 'px';
}
window.onload = init;
