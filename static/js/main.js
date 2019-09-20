$(document).ready(function(){
    $('.sidenav').sidenav();
    $('select').formSelect();
    $('.carousel').carousel();
    $('.modal').modal();
    $('.cancel-form').click(function() {
        window.history.back();
    $('.tooltipped').tooltip();
  });    
 
 var ingredientField = $(".ingredient").length;
    $("#add_ingredient").on("click", function () {
        $("select").formSelect("destroy");
        $(".new-ingredient:first").clone().insertBefore("#add_ingredient").find("input[type='text'], select, textarea").val("");
        $("select").formSelect();
        ingredientField += 1;
    });

    $("#remove_ingredient").on("click", function () {
        if (ingredientField > 1) {
            /* only remove the :last item */
            $(this).siblings(".new-ingredient:last").remove();
            /* ensure original ingredient line never gets deleted */
            ingredientField-= 1;
        }
    });
 
 
var preparationField = $(".preparation").length;
    /* add new cloned item */
    $("#add_step").on("click", function () {
        $(".new-step:first").clone().insertBefore("#add_step").find("input[type='text'], select, textarea").val("");
        /* increase counter so original direction is never removed */
       preparationField += 1;
    });
    /* delete last cloned item */
    $("#remove_step").on("click", function () {
        if ( preparationField > 1) {
            /* only remove the :last item */
            $(this).siblings(".new-step:last").remove();
            /* ensure original direction line never gets deleted */
            preparationField-= 1;
        }
    }); 

