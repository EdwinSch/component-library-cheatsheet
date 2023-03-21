/* ---- TARGETS && INITIALIZERS ---- */

import { data } from "./data.js";

let filteredSearch = data;

const filterBtnContainer = document.querySelector(".filter-btns-container");
const output = document.querySelector(".content");
const notification = document.querySelector(".cs_notification");
const textFilter = document.getElementById("search");

let filterBtns;
let displaySubCategories;
let displayRules;
let displayResults;

/* -------- SCRIPT -------- */

// Call data/content on load
displayData();
// Call buttons on load
displayFilterBtns();

// Text filter functionality
textFilter.addEventListener("keyup", function () {
  let inputValue = textFilter.value;

  filteredSearch = data.filter(function (result) {
    return (
      result.query_keys.toLowerCase().includes(inputValue) ||
      result.cat_title.toLowerCase().includes(inputValue)
    );
  });

  // Call display data
  displayData();
});

// Filter button functionality
filterBtns.forEach((button) => {
  button.addEventListener("click", function (event) {
    const targetBtn = event.target;

    if (targetBtn.dataset.id === "all") {
      filteredSearch = data;
    } else {
      filteredSearch = data.filter(function (cat) {
        return cat.cat_title === targetBtn.dataset.id;
      });
    }
    // Reset text input
    textFilter.value = "";
    // Call display data
    displayData();
  });
});

/* -------- FUNCTIONS -------- */

// Display data/content function
function displayData() {
  // check for empty search result
  if (filteredSearch.length < 1) {
    output.innerHTML = `
    <div class="result-error">
      <div class="result-error-inner">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#c6002a" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        <h2>We couldn't find any matches</h2>
        <p>Double check your search for any typos or spelling errors - or try a different search term</p>
      </div>
    </div>`;
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
  const buttons = [...new Set(data.map((cat) => cat.cat_title))];
  //sort alphabet
  buttons.sort();
  // add 'all' to array
  buttons.unshift("all");

  filterBtnContainer.innerHTML = buttons
    .map((cat) => {
      return `<li>
                <a href="#" class="filter-btn" title="Click to filter by category" data-id=${cat}>${cat}</a>
              </li>`;
    })
    .join("");

  filterBtns = document.querySelectorAll(".filter-btn");
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
