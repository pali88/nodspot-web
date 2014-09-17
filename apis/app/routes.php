<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function () {
    return 'Welcome back, Mantvydas';
});

//testing purposes
Route::resource('getUserByHash', 'UsersController@getUserByHash');

Route::resource('user', 'UsersController');
Route::resource('user/{fb_id}/{email}/existing', 'UsersController@isExisting');

Route::resource('playlists', 'PlaylistsController@getPlaylists');
Route::resource('playlist', 'PlaylistsController');
Route::resource('playlist/{playlist_name}/existing', 'PlaylistsController@isExisting');
Route::resource('playlist/{playlist_name}/new', 'PlaylistsController@createPlaylist');
Route::resource('playlist/{playlist_id}/delete', 'PlaylistsController@deletePlaylist');
Route::resource('playlist/{playlist_id}/{{new_playlist_name}/update', 'PlaylistsController@updatePlaylist');
Route::resource('playlist/{playlist_id}/{track_id}/{track_title}/add', 'PlaylistsController@addTrack');
Route::resource('playlist/{playlist_id}/{track_id}/remove', 'PlaylistsController@removeTrack');

Route::resource('track/{track_id}/belongsTo', 'PlaylistsController@trackBelongsTo');

Route::resource('favourites', 'FavouritesController@getFavourites');
Route::resource('favourites/{release_id}/{type}/{search_term}/{title}/{year}/{artist_name}/add', 'FavouritesController@add');
Route::resource('favourites/{release_id}/delete', 'FavouritesController@delete');
Route::resource('favourites/{release_id}/existing', 'FavouritesController@isExisting');

Route::resource('log/{search_term}/{search_type}', 'LogController@logSearch');

