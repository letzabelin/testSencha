Ext.define('testSencha.model.Product', {
  extend: 'Ext.data.Model',
  idProperty: 'id',

  fields: [
    { name: 'id', type: 'int' },
    { name: 'name', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'price', type: 'float' },
    { name: 'quantity', type: 'int' },
  ],

  validators: {
    price: { type: 'range', min: 0 },
    quantity: { type: 'range', min: 0 },
  },
});
