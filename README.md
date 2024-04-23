# Recruitment Task

The **Wioleta-Borkowska-Recruitment-Task-Playwright-TS** repository contains an automatic test prepared using the Playwright library for Node.js (TypeScript).

## Technologies  
- Node.js v20.12.2.0
- Playwright v1.43.1
- TypeScript v5.4.3

## Project structure
Test is located in the project in the **tests** directory.<br>
According to PageObjectPattern project contains also **pages** and **locators** directories.<br>
For extending base test behavior there is **fixtures** directory with `TestFixtures.ts` file

## Configuration
1. **Install node.js** - first you need to install node.js. You can download the installer from here https://nodejs.org/en/download
2. **Clone repository** - project repository can be found here https://github.com/wioleta1501/Wioleta-Borkowska-Recruitment-Task-Playwright-TS/
3. **Install dependencies** - in the terminal execute the command below. This will install the modules defined in package.json into your project.
```bash
npm i
```

## Local execution
Running tests :
- running the entire set of tests
```bash
npx playwright test
```
- running tests that have a particular tag
```bash
npx playwright test --grep @tag_name
```
- or if you want the opposite, you can skip the tests with a certain tag
```bash
npx playwright test --grep-invert @tag_name
```
- displaying the test report
```bash
npx playwright show-report
```
