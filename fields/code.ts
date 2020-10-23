
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
      view    : 'field/code/view',
      input   : 'field/code/input',
      display : 'field/code/display',
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