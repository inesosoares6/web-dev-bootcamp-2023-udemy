// $(document).ready(function() {
//     $('h1').css('color', 'red');
// });


// STYLES
// $('h1').addClass('red-title');


// TEXT
// $('h1').text('Bye');


// INNER HTML
$('button').html('<em>Do not Click me</em>');


// ATTRIBUTES
$('a').attr('href', 'https://www.yahoo.com');


// EVENT LISTENERS
$('button').click(function() {
    $('button').css('color', 'red');
})

$('input').keydown(function(event) {
    console.log(event.key);
})

$(document).keydown(function(event) {
    $('h1').text(event.key);
})

$('h1').on('mouseover', function() {
    $('h1').css('color', 'green');
})

// ADDING/REMOVING ELEMENTS: before() | after() | append() | prepend()
$('h1').before('<button>New</button>')


// ANIMATIONS
$('button').click(function() {
    // $('h1').fadeToggle();
    // $('h1').slideToggle();
    $('h1').slideUp().slideDown().animate({opacity: 0.5})
})