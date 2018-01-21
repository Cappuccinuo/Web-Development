(function() {
    lb = function () {
      return document.createElement("BR");
    }
    function generateBottle() {
        for (var i = 99; i > 95; i--) {
            var node = document.getElementById("bottle");
            var pNode = document.createElement("P");
            var textNode = document.createTextNode(i + " bottles of beer on the wall, " + i + " bottles of beer.");
            var nextPNode = document.createElement("P");
            var nextTextNode = document.createTextNode("Take one down and pass it arount, " + i + " bottles of beer on the wall.");
            pNode.appendChild(textNode);
            nextPNode.appendChild(nextTextNode);
            node.appendChild(pNode);
            node.appendChild(nextTextNode);
            node.appendChild(lb());
            node.appendChild(lb());
        }
        document.getElementById("bottle").appendChild(lb());
        var lastText = document.createTextNode("...");
        document.getElementById("bottle").appendChild(lastText);
    }
    window.addEventListener('load', generateBottle, false);
})();