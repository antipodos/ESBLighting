<?php
    error_reporting(E_ERROR);

    include_once 'HtmlParser.php';
    
    $parser = new HtmlParser("http://www.esbnyc.com/explore/tower-lights/calendar");
    $parser->parse();
    $schedule = $parser->getSchedule();
    $schedule->sort();

    if (isset($_GET['s']) && $_GET['s'] == "tonight") {
        // get a specific entry for tonight
        // this will be displayed when following the links found in the Atom feed
        
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
        $output = "";

        if (isset($_GET['s'])) {
            $s = strtolower($_GET['s']);
            
            if ($s == "today") {
                // todays lighting
                $output = $schedule->getItem(strtotime("now"), "json");
            } elseif ($s == "upcoming") {
                // only upcoming items
                $output = $schedule->getItems("json", mktime(0, 0, 0, date("m")  , date("d"), date("Y")));
            } elseif ($s == "all") {
                // all items
                $output = $schedule->getItems("json");
            } else {
                // specific date
                $output = $schedule->getItem(strtotime($_GET['s']), "json");
            }
        } else {
            $output = $schedule->getItems("json");
        }
        echo $output;
    } else {
        $schedule->getScheduleAsFeedForIfttt();
    }
	
?>