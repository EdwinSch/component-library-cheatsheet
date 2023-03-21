export const data = [
  // ---- TYPOGRAPHY
  {
    id: "s6zy63",
    cat_title: "typography",
    query_keys: "text, color, align",
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
            results: ["font-size: 14px"],
          },
          {
            classname: "text-large",
            results: ["font-size: 18px"],
          },
          {
            classname: "text-light",
            results: ["font-weight: 100"],
          },
          {
            classname: "text-normal",
            results: ["font-weight: normal"],
          },
          {
            classname: "text-semibold",
            results: ["font-weight: 600"],
          },
          {
            classname: "text-bold",
            results: ["font-weight: bold"],
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
    query_keys: "background, success, warning, danger, info",
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
          {
            classname: "background-danger",
            results: ["background-color: #c6002a"],
          },
          {
            classname: "background-default",
            results: ["background-color: #c6002a"],
          },
          {
            classname: "background-inverse",
            results: ["background-color: #24276c"],
          },
          {
            classname: "background-info",
            results: ["background-color: #0086d9"],
          },
        ],
      },
    ],
  },
  // ---- DISPLAY
  {
    id: "m87wuf",
    cat_title: "display",
    query_keys: "d, block, flex, inline",
    sub_cats: [
      {
        sub_title: "type",
        rules: [
          { classname: "d-none", results: ["display: none"] },
          { classname: "d-flex", results: ["display: flex"] },
          { classname: "d-inline-flex", results: ["display: inline-flex"] },
          { classname: "d-inline", results: ["display: inline"] },
          { classname: "d-inline-block", results: ["display: inline-block"] },
          { classname: "d-block", results: ["display: block"] },
        ],
      },
    ],
  },
  // ---- ALIGN
  {
    id: "5lhrki",
    cat_title: "align",
    query_keys: "vertical, top, bottom",
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
    query_keys: "h, w",
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
  // ---- RESPONSIVE
  {
    id: "2i0watf0",
    cat_title: "responsive",
    query_keys: "hide, display",
    sub_cats: [
      {
        sub_title: "hide options",
        rules: [
          { classname: "hide-phone", results: ["display: none"] },
          { classname: "hide-tablet", results: ["display: none"] },
          { classname: "hide-desktop", results: ["display: none"] },
        ],
      },
    ],
  },
  // ---- BORDERS
  {
    id: "gfg6jbtr",
    cat_title: "borders",
    query_keys: "border, solid",
    sub_cats: [
      {
        sub_title: "borders",
        rules: [
          { classname: "border", results: ["1px solid #e5e5e5"] },
          { classname: "border-top", results: ["1px solid #e5e5e5"] },
          { classname: "border-bottom", results: ["1px solid #e5e5e5"] },
          { classname: "border-left", results: ["1px solid #e5e5e5"] },
          { classname: "border-right", results: ["1px solid #e5e5e5"] },
        ],
      },
      {
        sub_title: "Rounded corners",
        rules: [{ classname: "border-rounded", results: ["8px"] }],
      },
    ],
  },
  // ---- FLEXBOX
  {
    id: "by8va5fr",
    cat_title: "flexbox",
    query_keys: "justify, content, align, box, stretch, start, end, center, between",
    sub_cats: [
      {
        sub_title: "box alignment",
        rules: [
          { classname: "justify-content-start", results: ["flex-start"] },
          { classname: "justify-content-end", results: ["flex-end"] },
          { classname: "justify-content-center", results: ["center"] },
          { classname: "justify-content-between", results: ["space-between"] },
          { classname: "justify-content-around", results: ["space-around"] },
          { classname: "justify-content-evenly", results: ["space-evenly"] },
          { classname: "justify-content-stretch", results: ["stretch"] },
          { classname: "align-children-start", results: ["flex-start"] },
          { classname: "align-content-end", results: ["flex-end"] },
          { classname: "align-content-center", results: ["center"] },
          { classname: "align-content-between", results: ["space-between"] },
          { classname: "align-content-around", results: ["space-around"] },
          { classname: "align-content-stretch", results: ["stretch"] },
        ],
      },
    ],
  },
  // ---- SPACING: MARGIN
  {
    id: "j6pyktb8",
    cat_title: "Spacing: Margin",
    query_keys: "margin, spacing, top, bottom, left, right",
    sub_cats: [
      {
        sub_title: "margin",
        rules: [
          { classname: "marginzero", results: ["0"] },
          { classname: "marginxs", results: ["4px"] },
          { classname: "marginsm", results: ["8px"] },
          { classname: "marginmd", results: ["16px"] },
          { classname: "marginlg", results: ["24px"] },
          { classname: "marginxl", results: ["32px"] },
        ],
      },
      {
        sub_title: "margin top",
        rules: [
          { classname: "margintopzero", results: ["0"] },
          { classname: "margintopxs", results: ["4px"] },
          { classname: "margintopsm", results: ["8px"] },
          { classname: "margintopmd", results: ["16px"] },
          { classname: "margintoplg", results: ["24px"] },
          { classname: "margintopxl", results: ["32px"] },
        ],
      },
      {
        sub_title: "margin top",
        rules: [
          { classname: "marginrightzero", results: ["0"] },
          { classname: "marginrightxs", results: ["4px"] },
          { classname: "marginrightsm", results: ["8px"] },
          { classname: "marginrightmd", results: ["16px"] },
          { classname: "marginrightlg", results: ["24px"] },
          { classname: "marginrightxl", results: ["32px"] },
        ],
      },
      {
        sub_title: "margin top",
        rules: [
          { classname: "marginbottomzero", results: ["0"] },
          { classname: "marginbottomxs", results: ["4px"] },
          { classname: "marginbottomsm", results: ["8px"] },
          { classname: "marginbottommd", results: ["16px"] },
          { classname: "marginbottomlg", results: ["24px"] },
          { classname: "marginbottomxl", results: ["32px"] },
        ],
      },
      {
        sub_title: "margin top",
        rules: [
          { classname: "marginleftzero", results: ["0"] },
          { classname: "marginleftxs", results: ["4px"] },
          { classname: "marginleftsm", results: ["8px"] },
          { classname: "marginleftmd", results: ["16px"] },
          { classname: "marginleftlg", results: ["24px"] },
          { classname: "marginleftxl", results: ["32px"] },
        ],
      },
    ],
  },
  {
    id: "kvz67vj3",
    cat_title: "Spacing: Padding",
    query_keys: "padding, spacing, top, bottom, left, right",
    sub_cats: [
      {
        sub_title: "padding",
        rules: [
          { classname: "paddingzero", results: ["0"] },
          { classname: "paddingxs", results: ["4px"] },
          { classname: "paddingsm", results: ["8px"] },
          { classname: "paddingmd", results: ["16px"] },
          { classname: "paddinglg", results: ["24px"] },
          { classname: "paddingxl", results: ["32px"] },
        ],
      },
      {
        sub_title: "padding top",
        rules: [
          { classname: "paddingtopzero", results: ["0"] },
          { classname: "paddingtopxs", results: ["4px"] },
          { classname: "paddingtopsm", results: ["8px"] },
          { classname: "paddingtopmd", results: ["16px"] },
          { classname: "paddingtoplg", results: ["24px"] },
          { classname: "paddingtopxl", results: ["32px"] },
        ],
      },
      {
        sub_title: "padding top",
        rules: [
          { classname: "paddingrightzero", results: ["0"] },
          { classname: "paddingrightxs", results: ["4px"] },
          { classname: "paddingrightsm", results: ["8px"] },
          { classname: "paddingrightmd", results: ["16px"] },
          { classname: "paddingrightlg", results: ["24px"] },
          { classname: "paddingrightxl", results: ["32px"] },
        ],
      },
      {
        sub_title: "padding top",
        rules: [
          { classname: "paddingbottomzero", results: ["0"] },
          { classname: "paddingbottomxs", results: ["4px"] },
          { classname: "paddingbottomsm", results: ["8px"] },
          { classname: "paddingbottommd", results: ["16px"] },
          { classname: "paddingbottomlg", results: ["24px"] },
          { classname: "paddingbottomxl", results: ["32px"] },
        ],
      },
      {
        sub_title: "padding top",
        rules: [
          { classname: "paddingleftzero", results: ["0"] },
          { classname: "paddingleftxs", results: ["4px"] },
          { classname: "paddingleftsm", results: ["8px"] },
          { classname: "paddingleftmd", results: ["16px"] },
          { classname: "paddingleftlg", results: ["24px"] },
          { classname: "paddingleftxl", results: ["32px"] },
        ],
      },
    ],
  },
];
