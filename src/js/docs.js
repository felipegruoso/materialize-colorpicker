"use strict";
$(function() {

  // Initializes tabs for Demos.
  $('ul.tabs').tabs();

  // Links the buttons with their respectives modals.
  $('.modal-trigger').leanModal();

  // Demo 1.
  $('#demo1').colorpicker();

  // Demo 2.
  $('#demo2').colorpicker({
    format: 'rgb',
    color: $('#demo2').css('background-color')
  }).on('changeColor', function(ev) {
    $(this).css('background-color',ev.color.toHex());
  });

  // Demo 3.
  $('#demo3').colorpicker({
    format: 'hex',
    color: 'transparent'
  });

  // Demo 4.
  $('#demo4').colorpicker({
    horizontal: true
  });

  // Demo 5.
  $('#demo5-1').colorpicker();
  $('#demo5-2').colorpicker();
  $('#demo5-3').colorpicker({
    container: true,
    color: "rgba(100, 181, 246)",
    inline: true
  });

  // Demo 6.
  $('#demo6').colorpicker({
    colorSelectors: {
      'red': '#f44336',
      'pink': '#e91e63',
      'purple': '#9c27b0',
      'deep-purple': '#673ab7',
      'indigo': '#3f51b5',
      'blue': '#2196f3',
      'light-blue': '#03a9f4',
      'cyan': '#00bcd4',
      'teal': '#009688',
      'green': '#4caf50',
      'light-green': '#8bc34a',
      'lime': '#cddc39',
      'yellow': '#ffeb3b',
      'amber': '#ffc107',
      'orange': '#ff9800',
      'deep-orange': '#ff5722',
      'brown': '#795548',
      'grey': '#9e9e9e',
      'blue-grey': '#607d8b',
      'black': '#000000',
      'white': '#ffffff'
    },
    format: 'hex',
    color:  'green'
  });

  // Demo 7
  $('#demo7').colorpicker({
    color: '#ffaa00',
    customClass: 'colorpicker-2x',
    sliders: {
        saturation: {
            maxLeft: 200,
            maxTop: 200
        },
        hue: {
            maxTop: 200
        },
        alpha: {
            maxTop: 200
        }
    }
  });

  // Demo 8.
  $('#demo8').colorpicker();

  // Handles the demo 8 disable button.
  $("#demo-disable").click(function(e) {
    e.preventDefault();
    $("#demo8").colorpicker('disable');
  });

  // Handles the demo 8 enable button.
  $("#demo-enable").click(function(e) {
    e.preventDefault();
    $("#demo8").colorpicker('enable');
  });

  // Demo 9.
  $('#demo9-1').colorpicker();

  // Demo Component.
  $('#demo-component').colorpicker({
    component: '.btn'
  });

});
