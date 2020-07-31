// Here, we define all custom functions and variables

/* Variables
*
*
*/

const num_training_trials = 10;
const num_experimental_trials = 60;
const num_distractor_trials = 20;

// determine which mapping to present first 
const first_mapping = _.sample(["compatible", "incompatible"]); 

// set initial key mappings for the compatible case first (unused currently)
var q_mapping = "small";
var p_mapping = "large";

// change key mappings if the incompatible case is first (unused currently)
if (first_mapping === "incompatible") {
    q_mapping = "large";
    p_mapping = "small";
}

// trial counter for the distractor task
var distractor_CT = 1 


/* Helper functions
*
*
*/

// function to swap the mapping (unused currently)
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