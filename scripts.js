$(document).ready(function() {
    $('form').submit(function(){
        //Display basic card
        var $theCard = "<div class=single_card>"
            + "<p class='contact'>Contact Information</p>"
            + "<p class='name'>" + $('input[name="first_name"]').val()
            + " " + $('input[name="last_name"]').val() + "</p>"
            + "<p class='click'>Click for description!</p>";

        $('#cards').append($theCard);
        $('div.single_card').data("theDesc", $('textarea[name="description"]').val());

        // Handler for showing description
        $(document).on('click', 'p.click', function(){
            $(this).parent().addClass("back");
            var $myDesc = $(this).parent().data("theDesc");

            var $theBack = "<p class=click-back>Go Back</p>"
                + "<img class='click-back' src=go-back.png>"
                + "<p class='desc'>" + $myDesc + "</p>";

            $(this).parent().html($theBack);
        });

        //Handler for going back to the front of the page


        return false;
    });

});
