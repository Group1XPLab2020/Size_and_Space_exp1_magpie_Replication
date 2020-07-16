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
  text: `TODO This is a sample introduction view.
            <br />
            <br />
            The introduction view welcomes the participant and gives general information
            about the experiment
            <br />
            <br />
            Debug info: <strong>${first_mapping}</strong> first group.`,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `TODO This is a sample instructions view.
            <br />
            <br />
            Tell your participants what they are to do here.`,
  buttonText: 'go to trials'
});

// Show in between training and experimental trials
const start_experimental_trials1_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'start_experimental_trials1',
  title: 'Experimental trials 1',
  text: `We will now start the first block of experimental trials.
            <br />
            <br />
            Please try to respond accurately and quickly.`,
  buttonText: 'start experimental trials'
});

const start_experimental_trials2_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'start_experimental_trials1',
  title: 'Experimental trials 2',
  text: `We will now start the second block of experimental trials.
            <br />
            <br />
            Please again try to respond accurately and quickly.`,
  buttonText: 'start experimental trials'
});

const switch_mappings_to_incompatible_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'switch_mappings_to_incompatible_instructions',
  title: 'Switch Mapping',
  text: `The first half of the experiment is now completed.
            <br />
            <br />
            We will now swap the keys: You will now use <b>q</b> for <b>large</b> stimuli and <b>p</b> for <b>small</b> stimuli.
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
            We will now swap the keys: You will now use <b>q</b> for <b>small</b> stimuli and <b>p</b> for <b>large</b> stimuli.
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


const training_trials_compatible = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: 10,
  // name should be identical to the variable name
  name: 'training_trials_compatible',
  data: _.shuffle(compatible_trails),
  // you can add custom functions at different stages through a view's life cycle
  hook: {
      after_response_enabled: check_response, // currently does not work
      after_stim_shown: time_limit // also does not work
  },
  fix_duration: 1000
});

const training_trials_incompatible = magpieViews.view_generator("key_press", {
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

const experimental_trials_compatible = magpieViews.view_generator("key_press", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: compatible_trails.length,
    // name should be identical to the variable name
    name: 'experimental_trials_compatible',
    data: _.shuffle(compatible_trails),
    // you can add custom functions at different stages through a view's life cycle
    hook: {
      after_stim_shown: time_limit // does not work
    },
    fix_duration: 1000
  });

const experimental_trials_incompatible = magpieViews.view_generator("key_press", {
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

// TESTING
const test_view = custom_views.keypress_rotation_main({
    trials: 5,
    // trials: 8,
    name: 'test_view',
    trial_type: 'experimental_trials_compatible',
    fix_duration: 1000,
    //pause: 2000,
    data: _.shuffle(compatible_trails),
    key1: 'q',
    key2: 'p',
    q: 'large',
    p: 'small'
});

// assigning experimental trail order
if(first_mapping==='compatible') {
    training_trials1 = training_trials_compatible
    experimental_trials1 = experimental_trials_compatible
    switch_mappings_instructions = switch_mappings_to_incompatible_instructions
    training_trials2 = training_trials_incompatible
    experimental_trials2 = experimental_trials_incompatible
} else {
    training_trials1 = training_trials_incompatible
    experimental_trials1 = experimental_trials_incompatible
    switch_mappings_instructions = switch_mappings_to_compatible_instructions
    training_trials2 = training_trials_compatible
    experimental_trials2 = experimental_trials_compatible
}


// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
