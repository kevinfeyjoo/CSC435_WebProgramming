import cv2
import numpy as np
import scipy.io
from matplotlib import pyplot as plt


def show_correspondence(image1, image2, X1, Y1, X2, Y2):
	fig = plt.figure()

	#mngr = plt.get_current_fig_manager()
	# to put it into the upper left corner for example:
	#mngr.window.setGeometry(50,100,640, 545)
	plt.subplot(1,2,1)
	plt.imshow(image1,cmap='gray')
	plt.subplot(1,2,2)
	plt.imshow(image2,cmap='gray')

	for i in range(0,len(X1)):
		cur_color = np.random.rand(3,1)
		#print X1[i]
		plt.subplot(1,2,1)
		plt.plot(X1[i],Y1[i], marker='o', ms=4, mec = 'k', mfc=cur_color,lw=2.0)
		# #cur_color = np.random.randint(255, size=3)
		plt.subplot(1,2,2);
		plt.plot(X2[i],Y2[i], marker='o', ms=4, mec = 'k', mfc=cur_color,lw=2.0)
	
	fig.savefig('vis.jpg')
	print 'Saving visualization to vis.jpg'
	
	return fig





