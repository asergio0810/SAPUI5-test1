// @ts-nocheck
/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "test1/invoices/model/models",
        "sap/ui/model/resource/ResourceModel"
    ],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof sap.ui.Device} Device 
     * @param {typeof test1.invoices.model.models} models 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * @returns 
     */

    function (UIComponent, Device, models, ResourceModel) {
        "use strict";

        return UIComponent.extend("test1.invoices.Component", {
            metadata: {
                manifest: "json"
            },
          
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                //set Model
               this.setModel(models.createRecipient());

                //set i18n
               var i18nModel = new ResourceModel({ bundleName : "test1.invoices.i18n.i18n"});
               this.setModel(i18nModel, "i18n");

                // enable routing
                this.getRouter().initialize();

                // set the device model
               // this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);

