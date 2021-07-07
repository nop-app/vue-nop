import bootstrap from './bootstrap';
import { update } from './config';
import lib from './lib';

export default function install (Vue, options = {}) {
  update({ ...options, $vue: Vue });

  // Create a deafult empty function to prevent errors
  Vue.prototype.$nop = Vue.$nop = lib

  bootstrap();
}
