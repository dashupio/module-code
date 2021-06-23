
// import field interface
import { Struct } from '@dashup/module';

/**
 * build address helper
 */
export default class CodeField extends Struct {
  /**
   * returns object of views
   */
  get views() {
    // return object of views
    return {
      code : 'code',

      view  : 'field/code/view',
      input : 'field/code',
    };
  }
  /**
   * returns object of views
   */
  get data() {
    // return object of views
    return {
      filter    : 'text',
      operators : ['$eq', '$ne', '$inc', '$ninc'],
    };
  }
  
  /**
   * returns field type
   */
  get type() {
    // return field type label
    return 'code';
  }

  /**
   * returns field type
   */
  get title() {
    // return field type label
    return 'Code';
  }

  /**
   * returns category list to show field in
   */
  get categories() {
    // return array of categories
    return ['frontend'];
  }

  /**
   * returns category list to show field in
   */
  get description() {
    // return description string
    return 'Code Field';
  }
}