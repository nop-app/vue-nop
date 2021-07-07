import config, { update } from './config';

export default {
  mergeSettings (settings) {
    if (window && window.Nop) {
      window.Nop.mergeSettings(settings)

      return;
    }

    update({
      settings: {
        ...config.settings,
        ...settings,
      }
    })
  },

  setUser (name) {
    if (window && window.Nop) {
      window.Nop.setUser(name)

      return;
    }

    update({
      settings: {
        ...config.settings,
        user: name,
      }
    })
  },
}
