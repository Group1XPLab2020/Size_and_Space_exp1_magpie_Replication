// In this file you can specify the trial data for your experiment


const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/stimulus_small.jpg",
            option1: 'left',
            option2: 'right',
            correct: 'left'
        },
        {
            question: "What's the weather like?",
            picture: "images/stimulus_large.jpg",
            option1: "left",
            option2: "right",
            correct: "right"
        }
    ]
};

const key_press_trials = [
    {
        picture: "images/stimulus_small.jpg",
        key1: 'q',
        key2: 'p',
        q: 'small',
        p: 'large',
        expected: 'small'
    },
    {
        picture: "images/stimulus_large.jpg",
        key1: 'q',
        key2: 'p',
        q: 'small',
        p: 'large',
        expected: 'large'
    }
];
