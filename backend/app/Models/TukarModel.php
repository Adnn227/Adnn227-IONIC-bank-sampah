<?php

namespace App\Models;

use CodeIgniter\Model;

class TukarModel extends Model
{
    protected $table      = 'tarik_saldo';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $allowedFields = ['tanggal','tukar', 'jumlah', ];
}
