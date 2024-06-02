<p align="center">
  <img width="200px" src="assets/hackulator-logo.png" />
</p>

# Hackulator

Welcome to the most hilariously broken calculator on the internet.

Bugs... bugs everywhere!

## Getting started

1. Make sure your machine is set up according to the instructions with
   - [bash](https://tech-docs.corndel.com/bash/)
   - [vscode](https://tech-docs.corndel.com/vscode/)
   - [git](https://tech-docs.corndel.com/git/)
   - [node & npm](https://tech-docs.corndel.com/js/installation.html)

1. Clone the repository (i.e. download it), so you have a copy on your machine.

1. Once cloned, open a terminal in the project folder, and run

   ```bash
   npm install
   ```

   You should see some output in the terminal saying the packages have been
   audited. If you've got this far, great! You're on track.

> [!NOTE]
>
> If you see a message about "vulnerabilities", don't worry. We aren't deploying
> our code. This is something we'll talk about later.

## Running tests

To check if your solution for one of the exercises has worked, you can run the command

```bash
npm run test
```

in the terminal.

> [!TIP]
>
> There can be quite a lot of output in the terminal when you run tests.
> Scroll up to the top of the output to see a summary of the results, then
> scroll through the output to see more detail about why each test has failed.

> [!TIP]
>
> Run tests frequently! You should run tests every time you think you've solved
> something. You can run the command:
>
> ```bash
> clear
> ```
>
> in the terminal to clear it and test again to make reading easier.

## Deep dive

We'd recommend squashing the bugs in the following order:

1. [add.js](/src/add.js)

1. [subtract.js](/src/subtract.js)

1. [multiply.js](/src/multiply.js)

1. [divide.js](/src/divide.js)

1. [average.js](/src/average.js)

1. [power.js](/src/power.js)

1. [remainder.js](/src/remainder.js)

1. [maxOfThree.js](/src/maxOfThree.js)

1. [heron.js](/src/heron.js)

1. [gcd.js](/src/gcd.js)

## Extension

Are there any other functions you could add to the calculator?
