<?php

class LogController extends BaseController {

    public function logSearch($user_id, $search_term, $search_type) {
         DB::insert('INSERT INTO ns_searches (user_id, search_term, type) VALUES (?, ?, ?)', [$user_id, $search_term, $search_type]);

// if (isset($user_id_nodspot)) {
//            $user_id = $user_id_nodspot;
//        } else {
//            $user_id = 0;
//        }
    }
}
