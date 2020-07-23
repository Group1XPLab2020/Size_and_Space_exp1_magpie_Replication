// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
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

// NEW
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
})
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

const instructions_compatible = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_compatible',
  title: 'Instructions for the next part',
  text: `This part consists of several trials. In each trial you first have to fixate a fixation cross which is placed in the middle of the screen.
            After some time, the fixation cross will disappear and you are going to see a square instead, which is either small or large (see Fig.1). Your task then is to decide with a <b>key press</b> on your keyboard whether this square is either <b>small</b> or <b>large</b>.
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
});

const instructions_incompatible = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_incompatible',
  title: 'Instructions for the next part',
  text: `This part consists of several trials. In each trial you first have to fixate a fixation cross which is placed in the middle of the screen.
            After some time, the fixation cross will disappear and you are going to see a square instead, which is either small or large (see Fig.1). Your task then is to decide with a <b>key press</b> on your keyboard whether this square is either <b>small</b> or <b>large</b>.
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
});

// config for the following instructions views
const start_experimental_trial_config = {
  trials: 1,
  name: 'start_experimental_trials',
  title: 'Practice completed',
  text: `Great! You completed this part's practice trials. Let us start with the main part now, your task is the same as in the practice. The only difference is that you will not receive feedback on the correctness of your answer anymore.
            <br />
            <br />
            You can proceed now by clicking on the button below and <b>remember</b>, please try to respond as accurate and fast as possible.`,
  buttonText: 'start experimental trials'
}

// Show in between training and experimental trials
const start_experimental_trials_instructions1 = magpieViews.view_generator("instructions", start_experimental_trial_config);

const start_experimental_trials_instructions2 = magpieViews.view_generator("instructions", start_experimental_trial_config);

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
    handle_response_function: function(config, CT, magpie, answer_container_generator, startingTime) {

        $(".magpie-view").append(answer_container_generator(config, CT));
        
        $("#next").on("click", function() {
            magpie.findNextView();
        });
    }
});
// END NEW

// OLD
const instructions_compatible_old = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_compatible',
  title: 'General Instructions',
  text: `This experiment consists of 2 main blocks. Before each block you will have a short practice to get comfortable with the task.
            <br />
            <br />
            Every block has several trials, in each trial you first have to fixate a fixation cross which is placed in the middle of the screen.
            After some time you are going to see a square, your task now is to decide with a <b>key press</b> on your keyboard whether this square is either <b>big</b> or <b>small</b>.
            <br />
            <br />
            Please use the following keys for your decision:
            <br />
            Press <b>q</b> when you see a <b>small</b> square and
            <br />
            press <b>p</b> when you see a <b>big</b> square.
            <br />
            <br />
            Please try to respond as accurate and as fast as possible. We will now start to practice that.`,
  buttonText: 'go to practice'
});

// OLD
const instructions_incompatible_old = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_incompatible',
  title: 'General Instructions',
  text: `This experiment consists of 2 main blocks. Before each block you will have a short practice to get comfortable with the task.
            <br />
            <br />
            Every block has several trials, in each trial you first have to fixate a fixation cross which is placed in the middle of the screen.
            After some time you are going to see a square, your task now is to decide with a <b>key press</b> on your keyboard whether this square is either <b>big</b> or <b>small</b>.
            <br />
            <br />
            Please use the following keys for your decision:
            <br />
            Press <b>p</b> when you see a <b>small</b> square and
            <br />
            press <b>q</b> when you see a <b>big</b> square.
            <br />
            <br />
            Please try to respond as accurate and as fast as possible. We will now start to practice that.`,
  buttonText: 'go to practice'
});

// Show in between training and experimental trials
const start_experimental_trials1_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'start_experimental_trials1',
  title: 'Experimental block 1',
  text: `Great! Let us start with the main part now, you are ready for the first block of the experiment.
            <br />
            <br />
            Use the same keys as in the practice part before and <b>remember</b>, please try to respond as accurate and fast as possible.`,
  buttonText: 'start experimental trials'
});

const start_experimental_trials2_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'start_experimental_trials1',
  title: 'Experimental block 2',
  text: `Great! Now you are ready for the second block of our experiment.
            <br />
            <br />
            Use the same keys as in the practice trial before and <b>remember</b>, please try to respond as accurate and fast as possible.`,
  buttonText: 'start experimental trials'
});

const switch_mappings_to_incompatible_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'switch_mappings_to_incompatible_instructions',
  title: 'Switch Mapping',
  text: `The first half of the experiment is now completed.
            <br />
            <br />
            We will now swap the keys: You will now use
            <br />
            <b>q</b> when you see a <b>large</b> square and
            <br />
            <b>p</b> when you see a <b>small</b> square.
            <br />
            <br />
            You will again first get 10 practice trials to get used to the new setting.`,
  buttonText: 'start practice trials'
});


const switch_mappings_to_compatible_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'switch_mappings_to_compatible_instructions',
  title: 'Switch Mapping',
  text: `The first half of the experiment is now completed.
            <br />
            <br />
            We will now swap the keys: You will now use
            <br />
            <b>q</b> when you see a <b>small</b> square and
            <br />
            <b>p</b> when you see a <b>large</b> square.
            <br />
            <br />
            You will again first get 10 practice trials to get used to the new setting.`,
  buttonText: 'start practice trials'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'
  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

const handedness_post_test = custom_views.handedness_post_test({
  trials: 1,
  name: 'handedness_post_test',
  title: 'Handedness information',
  text: 'Please answer which hand is your dominant one (usually the hand which you write with).'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/
d
    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


const training_trials_compatible_OLD = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: 10,
  // name should be identical to the variable name
  name: 'training_trials_compatible',
  data: _.shuffle(compatible_trials),
  // you can add custom functions at different stages through a view's life cycle
  hook: {
      after_response_enabled: check_response, // currently does not work
      after_stim_shown: time_limit // also does not work
  },
  fix_duration: 1000
});

const training_trials_incompatible_OLD = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: 10,
  // name should be identical to the variable name
  name: 'training_trials_incompatible',
  data: _.shuffle(incompatible_trials),
  // you can add custom functions at different stages through a view's life cycle
  hook: {
      after_response_enabled: check_response, // currently does not work
      after_stim_shown: time_limit // also does not work
  },
  fix_duration: 1000
});

const experimental_trials_compatible_OLD = magpieViews.view_generator("key_press", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: compatible_trials.length,
    // name should be identical to the variable name
    name: 'experimental_trials_compatible',
    data: _.shuffle(compatible_trials),
    // you can add custom functions at different stages through a view's life cycle
    hook: {
      after_stim_shown: time_limit // does not work
    },
    fix_duration: 1000
  });

const experimental_trials_incompatible_OLD = magpieViews.view_generator("key_press", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: incompatible_trials.length,
    // name should be identical to the variable name
    name: 'experimental_trials_incompatible',
    data: _.shuffle(incompatible_trials),
    // you can add custom functions at different stages through a view's life cycle
    hook: {
      after_stim_shown: time_limit // does not work
    },
    fix_duration: 1000
  });

// NEW
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

const distractor_task = magpieViews.view_generator("forced_choice", {
    trials: 10,
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
// END NEW

// assigning experimental trial order
if(first_mapping==='compatible') {
    instructions1 = instructions_compatible
    training_trials1 = training_trials_compatible
    experimental_trials1 = experimental_trials_compatible
    //switch_mappings_instructions = switch_mappings_to_incompatible_instructions
    instructions2 = instructions_incompatible
    training_trials2 = training_trials_incompatible
    experimental_trials2 = experimental_trials_incompatible
} else {
    instructions1 = instructions_incompatible
    training_trials1 = training_trials_incompatible
    experimental_trials1 = experimental_trials_incompatible
    //switch_mappings_instructions = switch_mappings_to_compatible_instructions
    instructions2 = instructions_compatible
    training_trials2 = training_trials_compatible
    experimental_trials2 = experimental_trials_compatible
}


// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
