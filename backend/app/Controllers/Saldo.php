<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\SaldoModel;
use App\Models\StorModel;
use App\Models\TukarModel;

class Saldo extends ResourceController
{
    use ResponseTrait;

    
    public function index($id = null)
    {
        $model = new SaldoModel();
        $saldo = $model->find(1);

        return $this->respond(['saldo' => $saldo['saldo']]);
    }

    public function addItem()
    {
        $model = new StorModel();
        $barang = $this->request->getPost('barang');
        $jumlah = $this->request->getPost('jumlah');
        $data = [
            'barang' => $barang,
            'jumlah' => $jumlah,
        ];
        $save = $model->insert($data);

        if ($save) {
            return $this->respond(['message' => 'Data berhasil disimpan'], 200);
        }
        else {
            return $this->respond(['message' => 'Data gagal disimpan'], 400);
        }
    }

    public function create()
    {
        $model = new StorModel();
        $data = $this->request->getJSON(true);
        log_message('info', 'Received data: ' . json_encode($data));

        $model->insert($data);
        $response = [
            'status'   => 201,
            'error'    => null,
            'messages' => [
                'success' => 'Data Saved'
            ]
        ];

        return $this->respondCreated($response);
    }
    public function stor()
    {
        $model = new TukarModel();
        $data = $this->request->getJSON(true);
        log_message('info', 'Received data: ' . json_encode($data));

        $model->insert($data);
        $response = [
            'status'   => 201,
            'error'    => null,
            'messages' => [
                'success' => 'Data Saved'
            ]
        ];

        return $this->respondCreated($response);
    }

    

}
