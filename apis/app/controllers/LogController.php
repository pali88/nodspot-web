<?php

class LogController extends BaseController {

    public function logSearch($search_term, $search_type) {
        $user_id = UsersController::getUserIdByHash();
        DB::insert('INSERT INTO ns_searches (user_id, search_term, type) VALUES (?, ?, ?)', [$user_id, $search_term, $search_type]);
    }
}
