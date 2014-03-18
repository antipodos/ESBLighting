<?php
	error_reporting(E_ERROR);

	include_once('simplehtmldom/simple_html_dom.php');
	include_once('feedwriter/FeedTypes.php');
		
	$dateFormat = "m/d/Y 15:00:00";
	$url = "http://www.esbnyc.com/current_events_tower_lights.asp";
	$entries;
		
	

	if (isset($_GET['s']) && $_GET['s'] == "tonight") {
		// get a specific entry for tonight
		parse();
		$entry = getItem(strtotime("now +6h"), $entries);
		
		echo "<br /><br /><b>ESB Lighting Feed</b><br />";
		echo "<a href=\"esblighting.php\">This service</a> analyzes the lighting schedule from the <a href=\"http://www.esbnyc.com/current_events_tower_lights.asp\">Empire State Building Website</a>.<br />";
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
		foreach($html->find('tr') as $row) {
			$tempyear = trim($row->find('td[class="rowYear"]', 0)->plaintext);
			if ($tempyear != "") {
				$year = $tempyear;
			}
			$date = trim($row->find('td[style="width:110px;"]', 0)->plaintext);
			$color = trim($row->find('td[style="width:350px;"]', 0)->plaintext);
			$occasion = trim($row->children(2)->plaintext);
			
			if ($date != "" && $color != "") {
				$parts = explode("-", $date);
				$date_from = parseDate($parts[0] . ", " . $year);
				if (isset($parts[1])) {
					$subparts = explode(" ", trim($parts[1]));
					$subparts_from = explode(" ", trim($parts[0]));
					if (count($subparts) == 1) {					
						$parts[1] = $subparts_from[0] . " " . $parts[1];
					}
					$date_to = parseDate($parts[1] . ", " . $year);
					do {
						$entries[] = array("date" => $date_to, "color" => $color, "occasion" => $occasion);
						$date_to = date($dateFormat, strtotime("-1 day", strtotime($date_to)));
					} while (strtotime($date_to) >= strtotime($date_from));
					
				} else {
					$entries[] = array("date" => $date_from, "color" => $color, "occasion" => $occasion);
				}		
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