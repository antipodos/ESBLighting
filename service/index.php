<?php
	error_reporting(E_ERROR);

	include_once('simplehtmldom/simple_html_dom.php');
	include_once('feedwriter/FeedTypes.php');
		
	$dateFormat = "m/d/Y 15:00:00";
	$url = "http://www.esbnyc.com/explore/tower-lights/calendar";
	$entries;
		
	

	if (isset($_GET['s']) && $_GET['s'] == "tonight") {
		// get a specific entry for tonight
		parse();
		$entry = getItem(strtotime("now +6h"), $entries);
		
		echo "<br /><br /><b>ESB Lighting Feed</b><br />";
		echo "<a href=\"esblighting.php\">This service</a> analyzes the lighting schedule from the <a href=\"http://www.esbnyc.com/\">Empire State Building Website</a>.<br />";
		echo "It uses the parsed information to build an Atom feed free to being consumed by other services.";
		echo "<br /><br />";
		
		echo "<b>Popular usage:</b><br />";
		echo "This marvelous <a href=\"https://ifttt.com\">IFTTT</a> recipe<br />";
		echo "<a href=\"https://ifttt.com/view_embed_recipe/149276-if-the-empire-state-building-is-coming-up-with-an-interesting-color-combination-email-me\" target = \"_blank\" class=\"embed_recipe embed_recipe-l_90\" id=\"embed_recipe-149276\"><img src= 'https://ifttt.com/recipe_embed_img/149276' alt=\"IFTTT Recipe: If the Empire State Building is coming up with an interesting color combination, email me. connects feed to email\" width=\"370px\" style=\"max-width:100%\"/></a><script async type=\"text/javascript\" src= \"//ifttt.com/assets/embed_recipe.js\"></script>";
		
		echo "<br /><br />";
		echo "<b>Tonight (" . date("m/d/Y", strtotime($entry["date"])) . "):</b><br />";
		echo "Colors: " . $entry["color"] . "<br />";
		if ($entry["occasion"] != "") {
			echo "Occasion: " . $entry["occasion"] . "<br />";
		}
	} elseif (isset($_GET['o']) && $_GET['o'] == "json") {
		header("Access-Control-Allow-Origin: *");

		parse();
		if (isset($_GET['s'])) {
			$entry = getItem(strtotime($_GET['s']), $entries);
			echo json_encode($entry);
		} else {
			echo json_encode($entries);
		}
	} else {
		// build feed for all items up until today		
		
		$ESBFeed = new ATOMFeedWriter();
		$ESBFeed->setTitle('ESBLighting');
		$ESBFeed->setLink('http://fizfaz.net/ifttt');
		
		$ESBFeed->setChannelElement('updated', date(DATE_ATOM , time()));
		$ESBFeed->setChannelElement('author', array('name'=>'Michael Niessl'));

		parse();
		foreach ($entries as $entry) {
			addItemToFeed($ESBFeed, $entry["date"], $entry["color"], $entry["occasion"]);
		}
		
		$ESBFeed->generateFeed();
	}
	
	function parse() {
		global $url;
		global $entries;
		global $dateFormat;

		$html = file_get_html($url);
		foreach($html->find('li[class^="views-row"]') as $row) {
		
			$date = trim($row->find('p[class="calendar-date"]', 0)->plaintext);
			if ($date == "") {
				$date = trim($row->find('p[class="lighting-date"]', 0)->plaintext);
			}
			$color = trim($row->find('p[class="lighting-desc"]', 0)->plaintext);
			$occasion = "";
			
			$inhonor = strpos($color, "in honor");
			$incelebration = strpos($color, "in celebration");
				
			if ($inhonor > 0) {
				$occasion = substr($color, $inhonor);
				$color = substr($color, 0, $inhonor - 1);
			} else if ($incelebration > 0) {
				$occasion = substr($color, $inhonor);
				$color = substr($color, 0, $incelebration - 1);
			}
			
			if ($date != "" && $color != "") {
				$date = parseDate($date);
				$entries[] = array("date" => $date, "color" => $color, "occasion" => $occasion);	
			}
		}
		
		$html->clear();
		unset($html);
	}
	
	function parseDate($date) {
		global $dateFormat;
		return date($dateFormat, strtotime($date));
	}
	
	function getItem($time, $entries) {
		foreach ($entries as $entry) {
			if (date("m/d/Y", $time) == date("m/d/Y", strtotime($entry["date"]))) {
				return $entry;
			}
		}
		
		return array("date" => date("m/d/Y", $time), "color" => "White / White / White", "occasion" => "");
	}
	
	function addItemToFeed(&$feed, $date, $color, $occasion) {
		if (strtotime($date) <= strtotime("now")) {
			$newItem = $feed->createNewItem();
			if ($color != "White / White / White") {
				$title = "interesting";
				$desc = "Color: " . $color . "<br />Occasion: " . $occasion . "<br /><br />";
			} else {
				$title = "boring";
				$desc = "boring";
			}
			$newItem->setTitle($title . " - " . date("m/d/Y", strtotime($date)));
			$newItem->setLink("http://fizfaz.net/ifttt/" . date("m/d/Y", strtotime($date)) . "/");
			$newItem->setDate($date);
			$newItem->setAuthor("Michael Niessl");
			$newItem->setDescription($desc);
			$feed->addItem($newItem);
		}
	}
	
?>