


$(function(){
    $("#kezd").click(init);
});

function init(){
//   $("div").eq(0).html("Ide <b>írd</b>");
//    alert($("div").eq(0).html());
    
    for (var i = 0; i < 5; i++) {
//        $("#jatekter").append("<img src='foOldal.jpg' alt='Kép'>");
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
        $("#jatekter img").eq(i).attr({"src":"foOldal.jpg","alt":"kep"});
    }
    $("#jatekter div").css({"background-color":"blue", "padding":"2%"});
    $("#jatekter div").mouseenter(
                function (){
                    $(this).css({"background-color":"red", "padding":"2%"});
                    
                }
     );
     $("#jatekter div").mouseleave(
                function (){
                    $(this).css({"background-color":"blue", "padding":"2%"});
                }
     );
     $("#jatekter div").click(
             function (){
                $(this).hide(1000);
                $(this).show(1000);
            }
     );
     
    
    
    
}
