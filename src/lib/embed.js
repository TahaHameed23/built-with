import { mountBadge } from "./mount.js";

const script = document.currentScript;

if (!script) {
    throw new Error("Built With Badge: unable to identify the embedding script.");
}

mountBadge({
    builtWith: script.getAttribute("data-builtwith") ?? undefined,
    by: script.getAttribute("data-by") ?? undefined,
    background: script.getAttribute("data-bg") ?? undefined,
    color: script.getAttribute("data-color") ?? undefined,
    theme: script.getAttribute("data-theme") ?? undefined,
    fontFamily: script.getAttribute("data-font-family") ?? undefined,
    fontSize: script.getAttribute("data-font-size") ?? undefined,
    fontWeight: script.getAttribute("data-font-weight") ?? undefined,
    text: script.getAttribute("data-text") ?? undefined,
    position: script.getAttribute("data-position") ?? undefined,
    href: script.getAttribute("data-href") ?? undefined,
});
