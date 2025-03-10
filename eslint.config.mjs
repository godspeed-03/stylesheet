import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends(
        "next/core-web-vitals",
        "next/typescript"
        // "plugin:prettier/recommended" // This ensures Prettier's formatting rules are applied
    ),
    {
        ignores: ["node_modules/**", "tailwind.config.ts"], // Flat config format
    },
];

export default eslintConfig;
