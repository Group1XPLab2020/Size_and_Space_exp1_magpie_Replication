// In this file we specify the trial data for your experiment
// compatible: small is left and large is right

// specify each of the four possible trials (varying stimulus size and mapping)
small_compatible_trial = {
        picture: "images/stimulus_small.jpg",
        key1: 'q',
        key2: 'p',
        q: 'small',
        p: 'large',
        expected: 'small'
}

large_compatible_trial = {
        picture: "images/stimulus_large.jpg",
        key1: 'q',
        key2: 'p',
        q: 'small',
        p: 'large',
        expected: 'large'
}

small_incompatible_trial = {
        picture: "images/stimulus_small.jpg",
        key1: 'q',
        key2: 'p',
        q: 'large',
        p: 'small',
        expected: 'small'
}

large_incompatible_trial = {
        picture: "images/stimulus_large.jpg",
        key1: 'q',
        key2: 'p',
        q: 'large',
        p: 'small',
        expected: 'large'
}

// create empty arrays with length 60. these are our trial blocks
let compatible_trials = new Array(60)
let incompatible_trials = new Array(60)

// fill arrays with 30 of each stimulus trial (30x small stimulus[0-29], 30x large stimulus[30-59])
for(let i=0; i<30; i++) {
    compatible_trials[i] =  small_compatible_trial
    compatible_trials[i+30] =  large_compatible_trial
    incompatible_trials[i] =  small_incompatible_trial
    incompatible_trials[i+30] =  large_incompatible_trial
}

// create data for the distractor task
circle_trial = {
    picture: "images/circle.jpg",
    option1: "circle",
    option2: "triangle",
    expected: "circle"
}

triangle_trial = {
    picture: "images/triangle.jpg",
    option1: "circle",
    option2: "triangle",
    expected: "triangle"
}

distractor_trials = new Array(10)

for(let i=0; i<5; i++) {
    distractor_trials[i] = circle_trial
    distractor_trials[i+5] =  triangle_trial
}

