
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
   * @param fn
   */
  register(fn) {
    // register code field
    fn('field', CodeField);
  }
}

// create new
module.exports = new CoreModule();
