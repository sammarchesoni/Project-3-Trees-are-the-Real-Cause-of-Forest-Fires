﻿var pins_config = {
  "pins":[
  {
    "shape": "square",//either "circle" or "square"
    "hover": "BLANK1",//info of the popup
    "pos_X": 174,//check the X, Y coordinates guide in the documentation
    "pos_Y": 107,
    "size": 0,//size of the pin
    "outline": "#000080",//outline color of the pin
    "upColor": "#1a1aff",//color of the pin when map load
    "overColor": "#66d9ff",//color of the pin when mouse hover
    "url": "https://www.html5interactivemaps.com/",//link to any webpage
    "target": "new_window",// use "new_window", "same_window", "modal", or "none"
    "active": false//true/false to activate/deactivate this pin
  },
  {
    "shape": "circle",
    "hover": "BLANK2",
    "pos_X": 306,
    "pos_Y": 387,
    "size": 0,
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK3",
    "pos_X": 335,
    "pos_Y": 369,
    "size": 0,
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "#mymodal",
    "target": "modal",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK4",
    "pos_X": 433,
    "pos_Y": 120,
    "size": 0,
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK5",
    "pos_X": 20,
    "pos_Y": 200,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK6",
    "pos_X": 20,
    "pos_Y": 250,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK7",
    "pos_X": 20,
    "pos_Y": 300,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK8",
    "pos_X": 20,
    "pos_Y": 350,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK9",
    "pos_X": 20,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK10",
    "pos_X": 50,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK11",
    "pos_X": 100,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK12",
    "pos_X": 150,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK13",
    "pos_X": 200,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK14",
    "pos_X": 250,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  },
  {
    "shape": "circle",
    "hover": "BLANK15",
    "pos_X": 300,
    "pos_Y": 400,
    "size": 0,//change the size to display this pin
    "outline": "#660000",
    "upColor": "#e60000",
    "overColor": "#ffd480",
    "url": "https://www.html5interactivemaps.com/",
    "target": "same_window",
    "active": false
  }// If you want to add more pin, you need to add comma ',' here
  ]
};

// The following is the script for pins interaction DON'T EDIT !!!
function isTouchEnabled() {
  return (("ontouchstart" in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
}
jQuery(function () {
  var pins_len = pins_config.pins.length;
  if(pins_len > 0) {
    var xmlns = "http://www.w3.org/2000/svg";
    var tsvg_obj = document.getElementById("brjspins");
    var svg_circle, svg_rect;
    for (var i = 0; i < pins_len; i++) {
      if (pins_config.pins[i].shape === "circle") {
        svg_circle = document.createElementNS(xmlns, "circle");
        svg_circle.setAttributeNS(null, "cx", pins_config.pins[i].pos_X + 1);
        svg_circle.setAttributeNS(null, "cy", pins_config.pins[i].pos_Y + 1);
        svg_circle.setAttributeNS(null, "r", pins_config.pins[i].size / 2);
        svg_circle.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
        tsvg_obj.appendChild(svg_circle);
        svg_circle = document.createElementNS(xmlns, "circle");
        svg_circle.setAttributeNS(null, "cx", pins_config.pins[i].pos_X);
        svg_circle.setAttributeNS(null, "cy", pins_config.pins[i].pos_Y);
        svg_circle.setAttributeNS(null, "r", pins_config.pins[i].size / 2);
        svg_circle.setAttributeNS(null, "fill", pins_config.pins[i].upColor);
        svg_circle.setAttributeNS(null, "stroke", pins_config.pins[i].outline);
        svg_circle.setAttributeNS(null, "stroke-width", 1);
        svg_circle.setAttributeNS(null, "id", "brjspins_" + i);
        tsvg_obj.appendChild(svg_circle);
        brjsAddEvent(i);
      }
      else if (pins_config.pins[i].shape === "square") {
        svg_rect = document.createElementNS(xmlns, "rect");
        svg_rect.setAttributeNS(null, "x", pins_config.pins[i].pos_X - pins_config.pins[i].size / 2 + 1);
        svg_rect.setAttributeNS(null, "y", pins_config.pins[i].pos_Y - pins_config.pins[i].size / 2 + 1);
        svg_rect.setAttributeNS(null, "width", pins_config.pins[i].size);
        svg_rect.setAttributeNS(null, "height", pins_config.pins[i].size);
        svg_rect.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
        tsvg_obj.appendChild(svg_rect);
        svg_rect = document.createElementNS(xmlns, "rect");
        svg_rect.setAttributeNS(null, "x", pins_config.pins[i].pos_X - pins_config.pins[i].size / 2);
        svg_rect.setAttributeNS(null, "y", pins_config.pins[i].pos_Y - pins_config.pins[i].size / 2);
        svg_rect.setAttributeNS(null, "width", pins_config.pins[i].size);
        svg_rect.setAttributeNS(null, "height", pins_config.pins[i].size);
        svg_rect.setAttributeNS(null, "fill", pins_config.pins[i].upColor);
        svg_rect.setAttributeNS(null, "stroke", pins_config.pins[i].outline);
        svg_rect.setAttributeNS(null, "stroke-width", 1);
        svg_rect.setAttributeNS(null, "id", "brjspins_" + i);
        tsvg_obj.appendChild(svg_rect);
        brjsAddEvent(i);
      }
    }
  }
});
function brjsAddEvent(id) {
  var obj = jQuery("#brjspins_" + id);
  if(pins_config.pins[id].active === true){
    obj.attr({"cursor": "pointer"});
    obj.hover(function () {
      jQuery("#brjstip").show().html(pins_config.pins[id].hover);
      obj.css({"fill":pins_config.pins[id].overColor});
    }, function () {
      jQuery("#brjstip").hide();
      obj.css({"fill":pins_config.pins[id].upColor});
    });
    obj.mouseup(function(){
      obj.css({"fill":pins_config.pins[id].overColor});
      if (pins_config.pins[id].target === "new_window"){
        window.open(pins_config.pins[id].url);
      } else if (pins_config.pins[id].target === "same_window") {
        window.parent.location.href = pins_config.pins[id].url;
      } else if (pins_config.pins[id].target === "modal") {
        jQuery(pins_config.pins[id].url).modal("show");
      }
    });
    obj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#brjstip").outerWidth(), tiph =jQuery("#brjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#brjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      obj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw=jQuery("#brjstip").outerWidth(), tiph=jQuery("#brjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#brjstip").show().html(pins_config.pins[id].hover);
        jQuery("#brjstip").css({left:x, top:y});
      });
      obj.on("touchend", function () {
        jQuery("#" + id).css({"fill":pins_config.pins[id].upColor});
        if (pins_config.pins[id].target === "new_window") {
          window.open(pins_config.pins[id].url);
        } else if (pins_config.pins[id].target === "same_window") {
          window.parent.location.href = pins_config.pins[id].url;
        } else if (pins_config.pins[id].target === "modal") {
          jQuery(pins_config.pins[id].url).modal("show");
        }
      });
    }
  }
}
