# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

#Desktop
![Screenshot 2023-10-08 at 1 31 18 PM](https://github.com/hashmi7917/news-homepage-layout/assets/38833326/816b8896-78f9-4d56-aa93-4229eb3bf118)

#Mobile
![Screenshot 2023-10-08 at 1 30 18 PM](https://github.com/hashmi7917/news-homepage-layout/assets/38833326/44041eff-7724-4ccf-a3b2-e4ed1f9fb7f8)

### Links

- Solution URL: [GitHub](https://github.com/hashmi7917/news-homepage-layout)
- Live Site URL: [Netlify](https://news-homepage-grid-layout.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

Grid Layouts

To see how you can add code snippets, see below:

```html
<main>
  <h1>The Bright Future of Web 3.0?</h1>
  <div class="news_reading">
    <p>
      We dive into the next evolution of the web that claims to put the power of
      the platforms back into the hands of the people. But is it really
      fulfilling its promise?
    </p>
    <button>read more</button>
  </div>
</main>
```

```css
main {
  min-height: 350px;
  width: 90%;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.8rem 1.2rem;
}
```

```js
function openNav() {
  document.getElementById('sidemenu').style.width = '250px';
}

function closeNav() {
  document.getElementById('sidemenu').style.width = '0';
}
```

### Continued development

Want Work on CSS Grids , Flexbox, Responsive Layouts.

### Useful resources

- [Example resource 1](https://tailwindcss.com/docs/animation) - This helped me for Tailwind Built in Animation Keyframes. I really liked this pattern and will use it going forward.
- [Example resource 2](https://cdnjs.com/libraries/animejs) - This is an amazing Spring Animation which helped me beautiful animation on page load. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Portfolio](https://hashmi7917.github.io/hashmiportfolio/)
- Frontend Mentor - [Muqtadeer](https://www.frontendmentor.io/profile/hashmi7917)
- GitHub - [Hashmi](https://github.com/hashmi7917)

## Acknowledgments

MDN Resources are very helpful as always.
