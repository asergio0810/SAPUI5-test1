// @ts-nocheck
sap.ui.define([
    "sap/ui/model/json/JSONModel"
    //,
    //"sap/ui/Device"
    /* @param {typeof sap.ui.Device} Device
    * 
    * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
    * */
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (JSONModel) {
        "use strict";

        return {
            createRecipient: function () {
                var oData = {
                    recipient : {
                      name: "world model"
                    }
                  };
    
               return new JSONModel(oData);

                /**var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;*/
        }
    };
});