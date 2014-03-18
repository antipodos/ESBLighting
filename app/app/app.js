$url = "http://fizfaz.net/ifttt/esblighting.php";

var lastSelectedItem = "";

var pull = new Lungo.Element.Pull('#mainArticle', {
    onPull: "Pull down to refresh",      //Text on pulling
    onRelease: "Release to get new data",//Text on releasing
    onRefresh: "Refreshing...",          //Text on refreshing
    callback: function() {               //Action on refresh
        pull.hide();
		clearList();
		loadJsonList(keepShort);
    }
});

function clearList() {
	$$("#esbitems").empty();
}

function loadJsonList(keepShort) {
	$$("#loading").show();
	$$.json($url, {"o": "json"} , function(data){ 
		var dateLimit = new Date();
		dateLimit.setFullYear(dateLimit.getFullYear(),dateLimit.getMonth() - 1,0);
		
		for (var i = 0; i < data.length; i++) { 
			d = new Date(Date.parse(data[i].date))
			if (!keepShort || d >= dateLimit) {
				renderListEntry(data[i]);
			}
		}
		
		$$("#loading").hide();
		if (keepShort) {renderLoadAll();}
		document.getElementById("today").scrollIntoView();
	});
}

function loadJsonItem(myDate, selector) {
	d = new Date(myDate);
	dateString = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear();
	$$.json($url, {"o": "json", "s": dateString} , function(data){
		$$("#twittershare" + selector.slice(1)).empty();	
		$$(selector).empty();
		d = new Date(Date.parse(data.date)).toDateString();

		$$(selector).append(d + "<div class=\"text bold\">" + data.color +"</div><span class=\"text tiny\">" + data.occasion + "<\span>");
		
		$$("#twittershare" + selector.slice(1)).append(renderTweetMe(d, data.color));
	});
}

function renderTweetMe(myDate, myColor) {
	if (myColor.length > 24) {
		myColor = myColor.slice(0, 20) + "...";
	}
	text = "There%20is%20an%20interesting%20color%20combination%20coming%20up%20on " + d + ".%20Color:%20" + myColor + ".%20http://bit.ly/1fWxQ25";
	return "<a href=\"https://twitter.com/intent/tweet?hashtags=ESBLighting&text=" + text + "\" target=\"_blank\" class=\"button theme\" data-label=\"Tweet me\" data-icon=\"twitter\">Tweet Me</a>";
}

function onItemClick(date) {
	alert(date);
}

function keepShort() {
	if (_GET("keepShort") == "") {
		return true;
	}
	return false;
}

function renderLoadAll() {
	$$("#esbitems").append("<li><a href=\"?keepShort=false\" class=\"button small\">Load past entries...</a>");
}

function renderListEntry(entry) {
	d = new Date(Date.parse(entry.date)).toDateString();
	today = new Date().toDateString();
	todayClass = "";
	if (d == today) { todayClass = " id=\"today\"";}
	$$("#esbitems").append("<li" + todayClass + " class=\"listItem\"><a data-itemdata=\"" + d + "\" href=\"#\" data-view-section=\"singleItemSection\">" + d + "<strong class=\"text bold\">" + entry.color + "</strong><span class=\"text tiny\">" + entry.occasion + "</span></a></li>");
	$$("#esbitems").children(".listItem").last().on("tap", ".listItem", function(event) {
		lastSelectedItem = event.currentTarget.firstChild.getAttribute("data-itemdata");
	});
}

function _GET(id){
    var a = new RegExp(id+"=([^&#=]*)");
	var items = a.exec(window.location.search);
	if (items == null || items.length == 0) {
		return "";		
	} 
	return decodeURIComponent(a.exec(window.location.search)[1]);
}

Lungo.Events.init({
    'load section#pull': function(event) {
        App.pull = new Lungo.Element.Pull('section#pull article', {
            onPull: "Pull down to refresh",
            onRelease: "Release to get new data",
            onRefresh: "Refreshing...",
            callback: function() {
                alert("Pull & Refresh completed!");
                App.pull.hide();
				}
			});
		}
	});