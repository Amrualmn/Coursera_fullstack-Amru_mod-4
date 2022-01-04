(function(window){
    var kata = "Good Bye";
    var fungsibye = function (nama) {
        console.log(kata + " "+ nama);
    }
    window.fungsibye = fungsibye ;
})(window);

(function(window){
    var kata2 = "Hello";
    var fungsihello = function (nama) {
        console.log(kata2 + " "+ nama);
    }
    window.fungsihello = fungsihello ;
})(window);

(function () {
    var nama = [
        "Brad",
        "John",
        "Strange",
        "Jason",
        "Paul",
        "Cristian",
        "Steven",
        "Frank",
        "Jim",
        "Jones",
        "Bruno"
    ];

    for (var ii = 0 ; ii < nama.length; ii++) {
        var hurufdepan = nama[ii].charAt(0).toLowerCase();

        if (hurufdepan === "j") {
            fungsibye (nama[ii]);
        }
        else {
            fungsihello(nama[ii]);
        }
        }
})();