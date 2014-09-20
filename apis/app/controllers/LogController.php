<?php

class LogController extends BaseController {

    public function logSearch($searchTerm, $searchType) {
        $userId = UsersController::getUserIdByHash();
        $userId = ($userId) ? $userId : 0; //if no user is returned, the request will be logged as if the user_id = 0 was making the request.
        DB::insert('INSERT INTO ns_searches (user_id, search_term, type) VALUES (?, ?, ?)', [$userId, $searchTerm, $searchType]);
    }
}
