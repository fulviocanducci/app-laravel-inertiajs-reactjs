<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\{
    HelpController,
    HomeController,
    TodoController
};

Route::get('/', [HomeController::class, "index"])->name('base.index');
Route::get('/home', [HomeController::class, "index"])->name('home.index');
Route::get('/help', [HelpController::class, "index"])->name('help.index');

Route::get('/todo', [TodoController::class, "index"])->name('todo.index');
Route::post('/todo', [TodoController::class, "store"])->name('todo.store');