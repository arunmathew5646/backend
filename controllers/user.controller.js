var User = require('../models/user');

exports.id = function(req, res) {
    res.send('NOT IMPLEMENTED: id');
};

exports.created = function(req, res) {
    res.send('NOT IMPLEMENTED: created');
};

exports.email = function(req, res) {
    res.send('NOT IMPLEMENTED: email');
};

exports.first_name = function(req, res) {
    res.send('NOT IMPLEMENTED:  first_name');
};

exports.last_name = function(req, res) {
    res.send('NOT IMPLEMENTED:  last_name');
};

exports.password = function(req, res) {
    res.send('NOT IMPLEMENTED:  password');
};

exports.phone_number = function(req, res) {
    res.send('NOT IMPLEMENTED:  phone_number');
};

exports.role = function(req, res) {
    res.send('NOT IMPLEMENTED:  role');
};

exports.updated = function(req, res) {
    res.send('NOT IMPLEMENTED:  updated');
};

exports.username = function(req, res) {
    res.send('NOT IMPLEMENTED:  username');
};

const User = require('../controllers/user');
route.post('/auth', User.auth);

route.post('/register', User.register);

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