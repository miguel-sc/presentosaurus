import { mdToHtml } from "@pyroslides/markdown";
import { defineCustomElements } from "@pyroslides/webcomponents/dist/esm/loader";
import "@pyroslides/webcomponents/dist/pyro/pyro.css";

defineCustomElements(window);

import mdslides from "mdslides";

document.body.innerHTML = mdToHtml(mdslides);
