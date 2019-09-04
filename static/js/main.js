$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('select').formSelect();
    $('.carousel').carousel();
 
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
 
 
var methodField = $(".method").length;
    /* add new cloned item */
    $("#add-method").on("click", function () {
        /* clone and remove existing values */
        $(".new-step:first").clone().insertBefore("#add-method").find("input[type='text'], select, textarea").val("");
        /* increase counter so original direction is never removed */
        methodField += 1;
    });
    /* delete last cloned item */
    $("#remove-method").on("click", function () {
        if ( methodField > 1) {
            /* only remove the :last item */
            $(this).siblings(".new-step:last").remove();
            /* ensure original direction line never gets deleted */
            methodField -= 1;
        }
    }); 
    

