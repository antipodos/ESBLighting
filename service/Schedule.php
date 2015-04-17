<?php

include_once('feedwriter/FeedTypes.php');

class Schedule {
    
    private $items;
    
    public function Schedule() {
        $this->items = array();
    }
    
    public function addItem(ScheduleItem $item) {
        $this->items[] = $item;
    }
    
    public function getItem($time, $format = "plain") {
        foreach ($this->items as $item) {
            if (date("m/d/Y", $time) == date("m/d/Y", strtotime($item->date))) {
                return $this->encodeReturn($item, $format);
            }
        }

        // nothing found
        return $this->encodeReturn(new ScheduleItem(date("m/d/Y", $time), "White / White / White", ""), $format);
    }
    
    public function getItems($format = "plain", $startingFrom = null) {
        if ($startingFrom == null) {
            return $this->encodeReturn($this->items, $format);
        } else {
            $selectedItems = array();
            foreach ($this->items as $item) {
                if (strtotime($item->date) >= $startingFrom) {
                    $selectedItems[] =  $item;
                }
            }
            return $this->encodeReturn($selectedItems, $format);
        }
    }
    
    private function encodeReturn($return, $format) {
        if ($format == "json") {
            return json_encode($return);
        } else {
            return $return;
        }
    }
    
    public function sort() {
        usort($this->items, function($a, $b) {
            return strtotime($b->date) - strtotime($a->date);
        });
    }
    
    public function getScheduleAsFeedForIfttt() {
        $ESBFeed = new ATOMFeedWriter();
        $ESBFeed->setTitle('ESBLighting');
        $ESBFeed->setLink('http://fizfaz.net/ifttt');
        $ESBFeed->setChannelElement('updated', date(DATE_ATOM , time()));
        $ESBFeed->setChannelElement('author', array('name'=>'Michael Niessl'));
        foreach ($this->items as $item) {
            if (strtotime($item->date) <= strtotime("now")) {
                $item->getItemAsFeedItem($ESBFeed);
            }
        }		
	$ESBFeed->generateFeed();
    }
}