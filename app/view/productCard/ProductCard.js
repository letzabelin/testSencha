Ext.define('testSencha.view.productCard.ProductCard', {
  extend: 'Ext.form.Panel',
  xtype: 'productCard',
  controller: 'productCard',

  title: 'Update',
  width: 400,
  height: 320,
  bodyPadding: 10,

  floating: true,
  centered: true,
  modal: true,

  fieldDefaults: {
    anchor: '100%',
    msgTarget: 'under',
    allowBlank: false,
  },

  items: [
    {
      xtype: 'displayfield',
      name: 'id',
      fieldLabel: 'ID:',
    },
    {
      xtype: 'displayfield',
      name: 'description',
      fieldLabel: 'Описание:',
    },
    {
      xtype: 'numberfield',
      fieldLabel: 'Цена:',
      name: 'price',
      minValue: 0,
    },
    {
      xtype: 'numberfield',
      fieldLabel: 'Кол-во:',
      name: 'quantity',
      minValue: 0,
      allowDecimals: false,
    },
  ],

  buttons: [
    {
      text: 'Сохранить',
      formBind: true,
      handler: 'saveData',
    },
    {
      text: 'Отмена',
      handler: 'cancel',
    },
  ],
});
