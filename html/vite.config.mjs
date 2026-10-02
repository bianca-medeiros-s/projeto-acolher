
import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    root: path.resolve(__dirname, ".."),

    base: "/projeto-acolher/",

    build: {
        outDir: path.resolve(__dirname, "../dist"),
        emptyOutDir: true,

        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "../html/index.html"),
                projetos: path.resolve(__dirname, "../html/projetos.html"),
                cadastro: path.resolve(__dirname, "../html/cadastro.html")
            }
        }
    }
});
