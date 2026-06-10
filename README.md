# SuperTeacher Multi-page Demo

## Open locally
Open `index.html` in Chrome or Edge.

## Host online
Upload the complete folder without changing the folder structure.

## Important editable files

- `js/catalog.js`  
  Add or remove boards, series, grades, colours and descriptions.

- `css/global.css`  
  Controls the full design, animations, cards, navigation and responsive layout.

- `assets/logo/superteacher-logo.png`  
  Company logo used across all pages.

- `assets/book-covers/`  
  Add actual book covers here when available.

## Navigation structure

Home
→ Curriculum
→ Computer Science
→ Board
→ Series
→ Grade
→ Book Viewer

## Computer Science offerings

CBSE:
- FunCoder 3.0
- HappyCoder 3.0
- SuperCoder 3.0
- SmartCoder 3.0
- MasterCoder 3.0

ICSE:
- FutureCoder 3.0
- CreativeCoder 3.0

State Board:
- FunCoder 3.0
- HappyCoder 3.0

## To connect an actual PDF

Open `books/book-viewer.html` and replace the placeholder button action:

```html
onclick="showToast('Connect the actual PDF link here.')"
```

with:

```html
onclick="window.open('../assets/pdfs/your-book.pdf','_blank')"
```

Create an `assets/pdfs` folder and upload the PDF there.

## Thinking Book CT & AI covers added

Actual book covers are included for Grades 1–8:

- Grades 1–5: Computational Thinking
- Grades 6–8: Computational Thinking and Artificial Intelligence

Cover path:

`assets/book-covers/thinking/grade-1.jpg` through `grade-8.jpg`

The reusable viewer automatically displays the matching cover when a grade is selected.


## PROBO kit image

Experiential Kits image: `assets/kits/probo-kit-box.jpeg`
