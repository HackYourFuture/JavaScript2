### Lecture Notes Week 4

## Reviewing

Cover individual topics that students may still be stuck on from previous lectures and homework

## Callbacks

- How do DOM event listeners work?
  - Can reference color-change-example.html
  - One INEFFICIENT way would be to actually have each element listening/polling every second whether is has been clicked
    - > Let's say you bring your car into the shop, and you need to know when it's ready. The inefficient way: Come back every 15 minutes and ask if it's ready yet. The better way: Leave your phone number and ask that they notify you when it's ready. Now let's say you have an HTML element, and you need to know when it's been clicked. The inefficient way: Come back every 15 ms and ask if there's been a click. The better way (and how event listeners work): Give the HTML element a function and ask that they invoke it for you when a click happens.
    - This is really a problem because Javascript is single threaded
      - When you block the thread... nothing else can work. Add this to the script and see what happens:
        ```
        for (let i = 0; i < 100000; i++) {
          console.log(`Executing for the ${i}th time...`);
        }
        ```
  - Even listeners work using callbacks. After a event is triggered, the passed function gets called.
- We are now in the topic of ASYNCRONOUS programming
  > One approach to asynchronous programming is to make functions that perform a slow action take an extra argument, a callback function. The action is started, and when it finishes, the callback function is called with the result.
  > \- Eloquent Javascript
- Examples
  - addEventListener takes 1) the event and 2) a callback function
  - setInterval()... how can we do the same color example using setInterval?
  - Mouse move example
- Event loop. Most amazing lecture on this is from [Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ).
  - Browser engine / Node
- Callback hell
  - Request library example: https://github.com/request/request (only node!)

## Scope

## Closures
