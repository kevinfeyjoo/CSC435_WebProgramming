# % Local Feature Stencil Code
# CSC 589 Intro to computer vision. 
# Code adapated from MATLAB written by James Hayes from Brown University.

# % 'features1' and 'features2' are the n x feature dimensionality features
# %   from the two images.
# % If you want to include geometric verification in this stage, you can add
# % the x and y locations of the features as additional inputs.
# %
# % 'matches' is a k x 2 matrix, where k is the number of matches. The first
# %   column is an index in features 1, the second column is an index
# %   in features2. 
# % 'Confidences' is a k x 1 matrix with a real valued confidence for every
# %   match.
# % 'matches' and 'confidences' can empty, e.g. 0x2 and 0x1.

import cv2
import numpy as np

def match_features(features1, features2):

	# % This function does not need to be symmetric (e.g. it can produce
	# % different numbers of matches depending on the order of the arguments).

	# % To start with, simply implement the "ratio test", equation 4.18 in
	# % section 4.1.3 of Szeliski. For extra credit you can implement various
	# % forms of spatial verification of matches.

	# % Placeholder that you can delete. Random matches and confidences
	num_features1 = features1.shape[0]
	num_features2 = features2.shape[0]
	# this is annoying for Python, if you want the number to be integer, you must specify its data type
	matches = np.zeros((num_features1, 2),dtype='int32')

	matches[:,0] = np.random.randint(num_features1,size=num_features1)
	matches[:,1] = np.random.randint(num_features2,size=num_features2)
	confidences_org =  np.random.rand(num_features1,1)
    #print matches
	# % Sort the matches so that the most confident onces are at the top of the
	# % list. You should probably not delete this, so that the evaluation
	# % functions can be run on the top matches easily.
	confidences = np.sort(confidences_org, axis=0)
	ind = np.argsort(confidences_org, axis=0)
	ind_temp = np.reshape(ind,num_features1)
	matches[:,0] = matches[ind_temp,0]
	matches[:,1] = matches[ind_temp,1]
	return matches,confidences 


