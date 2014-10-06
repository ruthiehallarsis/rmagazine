jQuery(document).ready(function(){

  jQuery("#mobile-menu-button").click(function() {
    jQuery("#block-menu-block-1").toggle();
  });

  jQuery("#footer-mobile-menu-button").click(function() {
    jQuery("#block-menu-block-3").toggle();
    jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, 500);
  });
  
  setInterval(function() {
    if ( jQuery(window).width() > 940) {     
      jQuery("#block-menu-block-1, #block-menu-block-3").hide();
    }
  }, 500);
  
  jQuery("#block-menu-block-1 ul.menu li").click(function() {
    if ( jQuery(this).children("ul.menu").length > 0 ) {
     jQuery(this).children("ul.menu").toggle();
    }
  });
  
  jQuery("#block-menu-block-3 ul.menu li").click(function() {
    if ( jQuery(this).children("ul.menu").length > 0 ) {
     jQuery(this).children("ul.menu").toggle();
    }
  });
           
});