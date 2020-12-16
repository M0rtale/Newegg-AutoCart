// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.newegg.com/p/pl*
// @grant        none
// ==/UserScript==

var $ = window.jQuery;

$(document).ready(function(){
    var div = document.getElementsByClassName('btn btn-primary btn-mini');
    //for (var i = 0; i < div.length; i++)
    //{
    var i = Math.floor(Math.random() * div.length)
    var title = div[i].parentElement.parentElement.parentElement.parentElement.textContent
    var itemid = title.split("Item #: ")[1].split("Return Policy: ")[0]
    var link = "https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=" + itemid
    //alert(link)
    window.open(link, "_blank");
    //}
})
