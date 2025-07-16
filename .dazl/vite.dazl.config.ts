import { mergeConfig } from "vite";
import dazlPlugins from "../../../DazlNew/src/vite/dazl-plugin.ts";
import originalConfig from "../vite.config.ts";

const dazlPluginOptions = {
  "previewScriptUrl": "http://localhost:4444/src/dazl-ai/entrypoints/web/editor-preview.web.ts"
};

export default mergeConfig(originalConfig, { plugins: dazlPlugins(dazlPluginOptions) });
