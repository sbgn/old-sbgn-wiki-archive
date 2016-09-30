/*
** SBGN skin custom JavaScript.
** This depends on wikibits.js having been loaded first.
**
** This file contains Javascript code and packages written and released by
** other people.  See the individual sections below for copyright info.
**
** 2008-07-17 <mhucka@caltech.edu>
*/

/* ----------------------------------------------------------------------------
 * MediaWiki:Common.js
 * Downloaded 2007-12-12 from http://en.wikipedia.org/wiki/MediaWiki:Common.js
 * by M. Hucka.  I removed a lot of things we don't use and left the ones that
 * we do (or might).  Modified slightly at various times and incorporated into
 * this file in an effort to consolidate our site Javascript a little bit more.
 * ------------------------------------------------------------------------- */


/** Import module
 *
 *  Description: Includes a raw wiki page as javascript or CSS, 
 *               used for including user made modules.
 *  Maintainers: [[User:AzaToth]]
 */

importedScripts = {}; // object keeping track of included scripts, so a script ain't included twice

function importScript( page ) {
  if( importedScripts[page] ) {
    return;
  }
  importedScripts[page] = true;
  var url = wgScriptPath
    + '/index.php?title='
    + encodeURIComponent( page.replace( / /g, '_' ) )
    + '&action=raw&ctype=text/javascript';
  var scriptElem = document.createElement( 'script' );
  scriptElem.setAttribute( 'src' , url );
  scriptElem.setAttribute( 'type' , 'text/javascript' );
  document.getElementsByTagName( 'head' )[0].appendChild( scriptElem );
}
 
function importStylesheet( page ) {
  var sheet = '@import "'
    + wgScriptPath
    + '/index.php?title='
    + encodeURIComponent( page.replace( / /g, '_' ) )
    + '&action=raw&ctype=text/css";'
    var styleElem = document.createElement( 'style' );
  styleElem.setAttribute( 'type' , 'text/css' );
  styleElem.appendChild( document.createTextNode( sheet ) );
  document.getElementsByTagName( 'head' )[0].appendChild( styleElem );
}
 
/* Test if an element has a certain class
 *
 * Description: Uses regular expressions and caching for better performance.
 * Maintainers: [[User:Mike Dillon]], [[User:R. Koot]], [[User:SG]]
 */
 
var hasClass = (function () {
                  var reCache = {};
                  return function (element, className) {
                    return (reCache[className] ? reCache[className] : (reCache[className] = new RegExp("(?:\\s|^)" + className + "(?:\\s|$)"))).test(element.className);
                  };
                })();
 
/** Internet Explorer bug fix
 *
 *  Description: Fixes IE horizontal scrollbar bug
 *  Maintainers: [[User:Tom-]]?
 */
 
if (navigator.appName == "Microsoft Internet Explorer" && document.compatMode == "CSS1Compat")
 {
   var oldWidth;
   var docEl = document.documentElement;
 
   function fixIEScroll()
   {
     if (!oldWidth || docEl.clientWidth > oldWidth)
       doFixIEScroll();
     else
       setTimeout(doFixIEScroll, 1);
 
     oldWidth = docEl.clientWidth;
   }
 
   function doFixIEScroll() {
     docEl.style.overflowX = (docEl.scrollWidth - docEl.clientWidth < 4) ? "hidden" : "";
   }
 
   document.attachEvent("onreadystatechange", fixIEScroll);
   attachEvent("onresize", fixIEScroll);
 }
 
/** Collapsible tables
 *
 *  Description: Allows tables to be collapsed, showing only the header. See
 *               [[Wikipedia:NavFrame]].
 *  Maintainers: [[User:R. Koot]]
 */
 
var autoCollapse = 2;
var collapseCaption = "collapse"; // was "hide" [mhucka 2007-12-27]
var expandCaption = "show";
 
function collapseTable( tableIndex )
{
  var Button = document.getElementById( "collapseButton" + tableIndex );
  var Table = document.getElementById( "collapsibleTable" + tableIndex );
 
  if ( !Table || !Button ) {
    return false;
  }
 
  var Rows = Table.rows;
 
  if ( Button.firstChild.data == collapseCaption ) {
    for ( var i = 1; i < Rows.length; i++ ) {
      Rows[i].style.display = "none";
    }
    Button.firstChild.data = expandCaption;
  } else {
    for ( var i = 1; i < Rows.length; i++ ) {
      Rows[i].style.display = Rows[0].style.display;
    }
    Button.firstChild.data = collapseCaption;
  }
}
 
function createCollapseButtons()
{
  var tableIndex = 0;
  var NavigationBoxes = new Object();
  var Tables = document.getElementsByTagName( "table" );
 
  for ( var i = 0; i < Tables.length; i++ ) {
    if ( hasClass( Tables[i], "collapsible" ) ) {
 
      /* only add button and increment count if there is a header row to work with */
      var HeaderRow = Tables[i].getElementsByTagName( "tr" )[0];
      if (!HeaderRow) continue;
      var Header = HeaderRow.getElementsByTagName( "th" )[0];
      if (!Header) continue;
 
      NavigationBoxes[ tableIndex ] = Tables[i];
      Tables[i].setAttribute( "id", "collapsibleTable" + tableIndex );
 
      var Button     = document.createElement( "span" );
      var ButtonLink = document.createElement( "a" );
      var ButtonText = document.createTextNode( collapseCaption );
 
      Button.style.styleFloat = "right";
      Button.style.cssFloat = "right";
      Button.style.fontWeight = "normal";
      Button.style.textAlign = "right";
      Button.style.width = "6em";
 
      ButtonLink.style.color = Header.style.color;
      ButtonLink.setAttribute( "id", "collapseButton" + tableIndex );
      ButtonLink.setAttribute( "href", "javascript:collapseTable(" + tableIndex + ");" );
      ButtonLink.appendChild( ButtonText );
 
      Button.appendChild( document.createTextNode( "[" ) );
      Button.appendChild( ButtonLink );
      Button.appendChild( document.createTextNode( "]" ) );
 
      Header.insertBefore( Button, Header.childNodes[0] );
      tableIndex++;
    }
  }
 
  for ( var i = 0;  i < tableIndex; i++ ) {
    if ( hasClass( NavigationBoxes[i], "collapsed" ) || ( tableIndex >= autoCollapse && hasClass( NavigationBoxes[i], "autocollapse" ) ) ) {
      collapseTable( i );
    }
  }
}
 
addOnloadHook( createCollapseButtons );
 
/** pageview counter
 *
 *  Description: Please talk to de:User:LeonWeber before changing anything or 
 *               if there are any issues with that.
 *  Maintainers: [[:de:User:LeonWeber]]?
 */
 
// this should be adjusted to a good value.
// BE CAREFUL, you will break zedler if it's too low!
// And then DaB. will kill Leon :-(
var disable_counter = 0;
var counter_factor = 6000;
 
function pgcounter_setup()
{
  if(disable_counter == 0)
  {
    var url = window.location.href;
    if(Math.floor(Math.random()*counter_factor)==42)  // the probability thing
    {
      if(wgIsArticle==true || wgArticleId==0) // do not count history pages etc.
      {
        var pgcountNs = wgCanonicalNamespace;
        if(wgCanonicalNamespace=="")
        {
          pgcountNs = "0";
        }
        var cnt_url = "http://pgcount.wikimedia.de/index.png?ns=" + pgcountNs + "&title=" + encodeURI(wgTitle) + "&factor=" + counter_factor +"&wiki=enwiki";
        var img = new Image(); 
        img.src = cnt_url;
      }
    }
  }
}
// Do not use aOnloadFunctions[aOnloadFunctions.length] = pgcounter_setup;, some browsers don't like that.
pgcounter_setup();
 
/** "Technical restrictions" title fix
 *
 * Description:
 * Maintainers: User:Interiot, User:Mets501, User:Freakofnurture
 */
//
// For pages that have something like Template:Lowercase, replace the title, but only if it is cut-and-pasteable as a valid wikilink.
// (for instance iPod's title is updated. But [[C#]] is not an equivalent
// wikilink, so [[C Sharp]] doesn't have its main title changed)
// Likewise for users who have selected the U.K. date format ("1 March") the  
// titles of day-of-the-year articles will appear in that style. Users with any
// other date setting are not affected.
//
// The function looks for a banner like this: 
// &lt;div id="RealTitleBanner"&gt;  ... &lt;span id="RealTitle"&gt;title&lt;/span&gt; ... &lt;/div&gt;
// An element with id=DisableRealTitle disables the function.
//
var disableRealTitle = 0; // users can set disableRealTitle = 1 locally to disable.
if (wgIsArticle) { // don't display the RealTitle when editing, since it is apparently inconsistent (doesn't show when editing sections, doesn't show when not previewing)
  addOnloadHook(function() {
                  try {
                    var realTitleBanner = document.getElementById("RealTitleBanner");
                    if (realTitleBanner && !document.getElementById("DisableRealTitle") && !disableRealTitle ) {
                      var realTitle = document.getElementById("RealTitle");
                      if (realTitle) {
                        var realTitleHTML = realTitle.innerHTML;
                        realTitleText = pickUpText(realTitle);
 
                        var isPasteable = 0;
                        //var containsHTML = /</.test(realTitleHTML);    // contains ANY HTML
                        var containsTooMuchHTML = /</.test( realTitleHTML.replace(/<\/?(sub|sup|small|big)>/gi, "") ); // contains HTML that will be ignored when cut-n-pasted as a wikilink
                        // calculate whether the title is pasteable
                        var verifyTitle = realTitleText.replace(/^ +/, "");       // trim left spaces
                        verifyTitle = verifyTitle.charAt(0).toUpperCase() + verifyTitle.substring(1, verifyTitle.length);    // uppercase first character
 
                        // if the namespace prefix is there, remove it on our verification copy. If it isn't there, add it to the original realValue copy.
                        if (wgNamespaceNumber != 0) {
                          if (wgCanonicalNamespace == verifyTitle.substr(0, wgCanonicalNamespace.length).replace(/ /g, "_") && verifyTitle.charAt(wgCanonicalNamespace.length) == ":") {
                            verifyTitle = verifyTitle.substr(wgCanonicalNamespace.length + 1);
                          } else {
                            realTitleText = wgCanonicalNamespace.replace(/_/g, " ") + ":" + realTitleText;
                            realTitleHTML = wgCanonicalNamespace.replace(/_/g, " ") + ":" + realTitleHTML;
                          }
                        }
 
                        // verify whether wgTitle matches
                        verifyTitle = verifyTitle.replace(/[\s_]+/g, " ");      // underscores and multiple spaces to single spaces
                        verifyTitle = verifyTitle.replace(/^\s+/, "").replace(/\s+$/, "");        // trim left and right spaces
                        verifyTitle = verifyTitle.charAt(0).toUpperCase() + verifyTitle.substring(1, verifyTitle.length);    // uppercase first character
                        if ( (verifyTitle == wgTitle) || (verifyTitle == wgTitle.replace(/^(.+)?(January|February|March|April|May|June|July|August|September|October|November|December)\s+([12]?[0-9]|3[0123])([^\d].*)?$/g, "$1$3 $2$4") )) isPasteable = 1;
                        var h1 = document.getElementsByTagName("h1")[0];
                        if (h1 && isPasteable) {
                          h1.innerHTML = containsTooMuchHTML ? realTitleText : realTitleHTML;
                          if (!containsTooMuchHTML)
                            realTitleBanner.style.display = "none";
                        }
                        document.title = realTitleText + " - Wikipedia, the free encyclopedia";
                      }
                    }
                  } catch (e) {
                    /* Something went wrong. */
                  }
                });
 }
 
// similar to innerHTML, but only returns the text portions of the insides, excludes HTML
function pickUpText(aParentElement) {
  var str = "";
 
  function pickUpTextInternal(aElement) {
    var child = aElement.firstChild;
    while (child) {
      if (child.nodeType == 1)     // ELEMENT_NODE 
        pickUpTextInternal(child);
      else if (child.nodeType == 3)   // TEXT_NODE
        str += child.nodeValue;
 
      child = child.nextSibling;
    }
  }
 
  pickUpTextInternal(aParentElement);
  return str;
}
 
//fix edit summary prompt for undo
//this code fixes the fact that the undo function combined with the "no edit summary prompter" causes problems if leaving the
//edit summary unchanged
//this was added by [[User:Deskana]], code by [[User:Tra]]
addOnloadHook(function () {
                if (document.location.search.indexOf("undo=") != -1
                    && document.getElementsByName('wpAutoSummary')[0]) {
                  document.getElementsByName('wpAutoSummary')[0].value='1';
                }
              }
)
 
/** Add dismiss button to watchlist-message
 *
 *  Description: Hide the watchlist message for one week.
 *  Maintainers: [[User:Ruud Koot|Ruud Koot]]
 */
 
function addDismissButton() {
  var watchlistMessage = document.getElementById("watchlist-message");
  if ( watchlistMessage == null ) return;
  var watchlistCookieID = watchlistMessage.className.replace(/cookie\-ID\_/ig,'');
 
  if ( document.cookie.indexOf( "hidewatchlistmessage-" + watchlistCookieID + "=yes" ) != -1 ) {
    watchlistMessage.style.display = "none";
  }
 
  var Button     = document.createElement( "span" );
  var ButtonLink = document.createElement( "a" );
  var ButtonText = document.createTextNode( "dismiss" );
 
  ButtonLink.setAttribute( "id", "dismissButton" );
  ButtonLink.setAttribute( "href", "javascript:dismissWatchlistMessage();" );
  ButtonLink.setAttribute( "title", "Hide this message for one week" );
  ButtonLink.appendChild( ButtonText );
 
  Button.appendChild( document.createTextNode( "[" ) );
  Button.appendChild( ButtonLink );
  Button.appendChild( document.createTextNode( "]" ) );
 
  watchlistMessage.appendChild( Button );
}
 
function dismissWatchlistMessage() {
  var e = new Date();
  e.setTime( e.getTime() + (7*24*60*60*1000) );
  var watchlistMessage = document.getElementById("watchlist-message");
  var watchlistCookieID = watchlistMessage.className.replace(/cookie\-ID\_/ig,'');
  document.cookie = "hidewatchlistmessage-" + watchlistCookieID + "=yes; expires=" + e.toGMTString() + "; path=/";
  watchlistMessage.style.display = "none";
}
 
addOnloadHook( addDismissButton );
 
/** Change Special:Search to use a drop-down menu
 *
 *  Description: Change Special:Search to use a drop-down menu, with the default being
 *               the internal MediaWiki engine
 *  Created and maintained by: [[User:Gracenotes]]
 */
 
if (wgPageName == "Special:Search") {
  var searchEngines = [];
  addOnloadHook(SpecialSearchEnhanced);
 }
 
function SpecialSearchEnhanced() {
  var createOption = function(site, action, mainQ, addQ, addV) {
    var opt = document.createElement('option');
    opt.appendChild(document.createTextNode(site));
    searchEngines[searchEngines.length] = [action, mainQ, addQ, addV];
    return opt;
  }
  var searchForm = document.forms['search'];
  var selectBox = document.createElement('select');
  selectBox.id = 'searchEngine';
  searchForm.onsubmit = function() {
    var optSelected = searchEngines[document.getElementById('searchEngine').selectedIndex];
    searchForm.action = optSelected[0];
    searchForm.lsearchbox.name = optSelected[1];
    searchForm.title.value = optSelected[3];
    searchForm.title.name = optSelected[2];
  }
  selectBox.appendChild(createOption('MediaWiki search', wgScriptPath + '/index.php', 'search', 'title', 'Special:Search'));
  selectBox.appendChild(createOption('Google', 'http://www.google.com/search', 'q', 'sitesearch', 'en.wikipedia.org'));
  selectBox.appendChild(createOption('Yahoo', 'http://search.yahoo.com/search', 'p', 'vs', 'en.wikipedia.org'));
  selectBox.appendChild(createOption('Windows Live', 'http://search.live.com/results.aspx', 'q', 'q1', 'site:http://en.wikipedia.org'));
  selectBox.appendChild(createOption('Wikiwix', 'http://www.wikiwix.com/', 'action', 'lang', 'en'));
  selectBox.appendChild(createOption('Exalead', 'http://www.exalead.com/wikipedia/results', 'q', 'language', 'en'));
  searchForm.lsearchbox.style.marginLeft = '0px';
  var lStat = document.getElementById('loadStatus');
  lStat.parentNode.insertBefore(selectBox, lStat);
}
 
/** Sysop Javascript
 *
 *  Description: Allows for sysop-specific Javascript at [[MediaWiki:Sysop.js]].
 *  Created by: [[User:^demon]]
 */
function sysopFunctions() {
  if ( wgUserGroups && !window.disableSysopJS ) {
    for ( var g = 0; g < wgUserGroups.length; ++g ) {
      if ( wgUserGroups[g] == "sysop" ) {
        importScript( "MediaWiki:Sysop.js" );
        break;
      }
    }
  }
}
 
addOnloadHook( sysopFunctions );
 
/** IE 6 Z-index bug workaround for anonnotice
 *
 *  Description: This implements a work around for the Z-index bug found in Internet Explorer.
 *               It correctly places the anon notice on the page, even under IE6.
 *               See this Google search for more information about the bug:
 *               http://www.google.com/search?hl=en&client=firefox-a&rls=org.mozilla%3Aen-US%3Aofficial&hs=q74&q=z-index+ie6+bug&btnG=Search
 *  Created by: [[User:Gmaxwell]]
 */
addOnloadHook((function (){
                 if (wgUserName == null) {
 
                   var messageEdu=new Array();
                   messageEdu[0]='<a href="http://en.wikipedia.org/wiki/Wikipedia:Researching_with_Wikipedia" title="Wikipedia:Researching with Wikipedia">Learn&nbsp;more&nbsp;about&nbsp;using&nbsp;Wikipedia&nbsp;for&nbsp;research</a>';
                   messageEdu[1]='<a href="http://en.wikipedia.org/wiki/Wikipedia:Ten_things_you_may_not_know_about_Wikipedia" title="Wikipedia:Ten things you may not know about Wikipedia">Ten&nbsp;things&nbsp;you&nbsp;may&nbsp;not&nbsp;know&nbsp;about&nbsp;Wikipedia</a>';
                   messageEdu[2]='<a href="http://en.wikipedia.org/wiki/Wikipedia:Ten_things_you_may_not_know_about_images_on_Wikipedia" title="Wikipedia:Ten things you may not know about images on Wikipedia">Ten&nbsp;things&nbsp;you&nbsp;may&nbsp;not&nbsp;know&nbsp;about&nbsp;images&nbsp;on&nbsp;Wikipedia</a>';
                   messageEdu[3]='<a href="http://en.wikipedia.org/wiki/Wikipedia:Citing_Wikipedia" title="Wikipedia:Citing Wikipedia">Learn&nbsp;more&nbsp;about&nbsp;citing&nbsp;Wikipedia</a>';
                   messageEdu[4]='Have&nbsp;questions?&nbsp;<a href="http://en.wikipedia.org/wiki/Wikipedia:Questions" title="Wikipedia:Questions">Find&nbsp;out&nbsp;how&nbsp;to&nbsp;ask&nbsp;questions&nbsp;and&nbsp;get&nbsp;answers.</a>';
                   messageEdu[5]='<a href="http://en.wikipedia.org/wiki/Wikipedia:Basic_navigation" title="Wikipedia:Basic navigation">Find&nbsp;out&nbsp;more&nbsp;about&nbsp;navigating&nbsp;Wikipedia&nbsp;and&nbsp;finding&nbsp;information</a>';
                   messageEdu[6]='<a href="http://en.wikipedia.org/wiki/Wikipedia:Contributing_to_Wikipedia" title="Wikipedia:Contributing to Wikipedia">Interested&nbsp;in&nbsp;contributing&nbsp;to&nbsp;Wikipedia?</a>';
                   var whichMessageEdu = Math.floor(Math.random()*(messageEdu.length));
 
 
                   /**         document.getElementById("contentSub").innerHTML +='<div style="position:absolute; z-index:100; right:100px; top:0px;" class="metadata" id="anontip"><div style="text-align:right; font-size:87%">¥&nbsp;<i>' + messageEdu[whichMessageEdu] + '</i>&nbsp;¥</div></div>';
                    */
                 }
               }));
 
/** 
 * Correctly handle PNG transparency in Internet Explorer 6.
 * http://homepage.ntlworld.com/bobosola. Updated 18-Jan-2006.
 *  
 * Adapted for Wikipedia by Remember_the_dot and Edokter.
 *  
 * http://homepage.ntlworld.com/bobosola/pnginfo.htm states "This page contains more information for
 * the curious or those who wish to amend the script for special needs", which I take as permission to
 * modify or adapt this script freely. I release my changes into the public domain.
 */  
 
function PngFix()
{
  try
  {
    if (!document.body.filters)
    {
      window.PngFixDisabled = true
        }
  }
  catch (e)
  {
    window.PngFixDisabled = true
      }
  if (!window.PngFixDisabled)
  {
    var documentImages = document.images
      var documentCreateElement = document.createElement
      var funcEncodeURI = encodeURI
 
      for (var i = 0; i < documentImages.length;)
      {
        var img = documentImages[i]
        var imgSrc = img.src
 
        if (imgSrc.substr(imgSrc.length - 3).toLowerCase() == "png" && !img.onclick)
        {
          if (img.useMap)
          {
            img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + encodeURI(imgSrc) + "')"
            img.src = "http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif"
            i++
          }
          else
          {
            var outerSpan = documentCreateElement("span")
            var innerSpan = documentCreateElement("span")
            var outerSpanStyle = outerSpan.style
            var innerSpanStyle = innerSpan.style
            var imgCurrentStyle = img.currentStyle
 
            outerSpan.id = img.id
            outerSpan.title = img.title
            outerSpan.className = img.className
            outerSpanStyle.backgroundImage = imgCurrentStyle.backgroundImage
            outerSpanStyle.borderWidth = imgCurrentStyle.borderWidth
            outerSpanStyle.borderStyle = imgCurrentStyle.borderStyle
            outerSpanStyle.borderColor = imgCurrentStyle.borderColor
            outerSpanStyle.display = "inline-block"
            outerSpanStyle.fontSize = "0"
            outerSpanStyle.verticalAlign = "middle"
            if (img.parentElement.href) outerSpanStyle.cursor = "hand"
 
              innerSpanStyle.width = "1px"
              innerSpanStyle.height = "1px"
              innerSpanStyle.display = "inline-block"
              innerSpanStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + funcEncodeURI(imgSrc) + "')"
 
              outerSpan.appendChild(innerSpan)
              img.parentNode.replaceChild(outerSpan, img)
              }
        }
        else
        {
          i++
        }
      }
  }
}
 
if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.substr(22, 1) == "6")
 {
   window.attachEvent("onload", PngFix)
     }
 
/**
 * Remove need for CSS hacks regarding MSIE and IPA.
 */
 
if(navigator.userAgent.indexOf("MSIE") != -1 && document.createStyleSheet) {
  document.createStyleSheet().addRule('.IPA', 'font-family: "Doulos SIL", "Charis SIL", Gentium, "DejaVu Sans", Code2000, "TITUS Cyberbit Basic", "Arial Unicode MS", "Lucida Sans Unicode", "Chrysanthi Unicode";');
 }


/* ----------------------------------------------------------------------------
 * curvyCorners: generates rounded corners for divs.
 *
 * Version 1.2.9
 * Copyright (c) 2006 Cameron Cooke
 * By: Cameron Cooke and Tim Hutchison.
 * Website: http://www.curvycorners.net
 * Email:   info@totalinfinity.com
 * Distributed under the terms of the LPGL.
 *
 * 2008-07-17 <mhucka@caltech.edu> Modified to use PHP's toString instead of 
 * their custom "MakeHex" function.
 * ------------------------------------------------------------------------- */

// Browser detection

var isIE     = navigator.userAgent.toLowerCase().indexOf("msie") > -1;
var isMoz    = document.implementation && document.implementation.createDocument;
var isSafari = ((navigator.userAgent.toLowerCase().indexOf('safari') != -1) &&
		(navigator.userAgent.toLowerCase().indexOf('mac') != -1)) ? true : false;

/*
  Usage:
  newCornersObj = new curvyCorners(settingsObj, "classNameStr");
  newCornersObj = new curvyCorners(settingsObj, divObj1[, divObj2[, divObj3[, . . . [, divObjN]]]]);
*/
function curvyCorners()
{
  // Check parameters
  if (typeof(arguments[0]) != "object") throw newCurvyError("First parameter of curvyCorners() must be an object.");
  if (typeof(arguments[1]) != "object" && typeof(arguments[1]) != "string") throw newCurvyError("Second parameter of curvyCorners() must be an object or a class name.");

  // Get object(s)
  if (typeof(arguments[1]) == "string")
  {
    // Get elements by class name
    var startIndex = 0;
    var boxCol = getElementsByClass(arguments[1]);
  }
  else
  {
    // Get objects
    var startIndex = 1;
    var boxCol = arguments;
  }

  // Create return collection/object
  var curvyCornersCol = new Array();

  // Create array of html elements that can have rounded corners
  if (arguments[0].validTags)
    var validElements = arguments[0].validTags;
  else
    var validElements = ["div"]; // Default

  // Loop through each argument
  for (var i = startIndex, j = boxCol.length; i < j; i++)
  {
    // Current element tag name
    var currentTag = boxCol[i].tagName.toLowerCase();

    if (inArray(validElements, currentTag) !== false)
    {
      curvyCornersCol[curvyCornersCol.length] = new curvyObject(arguments[0], boxCol[i]);
    }
  }

  this.objects = curvyCornersCol;

  // Applys the curvyCorners to all objects
  this.applyCornersToAll = function()
    {
      for (var x = 0, k = this.objects.length; x < k; x++)
      {
        this.objects[x].applyCorners();
      }
    }
}

// curvyCorners object (can be called directly)
function curvyObject()
{
  // Setup Globals
  this.box              = arguments[1];
  this.settings         = arguments[0];
  this.topContainer     = null;
  this.bottomContainer  = null;
  this.masterCorners    = new Array();
  this.contentDIV       = null;

  // Get box formatting details
  var boxHeight       = get_style(this.box, "height", "height");
  var boxWidth        = get_style(this.box, "width", "width");
  var borderWidth     = get_style(this.box, "borderTopWidth", "border-top-width");
  var borderColour    = get_style(this.box, "borderTopColor", "border-top-color");
  var boxColour       = get_style(this.box, "backgroundColor", "background-color");
  var backgroundImage = get_style(this.box, "backgroundImage", "background-image");
  var boxPosition     = get_style(this.box, "position", "position");
  var boxPadding      = get_style(this.box, "paddingTop", "padding-top");

  // Set formatting propertes
  this.boxHeight       = parseInt(((boxHeight != "" && boxHeight != "auto" && boxHeight.indexOf("%") == -1)? boxHeight.substring(0, boxHeight.indexOf("px")) : this.box.scrollHeight));
  this.boxWidth        = parseInt(((boxWidth != "" && boxWidth != "auto" && boxWidth.indexOf("%") == -1)? boxWidth.substring(0, boxWidth.indexOf("px")) : this.box.scrollWidth));
  this.borderWidth     = parseInt(((borderWidth != "" && borderWidth.indexOf("px") !== -1)? borderWidth.slice(0, borderWidth.indexOf("px")) : 0));
  this.boxColour       = format_colour(boxColour);
  this.boxPadding      = parseInt(((boxPadding != "" && boxPadding.indexOf("px") !== -1)? boxPadding.slice(0, boxPadding.indexOf("px")) : 0));
  this.borderColour    = format_colour(borderColour);
  this.borderString    = this.borderWidth + "px" + " solid " + this.borderColour;
  this.backgroundImage = ((backgroundImage != "none")? backgroundImage : "");
  this.boxContent      = this.box.innerHTML;

  // Make box relative if not already absolute and remove any padding
  if (boxPosition != "absolute") this.box.style.position = "relative";
  this.box.style.padding = "0px";

  // If IE and height and width are not set, we need to set width so that we get positioning
  if (isIE && boxWidth == "auto" && boxHeight == "auto") this.box.style.width = "100%";

  // Resize box so that it stays to the orignal height

  // Remove content if box is using autoPad
  if (this.settings.autoPad == true && this.boxPadding > 0)
    this.box.innerHTML = "";

  /*
    This method creates the corners and
    applies them to the div element.
  */
  this.applyCorners = function()
    {
      /*
	Create top and bottom containers.
	These will be used as a parent for the corners and bars.
      */
      for (var t = 0; t < 2; t++)
      {
        switch(t)
        {
          // Top
          case 0:

          // Only build top bar if a top corner is to be draw
          if (this.settings.tl || this.settings.tr)
          {
            var newMainContainer = document.createElement("DIV");
            newMainContainer.style.width    = "100%";
            newMainContainer.style.fontSize = "1px";
            newMainContainer.style.overflow = "hidden";
            newMainContainer.style.position = "absolute";
            newMainContainer.style.paddingLeft  = this.borderWidth + "px";
            newMainContainer.style.paddingRight = this.borderWidth + "px";
            var topMaxRadius = Math.max(this.settings.tl ? this.settings.tl.radius : 0, this.settings.tr ? this.settings.tr.radius : 0);
            newMainContainer.style.height = topMaxRadius + "px";
            newMainContainer.style.top    = 0 - topMaxRadius + "px";
            newMainContainer.style.left   = 0 - this.borderWidth + "px";
            this.topContainer = this.box.appendChild(newMainContainer);
          }
          break;

          // Bottom
          case 1:

          // Only build bottom bar if a top corner is to be draw
          if (this.settings.bl || this.settings.br)
          {
            var newMainContainer = document.createElement("DIV");
            newMainContainer.style.width    = "100%";
            newMainContainer.style.fontSize = "1px";
            newMainContainer.style.overflow = "hidden";
            newMainContainer.style.position = "absolute";
            newMainContainer.style.paddingLeft  = this.borderWidth + "px";
            newMainContainer.style.paddingRight = this.borderWidth + "px";
            var botMaxRadius = Math.max(this.settings.bl ? this.settings.bl.radius : 0, this.settings.br ? this.settings.br.radius : 0);
            newMainContainer.style.height  = botMaxRadius + "px";
            newMainContainer.style.bottom  =  0 - botMaxRadius + "px";
            newMainContainer.style.left    =  0 - this.borderWidth + "px";
            this.bottomContainer = this.box.appendChild(newMainContainer);
          }
          break;
        }
      }

      // Turn off current borders
      if (this.topContainer) this.box.style.borderTopWidth = "0px";
      if (this.bottomContainer) this.box.style.borderBottomWidth = "0px";

      // Create array of available corners
      var corners = ["tr", "tl", "br", "bl"];

      /*
	Loop for each corner
      */
      for (var i in corners)
      {
        // FIX for prototype lib
        if (i > -1 < 4)
        {
          // Get current corner type from array
          var cc = corners[i];

          // Has the user requested the currentCorner be round?
          if (!this.settings[cc])
          {
            // No
            if (((cc == "tr" || cc == "tl") && this.topContainer != null) || ((cc == "br" || cc == "bl") && this.bottomContainer != null))
            {
              // We need to create a filler div to fill the space upto the next horzontal corner.
              var newCorner = document.createElement("DIV");

              // Setup corners properties
              newCorner.style.position = "relative";
              newCorner.style.fontSize = "1px";
              newCorner.style.overflow = "hidden";

              // Add background image?
              if (this.backgroundImage == "")
                newCorner.style.backgroundColor = this.boxColour;
              else
                newCorner.style.backgroundImage = this.backgroundImage;

              switch(cc)
              {
              case "tl":
                newCorner.style.height      = topMaxRadius - this.borderWidth + "px";
                newCorner.style.marginRight = this.settings.tr.radius - (this.borderWidth*2) + "px";
                newCorner.style.borderLeft  = this.borderString;
                newCorner.style.borderTop   = this.borderString;
                newCorner.style.left        = -this.borderWidth + "px";
                break;

              case "tr":
                newCorner.style.height      = topMaxRadius - this.borderWidth + "px";
                newCorner.style.marginLeft  = this.settings.tl.radius - (this.borderWidth*2) + "px";
                newCorner.style.borderRight = this.borderString;
                newCorner.style.borderTop   = this.borderString;
                newCorner.style.backgroundPosition  = "-" + (topMaxRadius + this.borderWidth) + "px 0px";
                newCorner.style.left        = this.borderWidth + "px";
                break;

              case "bl":
                newCorner.style.height       = botMaxRadius - this.borderWidth + "px";
                newCorner.style.marginRight  = this.settings.br.radius - (this.borderWidth*2) + "px";
                newCorner.style.borderLeft   = this.borderString;
                newCorner.style.borderBottom = this.borderString;
                newCorner.style.left         = -this.borderWidth + "px";
                newCorner.style.backgroundPosition = "-" + (this.borderWidth) + "px -" + (this.boxHeight + (botMaxRadius + this.borderWidth)) + "px";
                break;

              case "br":
                newCorner.style.height       = botMaxRadius - this.borderWidth + "px";
                newCorner.style.marginLeft   = this.settings.bl.radius - (this.borderWidth*2) + "px";
                newCorner.style.borderRight  = this.borderString;
                newCorner.style.borderBottom = this.borderString;
                newCorner.style.left         = this.borderWidth + "px"
                  newCorner.style.backgroundPosition = "-" + (botMaxRadius + this.borderWidth) + "px -" + (this.boxHeight + (botMaxRadius + this.borderWidth)) + "px";
                break;
              }
            }
          }
          else
          {
            /*
              PERFORMANCE NOTE:

              If more than one corner is requested and a corner has been already
              created for the same radius then that corner will be used as a master and cloned.
              The pixel bars will then be repositioned to form the new corner type.
              All new corners start as a bottom right corner.
            */
            if (this.masterCorners[this.settings[cc].radius])
            {
              // Create clone of the master corner
              var newCorner = this.masterCorners[this.settings[cc].radius].cloneNode(true);
            }
            else
            {
              // Yes, we need to create a new corner
              var newCorner = document.createElement("DIV");
              newCorner.style.height = this.settings[cc].radius + "px";
              newCorner.style.width  = this.settings[cc].radius + "px";
              newCorner.style.position = "absolute";
              newCorner.style.fontSize = "1px";
              newCorner.style.overflow = "hidden";

              // THE FOLLOWING BLOCK OF CODE CREATES A ROUNDED CORNER
              // ---------------------------------------------------- TOP

              // Get border radius
              var borderRadius = parseInt(this.settings[cc].radius - this.borderWidth);

              // Cycle the x-axis
              for (var intx = 0, j = this.settings[cc].radius; intx < j; intx++)
              {
                // Calculate the value of y1 which identifies the pixels inside the border
                if ((intx +1) >= borderRadius)
                  var y1 = -1;
                else
                  var y1 = (Math.floor(Math.sqrt(Math.pow(borderRadius, 2) - Math.pow((intx+1), 2))) - 1);

                // Only calculate y2 and y3 if there is a border defined
                if (borderRadius != j)
                {
                  if ((intx) >= borderRadius)
                    var y2 = -1;
                  else
                    var y2 = Math.ceil(Math.sqrt(Math.pow(borderRadius,2) - Math.pow(intx, 2)));

                  if ((intx+1) >= j)
                    var y3 = -1;
                  else
                    var y3 = (Math.floor(Math.sqrt(Math.pow(j ,2) - Math.pow((intx+1), 2))) - 1);
                }

                // Calculate y4
                if ((intx) >= j)
                  var y4 = -1;
                else
                  var y4 = Math.ceil(Math.sqrt(Math.pow(j ,2) - Math.pow(intx, 2)));

                // Draw bar on inside of the border with foreground colour
                if (y1 > -1) this.drawPixel(intx, 0, this.boxColour, 100, (y1+1), newCorner, -1, this.settings[cc].radius);

                // Only draw border/foreground antialiased pixels and border if there is a border defined
                if (borderRadius != j)
                {
                  // Cycle the y-axis
                  for (var inty = (y1 + 1); inty < y2; inty++)
                  {
                    // Draw anti-alias pixels
                    if (this.settings.antiAlias)
                    {
                      // For each of the pixels that need anti aliasing between the foreground and border colour draw single pixel divs
                      if (this.backgroundImage != "")
                      {
                        var borderFract = (pixelFraction(intx, inty, borderRadius) * 100);

                        if (borderFract < 30)
                        {
                          this.drawPixel(intx, inty, this.borderColour, 100, 1, newCorner, 0, this.settings[cc].radius);
                        }
                        else
                        {
                          this.drawPixel(intx, inty, this.borderColour, 100, 1, newCorner, -1, this.settings[cc].radius);
                        }
                      }
                      else
                      {
                        var pixelcolour = BlendColour(this.boxColour, this.borderColour, pixelFraction(intx, inty, borderRadius));
                        this.drawPixel(intx, inty, pixelcolour, 100, 1, newCorner, 0, this.settings[cc].radius, cc);
                      }
                    }
                  }

                  // Draw bar for the border
                  if (this.settings.antiAlias)
                  {
                    if (y3 >= y2)
                    {
                      if (y2 == -1) y2 = 0;
                      this.drawPixel(intx, y2, this.borderColour, 100, (y3 - y2 + 1), newCorner, 0, 0);
                    }
                  }
                  else
                  {
                    if (y3 >= y1)
                    {
                      this.drawPixel(intx, (y1 + 1), this.borderColour, 100, (y3 - y1), newCorner, 0, 0);
                    }
                  }

                  // Set the colour for the outside curve
                  var outsideColour = this.borderColour;
                }
                else
                {
                  // Set the coour for the outside curve
                  var outsideColour = this.boxColour;
                  var y3 = y1;
                }

                // Draw aa pixels?
                if (this.settings.antiAlias)
                {
                  // Cycle the y-axis and draw the anti aliased pixels on the outside of the curve
                  for (var inty = (y3 + 1); inty < y4; inty++)
                  {
                    // For each of the pixels that need anti aliasing between the foreground/border colour & background draw single pixel divs
                    this.drawPixel(intx, inty, outsideColour, (pixelFraction(intx, inty , j) * 100), 1, newCorner, ((this.borderWidth > 0)? 0 : -1), this.settings[cc].radius);
                  }
                }
              }

              // END OF CORNER CREATION
              // ---------------------------------------------------- END

              // We now need to store the current corner in the masterConers array
              this.masterCorners[this.settings[cc].radius] = newCorner.cloneNode(true);
            }

            /*
              Now we have a new corner we need to reposition all the pixels unless
              the current corner is the bottom right.
            */
            if (cc != "br")
            {
              // Loop through all children (pixel bars)
              for (var t = 0, k = newCorner.childNodes.length; t < k; t++)
              {
                // Get current pixel bar
                var pixelBar = newCorner.childNodes[t];

                // Get current top and left properties
                var pixelBarTop    = parseInt(pixelBar.style.top.substring(0, pixelBar.style.top.indexOf("px")));
                var pixelBarLeft   = parseInt(pixelBar.style.left.substring(0, pixelBar.style.left.indexOf("px")));
                var pixelBarHeight = parseInt(pixelBar.style.height.substring(0, pixelBar.style.height.indexOf("px")));

                // Reposition pixels
                if (cc == "tl" || cc == "bl"){
                  pixelBar.style.left = this.settings[cc].radius -pixelBarLeft -1 + "px"; // Left
                }
                if (cc == "tr" || cc == "tl"){
                  pixelBar.style.top =  this.settings[cc].radius -pixelBarHeight -pixelBarTop + "px"; // Top
                }

                switch(cc)
                {
                case "tr":
                  pixelBar.style.backgroundPosition  = "-" + Math.abs((this.boxWidth - this.settings[cc].radius + this.borderWidth) + pixelBarLeft) + "px -" + Math.abs(this.settings[cc].radius -pixelBarHeight -pixelBarTop - this.borderWidth) + "px";
                  break;

                case "tl":
                  pixelBar.style.backgroundPosition = "-" + Math.abs((this.settings[cc].radius -pixelBarLeft -1)  - this.borderWidth) + "px -" + Math.abs(this.settings[cc].radius -pixelBarHeight -pixelBarTop - this.borderWidth) + "px";
                  break;

                case "bl":
                  pixelBar.style.backgroundPosition = "-" + Math.abs((this.settings[cc].radius -pixelBarLeft -1) - this.borderWidth) + "px -" + Math.abs((this.boxHeight + this.settings[cc].radius + pixelBarTop) -this.borderWidth) + "px";
                  break;
                }
              }
            }
          }

          if (newCorner)
          {
            // Position the container
            switch(cc)
            {
            case "tl":
              if (newCorner.style.position == "absolute") newCorner.style.top  = "0px";
              if (newCorner.style.position == "absolute") newCorner.style.left = "0px";
              if (this.topContainer) this.topContainer.appendChild(newCorner);
              break;

            case "tr":
              if (newCorner.style.position == "absolute") newCorner.style.top  = "0px";
              if (newCorner.style.position == "absolute") newCorner.style.right = "0px";
              if (this.topContainer) this.topContainer.appendChild(newCorner);
              break;

            case "bl":
              if (newCorner.style.position == "absolute") newCorner.style.bottom  = "0px";
              if (newCorner.style.position == "absolute") newCorner.style.left = "0px";
              if (this.bottomContainer) this.bottomContainer.appendChild(newCorner);
              break;

            case "br":
              if (newCorner.style.position == "absolute") newCorner.style.bottom   = "0px";
              if (newCorner.style.position == "absolute") newCorner.style.right = "0px";
              if (this.bottomContainer) this.bottomContainer.appendChild(newCorner);
              break;
            }
          }
        }
      }

      /*
	The last thing to do is draw the rest of the filler DIVs.
	We only need to create a filler DIVs when two corners have
	diffrent radiuses in either the top or bottom container.
      */

      // Find out which corner has the biiger radius and get the difference amount
      var radiusDiff = new Array();
      radiusDiff["t"] = Math.abs(this.settings.tl.radius - this.settings.tr.radius)
      radiusDiff["b"] = Math.abs(this.settings.bl.radius - this.settings.br.radius);

      for (z in radiusDiff)
      {
        // FIX for prototype lib
        if (z == "t" || z == "b")
        {
          if (radiusDiff[z])
          {
            // Get the type of corner that is the smaller one
            var smallerCornerType = ((this.settings[z + "l"].radius < this.settings[z + "r"].radius)? z +"l" : z +"r");

            // First we need to create a DIV for the space under the smaller corner
            var newFiller = document.createElement("DIV");
            newFiller.style.height = radiusDiff[z] + "px";
            newFiller.style.width  =  this.settings[smallerCornerType].radius+ "px"
              newFiller.style.position = "absolute";
            newFiller.style.fontSize = "1px";
            newFiller.style.overflow = "hidden";
            newFiller.style.backgroundColor = this.boxColour;
            //newFiller.style.backgroundColor = get_random_color();

            // Position filler
            switch(smallerCornerType)
            {
            case "tl":
              newFiller.style.bottom = "0px";
              newFiller.style.left   = "0px";
              newFiller.style.borderLeft = this.borderString;
              this.topContainer.appendChild(newFiller);
              break;

            case "tr":
              newFiller.style.bottom = "0px";
              newFiller.style.right  = "0px";
              newFiller.style.borderRight = this.borderString;
              this.topContainer.appendChild(newFiller);
              break;

            case "bl":
              newFiller.style.top    = "0px";
              newFiller.style.left   = "0px";
              newFiller.style.borderLeft = this.borderString;
              this.bottomContainer.appendChild(newFiller);
              break;

            case "br":
              newFiller.style.top    = "0px";
              newFiller.style.right  = "0px";
              newFiller.style.borderRight = this.borderString;
              this.bottomContainer.appendChild(newFiller);
              break;
            }
          }

          // Create the bar to fill the gap between each corner horizontally
          var newFillerBar = document.createElement("DIV");
          newFillerBar.style.position = "relative";
          newFillerBar.style.fontSize = "1px";
          newFillerBar.style.overflow = "hidden";
          newFillerBar.style.backgroundColor = this.boxColour;
          newFillerBar.style.backgroundImage = this.backgroundImage;

          switch(z)
          {
          case "t":
            // Top Bar
            if (this.topContainer)
            {
              // Edit by Asger Hallas: Check if settings.xx.radius is not false
              if (this.settings.tl.radius && this.settings.tr.radius)
              {
                newFillerBar.style.height      = topMaxRadius - this.borderWidth + "px";
                newFillerBar.style.marginLeft  = this.settings.tl.radius - this.borderWidth + "px";
                newFillerBar.style.marginRight = this.settings.tr.radius - this.borderWidth + "px";
                newFillerBar.style.borderTop   = this.borderString;

                if (this.backgroundImage != "")
                  newFillerBar.style.backgroundPosition  = "-" + (topMaxRadius + this.borderWidth) + "px 0px";

                this.topContainer.appendChild(newFillerBar);
              }

              // Repos the boxes background image
              this.box.style.backgroundPosition      = "0px -" + (topMaxRadius - this.borderWidth) + "px";
            }
            break;

          case "b":
            if (this.bottomContainer)
            {
              // Edit by Asger Hallas: Check if settings.xx.radius is not false
              if (this.settings.bl.radius && this.settings.br.radius)
              {
                // Bottom Bar
                newFillerBar.style.height       = botMaxRadius - this.borderWidth + "px";
                newFillerBar.style.marginLeft   = this.settings.bl.radius - this.borderWidth + "px";
                newFillerBar.style.marginRight  = this.settings.br.radius - this.borderWidth + "px";
                newFillerBar.style.borderBottom = this.borderString;

                if (this.backgroundImage != "")
                  newFillerBar.style.backgroundPosition  = "-" + (botMaxRadius + this.borderWidth) + "px -" + (this.boxHeight + (topMaxRadius + this.borderWidth)) + "px";

                this.bottomContainer.appendChild(newFillerBar);
              }
            }
            break;
          }
        }
      }

      /*
	AutoPad! apply padding if set.
      */
      if (this.settings.autoPad == true && this.boxPadding > 0)
      {
        // Create content container
        var contentContainer = document.createElement("DIV");

        // Set contentContainer's properties
        contentContainer.style.position = "relative";
        contentContainer.innerHTML      = this.boxContent;
        contentContainer.className      = "autoPadDiv";

        // Get padding amounts
        var topPadding = Math.abs(topMaxRadius - this.boxPadding);
        var botPadding = Math.abs(botMaxRadius - this.boxPadding);

        // Apply top padding
        if (topMaxRadius < this.boxPadding)
          contentContainer.style.paddingTop = topPadding + "px";

        // Apply Bottom padding
        if (botMaxRadius < this.boxPadding)
          contentContainer.style.paddingBottom = botMaxRadius + "px";

        // Apply left and right padding
        contentContainer.style.paddingLeft = this.boxPadding + "px";
        contentContainer.style.paddingRight = this.boxPadding + "px";

        // Append contentContainer
        this.contentDIV = this.box.appendChild(contentContainer);
      }
    }

  /*
    This function draws the pixles
  */
  this.drawPixel = function(intx, inty, colour, transAmount, height, newCorner, image, cornerRadius)
    {
      // Create pixel
      var pixel = document.createElement("DIV");
      pixel.style.height   = height + "px";
      pixel.style.width    = "1px";
      pixel.style.position = "absolute";
      pixel.style.fontSize = "1px";
      pixel.style.overflow = "hidden";

      // Max Top Radius
      var topMaxRadius = Math.max(this.settings["tr"].radius, this.settings["tl"].radius);

      // Dont apply background image to border pixels
      if (image == -1 && this.backgroundImage != "")
      {
        pixel.style.backgroundImage = this.backgroundImage;
        pixel.style.backgroundPosition  = "-" + (this.boxWidth - (cornerRadius - intx) + this.borderWidth) + "px -" + ((this.boxHeight + topMaxRadius + inty) -this.borderWidth) + "px";
      }
      else
      {
        pixel.style.backgroundColor = colour;
      }

      // Set opacity if the transparency is anything other than 100
      if (transAmount != 100)
	setOpacity(pixel, transAmount);

      // Set the pixels position
      pixel.style.top = inty + "px";
      pixel.style.left = intx + "px";

      newCorner.appendChild(pixel);
    }
}

// UTILITY FUNCTIONS

// Inserts a element after another
function insertAfter(parent, node, referenceNode)
{
  parent.insertBefore(node, referenceNode.nextSibling);
}

/*
  Blends the two colours by the fraction
  returns the resulting colour as a string in the format "#FFFFFF"
*/
function BlendColour(Col1, Col2, Col1Fraction)
{
  var red1 = parseInt(Col1.substr(1,2),16);
  var green1 = parseInt(Col1.substr(3,2),16);
  var blue1 = parseInt(Col1.substr(5,2),16);
  var red2 = parseInt(Col2.substr(1,2),16);
  var green2 = parseInt(Col2.substr(3,2),16);
  var blue2 = parseInt(Col2.substr(5,2),16);

  if (Col1Fraction > 1 || Col1Fraction < 0) Col1Fraction = 1;

  var endRed = Math.round((red1 * Col1Fraction) + (red2 * (1 - Col1Fraction)));
  if (endRed > 255) endRed = 255;
  if (endRed < 0) endRed = 0;

  var endGreen = Math.round((green1 * Col1Fraction) + (green2 * (1 - Col1Fraction)));
  if (endGreen > 255) endGreen = 255;
  if (endGreen < 0) endGreen = 0;

  var endBlue = Math.round((blue1 * Col1Fraction) + (blue2 * (1 - Col1Fraction)));
  if (endBlue > 255) endBlue = 255;
  if (endBlue < 0) endBlue = 0;

  return "#" + endRed.toString(16) + endGreen.toString(16) + endBlue.toString(16);
}

/*
  For a pixel cut by the line determines the fraction of the pixel on the 'inside' of the
  line.  Returns a number between 0 and 1
*/
function pixelFraction(x, y, r)
{
  var pixelfraction = 0;

  /*
    determine the co-ordinates of the two points on the perimeter of the pixel that the
    circle crosses
  */
  var xvalues = new Array(1);
  var yvalues = new Array(1);
  var point = 0;
  var whatsides = "";

  // x + 0 = Left
  var intersect = Math.sqrt((Math.pow(r,2) - Math.pow(x,2)));

  if ((intersect >= y) && (intersect < (y+1)))
  {
    whatsides = "Left";
    xvalues[point] = 0;
    yvalues[point] = intersect - y;
    point =  point + 1;
  }
  // y + 1 = Top
  var intersect = Math.sqrt((Math.pow(r,2) - Math.pow(y+1,2)));

  if ((intersect >= x) && (intersect < (x+1)))
  {
    whatsides = whatsides + "Top";
    xvalues[point] = intersect - x;
    yvalues[point] = 1;
    point = point + 1;
  }
  // x + 1 = Right
  var intersect = Math.sqrt((Math.pow(r,2) - Math.pow(x+1,2)));

  if ((intersect >= y) && (intersect < (y+1)))
  {
    whatsides = whatsides + "Right";
    xvalues[point] = 1;
    yvalues[point] = intersect - y;
    point =  point + 1;
  }
  // y + 0 = Bottom
  var intersect = Math.sqrt((Math.pow(r,2) - Math.pow(y,2)));

  if ((intersect >= x) && (intersect < (x+1)))
  {
    whatsides = whatsides + "Bottom";
    xvalues[point] = intersect - x;
    yvalues[point] = 0;
  }

  /*
    depending on which sides of the perimeter of the pixel the circle crosses calculate the
    fraction of the pixel inside the circle
  */
  switch (whatsides)
  {
  case "LeftRight":
    pixelfraction = Math.min(yvalues[0],yvalues[1]) + ((Math.max(yvalues[0],yvalues[1]) - Math.min(yvalues[0],yvalues[1]))/2);
    break;

  case "TopRight":
    pixelfraction = 1-(((1-xvalues[0])*(1-yvalues[1]))/2);
    break;

  case "TopBottom":
    pixelfraction = Math.min(xvalues[0],xvalues[1]) + ((Math.max(xvalues[0],xvalues[1]) - Math.min(xvalues[0],xvalues[1]))/2);
    break;

  case "LeftBottom":
    pixelfraction = (yvalues[0]*xvalues[1])/2;
    break;

  default:
    pixelfraction = 1;
  }

  return pixelfraction;
}


// This function converts CSS rgb(x, x, x) to hexadecimal
function rgb2Hex(rgbColour)
{
  try{

    // Get array of RGB values
    var rgbArray = rgb2Array(rgbColour);

    // Get RGB values
    var red   = parseInt(rgbArray[0]);
    var green = parseInt(rgbArray[1]);
    var blue  = parseInt(rgbArray[2]);

    // Build hex colour code
    var hexColour = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
  }
  catch(e){

    alert("There was an error converting the RGB value to Hexadecimal in function rgb2Hex");
  }

  return hexColour;
}

// Returns an array of rbg values
function rgb2Array(rgbColour)
{
  // Remove rgb()
  var rgbValues = rgbColour.substring(4, rgbColour.indexOf(")"));

  // Split RGB into array
  var rgbArray = rgbValues.split(", ");

  return rgbArray;
}

/*
  Function by Simon Willison from sitepoint.com
  Modified by Cameron Cooke adding Safari's rgba support
*/
function setOpacity(obj, opacity)
{
  opacity = (opacity == 100)?99.999:opacity;

  if (isSafari && obj.tagName != "IFRAME")
  {
    // Get array of RGB values
    var rgbArray = rgb2Array(obj.style.backgroundColor);

    // Get RGB values
    var red   = parseInt(rgbArray[0]);
    var green = parseInt(rgbArray[1]);
    var blue  = parseInt(rgbArray[2]);

    // Safari using RGBA support
    obj.style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity/100 + ")";
  }
  else if (typeof(obj.style.opacity) != "undefined")
  {
    // W3C
    obj.style.opacity = opacity/100;
  }
  else if (typeof(obj.style.MozOpacity) != "undefined")
  {
    // Older Mozilla
    obj.style.MozOpacity = opacity/100;
  }
  else if (typeof(obj.style.filter) != "undefined")
  {
    // IE
    obj.style.filter = "alpha(opacity:" + opacity + ")";
  }
  else if (typeof(obj.style.KHTMLOpacity) != "undefined")
  {
    // Older KHTML Based Browsers
    obj.style.KHTMLOpacity = opacity/100;
  }
}

/*
  Returns index if the passed value is found in the
  array otherwise returns false.
*/
function inArray(array, value)
{
  for (var i = 0; i < array.length; i++){

    // Matches identical (===), not just similar (==).
    if (array[i] === value) return i;
  }

  return false;
}

/*
  Returns true if the passed value is found as a key
  in the array otherwise returns false.
*/
function inArrayKey(array, value)
{
  for (key in array){

    // Matches identical (===), not just similar (==).
    if (key === value) return true;
  }

  return false;
}

// Cross browser add event wrapper
function addEvent(elm, evType, fn, useCapture) {
  if (elm.addEventListener) {
    elm.addEventListener(evType, fn, useCapture);
    return true;
  }
  else if (elm.attachEvent) {
    var r = elm.attachEvent('on' + evType, fn);
    return r;
  }
  else {
    elm['on' + evType] = fn;
  }
}

// Cross browser remove event wrapper
function removeEvent(obj, evType, fn, useCapture){
  if (obj.removeEventListener){
    obj.removeEventListener(evType, fn, useCapture);
    return true;
  } else if (obj.detachEvent){
    var r = obj.detachEvent("on"+evType, fn);
    return r;
  } else {
    alert("Handler could not be removed");
  }
}

// Formats colours
function format_colour(colour)
{
  var returnColour = "#ffffff";

  // Make sure colour is set and not transparent
  if (colour != "" && colour != "transparent")
  {
    // RGB Value?
    if (colour.substr(0, 3) == "rgb")
    {
      // Get HEX aquiv.
      returnColour = rgb2Hex(colour);
    }
    else if (colour.length == 4)
    {
      // 3 chr colour code add remainder
      returnColour = "#" + colour.substring(1, 2) + colour.substring(1, 2) + colour.substring(2, 3) + colour.substring(2, 3) + colour.substring(3, 4) + colour.substring(3, 4);
    }
    else
    {
      // Normal valid hex colour
      returnColour = colour;
    }
  }

  return returnColour;
}

// Returns the style value for the property specfied
function get_style(obj, property, propertyNS)
{
  try
  {
    if (obj.currentStyle)
    {
      var returnVal = eval("obj.currentStyle." + property);
    }
    else
    {
      /*
        Safari does not expose any information for the object if display is
        set to none is set so we temporally enable it.
      */
      if (isSafari && obj.style.display == "none")
      {
        obj.style.display = "";
        var wasHidden = true;
      }

      var returnVal = document.defaultView.getComputedStyle(obj, '').getPropertyValue(propertyNS);

      // Rehide the object
      if (isSafari && wasHidden)
      {
        obj.style.display = "none";
      }
    }
  }
  catch(e)
  {
    // Do nothing
  }

  return returnVal;
}

// Get elements by class by Dustin Diaz.
function getElementsByClass(searchClass, node, tag)
{
  var classElements = new Array();

  if (node == null)
    node = document;
  if (tag == null)
    tag = '*';

  var els = node.getElementsByTagName(tag);
  var elsLen = els.length;
  var pattern = new RegExp("(^|\s)"+searchClass+"(\s|$)");

  for (i = 0, j = 0; i < elsLen; i++)
    {
      if (pattern.test(els[i].className))
	{
	  classElements[j] = els[i];
	  j++;
	}
    }

  return classElements;
}

// Displays error message
function newCurvyError(errorMessage)
{
  return new Error("curvyCorners Error:\n" + errorMessage);
}

/*
 * Set up our styles for curvy corners.
 */
function SBGNCurvyCorners()
{
  settings15 = {
    tl: { radius: 15 },
    tr: { radius: 15 },
    bl: { radius: 15 },
    br: { radius: 15 },
    antiAlias: true,
    autoPad: false
  } 
  settings12 = {
    tl: { radius: 12 },
    tr: { radius: 12 },
    bl: { radius: 12 },
    br: { radius: 12 },
    antiAlias: true,
    autoPad: false
  } 
  settings9 = {
    tl: { radius: 9 },
    tr: { radius: 9 },
    bl: { radius: 9 },
    br: { radius: 9 },
    antiAlias: true,
    autoPad: false
  } 
  settings6 = {
    tl: { radius: 6 },
    tr: { radius: 6 },
    bl: { radius: 6 },
    br: { radius: 6 },
    antiAlias: true,
    autoPad: false
  } 
  var c15 = new curvyCorners(settings15, "rounded15");
  var c12 = new curvyCorners(settings12, "rounded12");
  var c9  = new curvyCorners(settings9, "rounded9");
  var c6  = new curvyCorners(settings6, "rounded6");
  c15.applyCornersToAll();
  c12.applyCornersToAll();
  c9.applyCornersToAll();
  c6.applyCornersToAll();
}

hookEvent("load", SBGNCurvyCorners);


/* ----------------------------------------------------------------------------
 * Search box styled after the MacOSX search boxes.
 * From http://www.brandspankingnew.net/
 *
 * 2008-02-08 <mhucka@caltech.edu> Copied and modified slightly.
 * ------------------------------------------------------------------------- */

if (!applesearch)
  var applesearch = {};

applesearch.init = function ()
{
  // add applesearch css for non-safari, dom-capable browsers
  if ( navigator.userAgent.toLowerCase().indexOf('safari') < 0  && document.getElementById )
  {
    this.clearBtn = false;
		
    // add style sheet if not safari
    var dummy = document.getElementById("dummy_css");
    if (dummy)	dummy.href = "osx-searchbox/applesearch.css";
  }
}

// called when on user input - toggles clear fld btn
applesearch.onChange = function (fldID, btnID)
{
  // check whether to show delete button
  var fld = document.getElementById( fldID );
  var btn = document.getElementById( btnID );
  if (fld.value.length > 0 && !this.clearBtn)
  {
    btn.style.background = "white url('osx-searchbox/srch_r_f2.gif') no-repeat top left";
    btn.fldID = fldID; // btn remembers it's field
    btn.onclick = this.clearBtnClick;
    this.clearBtn = true;
  }
  else if (fld.value.length == 0 && this.clearBtn)
  {
    btn.style.background = "white url('osx-searchbox/srch_r.gif') no-repeat top left";
    btn.onclick = null;
    this.clearBtn = false;
  }
}


// clears field
applesearch.clearFld = function (fldID,btnID)
{
  var fld = document.getElementById( fldID );
  fld.value = "";
  this.onChange(fldID,btnID);
}

// called by btn.onclick event handler - calls clearFld for this button
applesearch.clearBtnClick = function ()
{
  applesearch.clearFld(this.fldID, this.id);
}


hookEvent("load", function () { applesearch.init(); } );


/* ----------------------------------------------------------------------------
 * IFrame SSI script II -- code to automatically resize <iframe>'s.
 * Dynamic Drive DHTML code library (http://www.dynamicdrive.com).
 * Visit DynamicDrive.com for hundreds of original DHTML scripts.
 * This notice must stay intact for legal use.
 *
 * 2008-02-13 <mhucka@caltech.edu> Modified.
 */

// Input the IDs of the IFRAMES you wish to dynamically resize to match its
// content height: Separate each ID with a comma. Examples: ["myframe1",
// "myframe2"] or ["myframe"] or [] for none:

var iframeids = ["auto-resized-iframe"];

// Should script hide iframe from browsers that don't support this script
// (non IE5+/NS6+ browsers. Recommended):

var getFFVersion = navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")).split("/")[1];
var tmp = navigator.appName == 'Microsoft Internet Explorer' && navigator.userAgent.indexOf('Opera') < 1 ? 1 : 0;
if (tmp) var isIE = document.namespaces ? 1 : 0;

// Extra height in px below to add to iframe in FireFox 1.0+ browsers.
// Additional hacks for IE by M. Hucka.

var FFextraHeight = 0;

if (parseFloat(getFFVersion) >= 0.1)
  FFextraHeight = 25;
else if (isIE)
  FFextraHeight = 50;

function resizeCaller()
{
  var dyniframe = new Array();
  
  for (i=0; i<iframeids.length; i++)
  {
    if (document.getElementById)
      resizeIframe(iframeids[i]);
  }
}

function resizeIframe(frameid)
{
  var currentfr = document.getElementById(frameid);
  if (currentfr && !window.opera)
  {
    currentfr.style.display = "block";

    if (currentfr.contentDocument && currentfr.contentDocument.body.offsetHeight) //ns6 syntax
      currentfr.height = currentfr.contentDocument.body.offsetHeight + FFextraHeight; 
    else if (currentfr.Document && currentfr.Document.body.scrollHeight) //ie5+ syntax
      currentfr.height = currentfr.Document.body.scrollHeight + FFextraHeight;

    if (currentfr.addEventListener)
      currentfr.addEventListener("load", readjustIframe, false);
    else if (currentfr.attachEvent)
    {
      currentfr.detachEvent("onload", readjustIframe); // Bug fix line
      currentfr.attachEvent("onload", readjustIframe);
    }
  }
}

function readjustIframe(loadevt)
{
  var crossevt = (window.event) ? event : loadevt;
  var iframeroot = (crossevt.currentTarget) ? crossevt.currentTarget : crossevt.srcElement;
  if (iframeroot)
    resizeIframe(iframeroot.id);
}

function loadintoIframe(iframeid, url)
{
  if (document.getElementById)
    document.getElementById(iframeid).src=url;
}

if (window.addEventListener)
  window.addEventListener("load", resizeCaller, false);
else if (window.attachEvent)
  window.attachEvent("onload", resizeCaller);
else
  hookEvent("load", resizeCaller);


/* -----------------------------------------------------------------------------
 * Code to color table rows with alternating colors
 * From www.surfmind.com/musings/2003/09/15
 *
 * 2007-12-12 <mhucka@caltech.edu> Copied and modified slightly.
 * ------------------------------------------------------------------------- */

function alternateRowColors()
{
  var className = 'alt-row-colors';
  var rowcolor = '#f3f3f3';
  var rows, arow;
  var tables = document.getElementsByTagName("table");
  var rowCount = 0;
  for (var i = 0; i < tables.length; i++) {
    // dump(tables.item(i).className + " " + tables.item(i).nodeName + "\n");
    if (hasClass(tables.item(i), className)) {
      atable = tables.item(i);
      rows = atable.getElementsByTagName("tr");
      for (var j = 0; j < rows.length; j++) {
	arow = rows.item(j);
	if (arow.nodeName == "TR") {
	  if (rowCount % 2) {
	    arow.style.backgroundColor = rowcolor;
	  } else {
	    // default case
	  }
	  rowCount++;
	}
      }
      rowCount = 0;
    }
  }
}

hookEvent("load", alternateRowColors);
