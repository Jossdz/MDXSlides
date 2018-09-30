# MDX Slides starter kit

Starter kit using mdx-deck, mdx code surfer and theming.

---

![](https://s3.amazonaws.com/jxnblk/mdx-deck.gif)

- :memo: Write presentations in markdown
- ✍ Auto import awesome fonts from google fonts
- :atom_symbol: Import and use React Components
- :nail_care: Customizable themes and components
- :zero: Zero-config CLI
- :tipping_hand_woman: Presenter mode
- :notebook: Speaker notes

## Installation

Clone or download this repo and install with:

```bash
 $ npm i
```
or
```bash
 $ yarn
```

## Usage

Open the `src/deck.mdx` and start typing your slides and separate each one with `---`.

````mdx
# This is the title of my deck
---
# About Me
---
```jsx
<CodeSnippet />
```
---
import Demo from './components/Demo'

<Demo />
---
# The end
````

Start the dev server:

```bash
  npm run dev
```

To use presenter mode:

- Open two windows in the same browser, with the same URL on two different screens. (this should work in both development and exported presentations)
- In your window press the `Option + P` (`Alt + P`) key to enter presenter mode.
- Display the other window on the screen for the audience to see.
- Control the presentation from your window by using the left and right arrow keys; the other window should stay in sync

### Speaker Notes

Notes that only show in presenter mode can be added to any slide.
Speaker notes can be added in one of the following two ways:

**Markdown:** Use the `notes` language attribute in a fenced code block to add speaker notes.

````mdx
# Slide Content

```notes
These are only visible in presenter mode
```
````