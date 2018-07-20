/*!
 * Input
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../input');

it('Input', async () => {
  assert.equal(component({
    input: {
      // prefix: 'input',
      size: 'lg',
      // type: 'text',
      id: 'input',
      cls: ['form-control', 'input-more'],
      name: 'name',
      value: 'value',
      placeholder: 'placeholder',
      // checked: false,
      readonly: true,
      disabled: true,
      required: true,
      autofocus: true,
      autocomplete: 'off',
      // left: false,
      // right: false,
    },
  }), '');
});

it('Input', async () => {
  assert.equal(component({
    input: {
      // prefix: 'input',
      // size: '',
      // type: 'text',
      // id: 'input',
      // cls: ['form-control'],
      name: 'name',
      value: 'value',
      placeholder: 'placeholder',
      // checked: false,
      // readonly: false,
      // disabled: false,
      // required: false,
      // autofocus: false,
      // autocomplete: 'on',
      left: '@',
      right: {name: 'calendar'},
    },
  }), '');
});

it('Input', async () => {
  assert.equal(component({
    input: {
      // prefix: 'input',
      // size: '',
      // type: 'text',
      // id: 'input',
      // cls: ['form-control'],
      name: 'name',
      value: 'value',
      placeholder: 'placeholder',
      // checked: false,
      // readonly: false,
      // disabled: false,
      // required: false,
      // autofocus: false,
      // autocomplete: 'on',
      left: [
        {
          type: 'button',
          style: 'default',
          text: 'left',
        },
      ],
      right: [
        {
          type: 'button',
          style: 'primary',
          text: 'right',
        },
        {
          type: 'dropdown',
          align: 'right',
          wrap: false,
          items: [
            {
              header: 'Dropdown header',
              name: 'Action',
              url: 'javascript:;',
              icon: {name: 'action'},
            },
            {
              name: 'Another action',
              url: 'javascript:;',
            },
            {
              name: 'Something else here',
              url: 'javascript:;',
              target: '_blank',
            },
            {
              divider: true,
              header: 'Dropdown header',
              name: 'Separated link',
              url: 'javascript:;',
            },
            {
              name: 'Disabled link',
              url: 'javascript:;',
              disabled: true,
            },
          ],
        },
      ],
    },
  }), '');
});
