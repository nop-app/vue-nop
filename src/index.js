import bootstrap from './bootstrap';
import config, { update } from './config';
import lib from './lib';

export default function install (Vue, options = {}) {
  update({ ...options, $vue: Vue });

  // Create a deafult empty function to prevent errors
  config.$vue.prototype.$nop = config.$vue.$nop = lib;

  bootstrap();
}
