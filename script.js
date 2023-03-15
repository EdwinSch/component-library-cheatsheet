/* ---- TARGETS && INITIALIZERS ---- */

import { data } from "./data.js";

let filteredSearch = data;

const filterBtnContainer = document.querySelector(".filter-btns-container");
const output = document.querySelector(".content");
const notification = document.querySelector(".cs_notification");
const textFilter = document.getElementById("search");

let displaySubCategories;
let displayRules;
let displayResults;

/* -------- SCRIPT -------- */

// Display data/content on load
displayData();
// Display buttons on load
displayFilterBtns();

// Text filter functionality
textFilter.addEventListener("keyup", function () {
  let inputValue = textFilter.value;

  filteredSearch = data.filter(function (result) {
    return result.cat_title.toLowerCase().includes(inputValue);
  });

  // Re-call display data
  displayData();
});

// Filter button functionality
filterBtnContainer.addEventListener("click", function (event) {
  const targetBtn = event.target;

  if (targetBtn.dataset.id === "all") {
    filteredSearch = data;
  } else {
    filteredSearch = data.filter(function (cat) {
      return cat.cat_title === targetBtn.dataset.id;
    });
  }
  // reset
  textFilter.value = "";
  // Re-call display data
  displayData();
});

/* -------- FUNCTIONS -------- */

// Display data/content function
function displayData() {
  // check for empty search result
  if (filteredSearch.length < 1) {
    output.innerHTML = `<p class="result-error">no results</p>`;
    return;
  }
  // Create new component container & map full data set
  output.innerHTML = filteredSearch
    .map(function (category) {
      return `<article class="cat-container" data-id=${category.id}>
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
      </article>
      `;
    })
    .join("");
  // Call clipboard function
  copyToClipboard();
}

// Display dynamic filter buttons
function displayFilterBtns() {
  const buttons = ["all", ...new Set(data.map((cat) => cat.cat_title))];

  filterBtnContainer.innerHTML = buttons
    .map((cat) => {
      return `<li>
                <a href="#" class="filter-btn" title="Click to filter by category" data-id=${cat}>${cat}</a>
              </li>`;
    })
    .join("");
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
