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

      branding_content[0].insertAdjacentHTML('afterend', '<a href="https://www.facebook.com/misterlocationOfficial" target="blank"><i class="fa fa-facebook fa-3x"></i></a><a href="https://twitter.com/Mister_Location" target="blank"><i class="fa fa-twitter fa-3x"></i></a><a href="https://www.instagram.com/misterlocation/" target="blank"><i class="fa fa-instagram fa-3x"></i></a>');


    }
    else {
      var mobile_menu = document.querySelectorAll(".MenuSection>div:last-child");

mobile_menu[0].insertAdjacentHTML('afterend', '<div class="mobilesocial"><a href="https://www.facebook.com/misterlocationOfficial" target="blank"><i class="fa fa-facebook fa-2x"></i></a><a href="https://twitter.com/Mister_Location" target="blank"><i class="fa fa-twitter fa-2x"></i></a><a href="https://www.instagram.com/misterlocation/" target="blank"><i class="fa fa-instagram fa-2x"></i></a></div>');

    }

};





var sanitize_name = function () {

  var name = getElementById("listing-author-link");
  if (name !== null) {

    alert('test');


}


};






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

/* var menu = document.querySelector(".visible-tablet > .row > .col-12");
menu.classList.add("hide"); */

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




var all_func = function () {

  
  set_social_icons();
  sanitize_name();
  set_labels();

}

window.onresize = set_labels;
window.onload = all_func;





