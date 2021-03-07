function handleZeroQuantity(value, meta) {
  if (Number(value) === 0) {
    meta.style = 'background-color: red';
  }

  return value;
}

Ext.define('testSencha.view.table.Table', {
  extend: 'Ext.grid.Panel',
  xtype: 'table',
  controller: 'table',

  title: 'Список товаров',

  requires: [
    'testSencha.view.table.TableController',
    'testSencha.store.Products',
    'testSencha.view.searchForm.SearchForm',
  ],

  store: Ext.create('store.products'),

  forceFit: true,

  dockedItems: [
    {
      xtype: 'searchForm',
    },
  ],

  columns: [
    { text: 'Идентификатор', dataIndex: 'id' },
    {
      text: 'Наименование',
      dataIndex: 'name',
      listeners: {
        click: 'openCard',
      },
    },
    { text: 'Описание', dataIndex: 'description' },
    { text: 'Цена', dataIndex: 'price' },
    { text: 'Количество', dataIndex: 'quantity', renderer: handleZeroQuantity },
  ],
});
