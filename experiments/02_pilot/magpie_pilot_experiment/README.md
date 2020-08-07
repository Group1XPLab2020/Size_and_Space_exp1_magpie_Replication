# Pilot Experiment

This repository contains the pilot implementation of our conceptual replication study from Wühr and Segeelke "Compatibility between Physical Stimulus Size and Left-right Responses: Small is Left and Large is Right"

Wühr, P., and Seegelke, C. 2018 Compatibility between Physical Stimulus Size and Left-right Responses: Small is Left and Large is Right. Journal of Cognition, 1(1): 17, pp. 1–11, DOI: https://doi.org/10.5334/joc.19

## Experiment

The experiment uses a within-subject design with one factor: stimulus-response (S-R) mapping. The factor has 2 levels: the compatible condition (small stimulus (square) = left hand response and large stimulus (square) = right hand response), and incompatible condition (small stimulus (square) = right hand response and large stimulus (square) = left hand response)

The experiment consists of two main experimental blocks and one intermediate (non-experimental/distraction) block. In each main experimental block participants view 10 training trials (2 stimuli x 5 repetitions) and 60 main trials (2 stimuli x 30 repetitions) of squares which can be either small or large. They have to decide via a keypress (forced binary choice) whether the squares are small or large.
In the intermediate block participants are shown either a circle or a triangle and have to classify the presented stimulus as “circle” or “triangle” by clicking on the respective button at the bottom of the screen. The intermediate task consists of 20 trials (2 stimuli × 10 repetitions).

## \_magpie

The experiment was built using [\_magpie](https://magpie-ea.github.io/magpie-site/index.html).

## Running the experiment

Clone repository, run `npm install` and open `index.html`.
