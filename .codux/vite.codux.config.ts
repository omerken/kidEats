import { mergeConfig } from 'vite';
import coduxPlugins from "../../../codux-ai/src/vite/codux-plugin.ts";

import originalConfig from '../vite.config.ts';

const coduxPluginOptions = {
  "previewScriptUrl": "http://localhost:4444/src/codux-ai/entrypoints/web/editor-preview.web.ts"
};

export default mergeConfig(
    originalConfig,
    { plugins: coduxPlugins(coduxPluginOptions, import.meta.url) },
);
