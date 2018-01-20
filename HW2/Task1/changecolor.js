(function() {
    "use strict";

    function changecolor() {
        var colors = ["#2B4666", "#88B5D6", "#B8DBF2", "#C6EEF6", "#525C41", "#A3A05D", "#BEA486", "#F2D4B4"];
        var head = document.getElementById("animal");
        var split = head.innerText.split("");
        var count = 0;
        head.innerText = "";
        for (var i = 0; i < split.length; i++) {
            if (split[i] === " ") {
                var sNode = document.createElement("SPAN");
                var tNode = document.createTextNode(" ");
                sNode.appendChild(tNode);
                head.appendChild(sNode);
                continue;
            }
            var sNode = document.createElement("SPAN");
            sNode.style.color = colors[count];
            sNode.style.fontSize = "50px";
            count = count + 1;
            var tNode = document.createTextNode(split[i] + " ");
            sNode.appendChild(tNode);
            head.appendChild(sNode);
        }
    }

    window.addEventListener('load', changecolor, false);
})();
