
// import base
const { Module } = require('@dashup/module');

// import fields
const CodeField = require('./fields/code');

/**
 * export module
 */
class CoreModule extends Module {
  /**
   * field register
   *
   * @param register
   */
  fields(register) {
    // register code field
    register(CodeField);
  }
}

// create new
module.exports = new CoreModule();
