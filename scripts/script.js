window.onload = function() {


  var svgContainers = document.querySelectorAll(".svg-container");
  console.log(svgContainers);
  for (var i = 0; i < svgContainers.length; i++) {

    var container = svgContainers[i];

    container.enableResize = true;

    addResizer(container);

    addPositioner(container);

  }


  function addPositioner(container) {
    var clientX = 0,
      clientY = 0,
      offsetX = 0,
      offsetY = 0;
    var positioner = document.createElement("div");
    positioner.classList = "positioner";
    positioner.setAttribute("draggable", "true");

    positioner.addEventListener("drag",
      function(e) {
        var positionerOffsetX = container.getBoundingClientRect().left - positioner.getBoundingClientRect().left - positioner.getBoundingClientRect().width / 2,
          positionerOffsetY = container.getBoundingClientRect().top - positioner.getBoundingClientRect().top - positioner.getBoundingClientRect().height / 2;
        if (e.clientX != 0)
          container.style.left = (e.clientX + positionerOffsetX) + "px";
        if (e.clientY != 0)
          container.style.top = (e.clientY + positionerOffsetY) + "px";
        clientX = e.clientX;
        clientY = e.clientY;
        if (e.clientX == 0 && e.clientY == 0) {
          offsetX = offsetY = 0;
        }

      });


    container.append(positioner);

  }

  function addResizer(container) {
    var resizer = document.createElement("div");
    resizer.classList = "resizer";
    resizer.addEventListener("click",
      function(e) {
        if (container.enableResize) {
          addResizability(container);
          resizer.classList = "resizer active"
        } else {
          resizer.classList = "resizer";
          var dots = container.querySelectorAll(".dot");
          for (var i = 0; i < dots.length; i++) {
            console.log(dots[i])

            container.removeChild(dots[i]);
          }
          container.removeChild(container.querySelector(".rotator"));
        }

        container.enableResize = !container.enableResize;
      });

    container.append(resizer);
  }

  function addResizability(container) {
    var topLeftDot = document.createElement("div");
    topLeftDot.classList = "top-left-dot dot dot";
    topLeftDot.setAttribute("draggable", true);

    var bottomLeftDot = document.createElement("div");
    bottomLeftDot.classList = "bottom-left-dot dot";
    bottomLeftDot.setAttribute("draggable", true);

    var bottomRightDot = document.createElement("div");
    bottomRightDot.classList = "bottom-right-dot dot";
    bottomRightDot.setAttribute("draggable", true);

    var topRightDot = document.createElement("div");
    topRightDot.classList = "top-right-dot dot";
    topRightDot.setAttribute("draggable", true);


    var containerPosition = {
      "x": container.getBoundingClientRect().left,
      "y": container.getBoundingClientRect().top
    };

    var clientX = 0,
      clientY = 0,
      offsetX = 0,
      offsetY = 0,
      containerRectangleBounds = window.getComputedStyle(container);



    topLeftDot.addEventListener("drag",
      function(e) {
        console.log(container.originalWidth)
        if (e.clientX != 0 && e.clientY != 0) {
          container.style.left = (e.clientX) + "px";
          container.style.top = (e.clientY) + "px";
          if (Math.abs(clientX - e.clientX) < 30)
            container.style.width = (parseInt(containerRectangleBounds.width) - (e.clientX - clientX)) + "px";
          if (Math.abs(clientY - e.clientY) < 30)
            container.style.height = (parseInt(containerRectangleBounds.height) - (e.clientY - clientY)) + "px";
          clientX = e.clientX;
          clientY = e.clientY;
          container.originalWidth = container.style.width;
          container.originalHeight = container.style.height;

        } else {
          clientX = 0;
          clientY = 0;
        }
      });

    // bottomLeftDot


    bottomLeftDot.addEventListener("drag",
      function(e) {
        console.log(container.originalWidth)
        if (e.clientX != 0 && e.clientY != 0) {
          container.style.left = (e.clientX) + "px";
          container.style.top = (e.clientY + containerRectangleBounds.height) + "px";
          if (Math.abs(clientX - e.clientX) < 30)
            container.style.width = (parseInt(containerRectangleBounds.width) - (e.clientX - clientX)) + "px";
          if (Math.abs(clientY - e.clientY) < 30)
            container.style.height = (parseInt(containerRectangleBounds.height) + (e.clientY - clientY)) + "px";
          clientX = e.clientX;
          clientY = e.clientY;
          container.originalWidth = container.style.width;
          container.originalHeight = container.style.height;

        } else {
          clientX = 0;
          clientY = 0;
        }
      });


    // bottomRightDot


    bottomRightDot.addEventListener("drag",
      function(e) {
        console.log(container.originalWidth)
        if (e.clientX != 0 && e.clientY != 0) {
          container.style.left = (e.clientX + containerRectangleBounds.width) + "px";
          container.style.top = (e.clientY + containerRectangleBounds.height) + "px";
          if (Math.abs(clientX - e.clientX) < 30)
            container.style.width = (parseInt(containerRectangleBounds.width) + (e.clientX - clientX)) + "px";
          if (Math.abs(clientY - e.clientY) < 30)
            container.style.height = (parseInt(containerRectangleBounds.height) + (e.clientY - clientY)) + "px";
          clientX = e.clientX;
          clientY = e.clientY;
          container.originalWidth = container.style.width;
          container.originalHeight = container.style.height;

        } else {
          clientX = 0;
          clientY = 0;
        }
      });


    // TopRightDot


    topRightDot.addEventListener("drag",
      function(e) {
        console.log(container.originalWidth)
        if (e.clientX != 0 && e.clientY != 0) {
          container.style.left = (e.clientX + containerRectangleBounds.width) + "px";
          container.style.top = (e.clientY) + "px";
          if (Math.abs(clientX - e.clientX) < 30)
            container.style.width = (parseInt(containerRectangleBounds.width) + (e.clientX - clientX)) + "px";
          if (Math.abs(clientY - e.clientY) < 30)
            container.style.height = (parseInt(containerRectangleBounds.height) - (e.clientY - clientY)) + "px";
          clientX = e.clientX;
          clientY = e.clientY;
          container.originalWidth = container.style.width;
          container.originalHeight = container.style.height;

        } else {
          clientX = 0;
          clientY = 0;
        }
      });
    var prevRotation = containerRectangleBounds.getPropertyValue("-webkit-transform") ||
      containerRectangleBounds.getPropertyValue("-moz-transform") ||
      containerRectangleBounds.getPropertyValue("-ms-transform") ||
      containerRectangleBounds.getPropertyValue("-o-transform") ||
      containerRectangleBounds.getPropertyValue("transform") || 0;
    var values = prevRotation.split('(')[1];
    if (values)
      values = values.split(')')[0];
    if (values)
      values = values.split(',');
    if (values)
    prevRotation = Math.round(Math.asin(values[1]) * (180 / Math.PI));
    if (prevRotation == 'none')
      prevRotation = 0;

    var rotator = document.createElement("div");
    rotator.classList = "rotator";
    rotator.addEventListener("drag",
      function(e) {
        if (e.clientX != 0) {

          if (Math.abs(e.clientX - clientX) < 10) {
            var diff = e.clientX - clientX;
              prevRotation = prevRotation + diff;
              prevRotation = prevRotation%360;
            console.log(prevRotation, diff);
            container.style.transform = "rotate(" + prevRotation + "deg)";
          }
          clientX = e.clientX;
        } else
          clientX = 0;
      });


    container.append(topLeftDot);
    container.append(bottomLeftDot);
    container.append(bottomRightDot);
    container.append(topRightDot);
    container.append(rotator);
  }

}
