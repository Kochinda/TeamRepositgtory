
          window.renderBadge = function() {
            var ratingBadgeContainer = document.createElement("div");
            document.body.appendChild(ratingBadgeContainer);
           
            window.gapi.load('ratingbadge', function() {
              window.gapi.ratingbadge.render(
                ratingBadgeContainer, {
                  "merchant_id": 124658769,
                  "position": "BOTTOM_LEFT"
                });
            });
          };

          
          if(((window.innerWidth > 0) ? window.innerWidth : screen.width) > 640){
            var sm = document.createElement('script'); sm.type = 'text/javascript'; sm.async = true;
            sm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.salesmanago.pl/dynamic/nsgdk0wixnhr30bf/popups.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sm, s);
          }

          gtag('event','page_view' ){
            'send_to': 'AW-763220041',
            'ecomm_pagetype': 'home',
            'ecomm_prodid': '',
            'ecomm_totalvalue': 0,
            'user_id': ''
            });

            document.observe('dom:loaded', function() {
                if(typeof promoImpressions !== 'undefined' && promoImpressions.length > 0) {
                                    gtag('event', 'view_promotion', {
                            "non_interaction": true,
                            "promotions": promoImpressions
                          });
                            }
            });

            document.observe('dom:loaded', function() {
                if(typeof productImpressions !== 'undefined' && productImpressions.length > 0) {
                    gtag('event', 'view_item_list', {
                        "non_interaction": true,
                        "items": productImpressions
                    });
                }
            });
            
            function createCookie(name, value, days) {
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    var expires = "; expires=" + date.toGMTString();
                } else {
                    var expires = "";
                }
                document.cookie = name + "=" + value + expires + "; path=/";
            }

            createCookie('ow_cookie_notice', 'shown', 31);
        
                        /**
                     * Clicking the close button removes the notice
                     */
                    $('cookienotice-close-button').observe('click', function(event) {
                        $('cookienotice-container').remove();
                        /**
                         * Cookie Set : Notice has been closed
                         */
                        createCookie('ow_cookie_notice', 'closed', 31);
                            });
            
                        /**
                     * If Auto Hide is enabled, Fade Out The Notice
                     */
                    setTimeout(function() {
                        $('cookienotice-container').remove();
                        /**
                         * Cookie Set : Notice is set to hidden
                         */
                        createCookie('ow_cookie_notice', 'hidden', 31);
                            },20000);
            
                            jQuery( document ).ready(function( $ ) {
            
                                $(function() {
                              
                              $(".footermb-info").hide();
                                              $(".footer-toggle").click(function()
                                              { 
                                              $(this).next(".footermb-info").slideToggle(200);
                                              $("i",this).toggleClass("icon fdicon-derecha icon fdicon-abajo");
                                              });
                              });
                              });
        
                              <script>
                              jQuery( document ).ready(function( $ ) {
                                  
                                $(function() {
                                   $( "#menuleftsup" ).click(function() {
                                      $("#leftcontsup").slideToggle(200);
                                      }); 
                              
                                  $(".fancyselect").fancySelect();
                                  
                                  $( "#closesearch" ).click(function() {
                                      $("#searchOverlay").slideToggle(200);
                                      });    
                                  
                                   $( "#search-desktop" ).click(function() {
                                      $("#searchOverlay").slideToggle(200);
                                      $("#search").focus();
                                      
                                      });
                                      
                                  $( "#search-mobile" ).click(function() {
                                      $("#mobile-search-container").slideToggle(200);
                                      });
                                      
                                   $( "#close-search" ).click(function() {
                                      $("#mobile-search-container").slideToggle(200);
                                      });
                              
                                   $( "#closemenu" ).click(function() {
                                      toggleMenu();
                                      });
                                   
                                   $('#toggle-menu').click(function() {
                                      toggleMenu();
                                    });
                              
                                   
                              
                              
                                    function toggleMenu() {
                                      if ($('#idleftmenu').hasClass('animate')) {
                                        $('#idleftmenu').removeClass('animate');
                                      } else {
                                        $('#idleftmenu').addClass('animate');
                                      }
                                      //$('#idleftmenu').toggleClass('animate');
                                      }
                              
                                      $(document).on('click', function(event) {
                                if (!$(event.target).closest('#leftaux').length) {
                                  $('#idleftmenu').removeClass('animate');
                                }
                              });
                              
                              
                                });
                                });
                            
                              
                              
                              <bxSlider Javascript file
                              <script src="https://footdistrict.com/en/skin/frontend/footDistrict/default/js/jquery.bxslider.min.js" type="text/javascript"></script>
                              <script type="text/javascript">// <![CDATA[
                              jQuery( document ).ready(function( $ ) {
                               
                               $(function() {
                              slider = $(".bxslider").bxSlider({
                              auto:true,
                              pause:6000,
                              controls:true,
                              infiniteLoop:false
                              });
                                });
                              });
                            