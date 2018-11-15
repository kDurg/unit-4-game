console.log('welcome to the console')

        
        // global variables
        // -------------------------------------------------------------
        var x = 0;
        var y = {};
        var currentScore = 0;
        var targetScore = 0;
        var wins = 0;
        var losses = 0;
        var imgArray = ["assets/images/blueGem.png", "assets/images/greenGem.png", "assets/images/multicolorGem.jpg", "assets/images/purpleGem.jpg"];
        var array = [1, 2, 3, 4];

        // -------------------------------------------------------------
        
        
        function randomizeTarget() {
            targetScore = Math.floor(Math.random() * 101 +19);
            console.log ("Target Score is:  " + targetScore);
            $(".scoreBoard span").text(targetScore);
        }

        function makeDivs() {
            for (var i=0; i<array.length; i++) {
                var div = $("<div>");
                div.addClass('crystal');
                div.attr('crystalVal', Math.floor(Math.random() * 12 +1));
                div.attr('id', i);
                div.html("<img src = '" + imgArray[i] + "' />");
                $('.divContainer').append(div);
            }
        }

        function reset() {
            currentScore = 0;
            targetScore = 0;
            $(".divContainer").empty ();
            randomizeTarget ();   
            makeDivs (); //crystal value is resetting, though not clickable.
        }


        // main process
        // -------------------------------------------------------------
        $(document).ready(randomizeTarget ())
        makeDivs();

        $(".crystal").on('click', function() {
            
            var currentValue = Number($(this).attr("crystalVal")); 
            currentScore = (currentScore + currentValue);
            console.log("--------------------------------------------")
            console.log ("Gem Value: " + currentValue + " | Type:" + typeof(currentValue));

            if (currentScore === targetScore) {
                wins++
                alert ("You Won " + wins + " Times");
                reset ();      
            } else if (currentScore > targetScore) {
                losses++
                alert ("You Lost " + losses + " Times");
                reset ();
            }

        $("#currentScore span").text(currentScore);
        $("#WINS").html(wins);
        $("#LOSSES").text(losses);
        });
