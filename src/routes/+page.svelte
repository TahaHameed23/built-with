<script>
    import BadgeOptions from "$lib/components/builder/BadgeOptions.svelte";
    import BadgePreview from "$lib/components/builder/BadgePreview.svelte";
    import SnippetPanel from "$lib/components/builder/SnippetPanel.svelte";
    import { normalizeHref } from "$lib/validate-href.js";

    const defaults = {
        builtWith: "Svelte",
        by: "Your name",
        text: "Built",
        showWith: true,
        position: "bottom-right",
        theme: "green",
        useCustomBackground: false,
        background: "#663399",
        useCustomColor: false,
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
        fontSize: 13,
        fontWeight: "500",
        href: "",
        zIndex: 100,
    };

    let options = $state({ ...defaults });

    let hrefError = $derived.by(() => {
        if (!options.href.trim()) return "";

        try {
            normalizeHref(options.href.trim());
            return "";
        } catch {
            return "Enter a valid HTTP(S) or relative URL.";
        }
    });

    let badgeOptions = $derived({
        builtWith: options.showWith ? options.builtWith : "",
        by: options.by,
        text: options.text,
        showWith: options.showWith,
        position: options.position,
        theme: options.theme,
        background: options.useCustomBackground
            ? options.background
            : undefined,
        color: options.useCustomColor ? options.color : undefined,
        fontFamily: options.fontFamily,
        fontSize: `${options.fontSize}px`,
        fontWeight: options.fontWeight,
        href: hrefError ? undefined : options.href.trim() || undefined,
        zIndex: Number(options.zIndex) || 9999,
    });

    function resetOptions() {
        Object.assign(options, defaults);
    }
</script>

<svelte:head>
    <title>Badge Builder — Built With</title>
    <meta
        name="description"
        content="Customize a Built With badge, preview it live, and copy code for Svelte, React, or a CDN script."
    />
</svelte:head>

<div class="app-shell">
    <header class="topbar">
        <a class="brand" href="/" aria-label="Built With badge builder home">
            <span class="brand-mark" aria-hidden="true">B</span>
            <span>built<span class="brand-muted">with</span></span>
        </a>
        <nav aria-label="Project links">
            <a
                href="/docs"
            >
                Docs
            </a>
            <a
                href="https://github.com/TahaHameed23/built-with"
                target="_blank"
                rel="noreferrer"
            >
                GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
                href="https://www.npmjs.com/package/@tahahameed23/built-with"
                target="_blank"
                rel="noreferrer"
            >
                npm <span aria-hidden="true">↗</span>
            </a>
        </nav>
    </header>

    <main>
        <section class="intro">
            <p class="eyebrow"><span></span> BADGE PLAYGROUND</p>
            <h1>Make it yours.</h1>
            <p class="intro-copy">
                Tune your badge, see it update live, and copy the code straight
                into your project.
            </p>
        </section>

        <div class="builder-layout">
            <BadgeOptions bind:options {hrefError} onreset={resetOptions} />
            <div class="right-column">
                <BadgePreview {badgeOptions} />
                <SnippetPanel {badgeOptions} hrefError={Boolean(hrefError)} />
            </div>
        </div>
    </main>

    <footer>
        <div class="footer-copy">
            <span>Made for the makers behind the web.</span>
        </div>
        <a
            class="footer-badge"
            href="https://github.com/TahaHameed23/built-with"
            target="_blank"
            rel="noreferrer"
            aria-label="Built with Built With Badge by Taha"
        >
            <span>Built with</span>
            <strong>Built With Badge</strong>
            <span>by <strong>Taha</strong></span>
        </a>
    </footer>
</div>

<style>
    :global(*) {
        box-sizing: border-box;
    }

    :global(body) {
        margin: 0;
        background: #f5f6f8;
        color: #20231f;
        font-family:
            "Inter",
            "Segoe UI",
            -apple-system,
            BlinkMacSystemFont,
            sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    .app-shell {
        --builder-ink: #20231f;
        --builder-muted: #747a70;
        --builder-line: #e8e9e7;
        --builder-accent: #607d3e;
        min-height: 100vh;
        padding: 0 40px;
    }

    .topbar,
    main,
    footer {
        width: min(1120px, 100%);
        margin: 0 auto;
    }

    .topbar {
        height: 76px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--builder-line);
    }

    .brand {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: var(--builder-ink);
        font-size: 15px;
        font-weight: 750;
        letter-spacing: -0.5px;
        text-decoration: none;
    }

    .brand-mark {
        display: grid;
        width: 30px;
        height: 30px;
        place-items: center;
        border-radius: 9px;
        background: #222820;
        color: #c9f27e;
        font-size: 15px;
        font-weight: 800;
        transition:
            transform 180ms ease,
            background 180ms ease;
    }

    .brand:hover .brand-mark {
        transform: rotate(-6deg);
        background: #303a29;
    }

    .brand-muted {
        color: #777d73;
        font-weight: 500;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    nav a,
    footer a {
        color: #62685f;
        font-size: 12px;
        font-weight: 600;
        text-decoration: none;
        transition: color 160ms ease;
    }

    nav a:hover,
    footer a:hover {
        color: var(--builder-ink);
    }

    main {
        padding: 54px 0 64px;
    }

    .intro {
        margin-bottom: 32px;
        animation: enter 440ms both;
    }

    .eyebrow {
        margin: 0;
        color: #858b80;
        font-size: 10px;
        font-weight: 750;
        letter-spacing: 1.15px;
    }

    .eyebrow {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #5b654e;
    }

    .eyebrow span {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #96c84c;
        box-shadow: 0 0 0 3px rgb(150 200 76 / 16%);
        animation: pulse 2.8s ease-in-out infinite;
    }

    h1 {
        margin: 12px 0 8px;
        color: var(--builder-ink);
        font-size: clamp(32px, 5vw, 46px);
        font-weight: 720;
        letter-spacing: -2px;
        line-height: 1.05;
    }

    .intro-copy {
        max-width: 520px;
        margin: 0;
        color: var(--builder-muted);
        font-size: 14px;
        line-height: 1.65;
    }

    .builder-layout {
        display: grid;
        grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
        align-items: stretch;
        gap: 20px;
    }

    .right-column {
        display: grid;
        gap: 20px;
    }

    @media (min-width: 801px) {
        .right-column {
            grid-template-rows: auto minmax(0, 1fr);
        }

        .right-column :global(.code-panel) {
            display: flex;
            height: 100%;
            min-height: 0;
            flex-direction: column;
        }

        .right-column :global(.code-panel pre) {
            height: auto;
            min-height: 0;
            max-height: none;
            flex: 1 1 0;
            overflow: auto;
        }
    }

    footer {
        display: flex;
        min-height: 112px;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        border-top: 1px solid var(--builder-line);
        color: #858b80;
        font-size: 10px;
    }

    .footer-copy {
        display: grid;
        gap: 6px;
        font-size: 14px;
        font-weight: 500;
        text-decoration: underline;
        text-underline-offset: 2px;
        text-decoration-style: wavy;
        text-decoration-color: rgb(150 200 76);
    }

    .footer-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 8px 11px;
        border: 1px solid rgb(255 255 255 / 12%);
        border-radius: 8px;
        background: #222820;
        box-shadow: 0 3px 10px rgb(25 32 19 / 12%);
        color: #f7f8f4;
        font-size: 11px;
        text-decoration: none;
        transition:
            transform 160ms ease,
            box-shadow 160ms ease;
    }

    .footer-badge:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgb(25 32 19 / 16%);
        color: #f7f8f4;
    }

    .footer-badge:active {
        transform: translateY(0);
    }

    .footer-badge strong {
        color: #c9f27e;
    }

    :global(:focus-visible) {
        outline: 2px solid #6c8c49;
        outline-offset: 3px;
    }

    @keyframes enter {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes pulse {
        50% {
            box-shadow: 0 0 0 5px rgb(150 200 76 / 8%);
        }
    }

    @media (max-width: 800px) {
        .app-shell {
            padding: 0 24px;
        }

        main {
            padding-top: 40px;
        }

        .builder-layout {
            grid-template-columns: minmax(0, 1fr);
        }

        .right-column {
            order: 2;
        }
    }

    @media (max-width: 480px) {
        .app-shell {
            padding: 0 16px;
        }

        .topbar {
            height: 64px;
        }

        nav {
            gap: 13px;
        }

        nav a {
            font-size: 11px;
        }

        main {
            padding-top: 34px;
        }

        .intro {
            margin-bottom: 24px;
        }

        footer {
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            gap: 16px;
            min-height: 128px;
            padding: 20px 0;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
</style>
