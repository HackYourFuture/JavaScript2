# Homework JavaScript2 Week 1

## **Todo list**

1. Practice the concepts
2. JavaScript exercises
3. Code along
4. PROJECT:

## **1. Practice the concepts**

## **2. JavaScript exercises**

### 1. The book list

I'd like to display my three favorite books inside a nice webpage!

```js
const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
];
```

1. Iterate through the array of books.
2. For each book, create a p element with the book title and author and append it to the page.
3. Use an <ul> and <li> to display the books.
4. Add an <img> to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it or not.

### 2. About me

Start with this HTML and save it as "about_me.html":

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>About Me</title>
  </head>
  <body>
    <h1>About Me</h1>

    <ul>
      <li>Nickname: <span id="nickname"></span></li>
      <li>Favorite food: <span id="fav-food"></span></li>
      <li>Hometown: <span id="hometown"></span></li>
    </ul>
  </body>
</html>
```

Add a script tag to the bottom of the HTML body.
(In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
(In the JavaScript) Replace each of the spans (nickname, fav-food, hometown) with your own information.
Iterate through each li and change the class to "list-item".
(In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.
Create a new img element and set its src attribute to a picture of you. Append that element to the page.

### 3. The Logo Hijack

No homepage is safe from the logo bandit!

Open up www.google.com in Chrome or Firefox, and open up the console.
Find the Google logo and store it in a variable.
Modify the source of the logo IMG so that it's a Yahoo logo instead.
Find the Google search button and store it in a variable.
Modify the text of the button so that it says "Yahooo!" instead.

### 4.

Write the code necessary to do the following:

Select the section with an id of container without using querySelector.
Select the section with an id of container using querySelector.
Select all of the list items with a class of "second".
Select a list item with a class of third, but only the list item inside of the ol tag.
Give the section with an id of container the text "Hello!".
Add the class main to the div with a class of footer.
Remove the class main on the div with a class of footer.
Create a new li element.
Give the li the text "four".
Append the li to the ul element.
Loop over all of the lis inside the ol tag and give them a background color of "green".
Remove the div with a class of footer.

### 5. The cat walk

Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Cat Walk</title>
  </head>
  <body>
    <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif" />
  </body>
</html>
```

1. Add a script tag at the bottom of the page, where you'll put all your code.
2. Create a variable to store a reference to the img.
3. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
4. Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
5. Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

6. When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

7. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing (use this URL: https://tenor.com/StFI.gif), keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

## **3. Code along**

- [Item Lister](https://www.youtube.com/watch?v=wK2cBMcDTss)
- [Building a Real-World Application](https://www.youtube.com/watch?v=NYq9J-Eur9U)

## **4. PROJECT: **

## **SUBMIT YOUR HOMEWORK!**

After you've finished your todo list it's time to show us what you got! Starting from this week you'll be submitting all your homework through GitHub. What you'll be doing is upload all your files to a forked repository (a copy from the original, which in this case is the [JavaScript1](https://www.github.com/HackYourFuture/JavaScript1) repository) using GIT.

Take a look at the following [guide](../hand-in-homework-guide.md) to see how it's done.

The homework that needs to be submitted is the following:

1. JavaScript exercises
2. Project:

_Deadline Saturday 23.59 CET_
