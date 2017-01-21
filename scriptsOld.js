$(document).ready(function() {
    var $count = 0;
    $('form').submit(function(){
        //Display basic card

        var $theCard = "<div id=" + $count + " class=single_card>"
            + "<p class='contact'>Contact Information</p>"
            + "<p class='name'>" + $('input[name="first_name"]').val()
            + " " + $('input[name="last_name"]').val() + "</p>"
            + "<p class='click'>Click for description!</p>";

        $('#cards').append($theCard);
        $count += 1;

        // Handler for showing description
        $(document).on('click', 'p.click', function(){
            $('div.single_card').addClass("back");
            $('div.single_card.back').html("");
            var $theBack = "<p class=click-back>Go Back</p>"
                + "<img class='click-back' src=go-back.png>"
                + "<p class='desc2'>" + $('textarea[name="description"]').val() + "</p>";
            // $('.contact').hide();
            // $('.name').hide();
            // $('.click').hide();
            $('div.single_card.back').html($theBack);
            //$('.desc2').show();
        });

        //Handler for going back to the front of the page


        return false;
    });

});
