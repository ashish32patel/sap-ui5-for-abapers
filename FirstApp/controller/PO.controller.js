sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    "../model/formatter",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], function (Controller,MessageToast,formatter,JSONModel,ResourceModel) {
    "use strict";
    return Controller.extend("akp.po.walkthrough.controller.PO", {
      
      onInit: function () {
             
      },

      onSearchPO: function (evt) {
        // MessageToast.show("searching POs...")
        // MessageToast.show(evt);  //show hardcoded message recieved from view

        //show i18n message with parameters.
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sMsg = oBundle.getText("msgWithParamerters",["X", "Y"]);
        MessageToast.show(sMsg);
      }

    });
 });