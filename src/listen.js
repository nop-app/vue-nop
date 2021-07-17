import config from './config';

let latestEvaluatedRoute = null;

export default function () {
  if (config.settings.enabled === false || !config.router || config.enabledRoutes.length === 0) {
    return;
  }

  config.router.onReady(() => {
    evaluatePath(config.router.currentRoute);
  });

  config.router.afterEach(function () {
    evaluatePath(config.router.currentRoute);
  });
}

function evaluatePath (currentRoute) {
  // Prevent multiple evaluation of same path
  if (currentRoute.path === latestEvaluatedRoute) {
    return;
  }

  latestEvaluatedRoute = currentRoute.path;

  const shouldEnable = (config.enabledRoutes.length === 1 && config.enabledRoutes[0] === '*') || // All routes
    config.enabledRoutes.some((userRoute) => // Matches a route
    userRoute === currentRoute.name ||
      userRoute === currentRoute.path ||
      matchRegExp(currentRoute.path, userRoute)
    );

  if (shouldEnable) {
    window.Nop.enable();
  } else {
    window.Nop.disable();
  }
}

function matchRegExp (str, regex) {
  try {
    return (new RegExp(regex)).test(str);
  } catch (e) {
    return false;
  }
}
