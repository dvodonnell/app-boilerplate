<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class API_Controller extends CI_Controller {

    public $auth_config_override = array();

    public function __construct() {

        /*
         * put whatever authentication params you need in your config_server.php file
         * you can also override these parameters in any specific controller by populating
         * $this->auth_config_override array in there
         * */

        $auth_config = $this->config->item('authentication') + $this->auth_config_override;
        $this->load->library('authentication', $auth_config);
        if (!$this->authentiction->authenticate()) {
            $this->json(false, array(
                'message' => 'Access denied'
            ));
        }

    }

    public function json($success = false, $data = array()) {

        header('Content-Type: application/json');

        echo json_encode(array(
            'success' => $success,
            'data' => $data
        ));

        return;

    }

}
