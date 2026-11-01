export type BadgePosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export type BadgeTheme = "dark" | "light" | "blue" | "purple" | "green" | "orange" | "pink" | "slate";

export type BadgeOptions = {
    builtWith?: string;
    by?: string;
    text?: string;
    background?: string;
    color?: string;
    theme?: BadgeTheme;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string | number;
    position?: BadgePosition;
    href?: string;
    zIndex?: number;
};

export type BadgeHandle = {
    destroy(): void;
};

export declare function mountBadge(options?: BadgeOptions): BadgeHandle;
