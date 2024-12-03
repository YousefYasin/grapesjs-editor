export const addCustomPanels = (editorInstance) => {
    editorInstance.Panels.addPanel({
      id: "style-manager-panel",
      el: ".panel__right",
    });
  };
  