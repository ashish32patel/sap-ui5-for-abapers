sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
 ], function (Controller,formatter,Filter,FilterOperator) {
    "use strict";
    return Controller.extend("akp.po.walkthrough.controller.POList", {
      /**
       *below controller simply stores the loaded formatter,
       * functions in the local property formatter to be able to access them in the view.
       */
      formatter: formatter, //
      
      onInit: function () {

      },
      onFilterPOsOnToolbar: function (oEvent) {

        //buil filter array
        var aFilter = [];
        var sQuery = oEvent.getParameter("query");
        if (sQuery){
            aFilter.push(new Filter("Matnr", FilterOperator.Contains, sQuery));
        }
        //filter binding
        var oList = this.byId("idPOList");
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);

      }
      

    });
 });