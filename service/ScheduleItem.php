<?php

class ScheduleItem {
    
    public $date;
    public $formattedDate;
    public $color;
    public $occasion;
    
    public $parsedColors;
    
    private $keywords = array("in honor", "in celebration");
    
    public function ScheduleItem($date, $description, $occasion = null) {
        $this->date = $date;
        $this->formattedDate = date("Y-m-d", strtotime($date));

        if ($occasion == null) {
            $this->parseDescription($description);
        } else {
            $this->color = $description;
            $this->occasion = $occasion;
        }
    }

    private function parseDescription($description) {
        foreach ($this->keywords as $keyword) {
            $found = strpos($description, $keyword);
            if ($found > 0) {
                $this->occasion = substr($description, $found);
                $this->color = substr($description, 0, $found - 1);
                return;
            }
        }
        
        // no keywords found, put everything in color
        $this->color = $description;
        $this->occasion = "";
    }
    
    function getItemAsFeedItem(&$feed) {
        $newItem = $feed->createNewItem();
        
        if ($this->color != "White / White / White") {
            $title = "interesting";
            $desc = "Color: " . $this->color . "<br />Occasion: " . $this->occasion . "<br /><br />";
        } else {
            $title = "boring";
            $desc = "boring";
        }
        
        $newItem->setTitle($title . " - " . date("m/d/Y", strtotime($this->date)));
        $newItem->setLink("http://fizfaz.net/ifttt/" . date("m/d/Y", strtotime($this->date)) . "/");
        $newItem->setDate($this->date);
        $newItem->setAuthor("Michael Niessl");
        $newItem->setDescription($desc);
        $feed->addItem($newItem);
    }
    
    public function parseColors($colors) {
        foreach (explode(' ',$this->color) as $word) {
            $word = trim(strtolower($word));
            $word = str_replace(",", "", $word);
            if (in_array($word, $colors)) {
                $this->parsedColors[] = $word;
            }
        }
    }
    
    public function getColorsForIFTTT() {
        if (count($this->parsedColors) < 1) {
            return array('white', 'white', 'white');
        } elseif (count($this->parsedColors) == 1) {
            return array($this->parsedColors[0], $this->parsedColors[0], $this->parsedColors[0]);
        } elseif (count($this->parsedColors) == 2) {
            return array($this->parsedColors[0], $this->parsedColors[1], 'white');
        } else {
            return array_slice($this->parsedColors, 0, 3);
        }
    }
}