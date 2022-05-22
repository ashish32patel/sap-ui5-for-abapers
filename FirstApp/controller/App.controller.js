sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], function (Controller,MessageToast,JSONModel,ResourceModel) {
    "use strict";
    return Controller.extend("akp.po.walkthrough.controller.App", {
      onInit: function () {
        var poInput = {
                        poInput: {
                            poNumber: "xx",
                            poType: "",
                            plant: "",
                            companyCode: "",
                        },
        };

        var oModel = new JSONModel(poInput);
        this.getView().setModel(oModel);

        //Set i18n model on view
        var i18nModel = new ResourceModel(
            {
                bundleName: "akp.po.walkthrough.i18n.i18n",
            }
        );
        this.getView().setModel(i18nModel,"i18n");


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