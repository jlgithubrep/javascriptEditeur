$(document).ready(function () {


    var opt = [];
    var optClass = "";

    $("#send").click(function () {
        if ($("#text").val() == "") {
            alert("Empty");
        } else {

            for (var i = 0; i < opt.length; i++) {
                optClass += opt[i] + " ";
            }

            $("#result").html($("#text").val()).attr("class", optClass);

            $("#text").val("");
        }

        $("#red").removeAttr("disabled");
        $("#blue").removeAttr("disabled");
        $("#green").removeAttr("disabled");

        opt = [];
        optClass = "";


    });

    $("#underline").click(function () {
        if (opt.includes("underline") == false) {
            opt.push("underline");
        } else {
            var index = opt.indexOf("underline");
            if (index !== -1) {
                opt.splice(index, 1);
            }
        }

        console.log(opt);

    });

    $("#italic").click(function () {
        if (opt.includes("italic") == false) {
            opt.push("italic");
        } else {
            var index = opt.indexOf("italic");
            if (index !== -1) {
                opt.splice(index, 1);
            }
        }

        console.log(opt);
    });

    $("#bold").click(function () {
        if (opt.includes("bold") == false) {
            opt.push("bold");
        } else {
            var index = opt.indexOf("bold");
            if (index !== -1) {
                opt.splice(index, 1);
            }
        }

        console.log(opt);
    });

    $("#red").click(function () {
        if (opt.includes("red") == false) {
            opt.push("red");
            $("#blue").prop("disabled", "true");
            $("#green").prop("disabled", "true");
        } else {
            var index = opt.indexOf("red");
            if (index !== -1) {
                opt.splice(index, 1);
            }
            $("#blue").removeAttr("disabled");
            $("#green").removeAttr("disabled");
        }

        console.log(opt);
    });

    $("#blue").click(function () {
        if (opt.includes("blue") == false) {
            opt.push("blue");
            $("#red").prop("disabled", "true");
            $("#green").prop("disabled", "true");
        } else {
            var index = opt.indexOf("blue");
            if (index !== -1) {
                opt.splice(index, 1);
            }
            $("#red").removeAttr("disabled");
            $("#green").removeAttr("disabled");
        }

        console.log(opt);
    });

    $("#green").click(function () {
        if (opt.includes("green") == false) {
            opt.push("green");
            $("#red").prop("disabled", "true");
            $("#blue").prop("disabled", "true");
        } else {
            var index = opt.indexOf("green");
            if (index !== -1) {
                opt.splice(index, 1);
            }
            $("#red").removeAttr("disabled");
            $("#blue").removeAttr("disabled");
        }

        console.log(opt);
    });

    $("#border").click(function () {
        if (opt.includes("border") == false) {
            opt.push("border");
        } else {
            var index = opt.indexOf("border");
            if (index !== -1) {
                opt.splice(index, 1);
            }
        }

        console.log(opt);
    });



});