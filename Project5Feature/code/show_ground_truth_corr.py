import cv2
import numpy as np
import scipy.io
from matplotlib import pyplot as plt
from show_correspondence import show_correspondence

# you can run this code independently when you uncommend the this section. 
image1 = cv2.imread('../data/Notre Dame/921919841_a30df938f2_o.jpg')
image2 = cv2.imread('../data/Notre Dame/4191453057_c86028ce1f_o.jpg')

mat = scipy.io.loadmat('../data/Notre Dame/921919841_a30df938f2_o_to_4191453057_c86028ce1f_o.mat')

# unpack the mat file

X1 = mat['x1']
X2 = mat['x2']
Y1 = mat['y1']
Y2 = mat['y2']
show_correspondence(image1, image2, X1, Y1, X2, Y2)