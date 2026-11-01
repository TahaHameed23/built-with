<script>
    import {
        buildCdnSnippet,
        buildReactSnippet,
        buildSvelteSnippet,
    } from "$lib/builder-snippets.js";

    let { badgeOptions, hrefError } = $props();
    let outputFormat = $state("svelte");
    let copyStatus = $state("");

    let svelteCode = $derived(buildSvelteSnippet(badgeOptions, hrefError));
    let reactCode = $derived(buildReactSnippet(badgeOptions, hrefError));
    let cdnCode = $derived(buildCdnSnippet(badgeOptions, hrefError));
    let currentSnippet = $derived(
        outputFormat === "svelte"
            ? svelteCode
            : outputFormat === "react"
              ? reactCode
              : cdnCode,
    );
    let copyButtonText = $derived(
        copyStatus === "copied"
            ? "Copied!"
            : copyStatus === "error"
              ? "Copy failed"
              : outputFormat === "svelte"
                ? "Copy Svelte"
                : outputFormat === "react"
                  ? "Copy React"
                  : "Copy CDN",
    );

    function selectFormat(format) {
        outputFormat = format;
        copyStatus = "";
    }

    async function copySnippet() {
        try {
            await navigator.clipboard.writeText(currentSnippet);
            copyStatus = "copied";
        } catch (error) {
            copyStatus = "error";
            console.error("Could not copy badge snippet to clipboard.", error);
        }
    }
</script>

<section class="panel code-panel" aria-labelledby="code-title">
    <div class="panel-heading">
        <div>
            <p class="step-label">03 / YOUR CODE</p>
            <h2 id="code-title">Ready to paste</h2>
        </div>
        <button
            class="copy-button"
            type="button"
            onclick={copySnippet}
            title={copyStatus === "error"
                ? "Could not access the clipboard. Select and copy the code instead."
                : undefined}
            aria-live="polite"
        >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect
                    x="7"
                    y="7"
                    width="9"
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
                <path
                    d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
            </svg>
            {copyButtonText}
        </button>
    </div>
    <div class="code-toolbar">
        <div class="code-tabs" role="tablist" aria-label="Snippet type">
            <button
                type="button"
                role="tab"
                aria-selected={outputFormat === "svelte"}
                class:active={outputFormat === "svelte"}
                onclick={() => selectFormat("svelte")}>Svelte</button
            >
            <button
                type="button"
                role="tab"
                aria-selected={outputFormat === "react"}
                class:active={outputFormat === "react"}
                onclick={() => selectFormat("react")}>React</button
            >
            <button
                type="button"
                role="tab"
                aria-selected={outputFormat === "cdn"}
                class:active={outputFormat === "cdn"}
                onclick={() => selectFormat("cdn")}>CDN / HTML</button
            >
        </div>
        <span class="language-label"
            >{outputFormat === "svelte"
                ? "SVELTE"
                : outputFormat === "react"
                  ? "JSX"
                  : "HTML"}</span
        >
    </div>
    <pre><code>{currentSnippet}</code></pre>
</section>

<style>
    .panel {
        min-width: 0;
        padding: 22px;
        border: 1px solid #e9ebe7;
        border-radius: 14px;
        background: #fff;
        box-shadow: 0 5px 20px rgb(25 32 19 / 3%);
        animation: enter 440ms 190ms both;
        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;
    }

    .panel:hover {
        border-color: #e0e5d9;
        box-shadow: 0 8px 26px rgb(25 32 19 / 5%);
    }

    .panel-heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 17px;
    }

    .step-label {
        margin: 0;
        color: #858b80;
        font-size: 10px;
        font-weight: 750;
        letter-spacing: 1.15px;
    }

    h2 {
        margin: 6px 0 0;
        color: #252922;
        font-size: 17px;
        font-weight: 700;
        letter-spacing: -0.4px;
    }

    .copy-button {
        display: inline-flex;
        min-height: 34px;
        align-items: center;
        gap: 7px;
        padding: 0 10px;
        border: 1px solid #dfe7d6;
        border-radius: 7px;
        background: #f5f8f0;
        color: #435b2e;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        transition:
            background 150ms ease,
            border-color 150ms ease,
            transform 150ms ease;
    }

    .copy-button:hover {
        transform: translateY(-1px);
        border-color: #c8d8b8;
        background: #edf4e5;
    }

    .copy-button:active {
        transform: translateY(0);
    }

    .copy-button svg {
        width: 14px;
        height: 14px;
    }

    .code-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #252a25;
        background: #202420;
    }

    .code-tabs {
        display: flex;
        align-items: stretch;
        gap: 2px;
        padding-left: 8px;
    }

    .code-tabs button {
        position: relative;
        min-height: 37px;
        padding: 0 10px;
        border: 0;
        background: transparent;
        color: #9ea59a;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        transition: color 140ms ease;
    }

    .code-tabs button:hover {
        color: #fff;
    }

    .code-tabs button.active {
        color: #d4efad;
    }

    .code-tabs button.active::after {
        position: absolute;
        right: 8px;
        bottom: 0;
        left: 8px;
        height: 2px;
        background: #b6d989;
        content: "";
    }

    .language-label {
        padding-right: 13px;
        color: #737c70;
        font-size: 9px;
        font-weight: 750;
        letter-spacing: 0.8px;
    }

    pre {
        width: 100%;
        height: 188px;
        min-height: 188px;
        max-height: 188px;
        flex: 0 0 188px;
        overflow: auto;
        margin: 0;
        padding: 15px;
        background: #202420;
        color: #e0e6dc;
        font:
            12px/1.75 "SFMono-Regular",
            Consolas,
            "Liberation Mono",
            monospace;
        tab-size: 2;
    }

    pre code {
        font: inherit;
        white-space: pre;
    }

    @keyframes enter {
        from {
            opacity: 0;
            transform: translateY(7px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 480px) {
        .panel {
            padding: 17px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
        }
    }
</style>
