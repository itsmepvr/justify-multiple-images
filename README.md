Justify Multiple Images
=======================

**Justify multiple images to fit or fill any target container.**

------

## Installation

justify-multiple-images depends on jQuery. To use it, include this in your page :

    <script src="jquery.js" type="text/javascript"></script>
    <script src="justify-multiple-images.js" type="text/javascript"></script>

------

## Usage

Set `height` and `width` properties to the target conatiner with multiple images in it. By default the `max-height` and `max-width` for images is `300px` given. 

    <div class="image-container" style='width:600px;height:400px'>
      <img src="img/example1.jpg">
      <img src="img/example2.jpg">
      <img src="img/example3.jpg">
      <img src="img/example4.jpg">
    </div>

Now add this JavaScript code to your page :

    $(function() {
      $("#image-container").justifyMultipleImages();
    });

You're done.

------

## Demo

See it in action on our [home page](https://www.itsmepvr.github.io).

------

## Author

**Venkata Ramana P**

+ [https://linkedin.com/in/itsmepvr](https://linkedin.com/in/itsmepvr)
+ [https://github.com/itsmepvr](https://github.com/itsmepvr)


------

## Copyright and license

Copyright 2013-2016 GestiXi under [The MIT License (MIT)](LICENSE).
