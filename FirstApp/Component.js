sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"    
 ], function (UIComponent, JSONModel , ResourceModel) {
    "use strict";
    return UIComponent.extend("akp.po.walkthrough.Component", {
        metadata : {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "manifest": "json"
            // "rootView": {
            //    "viewName": "akp.po.walkthrough.view.App",
            //    "type": "XML",
            //    /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
            //    "id": "app"
            // }
         },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          

         // create the views based on the url/hash
         this.getRouter().initialize();

         //set data model 
          /**
           * Be aware that the models are directly set on the component and not on the root view 
           * of the component. 
           * However, as nested controls automatically inherit the models from their parent controls,
           * the models will be available on the view as well.
           */
           var poInput = {
            poInput: {
              poNumber: "",
              poType: "",
              plant: "",
              companyCode: "",
            },
          };

          var oModel = new JSONModel(poInput);
          this.setModel(oModel);  //notice we are not using this.getView().setModel(oModel)
                                  //because we are setting the model directly at the component level
                                  //not the view level(i.e. inside the view's controller)

          //Set i18n model on view
         //  var i18nModel = new ResourceModel({
         //    bundleName: "akp.po.walkthrough.i18n.i18n",
         //  });
         //  this.setModel(i18nModel, "i18n");          
         
         /**
          * log each time the Invalid path view is rendered
          */
          this.getRouter().attachBypassed((oEvent) => {
             var sHash = oEvent.getParameter("hash");
             console.log(`Hash ${sHash} is invalid`);          
          });

          /**
           * log every route path
           */
          this.getRouter().attachRouteMatched((oEvent) => {
             var sRouteName = oEvent.getParameter("name");
             console.log(`Route ${sRouteName} is valid. `);
          })


       }
    });
 });