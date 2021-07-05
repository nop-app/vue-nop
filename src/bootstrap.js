import config from './config';
import listen from './listen';

export default function () {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return;
  }

  if (!alreadyLoaded()) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function () {
      config.$vue.prototype.$nop = config.$vue.$nop = window.Nop;

      // Init SDK
      window.Nop.init({
        ...config.settings,
        // Enable only if enabledRoutes = ['*']
        enabled: config.router !== null && config.enabledRoutes.length === 1 && config.enabledRoutes[0] === '*',
      });

      listen();
    };
    script.src = 'https://nop.is/js/sdk.js';

    document.querySelector('head').appendChild(script);
  }
}

function alreadyLoaded () {
  return (window && window.Nop) || document.querySelector('script[src*="nop.is"]') !== null;
}
