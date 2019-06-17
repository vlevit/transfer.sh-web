$(document).ready(function () {

    // Terminal typing animation
    $("#from-terminal p").typed({
        strings: ["curl --upload-file ./hello.txt https://bucket.ftp.sh/hello.txt\nhttps://bucket.ftp.sh/66nb8/hello.txt \n "],
        typeSpeed: 0,
        loop: true,
    });

    // Smooth scrolling
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});