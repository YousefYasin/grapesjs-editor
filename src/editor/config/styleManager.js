export const basicStyle = [
  {
    name: "General",
    buildProps: [
      "float",
      "display",
      "position",
      "top",
      "right",
      "left",
      "bottom",
    ],
    properties: [
      {
        name: "Alignment",
        property: "float",
        type: "radio",
        defaults: "none",
        list: [
          { value: "none", className: "fa fa-times" },
          { value: "left", className: "fa fa-align-left" },
          { value: "right", className: "fa fa-align-right" },
        ],
      },
      { property: "position", type: "select" },
    ],
  },
  {
    name: "Typography",
    open: false,
    buildProps: [
      "font-family",
      "font-size",
      "font-weight",
      "letter-spacing",
      "color",
      "line-height",
      "text-align",
      "text-decoration",
      "text-shadow",
    ],
    properties: [
      { name: "Font", property: "font-family" },
      { name: "Weight", property: "font-weight" },
      { name: "Font color", property: "color" },
      {
        property: "text-align",
        type: "radio",
        defaults: "left",
        list: [
          {
            value: "left",
            name: "Left",
            className: "fa fa-align-left",
          },
          {
            value: "center",
            name: "Center",
            className: "fa fa-align-center",
          },
          {
            value: "right",
            name: "Right",
            className: "fa fa-align-right",
          },
          {
            value: "justify",
            name: "Justify",
            className: "fa fa-align-justify",
          },
        ],
      },
      {
        property: "text-decoration",
        type: "radio",
        defaults: "none",
        list: [
          { value: "none", name: "None", className: "fa fa-times" },
          {
            value: "underline",
            name: "underline",
            className: "fa fa-underline",
          },
          {
            value: "line-through",
            name: "Line-through",
            className: "fa fa-strikethrough",
          },
        ],
      },
      {
        property: "text-shadow",
        properties: [
          { name: "X position", property: "text-shadow-h" },
          { name: "Y position", property: "text-shadow-v" },
          { name: "Blur", property: "text-shadow-blur" },
          { name: "Color", property: "text-shadow-color" },
        ],
      },
    ],
  },
  {
    name: "Basic Styles",
    open: false,
    buildProps: [
      "font-family",
      "font-size",
      "font-weight",
      "color",
      "line-height",
      "text-align",
      "margin",
      "padding",
    ],
  },
];

export const advancedStyle = [
  {
    name: "Layout",
    open: true,
    buildProps: [
      "margin",
      "padding",
      "border",
      "border-radius",
      "background-color",
      "box-shadow",
      "z-index",
      "transform",
      "opacity",
      "position",
    ],
    properties: [
      {
        property: "margin",
        type: "composite",
        className: "margin-group",
        properties: [
          {
            name: "Top",
            property: "margin-top",
            type: "number",
            units: ["px", "%", "em"],
            defaults: "0px",
          },
          {
            name: "Right",
            property: "margin-right",
            type: "number",
            units: ["px", "%", "em"],
            defaults: "0px",
          },
          {
            name: "Bottom",
            property: "margin-bottom",
            type: "number",
            units: ["px", "%", "em"],
            defaults: "0px",
          },
          {
            name: "Left",
            property: "margin-left",
            type: "number",
            units: ["px", "%", "em"],
            defaults: "0px",
          },
        ],
      },
      {
        property: "padding",
        type: "composite",
        className: "margin-group",
        properties: [
          {
            name: "Top",
            property: "padding-top",
            type: "number",
            units: ["px", "%", "em"],
            defaults: "0px",
          },
          {
            name: "Right",
            property: "padding-right",
            type: "number",
            units: ["px", "%", "em"],
            defaults: "0px",
          },
          {
            name: "Bottom",
            property: "padding-bottom",
            type: "number",
            units: ["px", "%", "em"],
            defaults: "0px",
          },
          {
            name: "Left",
            property: "padding-left",
            type: "number",
            units: ["px", "%", "em"],
            defaults: "0px",
          },
        ],
      },
      {
        property: "background",
        properties: [
          { name: "Image", property: "background-image" },
          { name: "Repeat", property: "background-repeat" },
          { name: "Position", property: "background-position" },
          { name: "Attachment", property: "background-attachment" },
          { name: "Size", property: "background-size" },
        ],
      },
      {
        property: "background-color",
        type: "color",
        defaults: "none",
      },
      {
        property: "border-radius",
        type: "composite",
        properties: [
          {
            name: "Top-Left",
            property: "border-top-left-radius",
            type: "number",
            units: ["px"],
            defaults: "0px",
          },
          {
            name: "Top-Right",
            property: "border-top-right-radius",
            type: "number",
            units: ["px"],
            defaults: "0px",
          },
          {
            name: "Bottom-Right",
            property: "border-bottom-right-radius",
            type: "number",
            units: ["px"],
            defaults: "0px",
          },
          {
            name: "Bottom-Left",
            property: "border-bottom-left-radius",
            type: "number",
            units: ["px"],
            defaults: "0px",
          },
        ],
      },
    ],
  },
  {
    name: "Flex",
    open: false,
    properties: [
      {
        name: "Flex Container",
        property: "display",
        type: "select",
        defaults: "block",
        list: [
          { value: "block", name: "Disable" },
          { value: "flex", name: "Enable" },
        ],
      },
      {
        name: "Flex Parent",
        property: "label-parent-flex",
        type: "integer",
      },
      {
        name: "Direction",
        property: "flex-direction",
        type: "radio",
        defaults: "row",
        list: [
          {
            value: "row",
            name: "Row",
            className: "icons-flex icon-dir-row",
            title: "Row",
          },
          {
            value: "row-reverse",
            name: "Row reverse",
            className: "icons-flex icon-dir-row-rev",
            title: "Row reverse",
          },
          {
            value: "column",
            name: "Column",
            title: "Column",
            className: "icons-flex icon-dir-col",
          },
          {
            value: "column-reverse",
            name: "Column reverse",
            title: "Column reverse",
            className: "icons-flex icon-dir-col-rev",
          },
        ],
      },
      {
        name: "Justify",
        property: "justify-content",
        type: "radio",
        defaults: "flex-start",
        list: [
          {
            value: "flex-start",
            className: "icons-flex icon-just-start",
            title: "Start",
          },
          {
            value: "flex-end",
            title: "End",
            className: "icons-flex icon-just-end",
          },
          {
            value: "space-between",
            title: "Space between",
            className: "icons-flex icon-just-sp-bet",
          },
          {
            value: "space-around",
            title: "Space around",
            className: "icons-flex icon-just-sp-ar",
          },
          {
            value: "center",
            title: "Center",
            className: "icons-flex icon-just-sp-cent",
          },
        ],
      },
      {
        name: "Align",
        property: "align-items",
        type: "radio",
        defaults: "center",
        list: [
          {
            value: "flex-start",
            title: "Start",
            className: "icons-flex icon-al-start",
          },
          {
            value: "flex-end",
            title: "End",
            className: "icons-flex icon-al-end",
          },
          {
            value: "stretch",
            title: "Stretch",
            className: "icons-flex icon-al-str",
          },
          {
            value: "center",
            title: "Center",
            className: "icons-flex icon-al-center",
          },
        ],
      },
      {
        name: "Flex Children",
        property: "label-parent-flex",
        type: "integer",
      },
      {
        name: "Order",
        property: "order",
        type: "integer",
        defaults: 0,
        min: 0,
      },
      {
        name: "Flex",
        property: "flex",
        type: "composite",
        properties: [
          {
            name: "Grow",
            property: "flex-grow",
            type: "integer",
            defaults: 0,
            min: 0,
          },
          {
            name: "Shrink",
            property: "flex-shrink",
            type: "integer",
            defaults: 0,
            min: 0,
          },
          {
            name: "Basis",
            property: "flex-basis",
            type: "integer",
            units: ["px", "%", ""],
            unit: "",
            defaults: "auto",
          },
        ],
      },
      {
        name: "Align",
        property: "align-self",
        type: "radio",
        defaults: "auto",
        list: [
          {
            value: "auto",
            name: "Auto",
          },
          {
            value: "flex-start",
            title: "Start",
            className: "icons-flex icon-al-start",
          },
          {
            value: "flex-end",
            title: "End",
            className: "icons-flex icon-al-end",
          },
          {
            value: "stretch",
            title: "Stretch",
            className: "icons-flex icon-al-str",
          },
          {
            value: "center",
            title: "Center",
            className: "icons-flex icon-al-center",
          },
        ],
      },
    ],
  },
];
