$(document).ready(function(){
    $(".game_panel a").hover(
        function(){
            $(this).css({
                "background-color" : "white"
            });
        },
        function(){
            $(this).css({
                "background-color" : ""
            })
        }
    );
});

