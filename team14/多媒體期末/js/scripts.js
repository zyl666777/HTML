/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

<script>
window.onload = function() {
    var number = Math.floor(Math.random() * 3);
    var imgUrls = [
        'images/heart240619.jpg',
        'images/3Q_240618.jpg',
        'images/tea1.jpg'
    ];
    document.getElementById('randomImage').innerHTML = '<img src="' + imgUrls[number] + '" alt="Random Image" class="img-fluid">';
};
</script>