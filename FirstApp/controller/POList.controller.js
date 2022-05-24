sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
 ], function (Controller,formatter) {
    "use strict";
    return Controller.extend("akp.po.walkthrough.controller.POList", {
      /**
       *below controller simply stores the loaded formatter,
       * functions in the local property formatter to be able to access them in the view.
       */
      formatter: formatter, //
      
      onInit: function () {

      }
      

    });
 });