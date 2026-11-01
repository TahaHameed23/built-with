<script>
    const reactExample = `import { useEffect } from "react";
import { mountBadge } from "@tahahameed23/built-with/vanilla";

export function BuiltWithBadge() {
  useEffect(() => {
    const badge = mountBadge({
      builtWith: "React",
      by: "Your name",
      text: "Built",
      theme: "purple",
    });

    return () => badge.destroy();
  }, []);

  return null;
}`;

    const closeScriptTag = "<" + "/script>";

    const svelteExample = `<script>
  import { Badge } from "@tahahameed23/built-with";
${closeScriptTag}

<Badge builtWith="Svelte" by="Your name" theme="green" />`;

    const cdnExample = `<script
  src="https://unpkg.com/@tahahameed23/built-with@0.0.1/dist/cdn/badge.js"
  data-builtwith="JavaScript"
  data-by="Your name"
  data-theme="green"
>${closeScriptTag}`;
</script>

<svelte:head>
    <title>Getting Started — Built With Badge</title>
    <meta
        name="description"
        content="Install and add the Built With badge to React, Svelte, or any website."
    />
</svelte:head>

<div class="docs-shell">
    <header class="topbar">
        <a class="brand" href="/" aria-label="Built With badge builder home">
            <span class="brand-mark" aria-hidden="true">B</span>
            <span>built<span class="brand-muted">with</span></span>
        </a>
        <nav aria-label="Project links">
            <a href="/" aria-current="page">Builder</a>
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
        <p class="eyebrow">GETTING STARTED</p>
        <h1>Add your badge</h1>
        <p class="intro">
            Pick the setup that fits your project. Customize the badge in the
            <a href="/">builder</a>, then paste in your options.
        </p>

        <section aria-labelledby="install-title">
            <h2 id="install-title">1. Install</h2>
            <pre><code>npm install @tahahameed23/built-with</code></pre>
        </section>

        <section aria-labelledby="react-title">
            <h2 id="react-title">2. Add to React</h2>
            <p>
                Import the framework-independent API. The effect cleanup removes
                the badge when the component unmounts.
            </p>
            <pre><code>{reactExample}</code></pre>
        </section>

        <section aria-labelledby="svelte-title">
            <h2 id="svelte-title">Or use Svelte</h2>
            <pre><code>{svelteExample}</code></pre>
        </section>

        <section aria-labelledby="cdn-title">
            <h2 id="cdn-title">Or use a CDN</h2>
            <p>No package install required. Add the script to your HTML:</p>
            <pre><code>{cdnExample}</code></pre>
        </section>

        <a class="builder-link" href="/"
            >Customize your badge <span aria-hidden="true">→</span></a
        >
    </main>
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

    .docs-shell {
        min-height: 100vh;
        padding: 0 40px 64px;
    }

    main {
        width: min(760px, 100%);
        margin: 0 auto;
    }

    .topbar {
        width: min(1120px, 100%);
        margin: 0 auto;
        height: 76px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e8e9e7;
    }

    .brand {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: #20231f;
        font-size: 15px;
        font-weight: 750;
        letter-spacing: -0.5px;
        text-decoration: none;
    }

    .brand-mark {
        transition:
            transform 180ms ease,
            background 180ms ease;
    }

    .brand:hover .brand-mark {
        transform: rotate(-6deg);
        background: #303a29;
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

    nav a {
        color: #62685f;
        font-size: 12px;
        font-weight: 600;
        text-decoration: none;
        transition: color 160ms ease;
    }

    nav a:hover,
    nav a[aria-current="page"],
    .intro a:hover {
        color: #20231f;
    }

    main {
        padding-top: 56px;
    }

    .eyebrow {
        margin: 0 0 12px;
        color: #69775a;
        font-size: 10px;
        font-weight: 750;
        letter-spacing: 1.15px;
    }

    h1 {
        margin: 0;
        font-size: clamp(32px, 6vw, 44px);
        letter-spacing: -1.8px;
    }

    .intro {
        margin: 12px 0 38px;
        color: #747a70;
        font-size: 15px;
        line-height: 1.65;
    }

    .intro a {
        color: #526e36;
    }

    section {
        margin-top: 28px;
    }

    h2 {
        margin: 0 0 10px;
        font-size: 18px;
        letter-spacing: -0.4px;
    }

    section p {
        margin: 0 0 12px;
        color: #747a70;
        font-size: 13px;
        line-height: 1.6;
    }

    pre {
        max-width: 100%;
        overflow-x: auto;
        margin: 0;
        padding: 16px;
        border: 1px solid #303630;
        border-radius: 9px;
        background: #202420;
        color: #e0e6dc;
        font:
            12px/1.7 "SFMono-Regular",
            Consolas,
            "Liberation Mono",
            monospace;
        tab-size: 2;
    }

    code {
        font: inherit;
        white-space: pre;
    }

    .builder-link {
        display: inline-flex;
        gap: 8px;
        margin-top: 32px;
        color: #526e36;
        font-size: 13px;
        font-weight: 700;
        text-decoration: none;
    }

    .builder-link:hover span {
        transform: translateX(3px);
    }

    .builder-link span {
        transition: transform 160ms ease;
    }

    @media (max-width: 800px) {
        .docs-shell {
            padding-right: 24px;
            padding-left: 24px;
        }
    }

    @media (max-width: 480px) {
        .docs-shell {
            padding-right: 16px;
            padding-left: 16px;
        }

        main {
            padding-top: 38px;
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

        pre {
            padding: 13px;
            font-size: 11px;
        }
    }
</style>
