Ext.define('testSencha.view.form.FormController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.form',

  login: function () {
    const form = this.getView();
    console.log(form);

    // if (!form.isValid()) {
    //   Ext.Msg.alert('Status', 'Invalid data');
    //   return;
    // }

    // Ext.Msg.alert('hh', 'eee');
  },

  reset: function (sender, record) {
    this.getView().getForm().reset();
  },
});
