<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\SaldoModel;
use App\Models\StorModel;
use App\Models\TukarModel;
use App\Models\LogModel;

class History extends ResourceController
{
    use ResponseTrait;

    public function index($id = null)
    {
        $model = new LogModel();
        $data = $model->findAll();

        // return $this->respond($data, 200);
        return $this->respond(['history' => $data], 200);
    }

}
