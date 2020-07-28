// In this file we create our own custom view templates

// First we create a custom_views object
const custom_views = {};

// We can now add view templates to our custom_views object

// Custom view template for training trials based on the key_press view
custom_views.keypress_training = function(config) {
    const keypress_training_function = {
        name: config.name,
        title: magpieUtils.view.setter.title(config.title, ""),
        render: function(CT, magpie) {
            let startingTime;
            const key1 = config.key1;
            const key2 = config.key2;
            const value1 = config[key1];
            const value2 = config[key2];
            const viewTemplate = `<div class="magpie-view">
                    <h1 class='magpie-view-title'>${this.title}</h1>
                    <p class='magpie-response-keypress-header'><strong>${key1}</strong> = ${value1}, <strong>${key2}</strong> = ${value2}</p>
                    <p class='magpie-response-keypress-header' id='feedback'></p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'></div>
                    </div>
                </div>`;

            $("#main").html(viewTemplate);

            const handleKeyPress = function(e) {
                const keyPressed = String.fromCharCode(
                    e.which
                ).toLowerCase();

                if (keyPressed === key1 || keyPressed === key2) {
                    let correctness;
                    const RT = Date.now() - startingTime; // measure RT before anything else

                    if (
                        config.data[CT].expected ===
                            config[keyPressed]
                    ) {
                        correctness = 1;
                        // show feedback (for training trial only)
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('Correct!');

                    } else {
                        correctness = 0;
                        // show feedback (for training trial only)
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('Incorrect!');
                    }
                    
                    // create Response data entry, i.e. recode q=left, p=right
                    if (keyPressed === "q") {
                        response = "left"
                    } else if (keyPressed === "p") {
                        response = "right"
                    }
                    
                    // create Mapping entry
                    if (config.trial_type==="experimental_trials_compatible" || 
                        config.trial_type==="training_trials_compatible") {
                        mapping = "compatible"
                        
                    } else if (config.trial_type==="experimental_trials_incompatible" || 
                        config.trial_type==="training_trials_incompatible") {
                        mapping = "incompatible"       
                    }
                    
                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        key_pressed: keyPressed,
                        Response: response,
                        correctness: correctness,
                        RT: RT,
                        Mapping: mapping
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    trial_data[config.data[CT].key1] =
                        config.data[CT][key1];
                    trial_data[config.data[CT].key2] =
                        config.data[CT][key2];

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        if (config.data[CT].canvas.canvasSettings !== undefined) {
                            for (let prop in config.data[CT].canvas.canvasSettings) {
                                if (config.data[CT].canvas.canvasSettings.hasOwnProperty(prop)) {
                                    trial_data[prop] = config.data[CT].canvas.canvasSettings[prop];
                                }
                            }
                            delete trial_data.canvas.canvasSettings;
                        }
                        for (let prop in config.data[CT].canvas) {
                            if (config.data[CT].canvas.hasOwnProperty(prop)) {
                                trial_data[prop] = config.data[CT].canvas[prop];
                            }
                        }
                        delete trial_data.canvas;
                    }

                    magpie.trial_data.push(trial_data);
                    $("body").off("keydown", handleKeyPress);
                    setTimeout(magpie.findNextView, 1500); // delay to accomodate feedback
                }
            };

            const enableResponse = function() {
                // set starting time to be after the fixation period, i.e. once the response is enabled
                startingTime = Date.now();
                $("body").on("keydown", handleKeyPress);
            };

            // creates the DOM of the trial view
            magpieUtils.view.createTrialDOM(
                {
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "keyPress"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return keypress_training_function;
};





// Custom view template for main/experimental trials based on the key_press view
custom_views.keypress_experimental = function(config) {
    const keypress_experimental_function = {
        name: config.name,
        title: magpieUtils.view.setter.title(config.title, ""),
        render: function(CT, magpie) {
            let startingTime;
            const key1 = config.key1;
            const key2 = config.key2;
            const value1 = config[key1];
            const value2 = config[key2];
            const viewTemplate = `<div class="magpie-view">
                    <h1 class='magpie-view-title'>${this.title}</h1>
                    <p class='magpie-response-keypress-header'><strong>${key1}</strong> = ${value1}, <strong>${key2}</strong> = ${value2}</p>
                    <p class='magpie-response-keypress-header' id='feedback'></p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'></div>
                    </div>
                </div>`;
            
            $("#main").html(viewTemplate);

            const handleKeyPress = function(e) {
                const keyPressed = String.fromCharCode(
                    e.which
                ).toLowerCase();

                if (keyPressed === key1 || keyPressed === key2) {
                    let correctness;
                    const RT = Date.now() - startingTime; // measure RT before anything else

                    if (
                        config.data[CT].expected ===
                            config[keyPressed]
                    ) {
                        correctness = 1;

                    } else {
                        correctness = 0;
                    }
                    
                    if (RT>=2000) {
                        // show that response was too slow
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('Try to respond more quickly!');
                    } else {
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                    }
                    
                    // create Response data entry, i.e. recode q=left, p=right
                    if (keyPressed === "q") {
                        response = "left"
                    } else if (keyPressed === "p") {
                        response = "right"
                    }
                    
                    // create Mapping entry
                    if (config.trial_type==="experimental_trials_compatible" || 
                        config.trial_type==="training_trials_compatible") {
                        mapping = "compatible"
                        
                    } else if (config.trial_type==="experimental_trials_incompatible" || 
                        config.trial_type==="training_trials_incompatible") {
                        mapping = "incompatible"       
                    }
                    
                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        key_pressed: keyPressed,
                        Response: response,
                        correctness: correctness,
                        RT: RT,
                        Mapping: mapping
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    trial_data[config.data[CT].key1] =
                        config.data[CT][key1];
                    trial_data[config.data[CT].key2] =
                        config.data[CT][key2];

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        if (config.data[CT].canvas.canvasSettings !== undefined) {
                            for (let prop in config.data[CT].canvas.canvasSettings) {
                                if (config.data[CT].canvas.canvasSettings.hasOwnProperty(prop)) {
                                    trial_data[prop] = config.data[CT].canvas.canvasSettings[prop];
                                }
                            }
                            delete trial_data.canvas.canvasSettings;
                        }
                        for (let prop in config.data[CT].canvas) {
                            if (config.data[CT].canvas.hasOwnProperty(prop)) {
                                trial_data[prop] = config.data[CT].canvas[prop];
                            }
                        }
                        delete trial_data.canvas;
                    }

                    magpie.trial_data.push(trial_data);
                    $("body").off("keydown", handleKeyPress);
                    // delay transition to next trial to show feedback if necessary, 
                    // otherwise just show a blank screen
                    setTimeout(magpie.findNextView, 1500); // delay to accomodate feedback
                }
            };

            const enableResponse = function() {
                // set starting time to be after the fixation period, i.e. once the response is enabled
                startingTime = Date.now();
                $("body").on("keydown", handleKeyPress);
            };


            // creates the DOM of the trial view
            magpieUtils.view.createTrialDOM(
                {
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "keyPress"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return keypress_experimental_function;
};

// Handedness questionnaire:

// Custom post test view to ask participants for their handedness
custom_views.handedness_post_test = function(config) {
    // Define view elements:
    // stimulus container
    const post_test_stimulus_container = function(config, CT) {
        return `<div class='magpie-view magpie-post-test-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <section class="magpie-text-container">
                        <p class="magpie-view-text">${config.text}</p>
                    </section>
                </div>`;
    }
    
    // answer container
    post_test_answer_container = function(config, CT) {
        const quest = magpieUtils.view.fill_defaults_post_test(config);
        return `<form>
                    <p class='magpie-view-text'>
                        <label for="handedness">${"Handedness"}:</label>
                        <select id="handedness" name="handedness">
                            <option value="${"right-handed"}">${"right-handed"}</option>
                            <option value="${"left-handed"}">${"left-handed"}</option>
                            <option value="${"mixed-handedness"}">${"mixed-handedness"}</option>
                        </select>
                    </p>
                    <button id="next" class='magpie-view-button'>${config.button}</button>
            </form>`
    }
    
    // handle response function
    post_test_handle_response = function(config, CT, magpie, answer_container_generator, startingTime) {
        $(".magpie-view").append(answer_container_generator(config, CT));

        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            magpie.global_data.Handedness = $("#handedness").val();
            magpie.global_data.endTime = Date.now();
            magpie.global_data.timeSpent =
                (magpie.global_data.endTime -
                    magpie.global_data.startTime) /
                60000;

            // moves to the next view
            magpie.findNextView();
        });
    }
    
    // Create post test instance using custom view elements
    const post_test_instance = magpieViews.view_generator(
        'post_test',
        // config information
        config,
        // custom generator functions
        {
            stimulus_container_generator: post_test_stimulus_container,
            answer_container_generator: post_test_answer_container,
            handle_response_function: post_test_handle_response
        }
    );
    
    return post_test_instance;
}


// optional post test questionnaire
custom_views.optional_post_test = function(config) {
    
    // create and return the generated view using the passed config object
    const optional_post_test_instance = magpieViews.view_generator('post_test', config, {
        
        // Define custom view elements:
        answer_container_generator: function(config, CT) {
            const quest = magpieUtils.view.fill_defaults_post_test(config);
            return `<form>
                        <p class='magpie-view-text'>
                            <label for="age">${quest.age.title}:</label>
                            <input type="number" name="age" min="18" max="110" id="age" />
                        </p>
                        <p class='magpie-view-text'>
                            <label for="gender">${quest.gender.title}:</label>
                            <select id="gender" name="gender">
                                <option></option>
                                <option value="${quest.gender.male}">${quest.gender.male}</option>
                                <option value="${quest.gender.female}">${quest.gender.female}</option>
                                <option value="${quest.gender.other}">${quest.gender.other}</option>
                            </select>
                        </p>
                        <p class='magpie-view-text'>
                            <label for="languages" name="languages">${quest.langs.title}:<br /><span>${quest.langs.text}</</span></label>
                            <input type="text" id="languages"/>
                        </p>
                        <p class='magpie-view-text'>
                            <label for="technical_issues">${"Did you have any technical issues during the experiment?"}:</label>
                            <select id="technical_issues" name="technical_issues">
                                <option></option>
                                <option value="${"No"}">${"No"}</option>
                                <option value="${"Yes"}">${"Yes"}</option>
                            </select>
                        </p>
                        <p class="magpie-view-text">
                            <label for="comments">${quest.comments.title}:<br />
                            <span>${"(If you had any technical difficulties, please also specify them here.)"}</</span></label>
                            <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
                        </p>
                        <button id="next" class='magpie-view-button'>${config.button}</button>
                </form>`
        },
        handle_response_function: function(config, CT, magpie, answer_container_generator, startingTime) {
            $(".magpie-view").append(answer_container_generator(config, CT));

            $("#next").on("click", function(e) {
                // prevents the form from submitting
                e.preventDefault();

                // records the post test info
                magpie.global_data.technical_issues = $("#technical_issues").val();
                magpie.global_data.age = $("#age").val();
                magpie.global_data.gender = $("#gender").val();
                magpie.global_data.languages = $("#languages").val();
                magpie.global_data.comments = $("#comments")
                .val()
                .trim();
                magpie.global_data.endTime = Date.now();
                magpie.global_data.timeSpent =
                    (magpie.global_data.endTime -
                        magpie.global_data.startTime) /
                    60000;

                // moves to the next view
                magpie.findNextView();
            });
        }
    })
    
    return optional_post_test_instance;
}

custom_views.distractor_task = function(config) {
    
    // generate forced choice template view
    const forced_choice_instance = magpieViews.view_generator('forced_choice', config, {
               
        // custom handle response element
        handle_response_function: function(config, CT, magpie, answer_container_generator, startingTime) {
            $(".magpie-view").append(answer_container_generator(config, CT));
            // set starting time to after the fixation duration is over
            startingTime = Date.now()

            $("input[name=answer]").on("change", function() {
                const RT = Date.now() - startingTime;
                const response = $("input[name=answer]:checked").val();

                // check for correctness
                if (config.data[CT].expected === response) {
                    correctness = 1;
                } else {
                    correctness = 0;
                }

                let trial_data = {
                    trial_type: config.trial_type,
                    trial_number: CT + 1,
                    Response: response,
                    correctness: correctness,
                    RT: RT
                };

                trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                magpie.trial_data.push(trial_data);
                magpie.findNextView();
            });
        }
    })
    
    return forced_choice_instance;
};


custom_views.distractor_start_button = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        render: function (CT, magpie) {
            // add start button to main 
            $("main").html(`<div class='magpie-view'>
                <button id="first" class='magpie-view-button' style='margin-top: 50%'>start</button>
                </div>`);

            // This function will handle the response
            const handle_click = function(e) {
                // Now, we will continue with the next view
                magpie.findNextView();
            };

            // We will add the handle_click functions to both buttons
            $('#first').on("click", handle_click);
        }
    };
    return view;
};