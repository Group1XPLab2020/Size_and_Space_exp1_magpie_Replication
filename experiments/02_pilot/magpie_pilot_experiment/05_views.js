// In this file we instantiate our views
// We here first instantiate wrapping views, then the trial views

// Wrapping views:

// Welcome participants to the experiment
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Welcome to our experiment and thank you for participating!
            <br />
            <br />
            Please click the button below to get started.
            <br />
            <br />
            Debug info: <strong>${first_mapping}</strong> first group.`,
  buttonText: 'begin the experiment'
});

// Give participants a general overview of the experiment
const begin_information = magpieViews.view_generator("begin", {
  trials: 1,
  name: 'begin_information',
  title: 'General Information',
  text: `This experiment comprises several parts, each consisting of several trials of similar structure. Before the start of each new part, you will be shown written instructions about the structure of trials in that part and about your precise task.
            <br />
            <br />
            We highly appreciate if you try to complete the whole experiment, i.e. seriously engage with it until you are told that it is completed(it is not really difficult, you can easily make it :) ). Only if you do so, we can make proper sense of the information obtained via the experiment.
            <br />
            <br />
            It will take you in total about 20 minutes to complete the experiment.`
});

// Does not work currently, use instructions_compatible/_incompatible instead
const block_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'block_instructions',
  title: 'Instructions for the next part',
  text: `This part consists of several trials. In each trial you first have to fixate a fixation cross which is placed in the middle of the screen.
            After some time, the fixation cross will disappear and you are going to see a square instead, which is either small or large (see Fig.1). Your task then is to decide with a <b>key press</b> on your keyboard whether this square is either <b>small</b> or <b>large</b>.
            <br />
            <br />
            Please use the following keys for your decision:
            <br />
            Press <b>q</b> when you see a <b>${q_mapping}</b> square and
            <br />
            press <b>p</b> when you see a <b>${p_mapping}</b> square.
            <br />
            <br />
            Following these instructions, you will firstly have to complete some practice trials to become familiar with this part's task. In these practice trials, you will additionally receive short feedback messages in each trial, telling you whether your answer was correct.
            <br />
            <br />
            Please try to respond as accurate and as fast as possible. By clicking on the button below, you can proceed to the practice trials.`,
  buttonText: 'go to practice'
});

const instructions_stimulus_container = function(config, CT) {
        return `<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <section class="magpie-text-container">
                        <p class="magpie-view-text">${config.text}</p>
                        <br />
                        <img class="custom_center" src="images/both_stimuli_compared.jpg" alt="circle image">
                    </section>
                    
                </div>`;
    }

// Instructions before a block of compatible training+experimental trials
const instructions_compatible = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_compatible',
  title: 'Instructions for the next part',
  text: `This part consists of several trials. In each trial you first have to fixate a fixation cross which is placed in the middle of the screen.
            After some time, the fixation cross will disappear and you are going to see a square instead, which is either small or large (see Figure below). Your task then is to decide with a <b>key press</b> on your keyboard whether this square is either <b>small</b> (a) or <b>large</b> (b).
            <br />
            <br />
            Please use the following keys for your decision:
            <br />
            Press <b>q</b> when you see a <b>small</b> square and
            <br />
            press <b>p</b> when you see a <b>large</b> square.
            <br />
            <br />
            Following these instructions, you will firstly have to complete some practice trials to become familiar with this part's task. In these practice trials, you will additionally receive short feedback messages in each trial, telling you whether your answer was correct.
            <br />
            <br />
            Please try to respond as accurate and as fast as possible. By clicking on the button below, you can proceed to the practice trials.`,
  buttonText: 'go to practice'
},
{
    stimulus_container_generator: instructions_stimulus_container
});

// Instructions before a block of incompatible training+experimental trials
const instructions_incompatible = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_incompatible',
  title: 'Instructions for the next part',
  text: `This part consists of several trials. In each trial you first have to fixate a fixation cross which is placed in the middle of the screen.
            After some time, the fixation cross will disappear and you are going to see a square instead, which is either small or large (see Figure below). Your task then is to decide with a <b>key press</b> on your keyboard whether this square is either <b>small</b> (a) or <b>large</b> (b).
            <br />
            <br />
            Please use the following keys for your decision:
            <br />
            Press <b>p</b> when you see a <b>small</b> square and
            <br />
            press <b>q</b> when you see a <b>large</b> square.
            <br />
            <br />
            Following these instructions, you will firstly have to complete some practice trials to become familiar with this part's task. In these practice trials, you will additionally receive short feedback messages in each trial, telling you whether your answer was correct.
            <br />
            <br />
            Please try to respond as accurate and as fast as possible. By clicking on the button below, you can proceed to the practice trials.`,
  buttonText: 'go to practice'
},
{
    stimulus_container_generator: instructions_stimulus_container
});

// config for the following instructions views
const start_experimental_trial_config = {
  trials: 1,
  name: 'start_experimental_trials_instructions',
  title: 'Practice completed',
  text: `Great! You completed this part's practice trials. Let us start with the main part now, your task is the same as in the practice. The only difference is that you will not receive feedback on the correctness of your answer anymore.
            <br />
            <br />
            You can proceed now by clicking on the button below and <b>remember</b>, please try to respond as accurate and fast as possible.`,
  buttonText: 'start experimental trials'
}

// Show in between training and experimental trials
const start_experimental_trials_instructions1 = magpieViews.view_generator("instructions", start_experimental_trial_config);

// Showing the same view twice caused an error, so we needed to instantiate two seperate, identical views
const start_experimental_trials_instructions2 = magpieViews.view_generator("instructions", start_experimental_trial_config);

// Instructions for the distractor task
const distractor_task_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'distractor_task_instructions',
  title: 'New Task',
  text: `This part also consists of several trials. In each trial you first have to focus your gaze towards a fixation cross which is placed in the middle of the screen.
            After some time, the fixation cross will disappear and you are going to see either a circle or a triangle instead. Your task is then to decide whether you see a <b>circle</b> or a <b>triangle</b> by <b>clicking</b> on the respective buttons at the bottom of the screen.
            <br />
            <br />
            There will be no practice trials for this part, just try to answer as fast and accurate as possible. You can start this part by clicking on the button below.`,
  buttonText: 'start experimental trials'
},
{
    // Standard handle response function currently, changes could still be made here to incorporate the 
    // swap_mappings function
    handle_response_function: function(config, CT, magpie, answer_container_generator, startingTime) {

        $(".magpie-view").append(answer_container_generator(config, CT));
        
        $("#next").on("click", function() {
            magpie.findNextView();
        });
    }
});

// In the post test questionnaire we ask additional, optional questions not directly relevant for analysis
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'
});

const optional_post_test = custom_views.optional_post_test({
   trials: 1,
    name: 'opt_post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'
});

// Asks participants for their handedness (important for exploratory hypotheses)
const handedness_post_test = custom_views.handedness_post_test({
  trials: 1,
  name: 'handedness_post_test',
  title: 'Handedness information',
  text: 'Please answer which hand is your dominant one (usually the hand which you write with).'
});

// Thank the particpants and submit the data.
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});


// Trial views:


// Experimental trials with a compatible mapping
const experimental_trials_compatible = custom_views.keypress_experimental({
    trials: 2,
    name: 'experimental_trials_compatible',
    trial_type: 'experimental_trials_compatible',
    fix_duration: 1000,
    data: _.shuffle(compatible_trials),
    key1: 'q',
    key2: 'p',
    q: 'small',
    p: 'large'
});

// Experimental trials with an incompatible mapping
const experimental_trials_incompatible = custom_views.keypress_experimental({
    trials: 2,
    name: 'experimental_trials_incompatible',
    trial_type: 'experimental_trials_incompatible',
    fix_duration: 1000,
    data: _.shuffle(incompatible_trials),
    key1: 'q',
    key2: 'p',
    q: 'large',
    p: 'small'
});

// Training trials with a compatible mapping
const training_trials_compatible = custom_views.keypress_training({
    trials: 2,
    name: 'test_view_practice',
    trial_type: 'training_trials_compatible',
    fix_duration: 1000,
    data: _.shuffle(compatible_trials),
    key1: "q",
    key2: "p",
    q: 'small',
    p: 'large'
});

// Training trials with an incompatible mapping
const training_trials_incompatible = custom_views.keypress_training({
    trials: 2,
    name: 'training_trials_incompatible',
    trial_type: 'training_trials_incompatible',
    fix_duration: 1000,
    data: _.shuffle(incompatible_trials),
    key1: "q",
    key2: "p",
    q: 'large',
    p: 'small'
});

// The distractor task, showing participants either a circle or a triangle
// and have them respond by mouse click on the corresponding button
const distractor_task = magpieViews.view_generator("forced_choice", {
    trials: 2,
    name: "distractor_trials",
    trial_type: "test",
    data: _.shuffle(distractor_trials),
    fix_duration: 1000
},
{
    stimulus_container_generator: stimulus_container_generators.basic_stimulus,
    answer_container_generator: answer_container_generators.button_choice,
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

// assigning experimental trial order based on randomly determined initial mapping
if(first_mapping==='compatible') {
    // 1st block
    instructions1 = instructions_compatible
    training_trials1 = training_trials_compatible
    experimental_trials1 = experimental_trials_compatible
    
    // 2nd block
    instructions2 = instructions_incompatible
    training_trials2 = training_trials_incompatible
    experimental_trials2 = experimental_trials_incompatible
} else {
    // 1st block
    instructions1 = instructions_incompatible
    training_trials1 = training_trials_incompatible
    experimental_trials1 = experimental_trials_incompatible
    
    // 2nd block
    instructions2 = instructions_compatible
    training_trials2 = training_trials_compatible
    experimental_trials2 = experimental_trials_compatible
}