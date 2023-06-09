


$(document).ready(function () {

});

// close navbar after click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        $(".closebtn").click()
    })
})
every();

// side nav bar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// text typing animation
function every() {
    setTimeout(function () {
        $('#intro').typed({
            strings: [
                "HI, I'm Sathiyanthan  -  Web Developer"
            ],
            typeSpeed: 9,
            contentType: 'html'
        });
    }, 100);
}

var myInterval = setInterval(every, 6000);

// navbar smooth scroll
$(".nav-link").on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 1000);
});

// resume download
$("#download").click(function (e) {
    e.preventDefault();
    window.location.href = "sathiyanathan_A_Resume.pdf";
});

// top
var $backToTop = $(".back-to-top");
$backToTop.hide();

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
        $backToTop.fadeIn();
    } else {
        $backToTop.fadeOut();
    }
});

$backToTop.on('click', function(e) {
    $("html, body").animate({scrollTop: 0}, 500);
  });
