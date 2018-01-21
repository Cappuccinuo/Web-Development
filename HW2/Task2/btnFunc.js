(function() {
    "use strict";

    function btnFunc() {
        var btn1 = document.getElementById("btn1");
        var btn2 = document.getElementById("btn2");
        var btn3 = document.getElementById("btn3");
        btn1.addEventListener("click", showAlert, false);
        btn2.addEventListener("click", increase, false);
        btn3.addEventListener("click", append, false);
    }

    function showAlert() {
        alert(document.getElementById("number").innerHTML);
    }

    function increase() {
        var number = document.getElementById("number");
        document.getElementById("number").innerHTML = parseInt(number.innerHTML) + 1;
    }

    function append() {
        var node = document.createElement("P");
        var currentNum = document.getElementById("number");
        var textNode = document.createTextNode(currentNum.innerHTML);
        node.appendChild(textNode);
        document.body.appendChild(node);
    }
    window.addEventListener('load', btnFunc, false);
})();