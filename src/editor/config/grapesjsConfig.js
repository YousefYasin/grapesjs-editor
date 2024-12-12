import grapesjs from "grapesjs";
import basicBlockPlugin from "grapesjs-blocks-basic";
import { advancedStyle, basicStyle } from "./styleManager";
import { addCustomPanels } from "./panelConfig";
import { addCustomTraits } from "./traitConfig";

export const initializeGrapesJS = (
  containerId,
  additionalComponents,
  plugins = []
) => {
  const editorInstance = grapesjs.init({
    container: `#${containerId}`,
    width: "100%",
    plugins: [basicBlockPlugin, ...plugins],
    blockManager: {},
    fromElement: false,
    canvas: {
      styles: ["post.css"],
      scripts: [
        "https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries",
      ],
    },
    styleManager: {
      sectors: [...basicStyle, ...advancedStyle],
    },
  });

  // Add css file that is used in the comps
  loadExternalStyles(editorInstance, "post.css");
  // Add custom panels
  addCustomPanels(editorInstance);

  // Add custom traits
  addCustomTraits(editorInstance);
  return editorInstance;
};

export const addCustomComponents = (editor, components) => {
  components?.forEach((component) => {
    editor?.DomComponents.addType(component.name, {
      model: component.model,
      view: component.view,
    });

    editor.BlockManager.add(component.blockName, {
      label: component.blockLabel,
      content: { type: component.name },
      category: "Custom",
      attributes: { class: "fa fa-cube" },
    });
  });
};

const loadExternalStyles = async (editor, cssPath) => {
  try {
    const response = await fetch(cssPath);
    const cssText = await response.text();
    editor.CssComposer.addRules(cssText);
  } catch (error) {
    console.error("Error loading CSS file:", error);
  }
};
