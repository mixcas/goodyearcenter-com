/* jshint browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global jQuery, $, document, Site, Modernizr */

Site = {
  mobileThreshold: 601,
  init: function() {
    var _this = this;

    $(window).resize(function(){
      _this.onResize();
    });

    $('.menu-toggle').on('click', function() {
      $('body').toggleClass('show-menu');
    });

    $('.terms-toggle').on('click', function() {
      $('body').toggleClass('show-terms');
    });


    $(document).ready(function() {
      // Bind to the click of all links with a #hash in the href
      $('a[href^="#"]').click(function(e) {
        // Prevent the jump and the #hash from appearing on the address bar
        e.preventDefault();
        // Scroll the window, stop any previous animation, stop on user manual scroll
        // Check https://github.com/flesler/jquery.scrollTo for more customizability
        $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true});
      });
    });
  },

  onResize: function() {
    var _this = this;

  },

  fixWidows: function() {
    // utility class mainly for use on headines to avoid widows [single words on a new line]
    $('.js-fix-widows').each(function(){
      var string = $(this).html();
      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
      $(this).html(string);
    });
  },
};

jQuery(document).ready(function () {
  'use strict';

  Site.init();

});
