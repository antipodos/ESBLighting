<?php

include_once('simplehtmldom/simple_html_dom.php');
include_once('Schedule.php');
include_once('ScheduleItem.php');

class HtmlParser {
    
    var $url;
    var $dateFormat = "m/d/Y 15:00:00";
    var $schedule;

    public function HtmlParser($url) {
        $this->url = $url;
        $this->schedule = new Schedule();
    }
    
    public function parse() {
        $html = file_get_html($this->url);
        foreach($html->find('li[class^="views-row"]') as $row) {
            $date = trim($row->find('p[class="calendar-date"]', 0)->plaintext);
            if ($date == "") {
                    $date = trim($row->find('p[class="lighting-date"]', 0)->plaintext);
            }
            $desc = trim($row->find('p[class="lighting-desc"]', 0)->plaintext);
            
            if ($date != "" && $desc != "") {
                $date = $this->parseDate($date);
                $this->schedule->addItem(new ScheduleItem($date, $desc));
            }
        }

        $html->clear();
        unset($html);
    }
    
    public function getSchedule() {
        return $this->schedule;
    }
    
    private function parseDate($date) {
        return date($this->dateFormat, strtotime($date));
    }
}