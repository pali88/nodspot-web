<?php

class LogController extends BaseController {

    public function logSearch($searchTerm, $searchType) {
        $userId = UsersController::getUserIdByHash();
        DB::insert('INSERT INTO ns_searches (user_id, search_term, type) VALUES (?, ?, ?)', [$userId, $searchTerm, $searchType]);
    }
}
