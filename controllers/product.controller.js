var Product = require('../models/Product');

exports.product_id = function(req, res) {
    res.send('NOT IMPLEMENTED: product_id');
};

exports.available_items = function(req, res) {
    res.send('NOT IMPLEMENTED:  available_items');
};

exports.category = function(req, res) {
    res.send('NOT IMPLEMENTED:  category');
};

exports.created = function(req, res) {
    res.send('NOT IMPLEMENTED:  created');
};

exports.description = function(req, res) {
    res.send('NOT IMPLEMENTED:  description');
};

exports.image_url = function(req, res) {
    res.send('NOT IMPLEMENTED:  image_url');
};

exports.manufacturer = function(req, res) {
    res.send('NOT IMPLEMENTED:  manufacturer');
};

exports.name = function(req, res) {
    res.send('NOT IMPLEMENTED:  name');
};

exports.price = function(req, res) {
    res.send('NOT IMPLEMENTED:  price');
};

exports.updated = function(req, res) {
    res.send('NOT IMPLEMENTED:  updated');
};

import express from 'express'
            const router=express.Router()
            import { findAllUsers } from '../../controllers/user.js'

            router.get('/all',findAllUsers)

            export default router

            
/* Test */
it('should return true if valid user id', function(){
    var isValid = userController.isValidUserId(['abc123','xyz321'], 'abc123')
    assert.equal(isValid, true);
});

var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
it('should return true if valid user id', function(){
      var isValid = userController.isValidUserId('abc123')
      //assert.equal(isValid, true);
      expect(isValid).to.be.true;
});
it('should return false if invalid user id', function(){
      var isValid = userController.isValidUserId('abc1234')
      //assert.equal(isValid, false);
      isValid.should.equal(false);
});