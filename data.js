export const data = [
  // START OBJECT
  {
    id: "s6zy63",
    cat_title: "typography",
    sub_cats: [
      {
        sub_title: "alignment",
        rules: [
          { classname: "text-left", results: ["text-align: left"] },
          { classname: "text-right", results: ["text-align: right"] },
          { classname: "text-center", results: ["text-align: center"] },
          { classname: "text-justify", results: ["text-align: justify"] },
        ],
      },
      {
        sub_title: "wrapping",
        rules: [
          {
            classname: "text-nowrap",
            results: [
              "overflow: hidden",
              "max-width: 100%",
              "white-space: nowrap",
              "text-overflow: ellipsis",
            ],
          },
        ],
      },
      {
        sub_title: "transforming",
        rules: [
          {
            classname: "text-lowercase",
            results: ["text-transform: lowercase"],
          },
          {
            classname: "text-uppercase",
            results: ["text-transform: uppercase"],
          },
          {
            classname: "text-capitalize",
            results: ["text-transform: capitalize"],
          },
        ],
      },
      {
        sub_title: "size & weight",
        rules: [
          {
            classname: "text-small",
            results: ["font-size: ??"],
          },
          {
            classname: "text-large",
            results: ["font-size: ??"],
          },
          {
            classname: "text-light",
            results: ["font-weight: ??"],
          },
          {
            classname: "text-normal",
            results: ["font-weight: ??"],
          },
          {
            classname: "text-semibold",
            results: ["font-weight: ??"],
          },
          {
            classname: "text-bold",
            results: ["font-weight: ??"],
          },
        ],
      },
      {
        sub_title: "color",
        rules: [
          {
            classname: "text-white",
            results: ["color: #ffffff"],
          },
        ],
      },
    ],
  },
  // END OBJECT
  {
    id: "h3pbrf",
    cat_title: "dimensions",
    sub_cats: [
      {
        sub_title: "height",
        rules: [
          { classname: "h-25", results: ["height: 25%"] },
          { classname: "h-50", results: ["height: 50%"] },
          { classname: "h-75", results: ["height: 75%"] },
          { classname: "h-100", results: ["height: 100%"] },
        ],
      },
      {
        sub_title: "width",
        rules: [
          { classname: "w-25", results: ["width: 25%"] },
          { classname: "w-50", results: ["width: 50%"] },
          { classname: "w-75", results: ["width: 75%"] },
          {
            classname: "w-100",
            results: ["width: 100%"],
          },
        ],
      },
    ],
  },
];
