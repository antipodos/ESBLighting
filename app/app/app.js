$url = "http://fizfaz.net/ifttt/esblighting.php";

var lastSelectedItem = "";
var keepShort = keepShort();

var pull = new Lungo.Element.Pull('#mainArticle', {
    onPull: "Pull down to refresh",
    onRelease: "Release to get new data",
    onRefresh: "Refreshing...",
    callback: function() {
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
		
		$$("#twittershare" + selector.slice(1)).append(renderShareMe(d, data.color));
	});
}

function renderShareMe(myDate, myColor) {
	if (myColor.length > 24) {
		myColor = myColor.slice(0, 20) + "...";
	}
	text = "There is an interesting color combination coming up on " + d + ". Color: " + myColor + ". http://bit.ly/1fWxQ25";

	return "<button onClick=\"window.plugins.socialsharing.share('" + text + "')\">Share</button>";
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
	
Lungo.init({
	name: 'ESB Lighting',
	version: '0.9.0',
	resources: [
		'app/menu.html',
		'app/single.html'],
	history: false
});
			
Lungo.Events.init({
	'load article#aboutArticle'     : function(event) {
		document.getElementById("sectionTitle").innerHTML = "About...";
	},
	'load article#mainArticle'     : function(event) {
		document.getElementById("sectionTitle").innerHTML = "ESB Lighting Schedule";
	},
	'load article#todayArticle'     : function(event) {
		document.getElementById("sectionTitle").innerHTML = "Today's lighting";
		loadJsonItem(new Date().toDateString(), "#todayInfo");
	},
	'load section#singleItemSection' : function(event) {
		document.getElementById("singleTitle").innerHTML = lastSelectedItem;
		loadJsonItem(lastSelectedItem, "#singleInfo");
	}
});