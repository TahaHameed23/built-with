const themes = {
    dark: { background: "#333", color: "white" },
    light: { background: "white", color: "#222" },
    blue: { background: "royalblue", color: "white" },
    purple: { background: "rebeccapurple", color: "white" },
    green: { background: "seagreen", color: "white" },
    orange: { background: "darkorange", color: "white" },
    pink: { background: "deeppink", color: "white" },
    slate: { background: "slategray", color: "white" },
};

export const badgeThemes = Object.keys(themes);

export function resolveBadgeTheme(theme = "dark") {
    return themes[theme] ?? themes.dark;
}
