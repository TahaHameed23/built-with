<script>
    let { options = $bindable(), hrefError, onreset } = $props();

    const themes = [
        "dark",
        "light",
        "blue",
        "purple",
        "green",
        "orange",
        "pink",
        "slate",
    ];
    const positions = ["bottom-right", "bottom-left", "top-right", "top-left"];
    const fontStacks = [
        "system-ui, sans-serif",
        "Arial, sans-serif",
        "Georgia, serif",
        "'Courier New', monospace",
        "inherit",
    ];
</script>

<section class="panel options-panel" aria-labelledby="options-title">
    <div class="panel-heading">
        <div>
            <p class="step-label">01 / CUSTOMIZE</p>
            <h2 id="options-title">Your badge</h2>
        </div>
        <button class="reset-button" type="button" onclick={onreset}
            >Reset</button
        >
    </div>

    <div class="field-grid">
        <label class="field">
            <span>Technology</span>
            <input
                bind:value={options.builtWith}
                autocomplete="off"
                placeholder="Svelte"
                disabled={!options.showWith}
                aria-describedby={!options.showWith
                    ? "technology-hint"
                    : undefined}
            />
            {#if !options.showWith}
                <small id="technology-hint" class="field-hint">
                    Turn on “Add with” to show a technology here.
                </small>
            {/if}
        </label>
        <label class="field">
            <span>By</span>
            <input
                bind:value={options.by}
                autocomplete="name"
                placeholder="Your name"
            />
        </label>
        <label class="field field-wide">
            <span>Label</span>
            <input
                bind:value={options.text}
                autocomplete="off"
                placeholder="Built, made, developed…"
            />
        </label>
        <label class="toggle-row field-wide">
            <span>
                <strong>Add “with”</strong>
                <small>Off shows only the “by” name attribution</small>
            </span>
            <input type="checkbox" bind:checked={options.showWith} />
        </label>
        <label class="field">
            <span>Position</span>
            <select bind:value={options.position}>
                {#each positions as item}
                    <option value={item}>{item}</option>
                {/each}
            </select>
        </label>
        <label class="field">
            <span>Color theme</span>
            <select bind:value={options.theme}>
                {#each themes as item}
                    <option value={item}>{item}</option>
                {/each}
            </select>
        </label>
    </div>

    <div class="section-divider"><span>APPEARANCE</span></div>

    <div class="field-grid">
        <label class="toggle-row field-wide">
            <span>
                <strong>Custom background</strong>
                <small>Pick a color to override the theme</small>
            </span>
            <input type="checkbox" bind:checked={options.useCustomBackground} />
        </label>
        {#if options.useCustomBackground}
            <label class="color-field field-wide">
                <span>Background color</span>
                <input
                    type="color"
                    bind:value={options.background}
                    aria-label="Choose badge background color"
                />
                <code>{options.background}</code>
            </label>
        {/if}
        <label class="toggle-row field-wide">
            <span>
                <strong>Custom text color</strong>
                <small>Pick a color to override the theme</small>
            </span>
            <input type="checkbox" bind:checked={options.useCustomColor} />
        </label>
        {#if options.useCustomColor}
            <label class="color-field field-wide">
                <span>Text color</span>
                <input
                    type="color"
                    bind:value={options.color}
                    aria-label="Choose badge text color"
                />
                <code>{options.color}</code>
            </label>
        {/if}
        <label class="field field-wide">
            <span class="range-heading">
                Font size <output>{options.fontSize}px</output>
            </span>
            <input
                class="range-input"
                type="range"
                min="10"
                max="20"
                step="1"
                bind:value={options.fontSize}
            />
        </label>
        <label class="field">
            <span>Font family</span>
            <input
                bind:value={options.fontFamily}
                list="font-stacks"
                autocomplete="off"
                placeholder="system-ui, sans-serif"
            />
            <datalist id="font-stacks">
                {#each fontStacks as stack}
                    <option value={stack}></option>
                {/each}
            </datalist>
        </label>
        <label class="field">
            <span>Font weight</span>
            <select bind:value={options.fontWeight}>
                <option value="400">Regular</option>
                <option value="500">Medium</option>
                <option value="600">Semibold</option>
                <option value="700">Bold</option>
            </select>
        </label>
    </div>

    <div class="section-divider"><span>LINK &amp; LAYER</span></div>

    <div class="field-grid">
        <label class="field field-wide">
            <span>Link <small class="optional">OPTIONAL</small></span>
            <input
                bind:value={options.href}
                type="text"
                inputmode="url"
                aria-invalid={Boolean(hrefError)}
                placeholder="https://your-site.com"
            />
            {#if hrefError}
                <small class="field-error">{hrefError}</small>
            {/if}
        </label>
        <label class="field field-wide">
            <span class="range-heading">
                Stacking order <output>{options.zIndex}</output>
            </span>
            <input
                class="range-input"
                type="range"
                min="1"
                max="1000"
                step="1"
                bind:value={options.zIndex}
            />
        </label>
    </div>
</section>

<style>
    .panel {
        min-width: 0;
        border: 1px solid #e9ebe7;
        border-radius: 14px;
        background: #fff;
        box-shadow: 0 5px 20px rgb(25 32 19 / 3%);
        animation: enter 440ms 70ms both;
        transition:
            border-color 180ms ease,
            box-shadow 180ms ease;
    }

    .panel:hover {
        border-color: #e0e5d9;
        box-shadow: 0 8px 26px rgb(25 32 19 / 5%);
    }

    .options-panel {
        padding: 24px;
    }

    .panel-heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 22px;
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

    .reset-button {
        padding: 7px 10px;
        border: 1px solid #e8eae5;
        border-radius: 7px;
        background: #fff;
        color: #6f756a;
        font-size: 11px;
        font-weight: 650;
        cursor: pointer;
        transition:
            background 160ms ease,
            border-color 160ms ease,
            color 160ms ease,
            transform 160ms ease;
    }

    .reset-button:hover {
        transform: translateY(-1px);
        border-color: #ccd0c7;
        background: #f8f9f6;
        color: #252922;
    }

    .reset-button:active {
        transform: translateY(0);
    }

    .field-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px 12px;
    }

    .field,
    .color-field {
        display: flex;
        min-width: 0;
        flex-direction: column;
        gap: 7px;
        color: #444a41;
        font-size: 11px;
        font-weight: 650;
    }

    .field-wide {
        grid-column: 1 / -1;
    }

    .field input:not([type="checkbox"]):not([type="range"]):not([type="color"]),
    .field select {
        width: 100%;
        height: 38px;
        padding: 0 10px;
        border: 1px solid #e4e7e1;
        border-radius: 7px;
        outline: none;
        background: #fff;
        color: #30352d;
        font-size: 12px;
        font-weight: 450;
        transition:
            border-color 150ms ease,
            box-shadow 150ms ease;
    }

    .field input::placeholder {
        color: #a4a99f;
    }

    .field input:disabled {
        background: #f3f4f1;
        color: #8a9086;
        cursor: not-allowed;
    }

    .field-hint {
        color: #858b81;
        font-size: 10px;
        font-weight: 450;
        line-height: 1.4;
    }

    .field input:focus,
    .field select:focus {
        border-color: #91b75c;
        box-shadow: 0 0 0 3px rgb(145 183 92 / 17%);
    }

    .toggle-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        min-height: 48px;
        padding: 9px 11px;
        border: 1px solid #edf0e9;
        border-radius: 8px;
        background: #fbfcfa;
        cursor: pointer;
        transition:
            border-color 160ms ease,
            background 160ms ease;
    }

    .toggle-row:has(input:checked) {
        border-color: #dce7cf;
        background: #f8faf5;
    }

    .toggle-row span {
        display: grid;
        gap: 3px;
    }

    .toggle-row strong {
        color: #363b33;
        font-size: 11px;
        font-weight: 650;
    }

    .toggle-row small {
        color: #858b81;
        font-size: 10px;
        font-weight: 450;
    }

    .toggle-row input {
        width: 16px;
        height: 16px;
        accent-color: #526d36;
        cursor: pointer;
    }

    .section-divider {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 22px 0 14px;
        color: #92978d;
        font-size: 9px;
        font-weight: 750;
        letter-spacing: 0.95px;
    }

    .section-divider::after {
        height: 1px;
        flex: 1;
        background: #eff0ed;
        content: "";
    }

    .color-field {
        display: grid;
        grid-template-columns: 1fr auto auto;
        align-items: center;
        min-height: 42px;
        padding: 5px 8px 5px 11px;
        border: 1px solid #e7e9e3;
        border-radius: 7px;
        background: #fff;
        animation: enter 180ms ease-out both;
    }

    .color-field input {
        width: 32px;
        height: 28px;
        padding: 2px;
        border: 1px solid #e1e4dc;
        border-radius: 5px;
        background: #fff;
        cursor: pointer;
    }

    .color-field code {
        min-width: 58px;
        color: #797f75;
        font-size: 10px;
        font-weight: 500;
    }

    .range-heading {
        display: flex;
        justify-content: space-between;
    }

    output {
        color: #646c59;
        font-variant-numeric: tabular-nums;
    }

    .range-input {
        width: 100%;
        margin: 3px 0 0;
        accent-color: #607d3e;
        cursor: pointer;
    }

    .optional {
        margin-left: 5px;
        color: #a1a69d;
        font-size: 8px;
        letter-spacing: 0.5px;
    }

    .field-error {
        color: #b42318;
        font-size: 10px;
        font-weight: 500;
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
        .options-panel {
            padding: 17px;
        }

        .field-grid {
            column-gap: 9px;
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
