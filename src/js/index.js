document.body.addEventListener("mousemove", evt => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;

    gsap.set(".cursor", {
        x: mouseX,
        y: mouseY
    })

    gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
    })
})

var $loader = document.querySelector('.loader')

window.onload = function () {
    $loader.classList.remove('loader--active')
};

document.querySelector('.btn').addEventListener('click', function () {
    $loader.classList.add('loader--active')

    window.setTimeout(function () {
        $loader.classList.remove('loader--active')
    }, 2000)
})