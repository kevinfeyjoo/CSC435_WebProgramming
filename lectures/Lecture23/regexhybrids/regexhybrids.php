<?php
  /**
   * PHP web service starter code for Regex Hybrids
   *
   * This web service outputs a list of images for hybrid animal photos.
   * Required GET parameters:
   *   type - term for filter hybrid animal image names (e.g. type=pug will return all
   *          image paths with 'pug'). If term=all, all hybrid image names on the server
   *          will be output.
   *
   * Output format: 
   *   plain text
   * 
   * Errors:
   *   400 error if missing required 'type' parameter.
   */

  $type = $_GET["animal"];
  if (isset($type)) {
    // recall that glob returns an array of all files matching the given
    // "glob" pattern. In this case, this is all .jpg files in the images/ directory.
    
    $images = glob("{$folder}/*.jpg");  
    header("Content-type: text/plain");
    # TODO: Handle both request options (remember to break apart your code with functions!)

  } else {
    # TODO: Handle error
  }

?>
