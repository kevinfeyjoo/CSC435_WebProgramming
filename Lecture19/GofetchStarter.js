"use strict";
(function() { 
  window.onload = function() {
    let button = document.getElementById("fetch").onclick = goFetch;
};

//write your solution here
function goFetch() {
  console.warn("fetching");
  let input = document.getElementById('file-name').value;
  console.warn(input);
  fetch(input)
    .then(checkStatus)
    .then(printContent)
}

  /* ============================ Helper Functions ============================ */
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || response.status == 0) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

  function $(id) {
    return document.getElementById(id);
  }
})();