    var i =0;
	var image = [];
	var time = 1000;

	image[0] = 'm1.jpg';
	image[1] = 'm2.jpg';
	image[2] = 'm3.jpg';
	image[3] = 'm4.jpg';
	image[4] = 'm5.jpg';

	function changeimage(){
		document.slide.src = image[i];

		if (i< image.length - 1 ) {
			i++;

		}
		else{
			i=0;
		}
		setTimeout("changeimage()",time);
	}
	window.onload =changeimage;
