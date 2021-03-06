// Ext.apply(Ext.form.field.VTypes, {
//   passLogin: function (val, field) {
//     return val === 'admin';
//   },
//   passLoginText: 'Введен неверный логин',
// });

// Ext.apply(Ext.form.field.VTypes, {
//   passPassword: function (val, field) {
//     return val === 'padmin';
//   },
//   passPasswordText: 'Введен неверный пароль',
// });

Ext.define('testSencha.view.form.Form', {
  extend: 'Ext.window.Window',
  xtype: 'loginForm',

  controller: 'form',
  bodyPadding: 10,
  title: 'Авторизация',
  closable: false,
  autoShow: true,

  items: {
    xtype: 'form',
    reference: 'form',
    items: [
      {
        xtype: 'textfield',
        name: 'login',
        fieldLabel: 'Логин',
        // allowBlank: false,
        // vtype: 'passLogin',
      },
      {
        xtype: 'textfield',
        name: 'password',
        inputType: 'password',
        fieldLabel: 'Пароль',
        // allowBlank: false,
        // vtype: 'passPassword',
      },
    ],
    buttons: [
      {
        text: 'Войти',
        // formBind: true,
        listeners: {
          click: 'login',
        },
      },
    ],
  },
});
