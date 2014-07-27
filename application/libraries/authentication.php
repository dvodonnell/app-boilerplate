<?php

class Authentication {

    /*put whatever authentication types you want in here*/

    public function __construct($config = array()) {

        $this->set_config($config);

    }

    public function set_config($config = array()) {



    }

    public function authenticate() {

        return true;

    }

}