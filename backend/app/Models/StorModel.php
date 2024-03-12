<?php

namespace App\Models;

use CodeIgniter\Model;

class StorModel extends Model
{

    protected $table      = 'stor_barang';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $allowedFields = ['tanggal','barang', 'jumlah', ];
}
