import ReactDOM from "react-dom/client";
import Media from "../../components/Gallery/Media";
import PostFeed from "../../components/post/PostFeed";
import Contact from "../../components/contact";

const commonTraits = [
  {
    type: "number",
    label: "Width",
    name: "width",
    placeholder: "300px",
  },
  {
    type: "number",
    label: "Height",
    name: "height",
  },
  {
    type: "text",
    label: "Margin",
    name: "margin",
  },
  {
    type: "text",
    label: "Padding",
    name: "padding",
  },
];

const componentsConfig = [
  {
    name: "gallery",
    blockName: "gallery-block",
    blockLabel: "Gallery",
    model: {
      defaults: {
        tagName: "div",
        draggable: true,
        droppable: true,
        attributes: { class: "gallery" },
        traits: [
          {
            type: "custom-dnd",
            label: "Upload Images",
            name: "images",
            value: [],
          },
          {
            type: "text",
            label: "Title",
            name: "title",
            value: "Gallery",
          },
          {
            type: "select",
            label: "Columns",
            name: "columns",
            options: [1, 2, 3, 4, 5].map((value) => ({ value, name: value })),
          },
          {
            type: "number",
            label: "Gallery height",
            name: "height",
          },
          {
            type: "select",
            label: "Image Height",
            name: "imgHeight",
            options: [
              { value: "auto", name: "Auto" },
              { value: "fit", name: "Fit" },
              { value: "fill", name: "Fill" },
              { value: "contain", name: "Contain" },
              { value: "cover", name: "Cover" },
            ],
            default: "auto",
          },
          ...commonTraits,
        ],
      },
    },
    view: {
      init() {
        const el = this.el;
        const root = ReactDOM.createRoot(el);
        const updateComponent = () => {
          const model = this.model;
          const settings = {
            width: model?.getTrait("width").get("value"),
            margin: model?.getTrait("margin").get("value"),
            padding: model?.getTrait("padding").get("value"),
            images: model?.getTrait("images")?.get("value"),
            title: model?.getTrait("title")?.get("value"),
            columns: model?.getTrait("columns")?.get("value"),
            height: model?.getTrait("height")?.get("value"),
            imgHeight: model?.getTrait("imgHeight")?.get("value"),
          };
          root.render(<Media settings={settings} />);
        };
        updateComponent();
        this.listenTo(this.model, "change:traits", updateComponent);
        this.listenTo(this.model, "change:attributes", updateComponent);
      },
    },
  },
  {
    name: "post-block",
    blockName: "post-block",
    blockLabel: "Post Block",
    model: {
      defaults: {
        tagName: "div",
        draggable: true,
        droppable: true,
        attributes: { class: "post-block" },
        traits: [
          {
            type: "checkbox",
            label: "Show Comments",
            name: "showComments",
          },
          {
            type: "number",
            label: "Max Posts",
            name: "maxPosts",
            placeholder: "5",
            value: 1,
            min: 1,
            max: 5,
          },
          ...commonTraits,
        ],
      },
    },
    view: {
      init() {
        const el = this.el;
        const root = ReactDOM.createRoot(el);
        const updateComponent = () => {
          const model = this.model;
          const settings = {
            showComments: model.getTrait("showComments").get("value"),
            maxPosts: model.getTrait("maxPosts")?.get("value"),
            width: model.getTrait("width").get("value"),
            height: model.getTrait("height").get("value"),
            margin: model.getTrait("margin").get("value"),
            padding: model.getTrait("padding").get("value"),
          };
          root.render(<PostFeed settings={settings} />);
        };
        updateComponent();
        this.listenTo(this.model, "change:traits", updateComponent);
      },
    },
  },
  {
    name: "contact-form",
    blockName: "contact-block",
    blockLabel: "Contact Block",
    model: {
      defaults: {
        tagName: "div",
        draggable: true,
        droppable: true,
        attributes: { class: "contact-form" },
        traits: commonTraits,
      },
    },
    view: {
      init() {
        const el = this.el;
        const root = ReactDOM.createRoot(el);
        const updateComponent = () => {
          const model = this.model;
          const settings = {
            width: model.getTrait("width").get("value"),
            height: model.getTrait("height").get("value"),
          };
          root.render(<Contact settings={settings} />);
        };
        updateComponent();
        this.listenTo(this.model, "change:traits", updateComponent);
      },
    },
  },
];

export default componentsConfig;