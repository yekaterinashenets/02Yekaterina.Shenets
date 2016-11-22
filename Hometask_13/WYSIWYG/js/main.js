"use strict";

var div =framework.Get.byId("container");
div.contentEditable = true;

function highlightState(command, el) {
    if (document.queryCommandState(command)) {
        framework.addClass(el,  "selected");
    }
    else {
        framework.removeClass(el, "selected");
    }
}


var bold = framework.Get.byId("bold");
framework.event("click", bold, function () {
    document.execCommand("bold", false, null);
    highlightState("bold", bold);
} )

var italic = framework.Get.byId("italic");
framework.event("click", italic, function () {
    document.execCommand("italic", false, null);
    highlightState("italic", italic);
})

var underline = framework.Get.byId("underline");
framework.event("click", underline, function () {
    document.execCommand("underline", false, null);
    highlightState("underline", underline);
})



var fontName = framework.Get.byId("fontName");
framework.event("change", fontName, function () {
    document.execCommand("fontname", false, fontName.value);
})

var fontSize = framework.Get.byId("fontSize");
framework.event("change", fontSize, function () {
    document.execCommand("fontsize", false, +fontSize.value);
})


var horLine = framework.Get.byId("horizontalLine");
framework.event("click", horLine, function () {
    document.execCommand("inserthorizontalrule", false, null);
})

var ul = framework.Get.byId("ul");
framework.event("click", ul, function () {
    if (!document.queryCommandState("insertorderedlist")) {
        document.execCommand("insertunorderedlist", false, null);
        highlightState("insertunorderedlist", ul);
    }
})

var ol =framework.Get.byId("ol");
framework.event("click", ol, function () {
    if (!document.queryCommandState("insertunorderedlist")) {
        document.execCommand("insertorderedlist", false, null);
        highlightState("insertorderedlist", ol);
    }
})


var fontColor=framework.Get.byId("fontColor");
framework.event("change", fontColor, function () {
    document.execCommand("forecolor", false, fontColor.value);
})

var textColor=framework.Get.byId("textColor");
framework.event("change", textColor, function () {
    document.execCommand("backcolor", false, textColor.value);
})

var left=framework.Get.byId("left");
framework.event("click", left, function () {
    document.execCommand("justifyLeft", false, null);
    highlightState("justifyLeft", left);
})

var center=framework.Get.byId("center");
framework.event("click", center, function () {
    document.execCommand("justifyCenter", false, null);
    highlightState("justifyCenter", center);
})

var right=framework.Get.byId("right");
framework.event("click", right, function () {
    document.execCommand("justifyRight", false, null);
    highlightState("justifyRight", right);
})

var indent=framework.Get.byId("indent");
framework.event("click", indent, function () {
    document.execCommand("indent", false, null);
})

var outdent=framework.Get.byId("outdent");
framework.event("click", outdent, function () {
    document.execCommand("outdent", false, null);
})


var link=framework.Get.byId("link");
framework.event("click", link, function () {
    var url=prompt("Введите адрес ссылки: ");
    document.execCommand("createlink", false, url);
})

var reset=framework.Get.byId("remove");
framework.event("click", remove, function () {
    document.execCommand("removeformat", false, null);
})