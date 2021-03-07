Ext.define('testSencha.view.card.Card', {
  extend: 'Ext.window.Window',
  xtype: 'productCard',
  // controller: '',

  bodyPadding: 10,
  title: 'Карточка товара',
  autoShow: true,
  closable: true,

  width: 450,
  height: 270,

  items: {
    xtype: 'form',
    items: [
      {
        html: 'ID:',
        margin: '0 0 15 0',
      },
      {
        html: 'Описание:',
        margin: '0 0 15 0',
      },
      {
        xtype: 'numberfield',
        fieldLabel: 'Цена',
        value: 100,
      },
      {
        xtype: 'numberfield',
        fieldLabel: 'Количество',
        value: 3,
      },
    ],
    buttons: [
      {
        text: 'Отмена',
        listeners: {
          click: 'cancel',
        },
      },
      {
        text: 'Сохранить',
        formBind: true,
        // listeners: {
        //   click: 'login',
        // },
      },
    ],
  },
});
