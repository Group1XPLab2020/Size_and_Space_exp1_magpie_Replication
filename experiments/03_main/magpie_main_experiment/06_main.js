// In this file we initialize and configure our experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            intro,
            begin_information,
                    
            // 1st block:
            instructions1,
            training_trials1,
            start_experimental_trials_instructions1, 
            experimental_trials1,
            
            // distractor task:
            distractor_task_instructions,
            _.flatten(distractor_test),
            
            // 2nd block:
            instructions2,
            training_trials2,
            start_experimental_trials_instructions2,
            experimental_trials2,
            
            // post-questionnaires:
            handedness_post_test,
            optional_post_test,
            thanks
        ],
        // Specify deployement information
        deploy: {
            experimentID: "165",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            deployMethod: "debug", // "debug" or "directLink"
            contact_email: "aprochnow@uos.de",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Specify progress bars
        progress_bar: {
            in: [
                // list the view-names of the views for which we want a progress bar
                training_trials1.name,
                experimental_trials1.name,
                training_trials2.name,
                experimental_trials2.name
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
