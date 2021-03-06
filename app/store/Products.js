Ext.define('testSencha.store.Products', {
  extend: 'Ext.data.Store',

  alias: 'store.products',

  fields: [
    'name', 'description', 'price', 'quantity'
  ],

  data: { products: [
    { name: 'Notebook Lenovo', description: 'Ноутбук LENOVO IdeaPad S340-15IIL, 15.6", IPS, Intel Core i3 1005G1 1.2ГГц, 8ГБ, 128ГБ SSD, Intel UHD Graphics , Free DOS, 81VW00ATRK, синий', price: '100', quantity: '2' },
    { name: 'Keybord OKLICK', description: 'Клавиатура Oklick 920G Iron Edge Black USB', price: '50', quantity: '8' },
    { name: 'Network adapter', description: 'Сетевой адаптер Intel Ethernet Server Network Adapter X550-T2 (X550T2BLK)', price: '7', quantity: '0' },
  ]},

  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'products'
    },
  },
});

