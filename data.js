export const data = [
  // ---- TYPOGRAPHY
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
  // ---- BACKGROUNDS
  {
    id: "xpwzp3",
    cat_title: "backgrounds",
    sub_cats: [
      {
        sub_title: "color",
        rules: [
          {
            classname: "background-success",
            results: ["background-color: #27ae60"],
          },
          {
            classname: "background-warning",
            results: ["background-color: #f2994a"],
          },
          { classname: "background-danger", 
            results: ["background-color: #c6002a"] },
          {
            classname: "background-default",
            results: ["background-color: #c6002a"],
          },
          {
            classname: "background-inverse",
            results: ["background-color: #24276c"],
          },
          { classname: "background-info", 
            results: ["background-color: #0086d9"] 
          },
        ],
      },
    ],
  },
  // ---- DISPLAY
  {
    id: "m87wuf",
    cat_title: "display",
    sub_cats: [
      {
        sub_title: "type",
        rules: [
          { classname: "d-none", results: ["display: none"] },
          { classname: "d-flex", results: ["display: flex"] },
          { classname: "d-inline-flex", results: ["display: inline-flex"] },
          { classname: "d-inline", results: ["display: inline"] },
          { classname: "d-inline-block", results: ["display: inline-block"] },
          { classname: "show, d-block", results: ["display: block"] },
        ],
      },
    ],
  },
  // ---- ALIGN
  {
    id: "5lhrki",
    cat_title: "align",
    sub_cats: [
      {
        sub_title: "vertical alignment",
        rules: [
          { classname: "align-top", results: ["vertical-align: top"] },
          { classname: "align-middle", results: ["vertical-align: middle"] },
          { classname: "align-bottom", results: ["vertical-align: bottom"] },
        ],
      },
    ],
  },
  // ---- DIMENSIONS
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
