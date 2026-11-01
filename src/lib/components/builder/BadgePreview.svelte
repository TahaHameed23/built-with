<script>
    import { Badge } from "$lib/index.js";

    let { badgeOptions } = $props();
</script>

<section class="panel preview-panel" aria-labelledby="preview-title">
    <div class="panel-heading">
        <div>
            <p class="step-label">02 / PREVIEW</p>
            <h2 id="preview-title">See it in action</h2>
        </div>
        <span class="live-indicator"><span></span> LIVE</span>
    </div>
    <div class="preview-stage" aria-label="Badge preview area">
        <div class="mock-browser" aria-hidden="true">
            <div class="browser-bar">
                <span></span><span></span><span></span>
                <div class="browser-address">your-website.com</div>
            </div>
            <div class="mock-content">
                <div class="mock-kicker"></div>
                <div class="mock-title"></div>
                <div class="mock-line"></div>
                <div class="mock-line short"></div>
                <div class="mock-card-row"><div></div><div></div><div></div></div>
            </div>
        </div>
        <Badge {...badgeOptions} />
    </div>
    <p class="preview-caption">This is how your badge will sit on a page.</p>
</section>

<style>
    .panel {
        min-width: 0;
        padding: 22px;
        border: 1px solid #e9ebe7;
        border-radius: 14px;
        background: #fff;
        box-shadow: 0 5px 20px rgb(25 32 19 / 3%);
        animation: enter 440ms 130ms both;
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

    .live-indicator {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 6px 8px;
        border: 1px solid #e9eee2;
        border-radius: 20px;
        background: #fbfcf9;
        color: #69775a;
        font-size: 9px;
        font-weight: 750;
        letter-spacing: 0.65px;
    }

    .live-indicator span {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #96c84c;
        box-shadow: 0 0 0 3px rgb(150 200 76 / 12%);
        animation: pulse 2.8s ease-in-out infinite;
    }

    .preview-stage {
        position: relative;
        height: 252px;
        overflow: hidden;
        border: 1px solid #e5e9e1;
        border-radius: 10px;
        background:
            radial-gradient(ellipse at 82% 18%, rgb(183 205 151 / 20%), transparent 32%),
            linear-gradient(145deg, #f8faf5, #eef1e9);
    }

    .mock-browser {
        position: absolute;
        inset: 20px 24px;
        overflow: hidden;
        border: 1px solid #e4e7df;
        border-radius: 9px;
        background: #fff;
        box-shadow: 0 10px 24px rgb(39 48 32 / 7%);
        transition:
            transform 240ms ease,
            box-shadow 240ms ease;
    }

    .preview-stage:hover .mock-browser {
        transform: translateY(-2px);
        box-shadow: 0 14px 28px rgb(39 48 32 / 9%);
    }

    .browser-bar {
        display: flex;
        height: 29px;
        align-items: center;
        gap: 4px;
        padding: 0 9px;
        border-bottom: 1px solid #eff0ed;
        background: #fcfcfb;
    }

    .browser-bar > span {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #d7dad2;
    }

    .browser-address {
        width: 44%;
        margin: 0 auto;
        padding: 3px 8px;
        border-radius: 4px;
        background: #f1f2ef;
        color: #9da196;
        font-size: 7px;
        text-align: center;
    }

    .mock-content {
        padding: 23px 20px;
    }

    .mock-kicker {
        width: 45px;
        height: 5px;
        margin-bottom: 9px;
        border-radius: 5px;
        background: #dce8ca;
    }

    .mock-title {
        width: 57%;
        height: 10px;
        margin-bottom: 9px;
        border-radius: 5px;
        background: #394035;
        opacity: 0.82;
    }

    .mock-line {
        width: 82%;
        height: 4px;
        margin-top: 6px;
        border-radius: 5px;
        background: #e8ebe4;
    }

    .mock-line.short {
        width: 57%;
    }

    .mock-card-row {
        display: flex;
        gap: 8px;
        margin-top: 16px;
    }

    .mock-card-row div {
        height: 36px;
        flex: 1;
        border: 1px solid #edf0e9;
        border-radius: 5px;
        background: linear-gradient(135deg, #f6f8f2, #fff);
    }

    .preview-stage :global(.badge) {
        position: absolute !important;
        transition:
            background-color 180ms ease,
            color 180ms ease,
            font-size 180ms ease,
            box-shadow 180ms ease;
        animation: badge-in 240ms ease-out both;
    }

    .preview-caption {
        margin: 11px 0 0;
        color: #8a9086;
        font-size: 10px;
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

    @keyframes badge-in {
        from {
            opacity: 0.65;
            scale: 0.97;
        }
        to {
            opacity: 1;
            scale: 1;
        }
    }

    @keyframes pulse {
        50% {
            box-shadow: 0 0 0 5px rgb(150 200 76 / 8%);
        }
    }

    @media (max-width: 480px) {
        .panel {
            padding: 17px;
        }

        .preview-stage {
            height: 220px;
        }

        .mock-browser {
            inset: 17px;
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
