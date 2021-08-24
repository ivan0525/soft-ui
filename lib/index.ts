import type { App } from 'vue';
import * as components from './components';
import version from './version';
export * from './components';

export const install = (app: App) => {
  Object.keys(components).forEach(name => {
    // @ts-ignore
    const component = components[name];
    if (component.install) {
      app.use(component);
    }
  });
  return app;
};

export { version };

export default {
  version,
  install,
};
