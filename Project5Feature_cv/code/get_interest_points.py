import cv2
import numpy as np


# % Local Feature Stencil Code
# CSC 589 Intro to computer vision. 
# Code adapated from MATLAB written by James Hayes from Brown University
# % Returns a set of interest points for the input image

# % 'image' can be grayscale or color, your choice.
# % 'feature_width', in pixels, is the local feature width. It might be
# %   useful in this function in order to (a) suppress boundary interest
# %   points (where a feature wouldn't fit entirely in the image, anyway)
# %   or(b) scale the image filters being used. Or you can ignore it.

# % 'x' and 'y' are nx1 vectors of x and y coordinates of interest points.
# % 'confidence' is an nx1 vector indicating the strength of the interest
# %   point. You might use this later or not.
# % 'scale' and 'orientation' are nx1 vectors indicating the scale and
# %   orientation of each interest point. These are OPTIONAL. By default you
# %   do not need to make scale and orientation invariant local features.

def get_interest_points(image, feature_width): 
# % Implement the Harris corner detector (See Szeliski 4.1.1) to start with.
# % You can create additional interest point detector functions (e.g. MSER)
# % for extra credit.

# % If you're finding spurious interest point detections near the boundaries,
# % it is safe to simply suppress the gradients / corners near the edges of
# % the image.

# % The lecture slides and textbook are a bit vague on how to do the
# % non-maximum suppression once you've thresholded the cornerness score.
# % You are free to experiment. The Solem textbook provided some nice code for this. 

	# Placeholder that you can delete. 20 random points.  
	rows,cols = image.shape
	x = np.ceil(np.random.rand(20,1) * rows)
	y = np.ceil(np.random.rand(20,1) * cols)

	#confidence = np.random.rand(len(x),1)
	#scale = np.random.rand(len(x),1)
	#orientation = np.random.rand(len(x),1)

	return x, y # it is optional to return scale and orientation


