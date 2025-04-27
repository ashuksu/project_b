sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], (XMLView) => {
	"use strict";

	XMLView.create({
		viewName: "projectb.App"
	}).then((oView) => oView.placeAt("content"));
});