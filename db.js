
/* 
   Here is the place where data for quiz is stored edit or add more questions here 
   All the answers are validated in server.
*/
export const games = {
    quiz: {
        Q1: {
            question: "Node.js is written for ?",
            options: [
                "Java Script",
                "C",
                "C++",
                "All of the above",
            ],
            answer: 0
        },
        Q2: {
            question: "Which of the below command will show all the modules installed locally ?",
            options: [
                "npm ls -g",
                "npm ls",
                "node ls -g",
                "node ls"
            ],
            answer: 1
        },
        Q3: {
            question: "What is the default scope in the Node.js application ?",
            options: [
                "Global",
                "Local",
                "Global function",
                "Local to object",
            ],
            answer: 1
        },
        Q4: {
            question: "Which of the below method is used to return the current working directory of the process ?",
            options: [
                "cwd()",
                "cmd()",
                "pwd()",
                "None of the above"
            ],
            answer: 0
        },
        Q5: {
            question: "Which of the below is the correct syntax for installing the Nodemon in the Node.js application ?",
            options: [
                "npm install -g nodemon",
                "node install nodemon",
                "node install -g nodemon",
                "node install -l nodemon",
                "None of the above"
            ],
            answer: 0
        },
        Q6: {
            question: "Which type of application does not prefer the backend as node.js ?",
            options: [
                "Single Page",
                "JSON APIs based",
                "CPU intensive",
                "Data-Intensive",
                "None of the above"
            ],
            answer: 2
        },
        Q7: {
            question: "Which of the below options is correct about package.json in the node.js application?",
            options: [
                "It is present in the root directory of any Node application.",
                "It is used to define the properties of a package",
                "It is used to update the dependencies of an application",
                "All of the above"
            ],
            answer: 3
        },
        Q8: {
            question: "NodeJS runs on ...",
            options: [
                "Server",
                "Client",
                "both client and server",
                "Browser",
                "All of the above"
            ],
            answer: 0
        },
        Q9: {
            question: "NodeJS support which of the following platform",
            options: [
                "Windows",
                "Mac",
                "Linux/Unix",
                "All of the above"
            ],
            answer: 3
        },
        Q10: {
            question: "To include the HTTP server in the node module, what function do we use?",
            options: [
                "get()",
                "require()",
                "createServer()",
                "None of the above"
            ],
            answer: 1
        }
    }

}
