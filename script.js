const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(function (thumb) {
    if (thumb.src == jumbo.src) {
        thumb.classList.add('active');
    }

});

container.addEventListener('click', function (e) {
    //cek apakah yg di klik adalah thumb
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500);//0.5s = 500ms

        thumbs.forEach(function (thumb) {
            if (thumb.classList.contains('active')) {
                thumb.classList.remove('active');
            }
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');


    }

});