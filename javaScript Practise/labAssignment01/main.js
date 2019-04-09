
var images = ['image1.jpg', 'image3.jpg', 'image5.jpg', 'image4.jpg', 'image2.jpg'];

var x = 0;

var imgs = document.getElementById('img');

setInterval(slider, 2000);


function slider() {

    if (x < images.length) {
        x = x + 1;
    } else {
        x = 1;
    }

    document.getElementById("img").innerHTML = "<img src=" + images[x - 1] + ">";


}
