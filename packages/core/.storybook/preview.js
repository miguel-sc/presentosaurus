/* global window */

import {
  configure,
  addParameters,
  addDecorator
} from "@storybook/web-components";
import { withA11y } from "@storybook/addon-a11y";
import { defineCustomElements } from "../loader";

defineCustomElements(window);

addDecorator(withA11y);

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true
    }
  },
  docs: {
    iframeHeight: "200px"
  }
});

// configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);

// force full reload to not reregister web components
const req = require.context("../stories", true, /\.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
