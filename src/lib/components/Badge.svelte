<script>
    import { resolveBadgeTheme } from "../badge-theme.js";
    import { formatBadgeText } from "../format-badge-text.js";
    import { normalizeHref } from "../validate-href.js";

    const {
        builtWith = "⚡",
        by = "someone",
        background,
        color,
        theme = "dark",
        fontFamily = "system-ui, sans-serif",
        fontSize = "12px",
        fontWeight = 500,
        text = "Built with",
        showWith = true,
        position = "bottom-right",
        href = "",
        zIndex = 9999,
    } = $props();

    const positions = ["top-left", "top-right", "bottom-left", "bottom-right"];
    let badgePosition = $derived(
        positions.includes(position) ? position : "bottom-right",
    );
    let badgeHref = $derived(normalizeHref(href));
    let badgeText = $derived(formatBadgeText(text, showWith));
    let badgeLabel = $derived(
        [badgeText, builtWith, `by ${by}`].filter(Boolean).join(" "),
    );
    let themeColors = $derived(resolveBadgeTheme(theme));
    let badgeBackground = $derived(background ?? themeColors.background);
    let badgeColor = $derived(color ?? themeColors.color);
    let badgeStyle = $derived(
        `--badge-bg: ${badgeBackground}; --badge-color: ${badgeColor}; --badge-z-index: ${zIndex}; --badge-font-family: ${fontFamily}; --badge-font-size: ${fontSize}; --badge-font-weight: ${fontWeight}`,
    );
</script>

{#if badgeHref}
    <a
        class="badge {badgePosition}"
        href={badgeHref}
        aria-label={badgeLabel}
        style={badgeStyle}
    >
        <span>{badgeText}</span>
        {#if builtWith}<strong>{builtWith}</strong>{/if}
        <span>by <strong>{by}</strong></span>
    </a>
{:else}
    <div
        class="badge {badgePosition}"
        aria-label={badgeLabel}
        style={badgeStyle}
    >
        <span>{badgeText}</span>
        {#if builtWith}<strong>{builtWith}</strong>{/if}
        <span>by <strong>{by}</strong></span>
    </div>
{/if}

<style>
    .badge {
        position: fixed;
        z-index: var(--badge-z-index, 9999);
        background: var(--badge-bg, #333);
        color: var(--badge-color, #fff);
        font: var(--badge-font-weight, 500) var(--badge-font-size, 12px) / 1.4
            var(--badge-font-family, system-ui, sans-serif);
        padding: 6px 10px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        gap: 4px;
        text-decoration: none;
        box-shadow: 0 2px 8px rgb(0 0 0 / 18%);
    }

    .badge:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 3px;
    }

    .top-left {
        top: 10px;
        left: 10px;
    }
    .top-right {
        top: 10px;
        right: 10px;
    }
    .bottom-left {
        bottom: 10px;
        left: 10px;
    }
    .bottom-right {
        right: 10px;
        bottom: 10px;
    }
</style>
