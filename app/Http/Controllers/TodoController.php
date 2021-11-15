<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    protected function init() 
    {
        $model = Todo::orderBy('description','asc')->paginate(5);
        return Inertia::render("todo/index", ['model' => $model]);
    }

    public function index()
    {
        return $this->init();     
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'description' => ['required', 'max: 100'],
            'done' => ['required'],
        ]);

        Todo::create($data);

        return $this->init();
    }
}
