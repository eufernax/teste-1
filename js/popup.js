(function($){var Base="";if(window.location.host=="localhost"){Base="https://localhost/cdnmicha"}else{Base="https://cdn.michamenezes.com.br"}
var urlSlug=window.location.pathname
var metaSlug=$("meta[name='home-slug']").attr('content');urlSlug=urlSlug.split("/")
urlSlug=urlSlug.filter((a)=>a);var finalSlug=urlSlug[0]?urlSlug[0]:metaSlug
if($("input[name='form_fields[phone]']").length){$("input[name='form_fields[phone]']").mask("(99) 99999-9999");$("input[name='form_fields[phone]']").on("blur",function(){var last=$(this).val().substr($(this).val().indexOf("-")+1);if(last.length==3){var move=$(this).val().substr($(this).val().indexOf("-")-1,1);var lastfour=move+last;var first=$(this).val().substr(0,9);$(this).val(first+'-'+lastfour)}})}
$.getScript(Base+"/js/functions.js",function(){var var_src=findGetParameter('src');var _fbp=getCookie('_fbp');var _fbc=getCookie('_fbc');var _ga=getCookie('_ga');var var_utm_source=findGetParameter('utm_source');var var_utm_medium=findGetParameter('utm_medium');var var_utm_content=findGetParameter('utm_content');var var_utm_term=findGetParameter('utm_term');var var_utm_campaign=findGetParameter('utm_campaign');var utm_url="";var key=findGetParameter("key")
var gclid=findGetParameter("gclid");var fbclid=findGetParameter("fbclid");var fbCampaingId=findGetParameter("campaign-id");var fbAdsetId=findGetParameter("adset-id");var fbAdId=findGetParameter("ad-id");var acFirstNameCookie=getCookie("ac_first_name");var acEmailCookie=getCookie("ac_email");var acPhoneCookie=getCookie("ac_phone");var upsell=findGetParameter("upsell");var upsellRedirect=findGetParameter("redirect")
var getCookieSck=getCookie("sck");if(upsell){if(getCookieSck.search(finalSlug)<=0){if(!getCookieSck){getCookieSck=finalSlug;setCookie("sck",getCookieSck,90)}else{getCookieSck=getCookieSck+"|"+finalSlug;setCookie("sck",getCookieSck,90)}}
var location=window.location;var newUri=location.protocol+"//"+location.hostname+location.pathname;var newKey="?key="+findGetParameter("key");var newSrc="&src="+findGetParameter("src");var newSck="&sck="+getCookieSck;newUri=newUri+newKey+newSrc+newSck+"&upsell=1";if(upsellRedirect){location.href=newUri}}else{setCookie("sck",finalSlug,90)}
if(acFirstNameCookie){$("input[name='form_fields[name]']").val(acFirstNameCookie)}
if(acEmailCookie){$("input[name='form_fields[email]']").val(acEmailCookie)}
if(acPhoneCookie){$("input[name='form_fields[phone]']").val(acPhoneCookie)}
if($("input[name='form_fields[name]']").length){$("input[name='form_fields[name]']").on("change",function(e){setCookie("ac_first_name",$("input[name='form_fields[name]']").val(),30)})}
if($("input[name='form_fields[email]']").length){$("input[name='form_fields[email]']").on("change",function(e){setCookie("ac_email",$("input[name='form_fields[email]']").val(),30)})}
if($("input[name='form_fields[phone]']").length){$("input[name='form_fields[phone]']").on("change",function(e){setCookie("ac_phone",$("input[name='form_fields[phone]']").val(),30)})}
if(var_utm_campaign){utm_url=utm_url+"&utm_campaign="+var_utm_campaign}
if(var_utm_source){utm_url=utm_url+"&utm_source="+var_utm_source}
if(var_utm_medium){utm_url=utm_url+"&utm_medium="+var_utm_medium}
if(var_utm_content){utm_url=utm_url+"&utm_content="+var_utm_content}
if(var_utm_term){utm_url=utm_url+"&utm_term="+var_utm_term}
if(!var_src&&!var_utm_source){var documentReferrer=document.referrer?document.referrer:"acesso-direto"
var_utm_source=documentReferrer;var_utm_medium="[EP-SCRIPT]";var_utm_campaign="[EP-F00-AQS-TD]";utm_url+="&utm_source="+documentReferrer;utm_url+="&utm_medium=[EP-SCRIPT]";utm_url+="&utm_campaign=[EP-F00-AQS-TD]"}
if(var_src){utm_url=utm_url+"&src="+var_src}else{if(var_utm_source){var uriParams=[];uriParams.push(var_utm_source,var_utm_medium,var_utm_campaign,var_utm_content,var_utm_term);uriParams=uriParams.filter(function(el){return el!=null});uriParams=uriParams.join('||');var setFbCampaignId=fbCampaingId?" - [campaign-id:"+fbCampaingId+"]":"";var setFbAdsetId=fbAdsetId?"[adset-id:"+fbAdsetId+"]":"";var setFbAdId=fbAdId?"[ad-id:"+fbAdId+"]":"";var srcFbAds=setFbCampaignId+setFbAdsetId+setFbAdId
var uriSrc=uriParams+srcFbAds
setCookie("src",uriParams,90)}}
if(_fbc){utm_url=utm_url+"&fbclid="+_fbc}
if(_fbp){utm_url=utm_url+"&_fbc="+_fbp}
if(_ga){utm_url=utm_url+"&_ga="+_ga}
if(gclid){utm_url=utm_url+"&gclid="+gclid}
if(fbclid){utm_url=utm_url+"&fbclid="+fbclid}
if(finalSlug){utm_url=utm_url+"&sck="+finalSlug}else{utm_url=utm_url+"&sck="+metaSlug}
if(!var_src&&!var_utm_source&&key){var srcCookie=getCookie("src");var uri=new URL(window.location.href)
uri.searchParams.set('src',srcCookie);window.history.replaceState(null,null,uri)}
$("input[name='form_fields[utm_campaign]']").val(var_utm_campaign);$("input[name='form_fields[utm_source]']").val(var_utm_source);$("input[name='form_fields[utm_medium]']").val(var_utm_medium);$("input[name='form_fields[utm_content]']").val(var_utm_content);$("input[name='form_fields[utm_term]']").val(var_utm_term);$("input[name='form_fields[campaign_id]']").val(fbCampaingId);$("input[name='form_fields[adset_id]']").val(fbAdsetId);$("input[name='form_fields[ad_id]']").val(fbAdId);$("input[name='form_fields[page_url]']").val(finalSlug);$("input[name='form_fields[ga]']").val(_ga);if($("input[name='form_fields[utms]']").length){$("input[name='form_fields[utms]']").val(utm_url)}})})(jQuery)