<?php
    error_reporting(E_ERROR);

    include_once 'HtmlParser.php';
    
    $parser = new HtmlParser("http://www.esbnyc.com/explore/tower-lights/calendar");
    $parser->parse();
    $schedule = $parser->getSchedule();
    $schedule->sort();

    if (isset($_GET['s']) && $_GET['s'] == "tonight") {
        // get a specific entry for tonight
        $entry = $schedule->getItem(strtotime("now +6h"));
        
        include 'description.php';

        echo "<br /><br />";
        echo "<b>Tonight (" . date("m/d/Y", strtotime($entry->date)) . "):</b><br />";
        echo "Colors: " . $entry->color . "<br />";
        if ($entry->occasion != "") {
            echo "Occasion: " . $entry->occasion . "<br />";
        }
    } elseif (isset($_GET['o']) && $_GET['o'] == "json") {
        header("Access-Control-Allow-Origin: *");

        if (isset($_GET['s'])) {
            $entry = $schedule->getItem(strtotime($_GET['s']), "json");
            echo $entry;
        } else {
            echo $schedule->getItems("json");
        }
    } else {
        $schedule->getScheduleAsFeedForIfttt();
    }
	
?>