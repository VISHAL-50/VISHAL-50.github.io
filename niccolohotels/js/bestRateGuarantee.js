!function r(o,i,l){function c(a,e){if(!i[a]){if(!o[a]){var t="function"==typeof require&&require;if(!e&&t)return t(a,!0);if(u)return u(a,!0);throw new Error("Cannot find module '"+a+"'")}var n=i[a]={exports:{}};o[a][0].call(n.exports,function(e){var t=o[a][1][e];return c(t||e)},n,n.exports,r,o,i,l)}return i[a].exports}for(var u="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,t,a){"use strict";$(function(){"undefined"==typeof localize&&(window.localize={cancel:"cancel",apply:"apply"});var e=$(".page-best-rate-guarantee"),a={theme:"niccolo-form",width:"100%",minimumResultsForSearch:1/0};e.find(".select2-control").each(function(){var e=$(this),t=Object.assign(a);e.select2(t)});var n={theme:"niccolo-form",width:"25%",minimumResultsForSearch:1/0};e.find(".select3-control").each(function(){var e=$(this),t=Object.assign(n);e.select2(t)});var r=new Date((new Date).setFullYear((new Date).getFullYear())),o=moment(r).add(2,"y"),i=moment(r).add(1,"d"),l=moment(r).add(-2,"y"),c=moment(r),u=moment(r);e.find(".datepicker-control").each(function(){var e=$(this),t=e.data("type"),a={};t&&"range"==t?(a={autoApply:!0,autoUpdateInput:!1,singleDatePicker:!1,applyButtonClasses:"btn btn-solid btn-solid-primary btn-sm",cancelButtonClasses:"btn-sm btn btn-border-primary",minDate:r,maxDate:o,endDate:i,locale:{format:globalFunction.getCurrentFormat("date"),monthNames:globalFunction.getCurrentFormat("month"),daysOfWeek:globalFunction.getCurrentFormat("week"),cancelLabel:localize.cancel||"Cancel",applyLabel:localize.apply||"Apply"}},e.daterangepicker(a),e.on("apply.daterangepicker",function(e,t){$(this).val(t.startDate.format(globalFunction.getCurrentFormat("date"))+" - "+t.endDate.format(globalFunction.getCurrentFormat("date")))})):(a={autoApply:!0,autoUpdateInput:!1,singleDatePicker:!0,minDate:l,maxDate:c,endDate:u,locale:{cancelLabel:"Clear",monthNames:globalFunction.getCurrentFormat("month"),daysOfWeek:globalFunction.getCurrentFormat("week")}},e.daterangepicker(a),e.on("apply.daterangepicker",function(e,t){$(this).val(t.startDate.format(globalFunction.getCurrentFormat("date")))})),e.on("cancel.daterangepicker",function(e,t){$(this).val("")})}),e.find('input[type="file"]').change(function(){var e=$(this)[0];if(!e.files[0]){var t=$(".input-file-preview .text").attr("data-placeholder");return $(".input-file-preview .text").text(t),void $(".input-file-preview").addClass("no-select")}e.files[0].type,e.files[0].size;var a=e.files[0].name;$(".input-file-preview").removeClass("no-select"),$(".input-file-preview .text").text(a)})})},{}]},{},[1]);