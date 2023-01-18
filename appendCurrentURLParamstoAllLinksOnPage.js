/**
 * File: appendCurrentURLParamstoAllLinksOnPage.js
 *
 * Description: This script will append the current URL parameters to all links on the page.
**/

  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);

  var urlMedium = urlParams.get('utm_medium');
  var urlSource = urlParams.get('utm_source');
  var urlCampaign = urlParams.get('utm_campaign');
  var urlGclid = urlParams.get('gclid');

  var aTags = document.body.getElementsByTagName('a');

  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].hasAttribute('href')) {
      aTags[i].setAttribute('href', aTags[i].getAttribute('href') + (aTags[i].getAttribute('href').indexOf('?') != -1 ?
        "&utm_medium=" + urlMedium + "&utm_source=" + urlSource + "&utm_campaign=" + urlCampaign + "&glid=" + urlGclid :
        "?utm_medium=" + urlMedium + "&utm_source=" + urlSource + "&utm_campaign=" + urlCampaign + "&gclid=" + urlGclid));
    }
  }