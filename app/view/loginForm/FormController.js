Ext.define('testSencha.view.loginForm.FormController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.form',

  login(btn) {
    const form = btn.up('form').getValues();
    const { login, password } = form;

    if (login === 'admin' && password === 'padmin') {
      this.getView().destroy();

      Ext.create({
        xtype: 'app-main',
      });
    } else {
      Ext.Msg.alert('Status', 'Логин или пароль введены неправильно');
    }
  },
});
