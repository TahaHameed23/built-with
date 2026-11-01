export function formatBadgeText(text, showWith = true) {
    const label = String(text ?? "").trim();
    if (!label) return "";

    const withoutWith = label.replace(/\s+with\s*$/i, "");
    if (!showWith) return withoutWith;

    return withoutWith === label ? `${label} with` : label;
}
