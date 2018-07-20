/*!
 * Table
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../table');

it('Table', async () => {
  assert.equal(component({
    table: {
      // prefix: 'table',
      cls:['table-cls', 'table-more'],
      bordered: true,
      condensed: true,
      hover: true,
      responsive: true,
      striped: true,
      title: 'title',
      columns: [
        {name: '#', key: (item, i) => i + 1, width: '10%', attributes: {class: ['index']}, item: (item, i) => {return {class: i == 0 && 'active'}}},
        {name: 'First Name', key: 'firstName', width: '30%', attributes: {class: ['first-name']}, item: (item, i) => {return {class: i == 2 && 'success'}}},
        {name: 'Last Name', key: 'lastName', width: '30%', attributes: {class: ['last-name']}, item: (item, i) => {return {class: i == 0 && 'info'}}},
        {name: 'Username', key: 'userName', width: '30%', attributes: {class: ['username']}, item: (item, i) => {return {class: i == 2 && 'danger'}}},
      ],
      items: [
        {firstName: 'Mark', lastName: 'Otto', userName: '@mdo'},
        {firstName: 'Jacob', lastName: 'Thornton', userName: '@fat', attributes: {class: 'active'}},
        {firstName: 'Larry', lastName: 'the Bird', userName: '@twitter'},
        {firstName: 'First Name', lastName: 'Last Name', userName: 'Username', attributes: {class: 'success'}},
        {firstName: 'First Name', lastName: 'Last Name', userName: 'Username'},
        {firstName: 'First Name', lastName: 'Last Name', userName: 'Username', attributes: {class: 'info'}},
        {firstName: 'First Name', lastName: 'Last Name', userName: 'Username'},
        {firstName: 'First Name', lastName: 'Last Name', userName: 'Username', attributes: {class: 'warning'}},
        {firstName: 'First Name', lastName: 'Last Name', userName: 'Username'},
        {firstName: 'First Name', lastName: 'Last Name', userName: 'Username', attributes: {class: 'danger'}},
      ],
      empty: {
        cls: ['empty'],
        text: 'No matched data',
      },
      html: '<tr><td colspan="4">foot</td></tr>',
    },
  }), '');
});
