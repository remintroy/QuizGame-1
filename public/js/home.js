/**
 * 
 *  this object holds all data and function nessory for the frnt end
 *  
*/
const app = {

    Qcount: 0, // qustion counter

    score: 0, // score counter

    total: 3, // total number of questions

    /**
     * @param {Nmuber} QNum
     * @param {Element} obj
     */
    check: function (num, obj) { // these methord checks id a selected option is valid or not


        // senting request to server with question and answer query
        fetch(`/api?q=Q${this.Qcount}&ans=${num}`, { method: 'POST' })

            .then(res => res.json()) // converts the response to json 

            .then(res => { // the response from server

                if (res.err == false) { // chck if any err is passed from server

                    this.total = res.total; // updating total question's

                    if (res.correct == true) { // checks is the answer is correct or not

                        this.score = this.score + 1; // adds score's to the app object

                        obj.classList.add("correct"); // adds class for sucess

                        next();// move to next question

                    } else {
                        // answer is wrong

                        obj.classList.add("wrong"); // adds class to li obj to display error

                        obj.parentElement.querySelector(`li.c${res.answer}`).classList.add("correct"); // adds class of sucess to correct answer

                        next(); // moves on to next question 

                    };

                    function next(){ // function to call next question 
                        
                        let timer = setTimeout(()=>{ // time out to user to able to see the answer is correct or not

                            app.get(); // after the time out callling the new question function

                        },500);

                    };

                };

            });

    },
    get: function () { // this function is used to get new question accoiding to the question number

        if (this.Qcount == this.total) {
            // this rins if the quston reach last question and no more question to ask 

            document.getElementById("question-cont").innerText = ""; // empts the whole question inner html to remove the left question 

            document.getElementById("ans-cont").innerHTML = `<b>Your Score is : ${this.score}</b>`; // in the answet ul adds the score 

        } else { 

            // runs if it is not passed ladt question 

            fetch(`/api?q=Q${++this.Qcount}`, { method: 'POST' }) // requesting to the server to get question by the queston name

                .then(res => res.json()) // converting the result to json'

                .then(res => { // handling the result containg queston and opctions

                    if (res.err == false) { // checks if any error is conformed by server

                        this.total = res.total; // sync the total question count

                        document.getElementById("num-count").innerHTML = this.Qcount; // updating current question count in title | in html

                        document.getElementById("total-num-count").innerHTML = this.total; //  updating totla number of questons  

                        document.getElementById("question-cont").innerText = res.question; // updating the question | in html;

                        let doc = document.getElementById("ans-cont"); // gettng the opction display ul | in html

                        doc.innerHTML = ""; // clears the inner value

                        /**
                         * @type {Array} option
                         */
                        var option = res.option; // declaring the options to a variable

                        option.forEach((element, index, array) => {

                            /**
                             * looping through each optin in the array got from the request
                             * 
                             * 1 > creating an li elementl
                             * 
                             * 2 > adding class attribute to the li element we created  value of the index number 
                             *     here c is added to avoid the problem of inserting numbrer to the attribute.
                             *     so expected output will be ' class="c2" ,
                             * 
                             * 3 > adding onclick attribute to the li elemnet we created in which value is to call the check funciton and 
                             *     has a parameter of therir on to find which one is clicked
                             * 
                             * 4 > inserting the option text to the li element we created
                             * 
                             * 5 > append the li to main ul;
                             */

                            let li = document.createElement('li'); // 1

                            li.setAttribute("class", `c${index}`); // 2 

                            li.setAttribute("onclick", `app.check(${index},this)`); // 3

                            li.innerHTML = element; // 4

                            doc.appendChild(li); // 5

                        });

                    };

                });

        }

    }


}

function init() { // runs after the page is loaded
    app.get();// calls for first question 
}
