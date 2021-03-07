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
    reference: 'form',
    items: [
      {
        xtype: 'textfield',
        name: 'login',
        fieldLabel: 'Логин',
        allowBlank: false,
        msgTarget: 'under',
      },
      {
        xtype: 'textfield',
        name: 'password',
        inputType: 'password',
        fieldLabel: 'Пароль',
        allowBlank: false,
        msgTarget: 'under',
      },
    ],
    buttons: [
      {
        text: 'Войти',
        formBind: true,
        listeners: {
          click: 'login',
        },
      },
    ],
  },
});
