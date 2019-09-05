{"filter":false,"title":"main.js","tooltip":"/static/js/main.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":21,"column":15},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":63},{"start":{"row":22,"column":0},"end":{"row":22,"column":12},"action":"insert","lines":["            "]},{"start":{"row":22,"column":12},"end":{"row":23,"column":0},"action":"insert","lines":["",""]},{"start":{"row":23,"column":0},"end":{"row":23,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":23,"column":8},"end":{"row":23,"column":12},"action":"remove","lines":["    "],"id":64},{"start":{"row":23,"column":4},"end":{"row":23,"column":8},"action":"remove","lines":["    "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"remove","lines":["    "]},{"start":{"row":22,"column":12},"end":{"row":23,"column":0},"action":"remove","lines":["",""]},{"start":{"row":22,"column":8},"end":{"row":22,"column":12},"action":"remove","lines":["    "]},{"start":{"row":22,"column":4},"end":{"row":22,"column":8},"action":"remove","lines":["    "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":22,"column":0},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":65},{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":24,"column":0},"end":{"row":47,"column":4},"action":"insert","lines":["// Add & Remove Ingredients ","","$(document).ready(function(){","  $(\"button\").click(function(){","    $(\"#remove_ingredient\").remove();","  });","});","","$(\"#remove-ingredient\").on(\"click\", function () {","        if (ingredientCount > 1) {","            /* only remove the :last item */","            $(this).siblings(\".new-ingredient:last\").remove();","            /* ensure original ingredient line never gets deleted */","            ingredientCount -= 1;","        }","    });","    $('#remove_ingredient').click(function() {","        if (num_fields > min_fields) {","            $('.measure_field').filter(':last').remove();","            $('.ingredient_field').filter(':last').remove();","            num_fields -= 1;","        }","    });","    "],"id":66}],[{"start":{"row":26,"column":0},"end":{"row":47,"column":4},"action":"remove","lines":["$(document).ready(function(){","  $(\"button\").click(function(){","    $(\"#remove_ingredient\").remove();","  });","});","","$(\"#remove-ingredient\").on(\"click\", function () {","        if (ingredientCount > 1) {","            /* only remove the :last item */","            $(this).siblings(\".new-ingredient:last\").remove();","            /* ensure original ingredient line never gets deleted */","            ingredientCount -= 1;","        }","    });","    $('#remove_ingredient').click(function() {","        if (num_fields > min_fields) {","            $('.measure_field').filter(':last').remove();","            $('.ingredient_field').filter(':last').remove();","            num_fields -= 1;","        }","    });","    "],"id":67}],[{"start":{"row":7,"column":1},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":68},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":[" "]},{"start":{"row":8,"column":1},"end":{"row":9,"column":0},"action":"insert","lines":["",""]},{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":[" "]},{"start":{"row":9,"column":1},"end":{"row":10,"column":0},"action":"insert","lines":["",""]},{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"insert","lines":[" "]},{"start":{"row":10,"column":1},"end":{"row":11,"column":0},"action":"insert","lines":["",""]},{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"insert","lines":[" "]},{"start":{"row":11,"column":1},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":1},"action":"insert","lines":[" "]},{"start":{"row":12,"column":1},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":1},"action":"insert","lines":[" "]},{"start":{"row":13,"column":1},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":8,"column":1},"end":{"row":28,"column":0},"action":"insert","lines":["var ingredientCount = $(\".ingredient\").length;","    /* add new cloned item */","    $(\".add-ingredient\").on(\"click\", function () {","        /* 'destroy' is required to clone <select> elements */","        $(\"select\").formSelect(\"destroy\");","        /* clone and remove existing values */","        $(\".new-ingredient:first\").clone().insertBefore(\".add-ingredient\").find(\"input[type='text'], select, textarea\").val(\"\");","        $(\"select\").formSelect();","        /* increase counter so original ingredient is never removed */","        ingredientCount += 1;","    });","    /* delete last cloned item */","    $(\".remove-ingredient\").on(\"click\", function () {","        if (ingredientCount > 1) {","            /* only remove the :last item */","            $(this).siblings(\".new-ingredient:last\").remove();","            /* ensure original ingredient line never gets deleted */","            ingredientCount -= 1;","        }","    });",""],"id":69}],[{"start":{"row":8,"column":26},"end":{"row":8,"column":37},"action":"remove","lines":[".ingredient"],"id":70},{"start":{"row":8,"column":26},"end":{"row":8,"column":43},"action":"insert","lines":["'#add-ingredient'"]}],[{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"remove","lines":["'"],"id":71}],[{"start":{"row":8,"column":41},"end":{"row":8,"column":42},"action":"remove","lines":["'"],"id":72}],[{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"remove","lines":["."],"id":73}],[{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"insert","lines":["#"],"id":74}],[{"start":{"row":14,"column":57},"end":{"row":14,"column":58},"action":"remove","lines":["."],"id":75}],[{"start":{"row":14,"column":57},"end":{"row":14,"column":58},"action":"insert","lines":["#"],"id":76}],[{"start":{"row":35,"column":0},"end":{"row":50,"column":0},"action":"remove","lines":["$('#add-ingredient').on('click', function (e) {","             e.preventDefault();","                // check that blank values cannot be added","              let val = $('#ingredients').val();","              if (val.length < 1) return false;","              const output = `<li class=\"collection-item\">","\t\t\t\t<div>${$('#ingredients').val()}","\t\t\t\t   <input value=\"${$('#ingredients').val()}\" type=\"hidden\" name=\"ingredient\">","\t\t\t\t </div>","\t\t\t   </li>`;","                $('.todos').append(output);","                Materialize.toast('Ingredient Added', 3000);","                // e.preventDefault();","            });","",""],"id":77},{"start":{"row":35,"column":0},"end":{"row":35,"column":1},"action":"insert","lines":["x"]}],[{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"remove","lines":["-"],"id":78}],[{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"insert","lines":["_"],"id":79}],[{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"remove","lines":["-"],"id":80}],[{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":["_"],"id":81}],[{"start":{"row":14,"column":61},"end":{"row":14,"column":62},"action":"remove","lines":["-"],"id":82}],[{"start":{"row":14,"column":61},"end":{"row":14,"column":62},"action":"insert","lines":["_"],"id":83}],[{"start":{"row":14,"column":61},"end":{"row":14,"column":62},"action":"remove","lines":["_"],"id":84}],[{"start":{"row":14,"column":60},"end":{"row":14,"column":61},"action":"remove","lines":["d"],"id":85},{"start":{"row":14,"column":59},"end":{"row":14,"column":60},"action":"remove","lines":["d"]},{"start":{"row":14,"column":58},"end":{"row":14,"column":59},"action":"remove","lines":["a"]}],[{"start":{"row":14,"column":58},"end":{"row":14,"column":59},"action":"insert","lines":["a"],"id":86},{"start":{"row":14,"column":59},"end":{"row":14,"column":60},"action":"insert","lines":["d"]},{"start":{"row":14,"column":60},"end":{"row":14,"column":61},"action":"insert","lines":["d"]},{"start":{"row":14,"column":61},"end":{"row":14,"column":62},"action":"insert","lines":["_"]}],[{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"remove","lines":["_"],"id":87},{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"remove","lines":["d"]},{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"remove","lines":["d"]},{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"remove","lines":["a"]}],[{"start":{"row":8,"column":37},"end":{"row":8,"column":38},"action":"insert","lines":["s"],"id":88}],[{"start":{"row":8,"column":1},"end":{"row":29,"column":1},"action":"remove","lines":["var ingredientCount = $(\"#ingredients\").length;","    /* add new cloned item */","    $(\"#add_ingredient\").on(\"click\", function () {","        /* 'destroy' is required to clone <select> elements */","        $(\"select\").formSelect(\"destroy\");","        /* clone and remove existing values */","        $(\".new-ingredient:first\").clone().insertBefore(\"#add_ingredient\").find(\"input[type='text'], select, textarea\").val(\"\");","        $(\"select\").formSelect();","        /* increase counter so original ingredient is never removed */","        ingredientCount += 1;","    });","    /* delete last cloned item */","    $(\".remove-ingredient\").on(\"click\", function () {","        if (ingredientCount > 1) {","            /* only remove the :last item */","            $(this).siblings(\".new-ingredient:last\").remove();","            /* ensure original ingredient line never gets deleted */","            ingredientCount -= 1;","        }","    });",""," "],"id":89}],[{"start":{"row":14,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["x","// Add & Remove Ingredients ",""],"id":90}],[{"start":{"row":8,"column":1},"end":{"row":19,"column":0},"action":"insert","lines":["var ingredientCount = $(\".ingredient\").length;","    /* add new cloned item */","    $(\".add-ingredient\").on(\"click\", function () {","        /* 'destroy' is required to clone <select> elements */","        $(\"select\").formSelect(\"destroy\");","        /* clone and remove existing values */","        $(\".new-ingredient:first\").clone().insertBefore(\".add-ingredient\").find(\"input[type='text'], select, textarea\").val(\"\");","        $(\"select\").formSelect();","        /* increase counter so original ingredient is never removed */","        ingredientCount += 1;","    });",""],"id":91}],[{"start":{"row":9,"column":4},"end":{"row":9,"column":29},"action":"remove","lines":["/* add new cloned item */"],"id":92},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "]},{"start":{"row":8,"column":47},"end":{"row":9,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"remove","lines":["t"],"id":93},{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"remove","lines":["n"]},{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"remove","lines":["u"]},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"remove","lines":["o"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"remove","lines":["C"]}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["f"],"id":94},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["i"]},{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["e"]},{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["l"]},{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["d"]}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"remove","lines":["f"],"id":95}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["F"],"id":96}],[{"start":{"row":16,"column":18},"end":{"row":16,"column":19},"action":"remove","lines":["C"],"id":97}],[{"start":{"row":16,"column":18},"end":{"row":16,"column":19},"action":"insert","lines":["F"],"id":98},{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"insert","lines":["i"]},{"start":{"row":16,"column":20},"end":{"row":16,"column":21},"action":"insert","lines":["e"]},{"start":{"row":16,"column":21},"end":{"row":16,"column":22},"action":"insert","lines":["l"]}],[{"start":{"row":16,"column":22},"end":{"row":16,"column":23},"action":"insert","lines":["d"],"id":99}],[{"start":{"row":16,"column":26},"end":{"row":16,"column":27},"action":"remove","lines":["t"],"id":100},{"start":{"row":16,"column":25},"end":{"row":16,"column":26},"action":"remove","lines":["n"]},{"start":{"row":16,"column":24},"end":{"row":16,"column":25},"action":"remove","lines":["u"]},{"start":{"row":16,"column":23},"end":{"row":16,"column":24},"action":"remove","lines":["o"]},{"start":{"row":16,"column":22},"end":{"row":16,"column":23},"action":"remove","lines":["d"]}],[{"start":{"row":16,"column":22},"end":{"row":16,"column":23},"action":"insert","lines":["d"],"id":101}],[{"start":{"row":12,"column":8},"end":{"row":12,"column":46},"action":"remove","lines":["/* clone and remove existing values */"],"id":102},{"start":{"row":12,"column":4},"end":{"row":12,"column":8},"action":"remove","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":11,"column":42},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":13,"column":33},"end":{"row":14,"column":70},"action":"remove","lines":["","        /* increase counter so original ingredient is never removed */"],"id":128}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"remove","lines":["-"],"id":129}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["_"],"id":130}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"remove","lines":["_"],"id":131}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["-"],"id":132}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"remove","lines":["-"],"id":133}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["_"],"id":134}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":62},"action":"remove","lines":["/* 'destroy' is required to clone <select> elements */"],"id":135},{"start":{"row":10,"column":4},"end":{"row":10,"column":8},"action":"remove","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"remove","lines":["    "]},{"start":{"row":9,"column":50},"end":{"row":10,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"remove","lines":["."],"id":136}],[{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"insert","lines":["#"],"id":137}],[{"start":{"row":11,"column":61},"end":{"row":11,"column":62},"action":"remove","lines":["-"],"id":138}],[{"start":{"row":11,"column":61},"end":{"row":11,"column":62},"action":"insert","lines":["_"],"id":139}],[{"start":{"row":11,"column":57},"end":{"row":11,"column":58},"action":"remove","lines":["."],"id":140}],[{"start":{"row":11,"column":57},"end":{"row":11,"column":58},"action":"insert","lines":["#"],"id":141}],[{"start":{"row":16,"column":1},"end":{"row":23,"column":7},"action":"insert","lines":["$(\".remove-ingredient\").on(\"click\", function () {","        if (ingredientCount > 1) {","            /* only remove the :last item */","            $(this).siblings(\".new-ingredient:last\").remove();","            /* ensure original ingredient line never gets deleted */","            ingredientCount -= 1;","        }","    });"],"id":142}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"remove","lines":["."],"id":143}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["#"],"id":144}],[{"start":{"row":16,"column":11},"end":{"row":16,"column":12},"action":"remove","lines":["-"],"id":145}],[{"start":{"row":16,"column":11},"end":{"row":16,"column":12},"action":"insert","lines":["_"],"id":146}],[{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"insert","lines":[" "],"id":147},{"start":{"row":16,"column":2},"end":{"row":16,"column":3},"action":"insert","lines":[" "]},{"start":{"row":16,"column":3},"end":{"row":16,"column":4},"action":"insert","lines":[" "]}],[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"remove","lines":[" "],"id":148},{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"remove","lines":["t"]},{"start":{"row":21,"column":25},"end":{"row":21,"column":26},"action":"remove","lines":["n"]},{"start":{"row":21,"column":24},"end":{"row":21,"column":25},"action":"remove","lines":["u"]},{"start":{"row":21,"column":23},"end":{"row":21,"column":24},"action":"remove","lines":["o"]},{"start":{"row":21,"column":22},"end":{"row":21,"column":23},"action":"remove","lines":["C"]}],[{"start":{"row":21,"column":22},"end":{"row":21,"column":23},"action":"insert","lines":["F"],"id":149},{"start":{"row":21,"column":23},"end":{"row":21,"column":24},"action":"insert","lines":["i"]},{"start":{"row":21,"column":24},"end":{"row":21,"column":25},"action":"insert","lines":["e"]},{"start":{"row":21,"column":25},"end":{"row":21,"column":26},"action":"insert","lines":["l"]},{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"insert","lines":["d"]}],[{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"remove","lines":["t"],"id":150},{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"remove","lines":["n"]},{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"remove","lines":["u"]},{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"remove","lines":["o"]},{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"remove","lines":["C"]}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["F"],"id":151},{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":["i"]},{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["e"]},{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["l"]},{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["d"]}],[{"start":{"row":26,"column":0},"end":{"row":42,"column":7},"action":"insert","lines":["var directionCount = $(\".direction\").length;","    /* add new cloned item */","    $(\".add-direction\").on(\"click\", function () {","        /* clone and remove existing values */","        $(\".new-direction:first\").clone().insertBefore(\".add-direction\").find(\"input[type='text'], select, textarea\").val(\"\");","        /* increase counter so original direction is never removed */","        directionCount += 1;","    });","    /* delete last cloned item */","    $(\".remove-direction\").on(\"click\", function () {","        if (directionCount > 1) {","            /* only remove the :last item */","            $(this).siblings(\".new-direction:last\").remove();","            /* ensure original direction line never gets deleted */","            directionCount -= 1;","        }","    });"],"id":152}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":18},"action":"remove","lines":["directionCount"],"id":153},{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["m"]},{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":["e"]},{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["t"]},{"start":{"row":26,"column":7},"end":{"row":26,"column":8},"action":"insert","lines":["h"]},{"start":{"row":26,"column":8},"end":{"row":26,"column":9},"action":"insert","lines":["o"]},{"start":{"row":26,"column":9},"end":{"row":26,"column":10},"action":"insert","lines":["d"]}],[{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"insert","lines":["F"],"id":154},{"start":{"row":26,"column":11},"end":{"row":26,"column":12},"action":"insert","lines":["i"]},{"start":{"row":26,"column":12},"end":{"row":26,"column":13},"action":"insert","lines":["e"]},{"start":{"row":26,"column":13},"end":{"row":26,"column":14},"action":"insert","lines":["l"]},{"start":{"row":26,"column":14},"end":{"row":26,"column":15},"action":"insert","lines":["d"]}],[{"start":{"row":26,"column":22},"end":{"row":26,"column":31},"action":"remove","lines":["direction"],"id":155},{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["m"]},{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["e"]},{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["t"]},{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":["h"]},{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":["o"]},{"start":{"row":26,"column":27},"end":{"row":26,"column":28},"action":"insert","lines":["d"]}],[{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"remove","lines":["n"],"id":156},{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"remove","lines":["o"]},{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"remove","lines":["i"]},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"remove","lines":["t"]},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"remove","lines":["c"]},{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"remove","lines":["e"]},{"start":{"row":28,"column":14},"end":{"row":28,"column":15},"action":"remove","lines":["r"]},{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"remove","lines":["i"]},{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"remove","lines":["d"]}],[{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"insert","lines":["m"],"id":157},{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"insert","lines":["e"]},{"start":{"row":28,"column":14},"end":{"row":28,"column":15},"action":"insert","lines":["t"]},{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"insert","lines":["h"]},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["o"]},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["d"]}],[{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"remove","lines":["n"],"id":158},{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"remove","lines":["o"]},{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"remove","lines":["i"]},{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"remove","lines":["t"]},{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"remove","lines":["c"]},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"remove","lines":["e"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"remove","lines":["r"]},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"remove","lines":["i"]},{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"remove","lines":["d"]}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["m"],"id":159},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["e"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["t"]},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["h"]},{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"insert","lines":["o"]},{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["d"]}],[{"start":{"row":30,"column":66},"end":{"row":30,"column":67},"action":"remove","lines":["n"],"id":160},{"start":{"row":30,"column":65},"end":{"row":30,"column":66},"action":"remove","lines":["o"]},{"start":{"row":30,"column":64},"end":{"row":30,"column":65},"action":"remove","lines":["i"]},{"start":{"row":30,"column":63},"end":{"row":30,"column":64},"action":"remove","lines":["t"]},{"start":{"row":30,"column":62},"end":{"row":30,"column":63},"action":"remove","lines":["c"]},{"start":{"row":30,"column":61},"end":{"row":30,"column":62},"action":"remove","lines":["e"]},{"start":{"row":30,"column":60},"end":{"row":30,"column":61},"action":"remove","lines":["r"]},{"start":{"row":30,"column":59},"end":{"row":30,"column":60},"action":"remove","lines":["i"]},{"start":{"row":30,"column":58},"end":{"row":30,"column":59},"action":"remove","lines":["d"]}],[{"start":{"row":30,"column":58},"end":{"row":30,"column":59},"action":"insert","lines":["m"],"id":161},{"start":{"row":30,"column":59},"end":{"row":30,"column":60},"action":"insert","lines":["e"]},{"start":{"row":30,"column":60},"end":{"row":30,"column":61},"action":"insert","lines":["t"]},{"start":{"row":30,"column":61},"end":{"row":30,"column":62},"action":"insert","lines":["h"]}],[{"start":{"row":30,"column":62},"end":{"row":30,"column":63},"action":"insert","lines":["o"],"id":162},{"start":{"row":30,"column":63},"end":{"row":30,"column":64},"action":"insert","lines":["d"]}],[{"start":{"row":32,"column":8},"end":{"row":32,"column":22},"action":"remove","lines":["directionCount"],"id":163},{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"insert","lines":["m"]},{"start":{"row":32,"column":9},"end":{"row":32,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":32,"column":10},"end":{"row":32,"column":11},"action":"insert","lines":["t"],"id":164},{"start":{"row":32,"column":11},"end":{"row":32,"column":12},"action":"insert","lines":["h"]},{"start":{"row":32,"column":12},"end":{"row":32,"column":13},"action":"insert","lines":["o"]},{"start":{"row":32,"column":13},"end":{"row":32,"column":14},"action":"insert","lines":["d"]}],[{"start":{"row":32,"column":14},"end":{"row":32,"column":15},"action":"insert","lines":["F"],"id":165},{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"insert","lines":["i"]},{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["e"]},{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"insert","lines":["l"]},{"start":{"row":32,"column":18},"end":{"row":32,"column":19},"action":"insert","lines":["d"]}],[{"start":{"row":35,"column":23},"end":{"row":35,"column":24},"action":"remove","lines":["n"],"id":166},{"start":{"row":35,"column":22},"end":{"row":35,"column":23},"action":"remove","lines":["o"]},{"start":{"row":35,"column":21},"end":{"row":35,"column":22},"action":"remove","lines":["i"]},{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"remove","lines":["t"]},{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"remove","lines":["c"]},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"remove","lines":["e"]},{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"remove","lines":["r"]},{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"remove","lines":["i"]},{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"remove","lines":["d"]}],[{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"insert","lines":["m"],"id":167},{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"insert","lines":["e"]},{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"insert","lines":["t"]},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["h"]},{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"insert","lines":["o"]},{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"insert","lines":["d"]}],[{"start":{"row":36,"column":12},"end":{"row":36,"column":26},"action":"remove","lines":["directionCount"],"id":168}],[{"start":{"row":36,"column":13},"end":{"row":36,"column":24},"action":"insert","lines":["methodField"],"id":169}],[{"start":{"row":40,"column":12},"end":{"row":40,"column":26},"action":"remove","lines":["directionCount"],"id":170},{"start":{"row":40,"column":12},"end":{"row":40,"column":23},"action":"insert","lines":["methodField"]}],[{"start":{"row":38,"column":43},"end":{"row":38,"column":44},"action":"remove","lines":["n"],"id":171},{"start":{"row":38,"column":42},"end":{"row":38,"column":43},"action":"remove","lines":["o"]},{"start":{"row":38,"column":41},"end":{"row":38,"column":42},"action":"remove","lines":["i"]},{"start":{"row":38,"column":40},"end":{"row":38,"column":41},"action":"remove","lines":["t"]},{"start":{"row":38,"column":39},"end":{"row":38,"column":40},"action":"remove","lines":["c"]},{"start":{"row":38,"column":38},"end":{"row":38,"column":39},"action":"remove","lines":["e"]},{"start":{"row":38,"column":37},"end":{"row":38,"column":38},"action":"remove","lines":["r"]},{"start":{"row":38,"column":36},"end":{"row":38,"column":37},"action":"remove","lines":["i"]}],[{"start":{"row":38,"column":35},"end":{"row":38,"column":36},"action":"remove","lines":["d"],"id":172}],[{"start":{"row":38,"column":35},"end":{"row":38,"column":36},"action":"insert","lines":["m"],"id":173},{"start":{"row":38,"column":36},"end":{"row":38,"column":37},"action":"insert","lines":["e"]},{"start":{"row":38,"column":37},"end":{"row":38,"column":38},"action":"insert","lines":["t"]},{"start":{"row":38,"column":38},"end":{"row":38,"column":39},"action":"insert","lines":["h"]},{"start":{"row":38,"column":39},"end":{"row":38,"column":40},"action":"insert","lines":["o"]},{"start":{"row":38,"column":40},"end":{"row":38,"column":41},"action":"insert","lines":["d"]}],[{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"remove","lines":["d"],"id":174},{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"remove","lines":["o"]},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"remove","lines":["h"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"remove","lines":["t"]},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"remove","lines":["e"]},{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"remove","lines":["m"]}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["s"],"id":175},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["t"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["e"]},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["p"]}],[{"start":{"row":26,"column":28},"end":{"row":26,"column":29},"action":"insert","lines":["s"],"id":176}],[{"start":{"row":36,"column":24},"end":{"row":36,"column":25},"action":"insert","lines":[" "],"id":177}],[{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"remove","lines":["."],"id":178}],[{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"insert","lines":["#"],"id":179}],[{"start":{"row":35,"column":7},"end":{"row":35,"column":8},"action":"remove","lines":["."],"id":180}],[{"start":{"row":35,"column":7},"end":{"row":35,"column":8},"action":"insert","lines":["#"],"id":181}],[{"start":{"row":38,"column":40},"end":{"row":38,"column":41},"action":"remove","lines":["d"],"id":182},{"start":{"row":38,"column":39},"end":{"row":38,"column":40},"action":"remove","lines":["o"]},{"start":{"row":38,"column":38},"end":{"row":38,"column":39},"action":"remove","lines":["h"]},{"start":{"row":38,"column":37},"end":{"row":38,"column":38},"action":"remove","lines":["t"]},{"start":{"row":38,"column":36},"end":{"row":38,"column":37},"action":"remove","lines":["e"]},{"start":{"row":38,"column":35},"end":{"row":38,"column":36},"action":"remove","lines":["m"]}],[{"start":{"row":38,"column":35},"end":{"row":38,"column":36},"action":"insert","lines":["s"],"id":183},{"start":{"row":38,"column":36},"end":{"row":38,"column":37},"action":"insert","lines":["t"]},{"start":{"row":38,"column":37},"end":{"row":38,"column":38},"action":"insert","lines":["e"]},{"start":{"row":38,"column":38},"end":{"row":38,"column":39},"action":"insert","lines":["p"]}],[{"start":{"row":30,"column":51},"end":{"row":30,"column":52},"action":"remove","lines":["."],"id":184}],[{"start":{"row":30,"column":51},"end":{"row":30,"column":52},"action":"insert","lines":["#"],"id":185}],[{"start":{"row":26,"column":28},"end":{"row":26,"column":29},"action":"remove","lines":["s"],"id":186}],[{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":["a"],"id":187}],[{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"remove","lines":["a"],"id":188}]]},"ace":{"folds":[],"scrolltop":60,"scrollleft":0,"selection":{"start":{"row":14,"column":7},"end":{"row":14,"column":7},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":2,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1567536456916,"hash":"14f8e4b0c505dfe4bbaaac46b2393bf362b1ff72"}