/* ---- TARGETS && INITIALIZERS ---- */

import { data } from "./data.js";

const output = document.querySelector(".content");
let displaySubCategories;
let displayRules;
let displayResults;

/* ---- FUNCTIONS ---- */

// create new component container & map data structure
const displayData = data.map(function (category) {
  const newComponent = document.createElement("article");
  newComponent.classList.add("cat-container");
  newComponent.dataset.id = category.id;
  newComponent.innerHTML = `
    <div class="main-cat-title">
        <h2 class="cat-title">${category.cat_title}</h2>
    </div>
        <div class="sub-cat-container">
          ${(displaySubCategories = category.sub_cats.map(function (sub) {
            return `
            <div class="sub-cat-title">
              <h3 class="sub-title">${sub.sub_title}</h3>
            </div>
            <div class="sub-cat-content">
              ${(displayRules = sub.rules.map(function (rule) {
                return `
                <div class="rule">
                 <code class="classname" title="Click to copy class name">${
                   rule.classname
                 }</code>
                    <div class="results">
                    ${(displayResults = rule.results.map(function (result) {
                      return ` <p class="result">${result}</p>`;
                    })).join("")}
                    </div> 
                </div>
                `;
              })).join("")}
            </div>
            `;
          })).join("")}
        </div>
    `;
  // Push category components to DOM
  output.appendChild(newComponent);
});
