/* ---- TARGETS && INITIALIZERS ---- */

const data = [
  {
    id: "h3pbrf",
    cat_title: "spacing",
    sub_cats: [
      {
        sub_title: "margin",
        rules: [
          { classname: ".marginleftzero", results: "margin-left: 0px" },
          { classname: ".marginleftxs", results: "margin-left: 8px" },
        ],
      },
      {
        sub_title: "padding",
        rules: [
          { classname: ".paddingleftzero", results: "padding-left: 0px" },
          { classname: ".paddingleftxs", results: "padding-left: 8px" },
        ],
      },
    ],
  },
  {
    id: "s6zy63",
    cat_title: "colors",
    sub_cats: [
      {
        sub_title: "primary",
        rules: [
          { classname: ".red", results: "#ff0000" },
          { classname: ".blue", results: "#3d85c6" },
          ,
        ],
      },
      {
        sub_title: "secondary",
        rules: [
          { classname: ".green", results: "#228b22" },
          { classname: ".yellow", results: "#ffff00" },
        ],
      },
    ],
  },
];

const output = document.querySelector(".content");
let displaySubCategories;
let displayRules;

/* ---- FUNCTIONS ---- */

const displayData = data.map(function (category) {
  const newComponent = document.createElement("article");
  newComponent.classList.add("cat-container");
  newComponent.innerHTML = `<article class="cat-container">
    <div class="main-cat-title">
        <h2 class="cat-title">${category.cat_title}</h2>
    </div>
        <div class="sub-cat-container">
          ${(displaySubCategories = category.sub_cats.map(function (sub) {
            return `
            <div class="sub-cat-title">
              <h3 class="sub-title">${sub.sub_title}</h3>
            </div>
              ${(displayRules = sub.rules.map(function (rule) {
                return `
                <div class="rule">
                 <p class="classname">${rule.classname}</p>
                    <div class="results">
                     <p class="result">${rule.results}</p>
                    </div>
                </div>
                `;
              })).join("")}
            `;
          })).join("")}
        </div>
    </article>`;
  // Push category components to DOM
  output.appendChild(newComponent);
});
