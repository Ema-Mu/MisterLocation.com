function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}



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

var set_chargeble_icons = function () {


    var listing_page = document.getElementsByClassName('listing-details-container');

    if(listing_page.length){

      var divs = document.getElementsByClassName('col-12');
      for (var i = 0, len = divs.length; i < len; ++i) { 
      if(divs[i].innerHTML.indexOf("<b>Chargeable services and facilities:</b>") != -1) {

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


  }
}



/*

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



var schema = function () {

  var home = document.getElementById('homepage-filters');
  var map = document.getElementsByClassName('origin');
  var h = document.getElementsByTagName('head')[0]; 

    if (home != null) {


      var titles = document.getElementsByClassName('fluid-thumbnail-grid-image-title');
      var prices = document.getElementsByClassName('fluid-thumbnail-grid-image-price');
      var images = document.getElementsByClassName('fluid-thumbnail-grid-image-image');
      

      //create JSON-LD for lastModified and citation_online_date
      var el = document.createElement('script');  
      el.type = 'application/ld+json';  
      var jsonArr = [];
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

      }

      el.text = JSON.stringify({ 

            "@context" : "http://schema.org",
            "@type" : "Organization",
            "name": "MisterLocation",
            "alternateName": "Mister Location",
             "logo": "https://user-assets.sharetribe.com/images/communities/wide_logos/36321/header_highres/MIsterlocationlogo_horiz.jpg",
            "url" : "https://www.misterlocation.com",
            "description": "Find and book photo studios and locations",
            "disambiguatingDescription": "Find and book photo studios and locations",

            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Photo studios and locations",
                "itemListElement": jsonArr},

             "mainEntityOfPage": {
                  "@type": "WebSite",
              "name": "MisterLocation",
              "alternateName": "Mister Location",
              "url": "https://www.misterlocation.com",
              "isBasedOn": "https://www.sharetribe.com/",
              "keywords": "photo, studio, photostudio, location, photo studio Milan, photo studio Amsterdam, photo studio Madrid, rent photo studio"

               }});
      h.appendChild(el);

    } else if ((home === null)&&(map.length === 1)) {  /* Listing page */

     

      var price = document.getElementsByClassName('listing-price-amount');
      var name = document.getElementById('listing-title');
      var images = document.getElementsByClassName('listing-image');
      var amenities = document.getElementsByClassName('selected');
      var jsonArr = [];
      var jsonArrAm = [];

      if(amenities[2]!=null){
        for(i=2;i<amenities.length;i++){
          var spans = amenities[i].getElementsByTagName('span');
          jsonArrAm.push(
            { "@type": "LocationFeatureSpecification",
              "name": spans[1].innerHTML
            }
          );

        }
      }

      

      var el = document.createElement('script');  
      el.type = 'application/ld+json';  
     

       if(images[0]!=null){
        var mainimage = images[0].getAttribute('src').split("?")[0];
        for (i=0;i<images.length;i++){
        jsonArr.push(
             { "@type": "ImageObject",
              "image": images[i].getAttribute('src').split("?")[0]
            }
          );
        } 

      }


      el.text = JSON.stringify({

         "@context" : "http://schema.org",
            "@type" : "Organization",
            "name": "MisterLocation",
            "alternateName": "Mister Location",
             "logo": "https://user-assets.sharetribe.com/images/communities/wide_logos/36321/header_highres/MIsterlocationlogo_horiz.jpg",
            "url" : "https://www.misterlocation.com",
            "hasOfferCatalog": {
                "@type": "Offer",
                "name": name.innerHTML,
                "itemListElement": { "@type": "LocalBusiness",
                                      "name": name.innerHTML,
                                      "photos": {"@type": "ImageGallery",
                                      "primaryImageOfPage": mainimage,
                                      "image": jsonArr},
                                      "address": map[0].innerHTML,   
                                      "priceRange": price[0].innerHTML,
                                      "paymentAccepted": ["PayPal", "Credit card"],
                                      "amenityFeature": jsonArrAm
                                    }
                                      
            },

             "mainEntityOfPage": {
                  "@type": "WebSite",
              "name": "MisterLocation",
              "alternateName": "Mister Location",
              "url": "https://www.misterlocation.com",
              "isBasedOn": "https://www.sharetribe.com/",
              "keywords": "photo, studio, photostudio, location, photo studio Milan, photo studio Amsterdam, photo studio Madrid, rent photo studio"

      }});
      h.appendChild(el);

    }
}



var all_func = function () {

  
  set_social_icons();
  set_chargeble_icons();
  schema();
  /*sanitize_name();*/
  /* set_labels(); */

}

/* window.onresize = set_labels; */
window.onload = all_func;





