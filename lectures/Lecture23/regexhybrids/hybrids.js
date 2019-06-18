/**
 *  Exercise 1: Regex Hybrids
 *  Part II: Validation in JS
 *
 *  Original credit: Kyle Thayer, Spring 2017
 *
 *  Provided JS code for Regex Hybrids Lab 9 exercise.
 *  This script populates the hybrids.html page with images containing
 *  the word given in the text input box when the "find hybrids" button is clicked,
 *  and all images in the images folder when the "show all" button is clicked.
 */
(function() {
  "use strict";
  const URL = "regexhybrids.php";

  window.addEventListener("load", initialize);
  
  /**
   * Set up submit buttons to fetch data from regexhydbrids.php when clicked.
   */
  function initialize() {
    $("submit-one").addEventListener("click", function() {
      makeRequest($("animal").value); 
    });
    $("submit-all").addEventListener("click", function() {
      makeRequest("all");
    });
  };
  
  /**
   * Makes a request to regexhybrids.php web service with the given 
   * animal parameter, then populates the results div with result image
   * paths if the request was successful.
   *
   * @param {string} animal - name of animal to fetch hybrid image data for.
   */
  function makeRequest(animal) {
    $("results").innerHTML = "";
    fetch(URL + "?animal=" + animal)
      .then(checkStatus)
      .then(displayResults)
      .catch(handleRequestError);
  }

  /**
   * Populates results area with hybrid animal images given in responseText.
   *
   * @param {string} responseText - response containing image source paths for hybrid photos of
   * input animal.
   */
  function displayResults(responseText) {
    let resultsHead = document.createElement("h2");
    let resultMsg = "Hybrid results for ";
    if ($("animal").value) {
      resultMsg += $("animal").value;
    } else {
      resultMsg += "all hybrids";
    }
    resultsHead.innerText = resultMsg + ":";
    $("results").appendChild(resultsHead);

    let images = responseText.split("\n");
    for (let i = 0; i < images.length; i++) {
      let img = document.createElement("img");
      img.src = images[i];
      $("results").appendChild(img);
    }
  }

  /**
   * Populates results area with user-friendly error message.
   */
  function handleRequestError() {
    $("results").innerHTML = "No images found :(";
  }
  
  // ------------------------- HELPER FUNCTIONS ------------------------- //    
  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @return {object} DOM object associated with id.
   */
  function $(id) {
    return document.getElementById(id);
  }

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @return {object} - valid result text if response was successful, otherwise rejected
   *                    Promise result
   */
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || response.status == 0) {
      return response.text();
    } else { 
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

})();
