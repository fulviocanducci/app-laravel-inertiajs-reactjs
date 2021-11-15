<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;

    protected $primaryKey = "id";
    protected $table = "todos";
    protected $fillable =[
        'description',
        'done'
    ];
    protected $casts = [
        'done' => 'boolean'
    ];
}
