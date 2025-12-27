                                         FinacPlus Assignment – UI & AI Test Automation

🚀 Playwright (JavaScript) | UI Automation + API Testing | CI/CD Enabled

This repository contains a complete UI and API automation solution built using Playwright with JavaScript for the DemoQA application and ReqRes public APIs. The project follows industry best practices such as Page Object Model (POM), secure credential handling, parallel execution, and CI/CD integration.

<p align="center">
  <img src="https://img.shields.io/badge/Tool-Playwright-blueviolet?style=for-the-badge"> 
  <img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge"> 
  <img src="https://img.shields.io/badge/CI/CD-GitHub%20Actions-green?style=for-the-badge"> 
  <img src="https://img.shields.io/badge/Framework-POM-orange?style=for-the-badge"> </p> 
  <p align="center">
  <b>✨ End-to-end UI + API automation suite with POM architecture, cross-browser execution, encrypted credentials, custom logging, and CI/CD reporting.</b>
  </p>
  
__________

📂 PROJECT STRUCTURE
```
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── pages
│   └── booksPage.js
│   └── loginPage.js
|
├── resources
│   └── bookDetails.txt
|
├── tests
│   ├── api-testcases.spec.js
│   └── ui-testcases.spec.js
│
├── utils
│   ├── cryptoUtil.js
│   └── logger.js
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.js
└── README.md
```
_________

### 📌 UI Assignment Coverage (DemoQA)

**Application URL:** https://demoqa.com/

> ⚠️ **Note:** User registration is performed manually (not automated).

### Automated Scenarios
- Navigate to **DemoQA Home Page**
- Navigate to **Book Store Application**
- Login using an existing (manually created) user
- Validate:
  - Logged-in **username**
  - Presence of **Logout** button
- Navigate to **Book Store**
- Search for the book  
  **"Learning JavaScript Design Patterns"**
- Validate the search result contains the expected book
- Capture and write the following details into a file:
  - 📘 Title  
  - ✍️ Author  
  - 🏢 Publisher
- Logout from the application

---

### 📌 API Assignment Coverage (ReqRes)

**Base URL:** https://reqres.in/

### Automated API Scenarios
- Create a user
  - Validate HTTP status code
  - Fetch and store the generated **userId**
- Get user details using the stored **userId**
  - Validate response data
- Update the user's name
  - Validate the updated name in the response

✅ API automation is implemented using Playwright’s built-in **request fixture**

---


## ✨ Key Features

### 🧪 Automation Framework
- Built using **Playwright** with **JavaScript**
- Implements **Page Object Model (POM)** for better test maintainability and reusability
- Supports **UI and API automation** within a single test suite

---

### 🔐 Secure Credential Management
- User credentials are **encrypted and stored in a `.env` file**
- Credentials are **securely decrypted at runtime**
- No sensitive data is hard-coded in the test scripts

---

### ⚡ Parallel & Controlled Execution
- Parallel execution is configured for stability:
  - `fullyParallel: false`
  - `workers: 2`
- **UI and API tests are executed in parallel** to optimize execution time

---

### 🌍 Cross-Browser Testing
- Supports execution across multiple browsers:
  - **Chrome**
  - **Firefox**
  - **Edge**
- Browser selection is configurable via GitHub Actions workflow inputs

---

### 📦 Reporting
- Generates **CTRF summary reports** in the GitHub Actions summary view
- Stores **Playwright HTML reports** as workflow artifacts
- Publishes test reports to a dedicated branch for **GitHub Pages hosting**
- Sends test execution report links via **email notification**

---

## ▶️ How to Trigger the Workflow

The Playwright test execution workflow can be triggered manually via GitHub Actions.

### Steps
1. Navigate to the **Actions** tab in the repository
2. Select the **Playwright Automation Tests** workflow
3. Click **Run workflow**
4. Choose a browser from the dropdown:
   - `chrome`
   - `edge`
   - `firefox`
5. Input email for receiving reports:
6. Click **Run workflow** to start the execution

---
 
 🚀 GitHub Actions — CI/CD Integration

The pipeline performs:

✔ Install Node.js

✔ Install dependencies

✔ Install Playwright browsers

✔ Execute tests for the selected browser

✔ Publish CTRF summary

✔ Store Playwright HTML reports as workflow artifacts

✔ Push test reports to a dedicated `reports` branch for GitHub Pages hosting

✔ Send execution report link via email after test completion

________
## 📊 Test Reports

Playwright generates HTML reports automatically after execution.

### 🌐 Hosted Report (GitHub Pages)

Test reports are published using **GitHub Pages** and can be accessed using the following URL pattern:
https://rsdk1.github.io/finacplus-assignment/reports- `<build-number>` /index.html

The `<build-number>` corresponds to the CI/CD run number generated by GitHub Actions.

__________
AUTHOR: RajaSuma D.K

🔗 Portfolio: https://rsdk.my.canva.site/

🔗 LinkedIn: https://www.linkedin.com/in/rsdk

🔗 GitHub: https://github.com/rsdk1

