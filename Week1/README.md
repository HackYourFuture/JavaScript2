# Reading material for the first lecture:

```
In week one we will discuss the following topics:
• Capturing user input
• Basic DOM manipulations[img src, innerHTML]
• Code debugging using the browser
• Events
• Code commenting
• Structuring code files
• Code formatting
• Handing in homework via PR
```

## Software installation for the JavaScript 2 Module

**_To save time, please do these preparations at home before coming to the first lecture._**

1. Install the following extensions in VSCode (you may have installed some of them already):

   - Code Spell Checker
   - ESLint
   - Prettier - Code formatter
   - open in browser
   - Live Server
   - Bracket Pair Colorizer

2. Modify the VSCode User Settings to include the settings listed below. If a particular setting is already present in your User Settings, make sure that the setting value listed below is used and change it if necessary.

   To open your user and workspace settings, use the following VS Code menu command:

   - On Windows/Linux - **File** > **Preferences** > **Settings**
   - On macOS - **Code** > **Preferences** > **Settings**

   Then, click on the `{ }` button in the top-right corner of the settings screen to access the settings in JSON format.

 
   ```json
   /// Place your settings in this file to overwrite the default settings
   {
     "editor.detectIndentation": false,
     "editor.formatOnSave": true,
     "editor.minimap.enabled": false,
     "editor.renderIndentGuides": true,
     "editor.tabSize": 2,
     "editor.codeActionsOnSave": {
       "source.fixAll": true
     },
     "eslint.autoFixOnSave": true,
     "files.autoSave": "onFocusChange",
     "prettier.printWidth": 100,
     "prettier.singleQuote": true,
     "prettier.trailingComma": "all"
   }
   ```

3. Install the ESLint CLI tool globally by issuing the following command from the command line:

   ```
   npm install -g eslint-cli
   ```

4. Fork this repository (i.e., **JavaScript2**) and clone your fork to your laptop.

5. Open the `JavaScript2` folder from the cloned repository in VSCode.

6. Open a terminal window in VSCode and type the following command:

   ```
   npm install
   ```

## Review of JavaScript1

As a refresher, go through the topics of JavaScript1:

### Week 2

- [Variables (var, let, const)](./../../../../fundamentals/blob/master/fundamentals/variables.md)
- [Basic Data types (Strings, Numbers, Arrays, Booleans)](./../../../../fundamentals/blob/master/fundamentals/values.md)
- [Operators](./../../../../fundamentals/blob/master/fundamentals/operators.md)
- [Naming conventions](./../../../../fundamentals/blob/master/fundamentals/naming_conventions.md)

### Week 3

- [Advanced data types (objects)](./../../../../fundamentals/blob/master/fundamentals/objects.md)
- [Conditional execution](./../../../../fundamentals/blob/master/fundamentals/conditional_execution.md) <br>
- [Statements vs Expressions](./../../../../fundamentals/blob/master/fundamentals/statements_expressions.md)<br>
- [Loops (for/while)](./../../../../fundamentals/blob/master/fundamentals/loops.md)
- [Functions](./../../../../fundamentals/blob/master/fundamentals/functions.md)
- [Scope](./../../../../fundamentals/blob/master/fundamentals/scope.md)

## Required readings for the first lecture

(No reading material available at this time for the crossed-out topics)

- ~~Capturing user input~~
- [Events](http://javascript.info/introduction-browser-events)
- [Basic DOM manipulations (img src, innerHTML)](./../../../../fundamentals/blob/master/fundamentals/DOM_manipulation.md)
- [Code Degugging Using the Browser](http://javascript.info/debugging-chrome)
- [Code commenting](./../../../../fundamentals/blob/master/fundamentals/code_commenting.md)
- ~~Structuring code~~
- [Code formatting](./../../../../fundamentals/blob/master/fundamentals/code_formatting.md)
- [Handing in homework via PR](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/homework_pr.md)

Extras:

- [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [Chrome DevTools Debugging](https://developers.google.com/web/tools/chrome-devtools/)

### Recommended readings

These chapters from _Eloquent JavaScript_ give in-depth explanations of the topics that will be discussed during the lecture. Highly recommended (if time permits).

- Chapter 13: [JavaScript and the Browser](http://eloquentjavascript.net/13_browser.html)

- Chapter 14: [The Document Object Model](http://eloquentjavascript.net/14_dom.html)

  _You can skip the following sections:_

  - Moving through the tree

- Chapter 15: [Handling Events](http://eloquentjavascript.net/15_event.html)

  Notes: for the lectures and homework you only need to know about these events: `click`, `change`, `keyup` and `load`.

  _You can skip the following sections (but come to these sections when doing the React module):_

  - Touch events
  - Scroll events
  - Focus events
  - Events and the Event Loop
  - Debouncing

_Please go through the material and come to class prepared!_
