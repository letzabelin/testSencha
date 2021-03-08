Ext.define('testSencha.view.loginForm.LoginForm', {
  extend: 'Ext.window.Window',
  xtype: 'loginForm',
  controller: 'form',

  bodyPadding: 10,
  title: 'Авторизация',
  closable: false,
  autoShow: true,

  items: {
    xtype: 'form',

    fieldDefaults: {
      allowBlank: false,
      msgTarget: 'under',
    },

    items: [
      {
        xtype: 'textfield',
        name: 'login',
        fieldLabel: 'Логин:',
      },
      {
        xtype: 'textfield',
        name: 'password',
        inputType: 'password',
        fieldLabel: 'Пароль:',
      },
    ],
    buttons: [
      {
        text: 'Войти',
        formBind: true,
        handler: 'login',
      },
    ],
  },
});
