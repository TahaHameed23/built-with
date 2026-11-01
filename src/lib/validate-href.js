export function normalizeHref(href) {
    if (href == null || href === "") return "";
    if (typeof href !== "string") {
        throw new TypeError("Badge href must be a URL string.");
    }

    let url;
    try {
        url = new URL(href, "https://built-with.invalid");
    } catch (error) {
        throw new TypeError("Badge href must be a valid HTTP or HTTPS URL.", {
            cause: error,
        });
    }

    if (url.protocol !== "http:" && url.protocol !== "https:") {
        throw new TypeError("Badge href must use HTTP or HTTPS.");
    }

    return href;
}
