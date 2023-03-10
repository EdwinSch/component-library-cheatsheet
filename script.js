/* ---- TARGETS && INITIALIZERS ---- */

import { data } from "./data.js";

const filterBtnContainer = document.querySelector(".filter-btns-container");
const output = document.querySelector(".content");
const notification = document.querySelector(".cs_notification");

let displaySubCategories;
let displayRules;
let displayResults;
let getFilterBtns;

/* ---- SCRIPT ---- */

// Map filter buttons (On Load)
mapFilterBtns();

// Create new component container & map full data set (On Load)
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
  // Invoke clipboard function
  copyToClipboard();
});

// --- filter buttons functionality
getFilterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(this.dataset.id);
  });
});

/* ---- FUNCTIONS ---- */

// Map filter buttons function
function mapFilterBtns() {
  const displayFilterBtns = data
    .map(function (btn) {
      return `<li>
            <a href="#" class="filter-btn" title="Click to filter by category" data-id=${btn.cat_title}>${btn.cat_title}</a>
          </li>`;
    })
    .join("");
  filterBtnContainer.innerHTML = displayFilterBtns;
  getFilterBtns = document.querySelectorAll(".filter-btn");
}

// Clipboard function
function copyToClipboard() {
  const classes = document.querySelectorAll("code");
  classes.forEach((code) => {
    code.addEventListener("click", function () {
      navigator.clipboard.writeText(code.innerHTML);
      // Trigger notification
      notification.classList.add("show");
      setTimeout(() => {
        notification.classList.remove("show");
      }, 1500);
    });
  });
}
