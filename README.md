# MisterLocation.com: a photo studio marketplace
MisterLocation is a photo studio and locations marketplace, that means that everybody can post listings to rent out their own photography studios or locations and, of course, people in need of this kind of spaces can easily discover or search them.

The project is based on the open-source framework Sharetribe (available here on Github) that is in turn developed in Ruby on Rails.
The creators of the software, while making the open source version available to the public, offer a specific version of it as a Saas. This way though, even if you do not have the hassle of setting up a server, deploying the software and maintaining the whole thing, you have a very limited access to the backend and almost no access to the database.

At first I decided to open my [photo studio marketplace](https://www.misterlocation.com/en/) with their hosted version anyway and I found a solution that, at least in the first period, was geeky enough for me. In the framework’s admin panel, in fact, there is the possibility to insert CSS and JS code that is loaded into the header of your website. 
I was very aware, and you should be too, that this is just a temporary solution since this way the whole code is gonna be loaded on every single page, even on those ones that you do not want to target. That could lead to a side effect that you can easily imagine: if you make heavy use of JavaScript, this is gonna slow down your site.

## CSS
Test after test, I decided to create a repository to keep track of all the changes. I reached some nice results. With some creativity, and even using only CSS, I have been able to:

<ul>
<li>Align the text of the listings</li>
<li>Get rid of the hyphenation, i.e. splitting words at the end of the lines (really, why in the world would you do that?)</li>
<li>Create a “hide” class to be added through Javascript (see JS section later)</li>
<li>Hide photo studio and location categories according to responsiveness</li>
<li>Customize icons color</li>
<li> Insert and customize social media icons</li>
<li>Insert custom text on not customizable fields through the use of pseudo-classes</li>
<li>Target selectors according to the language</li>
<li>Style the placeholders for the search bar</li>
<li>Customize the responsiveness of the banner height and of the slogan</li>
<li>Select and show/hide the left menu items in the info pages</li>
<li>Show hide elements in the bubble pop-ups of the map view</li>
<li>Show/hide the avatar and/or the name of the listings’ authors</li>
<li>Implement some minor fixes to responsiveness</li>
</ul>


## JS
About the Javascript part, I really had fun searching creative solutions and implementing them. Remember thought to consider them more as a temporary “hack” then stable solutions. I repeat: they are not foolproof. Anyway, with a bit of fantasy I could be able to:


<ul>
<li>Find out if a user was logged in or if he/she was just randomly browsing for photography studios or locations (and of course enabling/disabling styles and scripts according to this behavior)</li>
<li>Set up a function that shows or displays elements</li>
<li> Customize the list-item marker and change it to any of the fontawesome icons</li>
<li>Fix the SEO issue of duplicated titles between languages</li>
<li>Show popups only for logged/unlogged users</li>
<li> Check if the user is connected from Desktop or Mobile and Tablet</li>
<li>Check if the user completed the registration</li>
<li>Insert Google AdWords and Facebook pixel tracking codes</li>
<li>Insert JSON markup according to page loaded</li>
</ul>

Of course I had to play a bit with the loading order of the functions and add an event listener to fire them once the DOM was loaded.

Moreover, instead of inserting the whole scripts directly in the header, I kept them here and I loaded them through two link tags. This way the whole set up was definitely cleaner and I could keep track of the changes and roll back to previous versions if necessary.  

<br />
  
## DONATIONS:

As I said, all this is just a quick fix that helped me to overcome the limits of the Sharetribe’s hosted version of MisterLocation, so be aware that this probably is not gonna solve all of your problems.
You can use the code for free though and, in case you do or if you like my project MisterLocation (that is still free to use, i.e. we do not get any commission or any money), please make a donation to one of  the following address so I can keep up the good work:

<br />

BITCOIN: 39uqCRdDBThUsv8xZyUBQR35xHjW1ZWS23

ETHEREUM: 0x7a6c9c6e8e50ab6eec38f50ac82b63d4149bc6e7

LITECOIN: MTTwk9mtjWkjBDT83u2towTHuDjbDdLXUH

RIPPLE: rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv (destination tag: 77572395)

BITCOIN CASH: 33aWuRGKdbUpe8VUDb3W7i4anKebos2s5e

<br />
If you need any clarification on the code, I would be glad to assist you. Thank you.



 
