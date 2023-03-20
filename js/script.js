// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 03/20/2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculateAreaOfTriangle () {
  // Get values from textfields
  let base = parseFloat(document.getElementById('base-of-triangle').value);
  let height = parseFloat(document.getElementById('height-of-triangle').value);

  // Perform mathematical equations
  let area = base * height /2;

  // Display the answer
  document.getElementById('area').innerHTML = 'The area of the triangle is ' + area + ' cm<sup>2</sup>.'
}