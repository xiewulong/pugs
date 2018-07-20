/*!
 * Form group
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../form_group');

it('Form group', async () => {
  assert.equal(component({
    form_group: {
      // prefix: 'form',
      cls: ['form-group-more'],
      // size: false,
      // status: false,
      // feedback: false,
      // label: false,
      control: {
        // type: 'text',
        id: 'input-id',
        name: 'input-name',
        value: 'input-value',
        placeholder: 'input-placeholder',
      },
      // help: false,
    },
  }), '');
});

it('Form group', async () => {
  assert.equal(component({
    form_group: {
      // prefix: 'form',
      cls: ['form-group-more'],
      size: 'lg',
      status: 'success',
      feedback: {name: 'success'},
      label: 'Username',
      control: {
        // type: 'text',
        id: 'username',
        name: 'Username',
        value: 'My username',
        placeholder: 'Username',
      },
      help: 'Please enter your username.',
    },
  }), '');
});

it('Form group', async () => {
  assert.equal(component({
    form_group: {
      // prefix: 'form',
      cls: ['form-group-more'],
      size: 'lg',
      status: 'error',
      feedback: {name: 'error'},
      label: {
        cls: ['control-label-more', 'col-xs-3'],
        html: '<strong*</strong>',
        text: 'Password',
      },
      control: {
        type: 'password',
        id: 'password',
        name: 'Password',
        placeholder: 'Password',
        wrapper: ['col-xs-6'],
      },
      help: 'Please enter your password.',
    },
  }), '');
});

it('Form group', async () => {
  assert.equal(component({
    form_group: {
      // prefix: 'form',
      cls: ['form-group-more'],
      size: 'sm',
      status: 'warning',
      feedback: false,
      label: {
        srOnly: true,
        text: 'Remember me',
      },
      control: {
        type: 'checkbox',
        name: 'remember',
        checked: true,
        wrapper: {
          cls: ['col-xs-6', 'col-xs-push-3'],
        },
      },
      // help: false,
    },
  }), '');
});
