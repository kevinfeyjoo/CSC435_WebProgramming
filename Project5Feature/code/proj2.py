
# Local Feature Stencil Code
# CS 589 Computater Vision, American Uniersity, Bei Xiao
# Adapted from James Hayes's MATLAB starter code for Project.2

# % This script 
# % (1) Loads and resizes images
# % (2) Finds interest points in those images                 (you code this)
# % (3) Describes each interest point with a local feature    (you code this)
# % (4) Finds matching features                               (you code this)
# % (5) Visualizes the matches
# % (6) Evaluates the matches based on ground truth correspondences

# % There are numerous other image sets in the data sets folder uploaded. 
# % You can simply download images off the Internet, as well. However, the
# % evaluation function at the bottom of this script will only work for this
# % particular image pair (unless you add ground truth annotations for other
# % image pairs). It is suggested that you only work with these two images
# % until you are satisfied with your implementation and ready to test on
# % additional images. 

# A single scale pipeline works fine for these two
# images (and will give you full credit for this project), but you will
# need local features at multiple scales to handle harder cases.


# % You don't have to work with grayscale images. Matching with color
# % information might be helpful.

import cv2
import numpy as np
import scipy.io
from matplotlib import pyplot as plt
from get_interest_points import get_interest_points
from get_features import get_features
from match_features import match_features
from show_correspondence import show_correspondence 
from evaluate_correspondence import evaluate_correspondence


# read in the notre dame images
image1 = cv2.imread('../data/Notre Dame/921919841_a30df938f2_o.jpg')
image2 = cv2.imread('../data/Notre Dame/4191453057_c86028ce1f_o.jpg')
# convert to grayscale
image1 =  cv2.cvtColor(image1, cv2.COLOR_BGR2GRAY)
image2 =  cv2.cvtColor(image2, cv2.COLOR_BGR2GRAY)

scale_factor = 0.5; #make images smaller to speed up the algorithm

height1, width1 = image1.shape[:2]
height2, width2 = image2.shape[:2]
image1 =cv2.resize(image1,(width1/2, height1/2), interpolation = cv2.INTER_CUBIC)
image2 = cv2.resize(image2,(width2/2,height1/2), interpolation = cv2.INTER_CUBIC)

feature_width = 16; #width and height of each local feature, in pixels. 

# %% Find distinctive points in each image. Szeliski 4.1.1
# % !!! You will need to implement get_interest_points. !!!
[x1, y1] = get_interest_points(image1, feature_width)
[x2, y2] = get_interest_points(image2, feature_width)


# %% Create feature vectors at each interest point. Szeliski 4.1.2
# % !!! You will need to implement get_features. !!!
image1_features = get_features(image1, x1, y1, feature_width)
image2_features = get_features(image2, x2, y2, feature_width)


# %% Match features. Szeliski 4.1.3
# % !!! You will need to implement get_features. !!!
[matches, confidences] = match_features(image1_features, image2_features)

# % You might want to set 'num_pts_to_visualize' and 'num_pts_to_evaluate' to
# % some constant once you start detecting hundreds of interest points,
# % otherwise things might get too cluttered. You could also threshold based
# % on confidence.
num_pts_to_visualize = matches.shape[0]

show_correspondence(image1, image2, x1[matches[0:num_pts_to_visualize,0:1]],
	y1[matches[0:num_pts_to_visualize,0:1]],
	x2[matches[0:num_pts_to_visualize,1:2]],
	y2[matches[0:num_pts_to_visualize,1:2]])

num_pts_to_evaluate = matches.shape[0]

# you can also end your code by this:

#fig.savefig('vis.jpg')
#print 'Saving visualization to vis.jpg'

# # % All of the coordinates are being divided by scale_factor because of the
# # % imresize operation at the top of this script. This evaluation function
# # % will only work for the particular Notre Dame image pair specified in the
# # % starter code. You can simply comment out
# # % this function once you start testing on additional image pairs.

evaluate_correspondence(x1[matches[0:num_pts_to_evaluate,0:1]]/scale_factor,
                        y1[matches[0:num_pts_to_evaluate,0:1]]/scale_factor,
                        x2[matches[0:num_pts_to_evaluate,1:2]]/scale_factor,
                        y2[matches[0:num_pts_to_evaluate,1:2]]/scale_factor)









