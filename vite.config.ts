import mdx from "@mdx-js/rollup";
import netlifyReactRouter from "@netlify/vite-plugin-react-router";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import rehypeMdxToc from "rehype-mdx-toc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: "frontmatter" }]],
        rehypePlugins: [
          rehypeSlug,
          [rehypeMdxToc, { name: "toc" }],
          [
            rehypePrettyCode,
            { theme: { light: "github-light", dark: "github-dark-dimmed" }, keepBackground: false },
          ],
        ],
      }),
    },
    reactRouter(),
    netlifyReactRouter(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
});
