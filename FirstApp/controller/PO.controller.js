sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    "../model/formatter",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/model/Filter",
	  "sap/ui/model/FilterOperator"    
 ], function (Controller,MessageToast,formatter,JSONModel,ResourceModel,
  Filter,FilterOperator) {
    "use strict";
    return Controller.extend("akp.po.walkthrough.controller.PO", {
      
      onInit: function () {
             
      },

      onSearchPO: function (evt) {
        //get search field from default model set at component level
        var inputData = this.getView().getModel().getData().poInput;
        var aFilter = [];
        if (inputData.poNumber){
          aFilter.push(new Filter("Ebeln", FilterOperator.Contains, inputData.poNumber));
        }
        
        if (inputData.poType){
          aFilter.push(new Filter("POType", FilterOperator.Contains, inputData.poType));
        }
        
        if (inputData.plant){
          aFilter.push(new Filter("Plant", FilterOperator.Contains, inputData.plant));
        }
        if (inputData.companyCode){
          aFilter.push(new Filter("Bukrs", FilterOperator.Contains, inputData.companyCode));
        }
/**
 * filter binding of model "pos" maintained at manifest so basically at component level as well
 */
        var posModel = this.getView().getModel("pos");
       
        //filter binding
        if(!oList){
          var oList = this.getView().getParent().mAggregations.content[1].byId("idPOList")  //getting list controller from PO view
        }
        
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);

      },
      onClickMe : function(evt) {
        // MessageToast.show("searching POs...")
        // MessageToast.show(evt);  //show hardcoded message recieved from view

        //show i18n message with parameters.
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sMsg = oBundle.getText("msgWithParamerters",["X", "Y"]);
        MessageToast.show(sMsg);
      }

    });
 });