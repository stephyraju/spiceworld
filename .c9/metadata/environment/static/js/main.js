{"changed":true,"filter":false,"title":"main.js","tooltip":"/static/js/main.js","value":"$(document).ready(function(){\n    $('.sidenav').sidenav();\n    $('select').formSelect();\n    $('.carousel').carousel();\n    $('.modal').modal();\n    $('.cancel-form').click(function() {\n        window.history.back();\n  });    \n \n var ingredientField = $(\".ingredient\").length;\n    $(\"#add_ingredient\").on(\"click\", function () {\n        $(\"select\").formSelect(\"destroy\");\n        $(\".new-ingredient:first\").clone().insertBefore(\"#add_ingredient\").find(\"input[type='text'], select, textarea\").val(\"\");\n        $(\"select\").formSelect();\n        ingredientField += 1;\n    });\n\n    $(\"#remove_ingredient\").on(\"click\", function () {\n        if (ingredientField > 1) {\n            /* only remove the :last item */\n            $(this).siblings(\".new-ingredient:last\").remove();\n            /* ensure original ingredient line never gets deleted */\n            ingredientField-= 1;\n        }\n    });\n \n \nvar preparationField = $(\".preparation\").length;\n    /* add new cloned item */\n    $(\"#add_step\").on(\"click\", function () {\n        $(\".new-step:first\").clone().insertBefore(\"#add_step\").find(\"input[type='text'], select, textarea\").val(\"\");\n        /* increase counter so original direction is never removed */\n       preparationField += 1;\n    });\n    /* delete last cloned item */\n    $(\"#remove_step\").on(\"click\", function () {\n        if ( preparationField > 1) {\n            /* only remove the :last item */\n            $(this).siblings(\".new-step:last\").remove();\n            /* ensure original direction line never gets deleted */\n            preparationField-= 1;\n        }\n    }); \n\n","undoManager":{"mark":13,"position":15,"stack":[[{"start":{"row":0,"column":0},"end":{"row":46,"column":4},"action":"remove","lines":["$(document).ready(function(){","    $('.sidenav').sidenav();","    $('.dropdown-trigger').dropdown();","    $('select').formSelect();","    $('.carousel').carousel();"," ","     // Cancel Button","    $('.cancel-form').click(function() {","        window.history.back();","    ","  });    "," "," var ingredientField = $(\".ingredient\").length;","    $(\"#add_ingredient\").on(\"click\", function () {","        $(\"select\").formSelect(\"destroy\");","        $(\".new-ingredient:first\").clone().insertBefore(\"#add_ingredient\").find(\"input[type='text'], select, textarea\").val(\"\");","        $(\"select\").formSelect();","        ingredientField += 1;","    });","","    $(\"#remove_ingredient\").on(\"click\", function () {","        if (ingredientField > 1) {","            /* only remove the :last item */","            $(this).siblings(\".new-ingredient:last\").remove();","            /* ensure original ingredient line never gets deleted */","            ingredientField-= 1;","        }","    });"," "," ","var preparationField = $(\".preparation\").length;","    /* add new cloned item */","    $(\"#add_step\").on(\"click\", function () {","        $(\".new-step:first\").clone().insertBefore(\"#add_step\").find(\"input[type='text'], select, textarea\").val(\"\");","        /* increase counter so original direction is never removed */","       preparationField += 1;","    });","    /* delete last cloned item */","    $(\"#remove_step\").on(\"click\", function () {","        if ( preparationField > 1) {","            /* only remove the :last item */","            $(this).siblings(\".new-step:last\").remove();","            /* ensure original direction line never gets deleted */","            preparationField-= 1;","        }","    }); ","    "],"id":353},{"start":{"row":0,"column":0},"end":{"row":41,"column":8},"action":"insert","lines":["$(document).ready(function(){","    $('.sidenav').sidenav();","    $('.dropdown-trigger').dropdown();","    $('select').formSelect();","    $('.carousel').carousel();"," ","  });    "," "," var ingredientField = $(\".ingredient\").length;","    $(\"#add_ingredient\").on(\"click\", function () {","        $(\"select\").formSelect(\"destroy\");","        $(\".new-ingredient:first\").clone().insertBefore(\"#add_ingredient\").find(\"input[type='text'], select, textarea\").val(\"\");","        $(\"select\").formSelect();","        ingredientField += 1;","    });","","    $(\"#remove_ingredient\").on(\"click\", function () {","        if (ingredientField > 1) {","            /* only remove the :last item */","            $(this).siblings(\".new-ingredient:last\").remove();","            /* ensure original ingredient line never gets deleted */","            ingredientField-= 1;","        }","    });"," "," ","var preparationField = $(\".preparation\").length;","    /* add new cloned item */","    $(\"#add_step\").on(\"click\", function () {","        $(\".new-step:first\").clone().insertBefore(\"#add_step\").find(\"input[type='text'], select, textarea\").val(\"\");","        /* increase counter so original direction is never removed */","       preparationField += 1;","    });","    /* delete last cloned item */","    $(\"#remove_step\").on(\"click\", function () {","        if ( preparationField > 1) {","            /* only remove the :last item */","            $(this).siblings(\".new-step:last\").remove();","            /* ensure original direction line never gets deleted */","            preparationField-= 1;","        }","    }); "]}],[{"start":{"row":5,"column":1},"end":{"row":5,"column":22},"action":"insert","lines":[" $('.modal').modal();"],"id":354}],[{"start":{"row":5,"column":1},"end":{"row":5,"column":4},"action":"insert","lines":["   "],"id":355}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"remove","lines":["    "],"id":356}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":[" "],"id":357},{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":[" "]},{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"insert","lines":[" "]}],[{"start":{"row":5,"column":24},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":358},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":38},"action":"remove","lines":[" $('.dropdown-trigger').dropdown();"],"id":359},{"start":{"row":2,"column":3},"end":{"row":2,"column":21},"action":"insert","lines":["$('.tabs').tabs();"]}],[{"start":{"row":2,"column":2},"end":{"row":2,"column":4},"action":"insert","lines":["  "],"id":360}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["    "],"id":361}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":[" "],"id":362},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":[" "]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":[" "]}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":22},"action":"remove","lines":[" $('.tabs').tabs();"],"id":363},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"remove","lines":[" "]},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"remove","lines":[" "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":[" "]},{"start":{"row":1,"column":28},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":5,"column":4},"end":{"row":7,"column":7},"action":"insert","lines":["$('.cancel-form').click(function() {","        window.history.back();","    });"],"id":364}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"remove","lines":[";"],"id":365},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"remove","lines":[")"]},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"remove","lines":["}"]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":6,"column":30},"end":{"row":7,"column":0},"action":"remove","lines":["",""],"id":366}],[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["g"],"id":367}],[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"remove","lines":["g"],"id":368}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":30},"end":{"row":6,"column":30},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1569019782206}