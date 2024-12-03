import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  initializeGrapesJS,
  addCustomComponents,
} from "../editor/config/grapesjsConfig";
import Tabs from "./Gallery/StyleTabs";
import "grapesjs/dist/css/grapes.min.css";


const Editor = ({ componentsConfig }) => {
  const [activeTab, setActiveTab] = useState("content");
  const contentRef = useRef(null);
  const editorRef = useRef(null);

  useLayoutEffect(() => {
    if (!editorRef.current) {
      const editorInstance = initializeGrapesJS("gjs");
      console.log(editorInstance.BlockManager.getAll());

      addCustomComponents(editorInstance, componentsConfig);

      editorRef.current = editorInstance;
    }

    return () => {
      editorRef.current = null;
    };
  }, [componentsConfig]);
  useEffect(() => {
    const editor = editorRef.current;

    contentRef.current.innerHTML = "";

    switch (activeTab) {
      case "content":
        contentRef.current.appendChild(editor.TraitManager.render());
        break;
      case "style":
        const styleManager = editor.StyleManager.render();
        contentRef.current.appendChild(styleManager);

        const advancedStyleSection = styleManager.querySelector(
          ".gjs-sm-sector__layout"
        );
        const flexStyleSection = styleManager.querySelector(
          ".gjs-sm-sector__flex"
        );
        if (advancedStyleSection) {
          advancedStyleSection.style.display = "none";
          flexStyleSection.style.display = "none";
        }
        break;
      case "advanced":
        const styleManagerForAdvanced = editor.StyleManager.render();
        const flexStyle = styleManagerForAdvanced.querySelector(
          ".gjs-sm-sector__flex"
        );
        const advancedStyle = styleManagerForAdvanced.querySelector(
          ".gjs-sm-sector__layout"
        );
        if (advancedStyle) {
          advancedStyle.style.display = "block";
          contentRef.current.appendChild(advancedStyle);
          contentRef.current.appendChild(flexStyle);
        }
        break;
      default:
        break;
    }
  }, [activeTab]);

  return (
    <div id="editor-wrapper">
      <div className="gallery-wrapper" id="gjs" />
      <div className="panel__right gallery-settings">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="tab-content" ref={contentRef}></div>
      </div>
    </div>
  );
};

export default Editor;
