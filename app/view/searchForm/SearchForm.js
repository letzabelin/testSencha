Ext.define('testSencha.view.searchForm.SearchForm', {
  extend: 'Ext.form.Panel',
  xtype: 'searchForm',

  requires: ['testSencha.view.searchForm.SearchFormController'],
  controller: 'searchForm',

  padding: 10,

  items: [
    {
      xtype: 'textfield',
      name: 'id',
      fieldLabel: 'ID:',
      placeholder: 'Введите фильтр',
      listeners: {
        specialkey: 'search',
      },
    },
    {
      xtype: 'textfield',
      name: 'description',
      fieldLabel: 'Описание:',
      placeholder: 'Введите фильтр',
      listeners: {
        specialkey: 'search',
      },
    },
  ],
});
