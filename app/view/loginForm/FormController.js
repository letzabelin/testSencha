Ext.define('testSencha.view.loginForm.FormController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.form',

  login(btn) {
    const form = btn.up('form').getValues();
    const { login, password } = form;

    if (login === 'admin' && password === 'padmin') {
      const window = this.getView();
      window.close();

      Ext.create({
        xtype: 'app-main',
      });
    } else {
      Ext.Msg.alert('Ошибка', 'Логин или пароль введены неправильно');
    }
  },
});
