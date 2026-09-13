declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const frontmatter: unknown;
  export const toc: Array<{ depth: number; value: string; id?: string; href?: string }>;

  const MDXContent: ComponentType<{ components?: Record<string, ComponentType<any>> }>;
  export default MDXContent;
}
