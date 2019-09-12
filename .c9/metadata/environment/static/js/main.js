{"filter":false,"title":"main.js","tooltip":"/static/js/main.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":16,"column":26},"end":{"row":16,"column":27},"action":"remove","lines":["t"],"id":100},{"start":{"row":16,"column":25},"end":{"row":16,"column":26},"action":"remove","lines":["n"]},{"start":{"row":16,"column":24},"end":{"row":16,"column":25},"action":"remove","lines":["u"]},{"start":{"row":16,"column":23},"end":{"row":16,"column":24},"action":"remove","lines":["o"]},{"start":{"row":16,"column":22},"end":{"row":16,"column":23},"action":"remove","lines":["d"]}],[{"start":{"row":16,"column":22},"end":{"row":16,"column":23},"action":"insert","lines":["d"],"id":101}],[{"start":{"row":12,"column":8},"end":{"row":12,"column":46},"action":"remove","lines":["/* clone and remove existing values */"],"id":102},{"start":{"row":12,"column":4},"end":{"row":12,"column":8},"action":"remove","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":11,"column":42},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":13,"column":33},"end":{"row":14,"column":70},"action":"remove","lines":["","        /* increase counter so original ingredient is never removed */"],"id":128}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"remove","lines":["-"],"id":129}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["_"],"id":130}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"remove","lines":["_"],"id":131}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["-"],"id":132}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"remove","lines":["-"],"id":133}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["_"],"id":134}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":62},"action":"remove","lines":["/* 'destroy' is required to clone <select> elements */"],"id":135},{"start":{"row":10,"column":4},"end":{"row":10,"column":8},"action":"remove","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"remove","lines":["    "]},{"start":{"row":9,"column":50},"end":{"row":10,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"remove","lines":["."],"id":136}],[{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"insert","lines":["#"],"id":137}],[{"start":{"row":11,"column":61},"end":{"row":11,"column":62},"action":"remove","lines":["-"],"id":138}],[{"start":{"row":11,"column":61},"end":{"row":11,"column":62},"action":"insert","lines":["_"],"id":139}],[{"start":{"row":11,"column":57},"end":{"row":11,"column":58},"action":"remove","lines":["."],"id":140}],[{"start":{"row":11,"column":57},"end":{"row":11,"column":58},"action":"insert","lines":["#"],"id":141}],[{"start":{"row":16,"column":1},"end":{"row":23,"column":7},"action":"insert","lines":["$(\".remove-ingredient\").on(\"click\", function () {","        if (ingredientCount > 1) {","            /* only remove the :last item */","            $(this).siblings(\".new-ingredient:last\").remove();","            /* ensure original ingredient line never gets deleted */","            ingredientCount -= 1;","        }","    });"],"id":142}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"remove","lines":["."],"id":143}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["#"],"id":144}],[{"start":{"row":16,"column":11},"end":{"row":16,"column":12},"action":"remove","lines":["-"],"id":145}],[{"start":{"row":16,"column":11},"end":{"row":16,"column":12},"action":"insert","lines":["_"],"id":146}],[{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"insert","lines":[" "],"id":147},{"start":{"row":16,"column":2},"end":{"row":16,"column":3},"action":"insert","lines":[" "]},{"start":{"row":16,"column":3},"end":{"row":16,"column":4},"action":"insert","lines":[" "]}],[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"remove","lines":[" "],"id":148},{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"remove","lines":["t"]},{"start":{"row":21,"column":25},"end":{"row":21,"column":26},"action":"remove","lines":["n"]},{"start":{"row":21,"column":24},"end":{"row":21,"column":25},"action":"remove","lines":["u"]},{"start":{"row":21,"column":23},"end":{"row":21,"column":24},"action":"remove","lines":["o"]},{"start":{"row":21,"column":22},"end":{"row":21,"column":23},"action":"remove","lines":["C"]}],[{"start":{"row":21,"column":22},"end":{"row":21,"column":23},"action":"insert","lines":["F"],"id":149},{"start":{"row":21,"column":23},"end":{"row":21,"column":24},"action":"insert","lines":["i"]},{"start":{"row":21,"column":24},"end":{"row":21,"column":25},"action":"insert","lines":["e"]},{"start":{"row":21,"column":25},"end":{"row":21,"column":26},"action":"insert","lines":["l"]},{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"insert","lines":["d"]}],[{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"remove","lines":["t"],"id":150},{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"remove","lines":["n"]},{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"remove","lines":["u"]},{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"remove","lines":["o"]},{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"remove","lines":["C"]}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["F"],"id":151},{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":["i"]},{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["e"]},{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["l"]},{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["d"]}],[{"start":{"row":26,"column":0},"end":{"row":42,"column":7},"action":"insert","lines":["var directionCount = $(\".direction\").length;","    /* add new cloned item */","    $(\".add-direction\").on(\"click\", function () {","        /* clone and remove existing values */","        $(\".new-direction:first\").clone().insertBefore(\".add-direction\").find(\"input[type='text'], select, textarea\").val(\"\");","        /* increase counter so original direction is never removed */","        directionCount += 1;","    });","    /* delete last cloned item */","    $(\".remove-direction\").on(\"click\", function () {","        if (directionCount > 1) {","            /* only remove the :last item */","            $(this).siblings(\".new-direction:last\").remove();","            /* ensure original direction line never gets deleted */","            directionCount -= 1;","        }","    });"],"id":152}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":18},"action":"remove","lines":["directionCount"],"id":153},{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["m"]},{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":["e"]},{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["t"]},{"start":{"row":26,"column":7},"end":{"row":26,"column":8},"action":"insert","lines":["h"]},{"start":{"row":26,"column":8},"end":{"row":26,"column":9},"action":"insert","lines":["o"]},{"start":{"row":26,"column":9},"end":{"row":26,"column":10},"action":"insert","lines":["d"]}],[{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"insert","lines":["F"],"id":154},{"start":{"row":26,"column":11},"end":{"row":26,"column":12},"action":"insert","lines":["i"]},{"start":{"row":26,"column":12},"end":{"row":26,"column":13},"action":"insert","lines":["e"]},{"start":{"row":26,"column":13},"end":{"row":26,"column":14},"action":"insert","lines":["l"]},{"start":{"row":26,"column":14},"end":{"row":26,"column":15},"action":"insert","lines":["d"]}],[{"start":{"row":26,"column":22},"end":{"row":26,"column":31},"action":"remove","lines":["direction"],"id":155},{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["m"]},{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["e"]},{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["t"]},{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":["h"]},{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":["o"]},{"start":{"row":26,"column":27},"end":{"row":26,"column":28},"action":"insert","lines":["d"]}],[{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"remove","lines":["n"],"id":156},{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"remove","lines":["o"]},{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"remove","lines":["i"]},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"remove","lines":["t"]},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"remove","lines":["c"]},{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"remove","lines":["e"]},{"start":{"row":28,"column":14},"end":{"row":28,"column":15},"action":"remove","lines":["r"]},{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"remove","lines":["i"]},{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"remove","lines":["d"]}],[{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"insert","lines":["m"],"id":157},{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"insert","lines":["e"]},{"start":{"row":28,"column":14},"end":{"row":28,"column":15},"action":"insert","lines":["t"]},{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"insert","lines":["h"]},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["o"]},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["d"]}],[{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"remove","lines":["n"],"id":158},{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"remove","lines":["o"]},{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"remove","lines":["i"]},{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"remove","lines":["t"]},{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"remove","lines":["c"]},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"remove","lines":["e"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"remove","lines":["r"]},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"remove","lines":["i"]},{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"remove","lines":["d"]}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["m"],"id":159},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["e"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["t"]},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["h"]},{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"insert","lines":["o"]},{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["d"]}],[{"start":{"row":30,"column":66},"end":{"row":30,"column":67},"action":"remove","lines":["n"],"id":160},{"start":{"row":30,"column":65},"end":{"row":30,"column":66},"action":"remove","lines":["o"]},{"start":{"row":30,"column":64},"end":{"row":30,"column":65},"action":"remove","lines":["i"]},{"start":{"row":30,"column":63},"end":{"row":30,"column":64},"action":"remove","lines":["t"]},{"start":{"row":30,"column":62},"end":{"row":30,"column":63},"action":"remove","lines":["c"]},{"start":{"row":30,"column":61},"end":{"row":30,"column":62},"action":"remove","lines":["e"]},{"start":{"row":30,"column":60},"end":{"row":30,"column":61},"action":"remove","lines":["r"]},{"start":{"row":30,"column":59},"end":{"row":30,"column":60},"action":"remove","lines":["i"]},{"start":{"row":30,"column":58},"end":{"row":30,"column":59},"action":"remove","lines":["d"]}],[{"start":{"row":30,"column":58},"end":{"row":30,"column":59},"action":"insert","lines":["m"],"id":161},{"start":{"row":30,"column":59},"end":{"row":30,"column":60},"action":"insert","lines":["e"]},{"start":{"row":30,"column":60},"end":{"row":30,"column":61},"action":"insert","lines":["t"]},{"start":{"row":30,"column":61},"end":{"row":30,"column":62},"action":"insert","lines":["h"]}],[{"start":{"row":30,"column":62},"end":{"row":30,"column":63},"action":"insert","lines":["o"],"id":162},{"start":{"row":30,"column":63},"end":{"row":30,"column":64},"action":"insert","lines":["d"]}],[{"start":{"row":32,"column":8},"end":{"row":32,"column":22},"action":"remove","lines":["directionCount"],"id":163},{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"insert","lines":["m"]},{"start":{"row":32,"column":9},"end":{"row":32,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":32,"column":10},"end":{"row":32,"column":11},"action":"insert","lines":["t"],"id":164},{"start":{"row":32,"column":11},"end":{"row":32,"column":12},"action":"insert","lines":["h"]},{"start":{"row":32,"column":12},"end":{"row":32,"column":13},"action":"insert","lines":["o"]},{"start":{"row":32,"column":13},"end":{"row":32,"column":14},"action":"insert","lines":["d"]}],[{"start":{"row":32,"column":14},"end":{"row":32,"column":15},"action":"insert","lines":["F"],"id":165},{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"insert","lines":["i"]},{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["e"]},{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"insert","lines":["l"]},{"start":{"row":32,"column":18},"end":{"row":32,"column":19},"action":"insert","lines":["d"]}],[{"start":{"row":35,"column":23},"end":{"row":35,"column":24},"action":"remove","lines":["n"],"id":166},{"start":{"row":35,"column":22},"end":{"row":35,"column":23},"action":"remove","lines":["o"]},{"start":{"row":35,"column":21},"end":{"row":35,"column":22},"action":"remove","lines":["i"]},{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"remove","lines":["t"]},{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"remove","lines":["c"]},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"remove","lines":["e"]},{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"remove","lines":["r"]},{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"remove","lines":["i"]},{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"remove","lines":["d"]}],[{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"insert","lines":["m"],"id":167},{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"insert","lines":["e"]},{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"insert","lines":["t"]},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["h"]},{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"insert","lines":["o"]},{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"insert","lines":["d"]}],[{"start":{"row":36,"column":12},"end":{"row":36,"column":26},"action":"remove","lines":["directionCount"],"id":168}],[{"start":{"row":36,"column":13},"end":{"row":36,"column":24},"action":"insert","lines":["methodField"],"id":169}],[{"start":{"row":40,"column":12},"end":{"row":40,"column":26},"action":"remove","lines":["directionCount"],"id":170},{"start":{"row":40,"column":12},"end":{"row":40,"column":23},"action":"insert","lines":["methodField"]}],[{"start":{"row":38,"column":43},"end":{"row":38,"column":44},"action":"remove","lines":["n"],"id":171},{"start":{"row":38,"column":42},"end":{"row":38,"column":43},"action":"remove","lines":["o"]},{"start":{"row":38,"column":41},"end":{"row":38,"column":42},"action":"remove","lines":["i"]},{"start":{"row":38,"column":40},"end":{"row":38,"column":41},"action":"remove","lines":["t"]},{"start":{"row":38,"column":39},"end":{"row":38,"column":40},"action":"remove","lines":["c"]},{"start":{"row":38,"column":38},"end":{"row":38,"column":39},"action":"remove","lines":["e"]},{"start":{"row":38,"column":37},"end":{"row":38,"column":38},"action":"remove","lines":["r"]},{"start":{"row":38,"column":36},"end":{"row":38,"column":37},"action":"remove","lines":["i"]}],[{"start":{"row":38,"column":35},"end":{"row":38,"column":36},"action":"remove","lines":["d"],"id":172}],[{"start":{"row":38,"column":35},"end":{"row":38,"column":36},"action":"insert","lines":["m"],"id":173},{"start":{"row":38,"column":36},"end":{"row":38,"column":37},"action":"insert","lines":["e"]},{"start":{"row":38,"column":37},"end":{"row":38,"column":38},"action":"insert","lines":["t"]},{"start":{"row":38,"column":38},"end":{"row":38,"column":39},"action":"insert","lines":["h"]},{"start":{"row":38,"column":39},"end":{"row":38,"column":40},"action":"insert","lines":["o"]},{"start":{"row":38,"column":40},"end":{"row":38,"column":41},"action":"insert","lines":["d"]}],[{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"remove","lines":["d"],"id":174},{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"remove","lines":["o"]},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"remove","lines":["h"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"remove","lines":["t"]},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"remove","lines":["e"]},{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"remove","lines":["m"]}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["s"],"id":175},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["t"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["e"]},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["p"]}],[{"start":{"row":26,"column":28},"end":{"row":26,"column":29},"action":"insert","lines":["s"],"id":176}],[{"start":{"row":36,"column":24},"end":{"row":36,"column":25},"action":"insert","lines":[" "],"id":177}],[{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"remove","lines":["."],"id":178}],[{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"insert","lines":["#"],"id":179}],[{"start":{"row":35,"column":7},"end":{"row":35,"column":8},"action":"remove","lines":["."],"id":180}],[{"start":{"row":35,"column":7},"end":{"row":35,"column":8},"action":"insert","lines":["#"],"id":181}],[{"start":{"row":38,"column":40},"end":{"row":38,"column":41},"action":"remove","lines":["d"],"id":182},{"start":{"row":38,"column":39},"end":{"row":38,"column":40},"action":"remove","lines":["o"]},{"start":{"row":38,"column":38},"end":{"row":38,"column":39},"action":"remove","lines":["h"]},{"start":{"row":38,"column":37},"end":{"row":38,"column":38},"action":"remove","lines":["t"]},{"start":{"row":38,"column":36},"end":{"row":38,"column":37},"action":"remove","lines":["e"]},{"start":{"row":38,"column":35},"end":{"row":38,"column":36},"action":"remove","lines":["m"]}],[{"start":{"row":38,"column":35},"end":{"row":38,"column":36},"action":"insert","lines":["s"],"id":183},{"start":{"row":38,"column":36},"end":{"row":38,"column":37},"action":"insert","lines":["t"]},{"start":{"row":38,"column":37},"end":{"row":38,"column":38},"action":"insert","lines":["e"]},{"start":{"row":38,"column":38},"end":{"row":38,"column":39},"action":"insert","lines":["p"]}],[{"start":{"row":30,"column":51},"end":{"row":30,"column":52},"action":"remove","lines":["."],"id":184}],[{"start":{"row":30,"column":51},"end":{"row":30,"column":52},"action":"insert","lines":["#"],"id":185}],[{"start":{"row":26,"column":28},"end":{"row":26,"column":29},"action":"remove","lines":["s"],"id":186}],[{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":["a"],"id":187}],[{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"remove","lines":["a"],"id":188}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":10},"action":"remove","lines":["method"],"id":189},{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["P"]}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"remove","lines":["P"],"id":190}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["r"],"id":191},{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":["e"]}],[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"remove","lines":["e"],"id":192},{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"remove","lines":["r"]}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["P"],"id":193}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"remove","lines":["P"],"id":194}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["p"],"id":195},{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":["r"]},{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["e"]},{"start":{"row":26,"column":7},"end":{"row":26,"column":8},"action":"insert","lines":["p"]},{"start":{"row":26,"column":8},"end":{"row":26,"column":9},"action":"insert","lines":["a"]}],[{"start":{"row":26,"column":9},"end":{"row":26,"column":10},"action":"insert","lines":["r"],"id":196},{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"insert","lines":["a"]},{"start":{"row":26,"column":11},"end":{"row":26,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":26,"column":12},"end":{"row":26,"column":13},"action":"insert","lines":["i"],"id":197},{"start":{"row":26,"column":13},"end":{"row":26,"column":14},"action":"insert","lines":["o"]},{"start":{"row":26,"column":14},"end":{"row":26,"column":15},"action":"insert","lines":["n"]}],[{"start":{"row":40,"column":12},"end":{"row":40,"column":18},"action":"remove","lines":["method"],"id":198},{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":["p"]},{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"insert","lines":["r"]},{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"insert","lines":["e"]},{"start":{"row":40,"column":15},"end":{"row":40,"column":16},"action":"insert","lines":["p"]},{"start":{"row":40,"column":16},"end":{"row":40,"column":17},"action":"insert","lines":["a"]},{"start":{"row":40,"column":17},"end":{"row":40,"column":18},"action":"insert","lines":["r"]},{"start":{"row":40,"column":18},"end":{"row":40,"column":19},"action":"insert","lines":["a"]}],[{"start":{"row":40,"column":19},"end":{"row":40,"column":20},"action":"insert","lines":["t"],"id":199},{"start":{"row":40,"column":20},"end":{"row":40,"column":21},"action":"insert","lines":["i"]},{"start":{"row":40,"column":21},"end":{"row":40,"column":22},"action":"insert","lines":["o"]},{"start":{"row":40,"column":22},"end":{"row":40,"column":23},"action":"insert","lines":["n"]}],[{"start":{"row":26,"column":27},"end":{"row":26,"column":33},"action":"remove","lines":["method"],"id":200},{"start":{"row":26,"column":27},"end":{"row":26,"column":28},"action":"insert","lines":["p"]},{"start":{"row":26,"column":28},"end":{"row":26,"column":29},"action":"insert","lines":["r"]},{"start":{"row":26,"column":29},"end":{"row":26,"column":30},"action":"insert","lines":["e"]},{"start":{"row":26,"column":30},"end":{"row":26,"column":31},"action":"insert","lines":["p"]},{"start":{"row":26,"column":31},"end":{"row":26,"column":32},"action":"insert","lines":["a"]},{"start":{"row":26,"column":32},"end":{"row":26,"column":33},"action":"insert","lines":["r"]},{"start":{"row":26,"column":33},"end":{"row":26,"column":34},"action":"insert","lines":["a"]}],[{"start":{"row":26,"column":34},"end":{"row":26,"column":35},"action":"insert","lines":["t"],"id":201},{"start":{"row":26,"column":35},"end":{"row":26,"column":36},"action":"insert","lines":["i"]},{"start":{"row":26,"column":36},"end":{"row":26,"column":37},"action":"insert","lines":["o"]},{"start":{"row":26,"column":37},"end":{"row":26,"column":38},"action":"insert","lines":["n"]}],[{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"remove","lines":["d"],"id":202},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"remove","lines":["o"]},{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"remove","lines":["h"]},{"start":{"row":28,"column":14},"end":{"row":28,"column":15},"action":"remove","lines":["t"]},{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"remove","lines":["e"]},{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"remove","lines":["m"]}],[{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"insert","lines":["s"],"id":203},{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"insert","lines":["t"]},{"start":{"row":28,"column":14},"end":{"row":28,"column":15},"action":"insert","lines":["e"]},{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"insert","lines":["p"]}],[{"start":{"row":30,"column":61},"end":{"row":30,"column":62},"action":"remove","lines":["d"],"id":204},{"start":{"row":30,"column":60},"end":{"row":30,"column":61},"action":"remove","lines":["o"]},{"start":{"row":30,"column":59},"end":{"row":30,"column":60},"action":"remove","lines":["h"]},{"start":{"row":30,"column":58},"end":{"row":30,"column":59},"action":"remove","lines":["t"]},{"start":{"row":30,"column":57},"end":{"row":30,"column":58},"action":"remove","lines":["e"]},{"start":{"row":30,"column":56},"end":{"row":30,"column":57},"action":"remove","lines":["m"]}],[{"start":{"row":30,"column":56},"end":{"row":30,"column":57},"action":"insert","lines":["s"],"id":205},{"start":{"row":30,"column":57},"end":{"row":30,"column":58},"action":"insert","lines":["t"]},{"start":{"row":30,"column":58},"end":{"row":30,"column":59},"action":"insert","lines":["e"]}],[{"start":{"row":30,"column":59},"end":{"row":30,"column":60},"action":"insert","lines":["p"],"id":206}],[{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"remove","lines":["d"],"id":207},{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"remove","lines":["o"]},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"remove","lines":["h"]},{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"remove","lines":["t"]},{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"remove","lines":["e"]},{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"remove","lines":["m"]}],[{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"insert","lines":["s"],"id":208},{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"insert","lines":["t"]},{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"insert","lines":["e"]},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["p"]}],[{"start":{"row":36,"column":18},"end":{"row":36,"column":19},"action":"remove","lines":["d"],"id":209},{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"remove","lines":["o"]},{"start":{"row":36,"column":16},"end":{"row":36,"column":17},"action":"remove","lines":["h"]},{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"remove","lines":["t"]},{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"remove","lines":["e"]},{"start":{"row":36,"column":13},"end":{"row":36,"column":14},"action":"remove","lines":["m"]}],[{"start":{"row":36,"column":13},"end":{"row":36,"column":14},"action":"insert","lines":["p"],"id":210},{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"insert","lines":["r"]},{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"insert","lines":["e"]},{"start":{"row":36,"column":16},"end":{"row":36,"column":17},"action":"insert","lines":["p"]},{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"insert","lines":["a"]},{"start":{"row":36,"column":18},"end":{"row":36,"column":19},"action":"insert","lines":["r"]},{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"insert","lines":["a"]}],[{"start":{"row":36,"column":20},"end":{"row":36,"column":21},"action":"insert","lines":["t"],"id":211},{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"insert","lines":["i"]},{"start":{"row":36,"column":22},"end":{"row":36,"column":23},"action":"insert","lines":["o"]},{"start":{"row":36,"column":23},"end":{"row":36,"column":24},"action":"insert","lines":["n"]}],[{"start":{"row":32,"column":7},"end":{"row":32,"column":14},"action":"remove","lines":[" method"],"id":212},{"start":{"row":32,"column":7},"end":{"row":32,"column":8},"action":"insert","lines":["p"]},{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"insert","lines":["r"]},{"start":{"row":32,"column":9},"end":{"row":32,"column":10},"action":"insert","lines":["e"]},{"start":{"row":32,"column":10},"end":{"row":32,"column":11},"action":"insert","lines":["p"]}],[{"start":{"row":32,"column":11},"end":{"row":32,"column":12},"action":"insert","lines":["a"],"id":213},{"start":{"row":32,"column":12},"end":{"row":32,"column":13},"action":"insert","lines":["r"]},{"start":{"row":32,"column":13},"end":{"row":32,"column":14},"action":"insert","lines":["a"]},{"start":{"row":32,"column":14},"end":{"row":32,"column":15},"action":"insert","lines":["t"]},{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"insert","lines":["i"]},{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["o"]},{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"insert","lines":["n"]}],[{"start":{"row":26,"column":27},"end":{"row":26,"column":38},"action":"remove","lines":["preparation"],"id":214},{"start":{"row":26,"column":27},"end":{"row":26,"column":43},"action":"insert","lines":["preparation-next"]}],[{"start":{"row":26,"column":42},"end":{"row":26,"column":43},"action":"remove","lines":["t"],"id":215},{"start":{"row":26,"column":41},"end":{"row":26,"column":42},"action":"remove","lines":["x"]},{"start":{"row":26,"column":40},"end":{"row":26,"column":41},"action":"remove","lines":["e"]},{"start":{"row":26,"column":39},"end":{"row":26,"column":40},"action":"remove","lines":["n"]},{"start":{"row":26,"column":38},"end":{"row":26,"column":39},"action":"remove","lines":["-"]}],[{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"remove","lines":["-"],"id":216}],[{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"insert","lines":["_"],"id":217}],[{"start":{"row":35,"column":14},"end":{"row":35,"column":15},"action":"remove","lines":["-"],"id":218},{"start":{"row":35,"column":14},"end":{"row":35,"column":15},"action":"insert","lines":["="]},{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"insert","lines":["_"]}],[{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"remove","lines":["_"],"id":219},{"start":{"row":35,"column":14},"end":{"row":35,"column":15},"action":"remove","lines":["="]}],[{"start":{"row":35,"column":14},"end":{"row":35,"column":15},"action":"insert","lines":["_"],"id":220}],[{"start":{"row":30,"column":55},"end":{"row":30,"column":56},"action":"remove","lines":["-"],"id":221}],[{"start":{"row":30,"column":55},"end":{"row":30,"column":56},"action":"insert","lines":["_"],"id":222}],[{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"remove","lines":[" "],"id":223}],[{"start":{"row":29,"column":8},"end":{"row":29,"column":46},"action":"remove","lines":["/* clone and remove existing values */"],"id":224},{"start":{"row":29,"column":8},"end":{"row":29,"column":42},"action":"insert","lines":["$(\"select\").formSelect(\"destroy\");"]}],[{"start":{"row":29,"column":7},"end":{"row":29,"column":42},"action":"remove","lines":[" $(\"select\").formSelect(\"destroy\");"],"id":225},{"start":{"row":29,"column":6},"end":{"row":29,"column":7},"action":"remove","lines":[" "]},{"start":{"row":29,"column":5},"end":{"row":29,"column":6},"action":"remove","lines":[" "]},{"start":{"row":29,"column":4},"end":{"row":29,"column":5},"action":"remove","lines":[" "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":4},"action":"remove","lines":["    "]},{"start":{"row":28,"column":44},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":37,"column":41},"end":{"row":37,"column":42},"action":"insert","lines":["t"],"id":233},{"start":{"row":37,"column":42},"end":{"row":37,"column":43},"action":"insert","lines":["i"]},{"start":{"row":37,"column":43},"end":{"row":37,"column":44},"action":"insert","lines":["o"]},{"start":{"row":37,"column":44},"end":{"row":37,"column":45},"action":"insert","lines":["n"]}],[{"start":{"row":37,"column":34},"end":{"row":37,"column":35},"action":"insert","lines":["p"],"id":233},{"start":{"row":37,"column":35},"end":{"row":37,"column":36},"action":"insert","lines":["r"]},{"start":{"row":37,"column":36},"end":{"row":37,"column":37},"action":"insert","lines":["e"]},{"start":{"row":37,"column":37},"end":{"row":37,"column":38},"action":"insert","lines":["p"]},{"start":{"row":37,"column":38},"end":{"row":37,"column":39},"action":"insert","lines":["a"]},{"start":{"row":37,"column":39},"end":{"row":37,"column":40},"action":"insert","lines":["r"]},{"start":{"row":37,"column":40},"end":{"row":37,"column":41},"action":"insert","lines":["a"]}],[{"start":{"row":37,"column":31},"end":{"row":37,"column":39},"action":"remove","lines":["new-step"],"id":234},{"start":{"row":37,"column":31},"end":{"row":37,"column":32},"action":"insert","lines":["a"]},{"start":{"row":37,"column":32},"end":{"row":37,"column":33},"action":"insert","lines":["d"]},{"start":{"row":37,"column":33},"end":{"row":37,"column":34},"action":"insert","lines":["d"]}],[{"start":{"row":29,"column":23},"end":{"row":29,"column":24},"action":"insert","lines":["i"],"id":235},{"start":{"row":29,"column":24},"end":{"row":29,"column":25},"action":"insert","lines":["o"]},{"start":{"row":29,"column":25},"end":{"row":29,"column":26},"action":"insert","lines":["n"]}],[{"start":{"row":29,"column":15},"end":{"row":29,"column":16},"action":"insert","lines":["p"],"id":236},{"start":{"row":29,"column":16},"end":{"row":29,"column":17},"action":"insert","lines":["r"]},{"start":{"row":29,"column":17},"end":{"row":29,"column":18},"action":"insert","lines":["e"]},{"start":{"row":29,"column":18},"end":{"row":29,"column":19},"action":"insert","lines":["p"]},{"start":{"row":29,"column":19},"end":{"row":29,"column":20},"action":"insert","lines":["a"]},{"start":{"row":29,"column":20},"end":{"row":29,"column":21},"action":"insert","lines":["r"]},{"start":{"row":29,"column":21},"end":{"row":29,"column":22},"action":"insert","lines":["a"]},{"start":{"row":29,"column":22},"end":{"row":29,"column":23},"action":"insert","lines":["t"]}],[{"start":{"row":29,"column":12},"end":{"row":29,"column":20},"action":"remove","lines":["new-step"],"id":237},{"start":{"row":29,"column":12},"end":{"row":29,"column":13},"action":"insert","lines":["a"]},{"start":{"row":29,"column":13},"end":{"row":29,"column":14},"action":"insert","lines":["d"]},{"start":{"row":29,"column":14},"end":{"row":29,"column":15},"action":"insert","lines":["d"]}]]},"ace":{"folds":[],"scrolltop":300,"scrollleft":0,"selection":{"start":{"row":34,"column":47},"end":{"row":34,"column":47},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":18,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1567923585279,"hash":"75576a0ceef2b2d30cd9b95081575b4dd9fafa8b"}