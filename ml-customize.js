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


    var listing_page = document.getElementsByClassName('listing-details-container');

    if(listing_page.length){

      var divs = document.getElementsByClassName('col-12');
      for (var i = 0, len = divs.length; i < len; ++i) { 
      if(divs[i].innerHTML.indexOf("<b>Chargeable services and facilities:</b>") !== -1) {

      divs[i].setAttribute('id', 'chargeable');
      /*var columns = divs[i].querySelectorAll('.row > .col-4');
      columns_length = columns.length;
      for (var x = 0, len = columns_length; x < len; ++x) {
        minirows = columns[x].querySelectorAll('.selected');
        minirows_length = minirows.length;
        for (var y = 0, len_m = minirows_length; y < len_m; ++y) {
          minirows[y].querySelector('.checkbox-option-checkmark > i').setAttribute('class','fa fa-eur icon-fix icon-margin');
    }
      }  
      

*/

      }
      }
      /* Getsitecontrol twitch
      var as = document.getElementsByTagName('a');
      for (var i = 0, len = as.length; i < len; ++i) { 
      if(as[i].innerHTML.indexOf("Got it!")!== -1) {
      var url = window.location.href;
      as[i].setAttribute('href', url + '/contact');
      }
      } */


  }
}



/* test - 

var sanitize_name = function () {

  var name = document.getElementById("listing-author-link");
  if (name !== null) {
  if (name.innerHTML.indexOf(".") !== -1) {
    string = name.innerHTML.split(".", 1);
    name.innerHTML = string;
  }

}


}






var set_labels = function () {



  if (window.innerWidth >= 768){

var selection = document.querySelector("a[title=Grid]") !== null;

if (selection) {

  var grid_btn = document.querySelector("a[title=Grid]");
  var grid_btn2 = document.querySelector("a[title=List]");


}

else {

  var grid_btn = document.querySelector("a[title=Griglia]");
  var grid_btn2 = document.querySelector("a[title=Lista]");
}




grid_btn.setAttribute("href", "/?category=studio");
grid_btn.innerHTML = "STUDIO";
grid_btn2.setAttribute("href", "/?category=location");
grid_btn2.innerHTML = "LOCATION";

var menu = document.querySelector(".visible-tablet > .row > .col-12");
menu.classList.add("hide");

var url = window.location.href;

if ((url.indexOf("category=studio") === -1) && (url.indexOf("category=location") === -1)) {

    grid_btn2.classList.remove("selected");
  grid_btn.classList.remove("selected");

}

else if ( (url.indexOf("category=studio") !== -1) && (url.indexOf("category=location") === -1) ){

  grid_btn.classList.add("selected");
  grid_btn2.classList.remove("selected");
}

else if ( (url.indexOf("category=location") !== -1) && (url.indexOf("category=studio") === -1) )

{

  grid_btn2.classList.add("selected");
  grid_btn.classList.remove("selected");
}
}
};
*/


var no_dupl_title = function() {

var url = window.location.href;
var title = document.title;
if(url.indexOf("/it/") !== -1){
  document.title = title + " - IT";
}
}

var popup = function() {

      var linkz = document.getElementsByClassName('Link__link__3pNRT LoginLinks__link__1GboG');
      for (var i = 0, len = linkz.length; i < len; ++i) { 
      if(linkz[i].innerHTML.indexOf("Sign up")!== -1) 
      {var author = document.getElementsByClassName("listing-author");
      author[0].setAttribute('class', 'listing-author hide');
      /*var popup = document.createElement('script');
      popup.setAttribute('id', 'pixel-script-poptin');
      popup.setAttribute('src', 'https://cdn.popt.in/pixel.js?id=455d993d63edd');
      popup.setAttribute('async', 'true');
      document.body.appendChild(popup);*/
      _gscq.push(['targeting','logged', 'false']);
      var node = document.getElementById('sidewinder-wrapper');
      var popupnode = node.parentNode.childNodes[4];
      var a = popupnode.getElementsByTagName('a')[0];
      var a_cln = a.cloneNode(true);
      a_cln.innerHTML = 'Not yet';
      a_cln.setAttribute('href', 'https://howitworks.misterlocation.com/');
      a_cln.setAttribute('style', 'margin-left:20px');
      a_cln.removeAttribute('data-track');
      a.parentNode.appendChild(a_cln);
      break;
      }
      }
}

var tracking_codes = function () {

  var url = window.location.href;
  if ((url.indexOf("confirmation_pending") !== -1) || (url.indexOf("community_memberships/pending_consent") !== -1)) {
   
  var newElem = document.createElement('script'); //create a script tag
  var google_script_link = document.createElement('script');
  var noscript = document.createElement('noscript');
  var fbscript = document.createElement('script');
  fbscript.innerHTML = "fbq('track', 'CompleteRegistration');"
  document.body.insertBefore(fbscript, document.body.firstChild);
  google_script_link.type = 'text/javascript';
  google_script_link.setAttribute('src','//www.googleadservices.com/pagead/conversion.js');
  newElem.type = 'text/javascript'; // add type attribute
  newElem.innerHTML = "/* <![CDATA[ */ var google_conversion_id = 848665749;var google_conversion_language = 'en';var google_conversion_format = '3';var google_conversion_color = 'ffffff';var google_conversion_label = 'qhk7CIjRrnQQlbnWlAM';var google_remarketing_only = false;/* ]]> */"; // add content i.e. function definition and a call 
  document.body.appendChild(newElem);
  document.body.appendChild(google_script_link);
  noscript.innerHTML = '<div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/848665749/?label=qhk7CIjRrnQQlbnWlAM&amp;guid=ON&amp;script=0"/></div>';
  document.body.appendChild(noscript);


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

     

      var price = document.getElementsByClassName('listing-price-amount');
      var price_raw = price[0].innerHTML.substr(2);
      var name = document.getElementById('listing-title');
      var images = document.getElementsByClassName('listing-image');
      var url_splitted = window.location.href.split( "/listings/");
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
                "price": price_raw,
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
  /*sanitize_name();*/
  /* set_labels(); */

}

/* window.onresize = set_labels; */
window.onload = all_func;