(function() {
    "use strict";

    function calculate() {
        var table = document.getElementById("caltab");

        for (var i = 0; i < 8; i++) {
            var tr = document.createElement("TR");
            var tdx = document.createElement("TD");
            var tdxval = document.createTextNode(i);
            tdx.appendChild(tdxval);
            var tdx2 = document.createElement("TD");
            var tdx2val = document.createTextNode(Math.pow(2, i));
            tdx2.appendChild(tdx2val);
            tr.appendChild(tdx);
            tr.appendChild(tdx2);
            table.appendChild(tr);
        }
    }

    window.addEventListener('load', calculate, false);
})();