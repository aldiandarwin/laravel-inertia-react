<?php

if (! function_exists('acronym')) {
    function acronym($string): string
    {
        $words = explode(' ', $string);
        $acronym = '';

        foreach ($words as $word) {
            $acronym .= $word[0];
        }

        return $acronym;
    }
}
