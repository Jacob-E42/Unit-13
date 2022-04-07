
//creates event on form that creates a new div to house a span for the title, rating and then remove button
$('form').on('submit', function () {
    let title = $('#title').val();
    let rating = $('#rating').val();
    
        $('#container').append("<div class='movie'><span><b>" + title + "</b></span><br><span>" + rating + "</span>" +
        "<br><button>Remove</button></div>")
        
       const form = $('form').get(0);
       form.reset();
})

//creates a new event on each remove button that when clicked, removes the parent div
$('#container').on('click', '.movie', function(){
    $(this).remove();
})