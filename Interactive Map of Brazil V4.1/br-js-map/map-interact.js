function isTouchEnabled() {
  return (("ontouchstart" in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
}
jQuery(function () {
  jQuery("path[id^=brjs]").each(function (i, e) {
    braddEvent( jQuery(e).attr("id"));
  });
});
function braddEvent(id,relationId) {
  var _obj = jQuery("#" + id);
  var arr = id.split("");
  var _Textobj = jQuery("#" + id + "," + "#brjsvn" + arr.slice(4).join(""));
  jQuery("#" + ["visnames"]).attr({"fill":brjsconfig.general.visibleNames});
  _obj.attr({"fill":brjsconfig[id].upColor, "stroke":brjsconfig.general.borderColor});
  _Textobj.attr({"cursor": "default"});
  if (brjsconfig[id].active === true) {
    _Textobj.attr({"cursor": "pointer"});
    _Textobj.hover(function () {
      jQuery("#brjstip").show().html(brjsconfig[id].hover);
      _obj.css({"fill":brjsconfig[id].overColor});
    }, function () {
      jQuery("#brjstip").hide();
      jQuery("#" + id).css({"fill":brjsconfig[id].upColor});
    });
    if (brjsconfig[id].target !== "none") {
      _Textobj.mousedown(function () {
        jQuery("#" + id).css({"fill":brjsconfig[id].downColor});
      });
    }
    _Textobj.mouseup(function () {
      jQuery("#" + id).css({"fill":brjsconfig[id].overColor});
      if (brjsconfig[id].target === "new_window") {
        window.open(brjsconfig[id].url);	
      } else if (brjsconfig[id].target === "same_window") {
        window.parent.location.href = brjsconfig[id].url;
      } else if (brjsconfig[id].target === "modal") {
        jQuery(brjsconfig[id].url).modal("show");
      }
    });
    _Textobj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#brjstip").outerWidth(), tiph =jQuery("#brjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#brjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      _Textobj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw =jQuery("#brjstip").outerWidth(), tiph =jQuery("#brjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#" + id).css({"fill":brjsconfig[id].downColor});
        jQuery("#brjstip").show().html(brjsconfig[id].hover);
        jQuery("#brjstip").css({left: x, top: y});
      });
      _Textobj.on("touchend", function () {
        jQuery("#" + id).css({"fill":brjsconfig[id].upColor});
        if (brjsconfig[id].target === "new_window") {
          window.open(brjsconfig[id].url);
        } else if (brjsconfig[id].target === "same_window") {
          window.parent.location.href = brjsconfig[id].url;
        } else if (brjsconfig[id].target === "modal") {
          jQuery(brjsconfig[id].url).modal("show");
        }
      });
    }
	}
}