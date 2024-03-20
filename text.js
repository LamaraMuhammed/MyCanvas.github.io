var bd = document.querySelector('body');

bd.onmousemove = function(x) {
    console.log('x = ', x.clientX);
};