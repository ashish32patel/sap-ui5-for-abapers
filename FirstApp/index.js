sap.ui.define([
    "sap/m/Text",
     "sap/ui/core/mvc/XMLView",
     "sap/ui/core/ComponentContainer"
],function (Text, XMLView,ComponentContainer) {
    "use strict";
    /**
     * We will no longer need our index.js from now on,
     * because the descriptor takes care of everything.
     */

    // new ComponentContainer({
    //   name: "akp.po.walkthrough",
    //   settings : {
    //     id : "walkthrough"
    //   },
    //   async: true
    // }).placeAt("content");

    // XMLView.create({
    //   viewName: "akp.po.walkthrough.view.App",
    // }).then((value) => {
    //   value.placeAt("content");
    // });

    // new Text({
    //     text: "Purchase Order Report by akp"
    // }).placeAt("content")
  }
);
