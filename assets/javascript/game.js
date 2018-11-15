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
        
        $(document).ready(randomizeTarget ())
        
        function randomizeTarget() {
            targetScore = Math.floor(Math.random() * 101 +19);
            console.log ("Target Score is:  " + targetScore);
            $(".scoreBoard span").text(targetScore);
        }


        function makeDivs() {
            for (var i=0; i<array.length; i++) {
                var div = $("<div>");
                div.addClass('crystal');
                div.attr('crystalVal', Math.floor(Math.random() * 11 +1));
                div.attr('id', i);
                div.html("<img src = '" + imgArray[i] + "' />");
                $('.divContainer').append(div);
                console.log(this);
            }
        }

        function reset() {
            currentScore = 0;
            targetScore = 0;
            randomizeTarget ();               
            console.log(this);
            // this.crystal.attr('crystalVal', Math.floor(Math.random() * 11 +1));

        }


        // main process
        // -------------------------------------------------------------
        makeDivs();

        $(".crystal").on('click', function() {
            
            var currentValue = Number($(this).attr("crystalVal")); 
            currentScore = (currentScore + currentValue);
            console.log("--------------------------------------------")
            console.log ("Gem Value: " + currentValue + " | Type:" + typeof(currentValue));
            console.log("Current Score:" + currentScore + " | Type:" + typeof(currentScore));

            if (currentScore === targetScore) {
                wins++
                alert ("You Won " + wins + " Times");
                reset ();

                // need to reset all values 
                
            } else if (currentScore > targetScore) {
                losses++
                alert ("You Lost " + losses + " Times");
                reset ();

                // need to reset all values 

            }

        $("#currentScore span").text(currentScore);
        $("#WINS").html(wins);
        $("#LOSSES").text(losses);
        });





        // global variables
        // wins, loses, goalNumber, userscore
        
        // function 1
        //  var images = ['assets/crystl1', 'assets/crystal2]
        // set goalNumber with math.random
        // loop through images array
        // for every index, create image on screen
        // add class
        // add src
        // add crystal value as attribute
        // append image to screen

        
        // create click event on crystals
        // use $(this) to capture value attribute
        // add clicked value to userScore
        // create conditions to check for win or loss using if statements
            // if win or loss, restart game and increment wins or losses -->
