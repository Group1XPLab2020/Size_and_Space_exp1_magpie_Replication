# Magnitude perception: Small is Left and Large is Right.?

## Overview
1. Description (of the study)
2. Running the experiment (how to try out the experiment online or offline)
3. Navigating through this repository's folder structure (where to find what you are looking for)


## Description
This repository contains all our R-analyses scripts, additional code, design information, data, experiment information and implementation files, notes and writing files involved in or needed for our conceptual replication study of experiment 1 by [Wühr and Seegelke (2018)](https://doi.org/10.5334/joc.19): "Compatibility between Physical Stimulus Size and Left-right Responses: Small is Left and Large is Right" / Journal of Cognition

**Abstract (modified, short version):**
We investigate stimulus-size-horizontal-response mapping compatibility effects by means of an online experiment. For example, Wühr and Segeelke (2018) found that participants in their experiment 1 were faster to respond to a large stimulus object with a key that is on the right of the keyboard (e.g. "backspace", pressed with the right hand), than with a key that is on the left of the keyboard (e.g. "tabulator", pressed with the left hand). For small stimulus objects, they found that reaction times were numerically faster for left-hand responses than for right-hand responses. Wühr and Seegelke (2018) consider their study’s results as in line with “A theory of magnitude” (ATOM), which was proposed by [Walsh (2013)](https://doi.org/10.1016/j.tics.2003.09.002), and as an extensions of the so called SNARC-effect for physical-size instead of numerical magnitudes. ATOM basically claims that there exist certain relations between the cortical representations  of “time, space and quantity”, whereas the SNARC-effect is thought to demonstrate shared mental representations of magnitude in the form of number and horizontal locations in space (left vs. right hemifields). We present findings from a sample of twice as many right-handed participants as in the original study by Wühr and Seegelke (2018), which deviate from the results of their study, in that right-handed participants in the present study (N=57) responded more slowly to a small stimulus object with their left hand than to a large stimulus object. Additionally, when presented with a large stimulus object, right-handed participants responded slower with the right hand than with the left hand. Remarkably, our results indicate a compatibility effect as described by @Wuehr_Segeelke for left-handed participants (N=11) rather than for right-handed participants. The results of our study generally do not contradict with ATOM in that for left- and right-handed people right-hand responses are faster to stimuli of larger size, but we put into question the extent of the compatibility effect regarding proposals of previous studies, since our findings seem to be partly contradictory with previous findings.


## Running the experiment

1. **Offline**
  - download or clone this github repository: https://github.com/Group1XPLab2020/Size_and_Space_exp1_magpie_Replication, e.g. type `git clone https://github.com/Group1XPLab2020/Size_and_Space_exp1_magpie_Replication`
  - go into folder `cd Size_and_Space_exp1_magpie_Replication`
  - run `npm install` 
  - open `index.html`

2. **Online**
  - Try out the experiment [here](https://main-experiment-group1-xplab2020.netlify.app/).


## Navigating through this Repository
We used R for all our analyses. Analysis files we used for analysing the data from the original experiment, our pilot experiment and our main experiment can be found in the respective subdirectories of the `analyses` folder as listed below. We also attempted an exemplary power analysis in the respectively named files (`analyses/02_pilot/power_analysis.Rmd`; `analyses/03_main/02_power_analysis-Rmd`) for determining the required sample size to find evidence for our _first_ hypothesis only (due to computational hardness and time constraints given complexity of the models we use to test our hypotheses).<br>
- **analyses**
  - 01_original
    - original_paper_analysis.Rmd
  - 02_pilot
    - pilot_analysis.Rmd
    - power_analysis.Rmd
  - 03_main
    - 01_data_analysis.Rmd
    - 02_power_analysis.Rmd
    - 03_optional_data_analysis.Rmd
    
All data we obtained and analysed from the original experiment by Wühr and Seegelke, as well as from our pilot and main experiment before (`01_raw_data`) and after (`02_clean_data`) preprocessing can be accessed in `*.csv` format in the `data` folder:
- **data**
  - 01_original
    - 01_raw_data.csv
    - 02_clean_data.csv
  - 02_pilot
    - 01_raw_data.csv
    - 02_clean_data.csv
  - 03_main
    - 01_raw_data.csv
    - 02_clean_data.csv
    
We used [\_magpie](https://github.com/magpie-ea) for implementing our experiment. The `experiments` folder contains all materials (`experiments/01_materials`) and code files (written in JavaScript) for the pilot(`experiments/02_pilot/magpie_pilot_experiment`) and main experiment's(`experiments/03_main/magpie_main_experiment`) implementation of the experiment as an online experiment.
- **experiments**
  - 01_materials
    - ...
  - 02_pilot/magpie_pilot_experiment
    - ...
  - 03_main/magpie_main_experiment
    - ...

The `notes` folder is just intended for group-intern communication of (general) information about the project.
- **notes**
  - StimulusMaterial_tutor_feedback.txt
  
The `writing` folder contains all documents describing our experiment/study: the experimental design paper (including a description and discussion of possible design alternatives), our preregistartion report and final paper (different formats in the respective subfolders, but of the same version).
- **writing**
  - 01_experimentalDesign
    - images
    - replication_design.docx
    - replication_design.pdf
  - 02_preregistration_report
    - preregistration_report.doc
    - preregistration_report.pdf
  - 03_termPaper
    - termPaper.rmd
    - termPaper.pdf
    - references.bib
    
## References

- Walsh, V. (2003). A theory of magnitude: Common cortical metrics of time, space and quantity. *Trends In Cognitive Sciences, 7*, 483–488. DOI: https://doi.org/10.1016/j.tics.2003.09.002 
- Wühr, P., and Seegelke, C. (2018). Compatibility between Physical Stimulus Size and Left-right Responses: Small is Left and Large is Right. *Journal of Cognition, 1(1)*: 17, pp. 1–11, DOI: https://doi.org/10.5334/joc.19

