// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
// determine which mapping to present first 
const first_mapping = _.sample(["compatible", "incompatible"]); 
// set initial key mappings for the compatible case first
var q_mapping = "small";
var p_mapping = "large";

// change key mappings if the incompatible case is first
if (first_mapping === "incompatible") {
    q_mapping = "large";
    p_mapping = "small";
}
// Declare your variables here


/* Helper functions
*
*
*/

const swap_mapping = function() {
    if (first_mapping === "compatible") {
        // switch to incompatible mapping
        q_mapping = "large";
        p_mapping = "small";
    } else {
        // switch to compatible mapping
        q_mapping = "small";
        p_mapping = "large";
    }
    console.log("q = ", q_mapping)
}


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks  
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 2 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 2000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    //console.log(data)
    $('input[name=answer]').on('change', function(e) { // this line does not work for key_press views ??
        if (e.target.value === data.expected) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.expected);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
