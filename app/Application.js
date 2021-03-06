/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('testSencha.Application', {
  extend: 'Ext.app.Application',

  name: 'testSencha',

  requires: ['testSencha.view.main.Main', 'testSencha.view.loginForm.LoginForm'],

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true,
    },
  },

  stores: [
    // TODO: add global / shared stores here
  ],

  launch: function () {
    Ext.create({
      xtype: 'loginForm',
    });
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?', function (choice) {
      if (choice === 'yes') {
        window.location.reload();
      }
    });
  },
});
