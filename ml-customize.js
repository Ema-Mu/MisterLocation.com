var url = window.location.href;
var listing_page = document.getElementsByClassName('listing-details-container');
var home = document.getElementById('homepage-filters');

 var is_logged = function () {
  var linkz = document.getElementsByClassName('Link__link__3pNRT LoginLinks__link__1GboG');
    if(linkz.length) {
      return false;
    } else {
      return true;
    }
  }


function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}


/*
var set_social_icons = function () {
    var branding_content = document.querySelectorAll(".MenuPriority>div:last-child");
    if (window.innerWidth >= 996) {
      branding_content[0].insertAdjacentHTML('afterend', '<a href="https://www.facebook.com/misterlocationOfficial" target="blank"><i class="fa fa-facebook fa-2x"></i></a><a href="https://twitter.com/Mister_Location" target="blank"><i class="fa fa-twitter fa-2x"></i></a><a href="https://www.instagram.com/misterlocation/" target="blank"><i class="fa fa-instagram fa-2x"></i></a>');
    }
    else {
      var mobile_menu = document.querySelectorAll(".MenuSection>div:last-child");
      mobile_menu[0].insertAdjacentHTML('afterend', '<div class="mobilesocial"><a href="https://www.facebook.com/misterlocationOfficial" target="blank"><i class="fa fa-facebook fa-2x"></i></a><a href="https://twitter.com/Mister_Location" target="blank"><i class="fa fa-twitter fa-2x"></i></a><a href="https://www.instagram.com/misterlocation/" target="blank"><i class="fa fa-instagram fa-2x"></i></a></div>');

    }
}
*/

var set_chargeble_icons = function () {


    if(listing_page.length){

      var divs = document.getElementsByClassName('col-12');
      for (var i = 0, len = divs.length; i < len; ++i) { 
      if(divs[i].innerHTML.indexOf("<b>Chargeable services and facilities:</b>") !== -1) {
      divs[i].setAttribute('id', 'chargeable');
      }
      }
      /* Getsitecontrol twitch
      var as = document.getElementsByTagName('a');
      for (var i = 0, len = as.length; i < len; ++i) { 
      if(as[i].innerHTML.indexOf("Got it!")!== -1) {
     
      as[i].setAttribute('href', url + '/contact');
      }
      } */

  }
}

var no_dupl_title = function() {

var title = document.title;
if(url.indexOf("/it/") !== -1){
  document.title = title + " - IT";
}
}

var popup = function() {

      var listing_price = document.getElementsByClassName('listing-price-amount');
      var listing_thumbnail_price = document.getElementsByClassName('fluid-thumbnail-grid-image-price');
      var listing_thumbnail_quantity = document.getElementsByClassName('fluid-thumbnail-grid-image-quantity');
      if(is_logged() === true) {
        var author = document.getElementsByClassName("listing-author");
        if(listing_page.length){
          listing_price[0].setAttribute('style', 'visibility:visible');
          author[0].setAttribute('style', 'display:inherit');
        } 
        if (home !== 0) {
        for (var i = 0, len = listing_thumbnail_price.length; i < len; ++i) { 
          listing_thumbnail_price[i].setAttribute('style', 'display:initial');
        }
        document.addEventListener('scroll', function () {setTimeout(function(){ 
          var listing_thumbnail_price = document.getElementsByClassName('fluid-thumbnail-grid-image-price');
          var listing_thumbnail_quantity = document.getElementsByClassName('fluid-thumbnail-grid-image-quantity');
          for (var i = 0, len = listing_thumbnail_price.length; i < len; ++i) {
         listing_thumbnail_price[i].setAttribute('style', 'display:initial');
        }
        }, 500);});  
      }
       /* else if (home !== null) {*/
        /*var popup = document.createElement('script');
        popup.setAttribute('id', 'pixel-script-poptin');
        popup.setAttribute('src', 'https://cdn.popt.in/pixel.js?id=455d993d63edd');
        popup.setAttribute('async', 'true');
        document.body.appendChild(popup);*/
      } else {
        _gscq.push(['targeting','logged', 'false']);
        if(listing_page.length){
        listing_price[0].innerHTML = 'Login to see the price';
        listing_price[0].setAttribute('style', 'visibility:visible');
      } else {
        for (var i = 0, len = listing_thumbnail_price.length; i < len; ++i) {
          listing_thumbnail_price[i].innerHTML = ' ';  
          listing_thumbnail_quantity[i].innerHTML = 'Login to see the price';
        }
        document.addEventListener('scroll', function () {setTimeout(function(){ 
          var listing_thumbnail_price = document.getElementsByClassName('fluid-thumbnail-grid-image-price');
          var listing_thumbnail_quantity = document.getElementsByClassName('fluid-thumbnail-grid-image-quantity');
          for (var i = 0, len = listing_thumbnail_price.length; i < len; ++i) {
          listing_thumbnail_price[i].innerHTML = ' ';  
          listing_thumbnail_quantity[i].innerHTML = 'Login to see the price';
        }
        }, 500);}); 
      }
      }
      
}


/*
window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}; */

var dupl_btn = function () {

      /* var node = document.getElementById('sidewinder-wrapper');
      var popupnode = node.parentNode.lastChild;
       var a = popupnode.getElementsByTagName('a')[0];*/
      az = document.querySelectorAll('[data-track="action"]');
      var a = az[az.length -1]; 
      var a_cln = a.cloneNode(true);
      a_cln.innerHTML = 'Not yet';
      a_cln.setAttribute('href', 'https://howitworks.misterlocation.com/');
      a_cln.setAttribute('style', 'margin-left:20px');
      a_cln.removeAttribute('data-track');
      a.parentNode.appendChild(a_cln);
}

var tracking_codes = function () {


  if ((url.indexOf("confirmation_pending") !== -1) || (url.indexOf("community_memberships/pending_consent") !== -1)) {
   
  /*var newElem = document.createElement('script'); //create a script tag
  var google_script_link = document.createElement('script');*/
  // var noscript = document.createElement('noscript');
  var fbscript = document.createElement('script');
  fbscript.innerHTML = "fbq('track', 'CompleteRegistration');"
  document.body.insertBefore(fbscript, document.body.firstChild);
  /*google_script_link.type = 'text/javascript';
  google_script_link.setAttribute('src','//www.googleadservices.com/pagead/conversion.js'); */
 // newElem.type = 'text/javascript'; // add type attribute
  // newElem.innerHTML = "/* <![CDATA[ */ var google_conversion_id = 848665749;var google_conversion_language = 'en';var google_conversion_format = '3';var google_conversion_color = 'ffffff';var google_conversion_label = 'qhk7CIjRrnQQlbnWlAM';var google_remarketing_only = false;/* ]]> */"; // add content i.e. function definition and a call 
 // document.body.appendChild(newElem);
  // document.body.appendChild(google_script_link);
  // noscript.innerHTML = '<div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/848665749/?label=qhk7CIjRrnQQlbnWlAM&amp;guid=ON&amp;script=0"/></div>';
  // document.body.appendChild(noscript);


  }
}


var schema = function () {
  var home = document.getElementById('homepage-filters');
  var map = document.getElementsByClassName('origin');
  var h = document.getElementsByTagName('head')[0];
  /*var address = document.getElementById('origin_loc_address').value; */

    if (home !== null) {


      /*var titles = document.getElementsByClassName('fluid-thumbnail-grid-image-title');
      var prices = document.getElementsByClassName('fluid-thumbnail-grid-image-price');
      var images = document.getElementsByClassName('fluid-thumbnail-grid-image-image');*/
      

      //create JSON-LD for lastModified and citation_online_date
      var el = document.createElement('script');  
      el.type = 'application/ld+json';
     /* var jsonArr = [];
      for (i=0;i<titles.length;i++) {
        if(images[i]!=null){
        jsonArr.push(
             { "@type": "LocalBusiness",
              "priceRange": prices[i].innerHTML,
              "image": images[i].getAttribute('src').split("?")[0],
              "name": titles[i].innerHTML
            }
          );
        } 

      } */

      el.text = JSON.stringify(

            {
              "@context": "http://schema.org",
              "@type": ["WebSite", "Organization"],
              "url": "https://www.misterlocation.com/",
              "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.misterlocation.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
            "name": "MisterLocation",
            "alternateName": "Mister Location",
             "logo": "https://user-assets.sharetribe.com/images/communities/wide_logos/36321/header_highres/MIsterlocationlogo_horiz.jpg",
            "sameAs" : ["https://www.facebook.com/misterlocationOfficial", "https://twitter.com/Mister_Location", "https://www.instagram.com/misterlocation/"],
            "description": "Find and book photo studios and locations",
            "disambiguatingDescription": "Find and book photo studios and locations"
            }


         );

  

      h.appendChild(el);

    } else  if ((home === null)&&(map.length === 1)) {  

     

     // var price = document.getElementsByClassName('listing-price-amount');
     // var price_raw = price[0].innerHTML.substr(2);
      var name = document.getElementById('listing-title');
      var images = document.getElementsByClassName('listing-image');
      var url_splitted = url.split( "/listings/");
      var url_last_part = url_splitted[1].split("-");
      mpn = url_last_part[0];
      /*var amenities = document.getElementsByClassName('selected');
      var jsonArrAm = [];*/
      /*
      if(amenities[2]!=null){
        for(i=2;i<amenities.length;i++){
          var spans = amenities[i].getElementsByTagName('span');
          jsonArrAm.push(
            { "@type": "LocationFeatureSpecification",
              "name": spans[1].innerHTML
            }
          );

        }
      } */

      

      var el = document.createElement('script');  
      el.type = 'application/ld+json';  
     

       if(images[0]!=null){
        var mainimage = images[0].getAttribute('src').split("?")[0];
       /* var jsonArr = [{"@type": "ImageGallery", "primaryImageOfPage": mainimage}];
        for (i=0;i<images.length;i++){
        jsonArr.push(
             { "@type": "ImageObject",
              "image": images[i].getAttribute('src').split("?")[0]
            }
          );
        } */

      }


      el.text = JSON.stringify({

         "@context" : "http://schema.org",
            "@type" : "Product",
            "name": name.innerHTML,
            "image": mainimage,
            "mpn": mpn,
            "offers": {
                "@type": "Offer",
                "priceCurrency": "EUR",
               // "price": price_raw,
                "businessFunction": "http://purl.org/goodrelations/v1#LeaseOut",
                "seller" : {
                  "@type" : "Organization",
                  "name": "MisterLocation",
                  "alternateName": "Mister Location",
                  "logo": "https://user-assets.sharetribe.com/images/communities/wide_logos/36321/header_highres/MIsterlocationlogo_horiz.jpg",
                  "url" : "https://www.misterlocation.com",
                  "sameAs" : ["https://www.facebook.com/misterlocationOfficial", "https://twitter.com/Mister_Location", "https://www.instagram.com/misterlocation/"],
                  "description": "Find and book photo studios and locations",
                  "disambiguatingDescription": "Find and book photo studios and locations",
                }

                                      
            }

      });
      h.appendChild(el);

    }
}



var all_func = function () {

  
  /*set_social_icons();*/
  no_dupl_title();
  set_chargeble_icons();
  schema();
  tracking_codes();
  popup();
  /* if (window.mobileAndTabletcheck() === false) {setTimeout(function(){ dupl_btn(); }, 500);} */
  /*sanitize_name();*/
  /* set_labels(); */

}

/* window.onresize = set_labels; */
window.onload = all_func;