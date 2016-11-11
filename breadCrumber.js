/*

As breadcrumb menùs are quite popular today, I won't digress much on explaining them, leaving the wiki link doing the dirty work in my place.

What might not be so trivial is to get a decent breadcrumb from your current url: for this kata your purpose is to create a function that takes a url, strips the first part (labeling it always HOME) and then builds it making each element but the last a <a> element linking to the relevant path; last has to be a <span> element getting the active class.

All elements need to be turned into uppercase and separated by a separator, given as the second parameter of the function; the last element can terminate in some common extension like .html, .htm, .php or .asp; if the name of the last element is index.something, you treat it as if it wasn't there, sending users automatically to the upper folder.

A few examples can be more helpful than thousands of explanations, so here you have them:

generateBC("mysite.com/pictures/holidays.html", " : ") == '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
generateBC("www.codewars.com/users/GiacomoSorbi", " / ") == '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
generateBC("www.microsoft.com/docs/index.htm", " * ") == '<a href="/">HOME</a> * <span class="active">DOCS</span>'
Seems easy enough? Well, probably not, but we have now a last extra rule: if one element (other than the root/home) is longer than 30 characters, you have to shorten it, acronymizing it (i.e.: taking just the initials of every word); url will be always given in the format this-is-an-element-of-the-url and you should ignore words in this array while acronymizing: ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]; url composed of more words separated by -, but equal or less than 30 characters long, needs to be just uppercased with hyphens replaced by spaces.

Ignore anchors (www.url.com#lameAnchorExample) and parameters (www.url.com?codewars=rocks&pippi=rocksToo) when present.

Examples:

generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.htm", " > ") == '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + ") == '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'
You will always be provided valid url to webpages in common formats, so you probably shouldn't bother validating them.

https://www.codewars.com/kata/breadcrumb-generator/train/javascript
*/

function generateBC(url, separator) {
  console.log(url);
  var pathSep = separator
  var split = function(str){
    return str.split(".")
  }
  var urlToCrumb = function(arrStrings){
    var url = false

    var anchors = {
      "#" : "#",
      "?" : "?",
      "&" : "&"
    }

    var comChecker = function(item){
      if (item.slice(0,3)=="com") {
        return true
      }
      return false
    }

    var otherDomainsChecker = function(item){
      var haveKnownDomain = false
      var domainTocheck = item.slice(0,2)

      var knownDomains = [
        "ca",
        "uk",
        "pi",
        "de",
        "fr",
        "it"
      ]

      knownDomains.forEach(function(item){
        if (item == domainTocheck) {
          haveKnownDomain = true
        }
      })

      return haveKnownDomain
    }

    arrStrings.forEach(function(item){
      if (comChecker(item)) {
        url = item.slice(4)
        if(item.slice(3,4) in anchors){
          url = ""
        }
      }

      if (otherDomainsChecker(item)) {
        url = item.slice(3)
        if(item.slice(2,3) in anchors){
          url = ""
        }
      }
    })

    return url
  }

  var splitInner = function(str) {
     var arrStrings = []
     arrStrings = str.split("/")
     arrStrings = arrStrings[arrStrings.length-1] == "index" ? arrStrings.slice(0, arrStrings.length-1) : arrStrings

     return arrStrings
  }

  var simplifier = function(arrStrings){
    var newArr = []

    var anchorIgnorer = function(str){
      var breaker = false
      var finalStr = ""
      var anchors = {
        "#" : "#",
        "?" : "?",
        "&" : "&"
      }
      for (var i = 0; i < str.length; i++) {
        if(!(str.charAt(i) in anchors) && !breaker){
          finalStr = finalStr+str.charAt(i)
        } else {
          breaker = true
        }
      }
      return finalStr
    }

    var spacerOrAcronomizer = function(str){
      var tempArr = str.split("-")
      if(str.length <= 30){
        return spacer(tempArr)
      } else {
        return acronomizer (tempArr)
      }
    }

    var spacer = function(arrStr) {
      finalStr = ""
      arrStr.forEach(function(item){
        finalStr = finalStr + " " + item
      })

      return finalStr.trim()
    }

    var acronomizer = function(arrStr){
      var connectors = {
        "the"  : "the",
        "of"   : "of",
        "in"   : "in",
        "from" : "from",
        "by"   : "by",
        "with" : "with",
        "and"  : "and",
        "or"   : "or",
        "for"  : "for",
        "to"   : "to",
        "at"   : "at",
        "a"    : "a"
      }

      finalStr = ""
      arrStr.forEach(function(item){
        if(!(item.toLowerCase() in connectors)){
          finalStr = finalStr + item[0]
        }
      })

      return finalStr
    }

    var composedObj = function(item){
      return {
        path : item,
        showName : spacerOrAcronomizer(anchorIgnorer(item.toUpperCase()))
      }
    }
    arrStrings.forEach(function(item){
      newArr.push(composedObj(item))
    })

    return newArr
  }

  var finalBreadCrumb = function(arrSimplePaths){
    var formedBreadCrumb =  ""
    var lastPaths = ["", ""]

    var aHrefer = function(pathObj) {

      lastPaths[0] = (lastPaths[1] != "" ? lastPaths[0]+ "/" + lastPaths[1] : "")
      lastPaths[1] = pathObj.path
      console.log(lastPaths);
      return ("<a href=" + "\"" + lastPaths[0] + "/" + pathObj.path + "/" + "\"" + ">" + pathObj.showName + "</a>")
    }

    var spanner = function(pathObj){
      return "<span class=\"active\"" + ">" + pathObj.showName + "</span>"
    }
    console.log(arrSimplePaths);
    if (arrSimplePaths.length===0) {
      formedBreadCrumb = "<span class=\"active\"" + ">HOME</span>"
    } else {
      if (arrSimplePaths[0].path != "") {
        formedBreadCrumb = "<a href=" + "\"" + "/" + "\"" + ">HOME</a>" + pathSep
        for (var i = 0; i < arrSimplePaths.length-1; i++) {
          formedBreadCrumb = formedBreadCrumb + aHrefer(arrSimplePaths[i]) + pathSep
        }

        formedBreadCrumb = formedBreadCrumb+spanner(arrSimplePaths[arrSimplePaths.length-1])
      } else {
        formedBreadCrumb = "<span class=\"active\"" + ">HOME</span>"
      }
    }

    return formedBreadCrumb
  }

  return finalBreadCrumb(simplifier(splitInner(urlToCrumb(split(url)))));
}

console.log(generateBC('http://www.github.com/index.htm#top', ' : '));
