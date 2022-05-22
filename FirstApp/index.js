sap.ui.define([
    "sap/m/Text",
     "sap/ui/core/mvc/XMLView"
],function (Text, XMLView) {
    "use strict";

    XMLView.create({
      viewName: "akp.po.walkthrough.view.App",
    }).then((value) => {
      value.placeAt("content");
    });

    // new Text({
    //     text: "Purchase Order Report by akp"
    // }).placeAt("content")
  }
);
