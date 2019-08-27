# Reading Material JavaScript2 Week 2

## Agenda

These are the topics for week 2:

1. Synchronous vs. asynchronous
   - Synchronous
   - Asynchronous
2. Callbacks
3. Event Loop

## 1. Synchronous vs. asynchronous

### Synchronous

In the previous module you've learned about **control flow**. In short: it's the order in which the computer executes statements in a script. In JavaScript this goes from left to right, top to bottom.

Let's look at code execution from another angle. The program that executes your code can do it in two basic ways: synchronous or asynchronous. Whenever code blocks are executed line after line (from top to bottom) we call this **synchronous execution**.

Imagine the following scenario:

> Noer wants to have breakfast but he doesn't have any food at home. He decides he want to eat oatmeal. The ingredients (oats and milk) can be bought at the supermarket. How to do this? First Noer takes a shower. Then he puts on some clothes. Then some shoes. Then he opens the door and goes outside. Then he jumps on the bike and goes to the closest supermarket. After looking for some time he finds the ingredients. Then Noer buys the ingredients. Then he jump back on the bike and go home. Then he mixes the ingredients and makes oatmeal. Then Noer eats and feels amazing!

In this example, each action could only happen after the previous has been completed. Noer can't put on his shoes and then take a shower. Or, he can't eat oatmeal before he has bought the ingredients.

As you can see, each action is executed in a **synchronous** manner. This is to say: in a logical order sequentially and only one action at a time.

This is also how JavaScript by default operates. Only one operation can happen at a time. If something else wants to start, it has to wait until the current action has finished.

### Asynchronous

Sometimes we want to do multiple things, without each action to be dependent on each other. Consider the following analogy:

> Wouter is feeling hungry, so he decides to go to a restaurant. He arrives there and gets into the line to order food. After ordering he takes a seat and, while he waits, reads a book. Occassionally he looks around and sees different things happening: new people enter the restaurant, some people get their food served and others are just talking. After a short while Wouter's food arrives and it's time to dig in!

In this example Wouter reads a book, but that doesn't affect his meal from being prepared. [TO BE CONTINUED]

Take a look at the following diagram:

![Sync vs. Async](../assets/javascript-sync-vs-async.png)

```js
function first() {
  console.log('this finishes first');
}
function second() {
  console.log('this finishes second');
}

first();
second();
```

In this example, only after `first()` has been executed will `second()` be executed. Only one thing happens at a time, and the next thing will ONLY happen after the previous thing has finished. This synchronous execution happens predictably and sequentially, without exception.

On the other hand we have [TO BE CONTINUED]

Executing each block of code (whether it's a line or a loop/function/etc.) after each other is called

This method of execution can have undesirable ramifications. Suppose a function is called to start a time consuming process. What if you want to stop the lengthy process? With synchronous execution, your program is “stuck,” waiting for the process to end, with no way out.

Asynchronous execution avoids this bottleneck. You are essentially saying, “I know this function call is going to take a great deal of time, but my program doesn’t want to wait around while it executes.”

## 2. Callbacks

Imagine the following situation:

> It's 15.00 and you're studying at home for an exam on the next day. Suddenly, your phone rings. You pick up and find it's your best friend! They ask if you'd like to hang out later. What do you do? On the one hand, you'd love to hang out have fun. On the other hand, you really should study some more. You don't know so you tell your friend that you're going to _call back_ later with your answer. You end the conversation and go back to studying. Maybe you take a break or have a snack as well. On the other line your friend hangs up the phone and continues along with their day: they go out grocery shopping, cleaning the house and cooking dinner. After finishing your studies you call your friend and makes plans to go out together.

In this example there is one process: life. In technical terms you could call it the program. Life contains many things, but in this example it only contains two things: you and your friend. Let's call them mini programs, or `functions`. The function called "You" does various things: studying,

This example illustrates the concept of **asynchronicity**: there are multiple processes happening simultaneously, without any single thing being dependent upon another thing. Your friend is not waiting by the phone until you have the answer. Or in technical terms: until the callback (which is you) has the return value (the asnwer to your friend's request to hang out).

As we've learned in the previous section, by default JavaScript works **synchronously**. In short this means that only one command gets executed (and finishes) until the next command gets executed.

Take this insight to heart: **Synchronicity is the process, callbacks are the implementation**. Let's clarify that:

- Saying that the proces is synchronous, is saying that there can only be an execution of commands in a single sequence. But this process can be changed to be asynchronous, which means that the process can handle

to initiate that process change from synchronous to asynchronous.

This is why callbacks are important: it allows us to introduce asynchronicity in the control flow of a program.

A concrete example for why this might be useful is when you want to

Study the following resources to learn more about the importance of callbacks:

- [Asynchronous JavaScript JavaScript](https://www.youtube.com/watch?v=YxWMxJONp7E)
- [Understanding JavaScript Callbacks](https://www.youtube.com/watch?v=Nau-iEEgEoM)
- [Callback Functions](https://www.youtube.com/watch?v=QRq2zMHlBz4)

## 3. Event Loop

If a webpage contains JavaScript, then the browser knows it has to execute these instructions at some point. But how does the browser know what to do first? This is where the `Event Loop` comes in.

In layman's terms, the `Event Loop` is

For further study, check out the following resources

- [What the heck is an event loop?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [JavaScript Event Loop](https://www.youtube.com/watch?v=XzXIMZMN9k4)

## Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
