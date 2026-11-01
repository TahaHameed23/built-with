import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "dist/cdn",
        emptyOutDir: true,
        lib: {
            entry: "./src/lib/embed.js",
            name: "BadgeEmbed",
            fileName: () => "badge.js",
            formats: ["iife"],
        },
    },
});
