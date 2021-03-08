Ext.define('testSencha.view.searchForm.SearchForm', {
  extend: 'Ext.form.Panel',
  xtype: 'searchForm',

  controller: 'searchForm',

  padding: 10,

  defaults: {
    emptyText: 'Введите фильтр',
    submitEmptyText: false,
    listeners: {
      specialkey: 'search',
    },
  },

  items: [
    {
      xtype: 'textfield',
      name: 'id',
      fieldLabel: 'ID:',
    },
    {
      xtype: 'textfield',
      name: 'description',
      fieldLabel: 'Описание:',
    },
  ],
});
