# Quiz-game

**This is just a simple game**

**Features and contents**
>* The answer is validated in server 
> 
>* The poject is very simple and developed for learning
>
>* Gives a good idea on EJS and EXPRESS

**PREVIEW**

![Image of the result page](https://remintroy.github.io/quiz-game/info/thump.png)

**Take a look at : [Hosted Link](https://game.remin.tk/quiz-a/)**

**IMPLIMENTATION**

As usual at first you need to run node initializing command
```nodeJS
  npm install
```
*All the dependecy will be get downloaded*

**You can start The node server in multiple ways**
```bash
  npm start
```
*or use*
```bash
  node index.js
```
**CUSTOMISATON**
```javascript
  quiz: {
        Q1: {
            question: "What is the capital of Kerala ?",
            options: [
                "Aluva",
                "Delhi",
                "Bangaluru",
                "Palakkad",
                "Thiruvanavthapuram"
            ],
            answer: 4
        },
        Q2: {
            question: "Your Question Here",
            options: [
                "options",
                "options",
                "options",
                "options"
            ],
            answer: "Index of answer"
        },
      }
```
You can add Question's like in the above sample In "db.js"
* The qustion object must start from Q1 and keep the order like Q1, Q2, Q3... to work properly
* There is no limit in the number of qustion you can add

**If you are into customizing the code it is recommended to use nodemon to make coding easier**

You can install nodemon by using following command

```bash
  npm install nodemon
```

*And able to run the project by*
```bash
  nodemon index.js
```
*in some system you need to run it like*
```bash
  npx nodemon index.js
```

**Explore more and stay creative**
