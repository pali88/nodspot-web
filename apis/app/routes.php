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

Route::resource('user', 'UsersController');
Route::resource('user/{fb_id}/{email}/existing', 'UsersController@isExisting');
Route::resource('user/{id}/favourites', 'UsersController@getFavourites');
Route::resource('user/{id}/playlists', 'UsersController@getPlaylists');

Route::resource('playlist', 'PlaylistsController');
Route::resource('playlist/{user_id}/{playlist_name}/existing', 'PlaylistsController@isExisting');
Route::resource('playlist/{user_id}/{playlist_name}/new', 'PlaylistsController@createPlaylist');
Route::resource('playlist/{playlist_id}/{user_id}/delete', 'PlaylistsController@deletePlaylist');
Route::resource('playlist/{playlist_id}/{user_id}/{new_playlist_name}/update', 'PlaylistsController@updatePlaylist');

Route::resource('playlist/{playlist_id}/{track_id}/{track_title}/add', 'PlaylistsController@addTrack');
Route::resource('playlist/{playlist_id}/{track_id}/remove', 'PlaylistsController@removeTrack');
Route::resource('playlist/{user_id}/{track_id}/belongs', 'PlaylistsController@trackBelongsTo');

Route::resource('favourites/{user_id}/{release_id}/{type}/{search_term}/{title}/{year}/{artist_name}/add', 'FavouritesController@add');
Route::resource('favourites/{user_id}/{release_id}/delete', 'FavouritesController@delete');
