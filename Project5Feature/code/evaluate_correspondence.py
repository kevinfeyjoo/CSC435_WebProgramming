# % Local Feature Stencil Code
# % CSC 589 Introduction to computer vision 
# % Adapted from James Hays

# % You do not need to modify anything in this function, although you can if
# % you want to.

import cv2
import numpy as np
import scipy.io
from matplotlib import pyplot as plt
import math


def evaluate_correspondence(x1_est, y1_est, x2_est, y2_est):
    # load ground truth correspondance file
    ground_truth_correspondence_file = '../data/Notre Dame/921919841_a30df938f2_o_to_4191453057_c86028ce1f_o.mat';
    mat = scipy.io.loadmat(ground_truth_correspondence_file)

    image1 = cv2.imread('../data/Notre Dame/921919841_a30df938f2_o.jpg')
    image2 = cv2.imread('../data/Notre Dame/4191453057_c86028ce1f_o.jpg')

    good_matches = np.zeros((len(x1_est),1)) #%indicator vector

    # %loads variables x1, y1, x2, y2
    # %   x1                       91x1                  728  double                         
    # %   x2                       91x1                  728  double                     
    # %   y1                       91x1                  728  double                      
    # %   y2                       91x1                  728  double 
    x1 = mat['x1']
    x2 = mat['x2']
    y1 = mat['y1']
    y2 = mat['y2']             

    fig = plt.figure()
    #set(h, 'Position', [100 100 800 600])
    plt.subplot(1,2,1)
    plt.imshow(image1)
    plt.axis('off')
    plt.subplot(1,2,2)
    plt.imshow(image2)
    plt.axis('off')

    for i in range(0,len(x1_est)):
        print "%.4f %.4f to %.4f  %.4f " % (x1_est[i], y1_est[i], x2_est[i], y2_est[i])    
        # %for each x1_est, find nearest ground truth point in x1
        x_dists = x1_est[i] - x1
        y_dists = y1_est[i] - y1
        #print x_dists.shape[0]
        #print y_dists.shape[0]
        x_dists = np.reshape(x_dists,x_dists.shape[0])
        y_dists = np.reshape(y_dists,y_dists.shape[0])

        dists_temp = np.sqrt(x_dists**2 + y_dists**2)

        dists = np.sort(dists_temp,axis=0)
        best_matches  = np.argsort(dists_temp)

        current_offset = np.array([x1_est[i] - x2_est[i],y1_est[i] - y2_est[i]])

        most_similar_offset = np.array([x1[best_matches[0]] - x2[best_matches[0]], y1[best_matches[0]] - y2[best_matches[0]]])
       
        # %match_dist = sqrt( (x2_est(i) - x2(best_matches(1)))^2 + (y2_est(i) - y2(best_matches(1)))^2);

        match_dist = np.sqrt(sum((current_offset - most_similar_offset)**2))
        print dists[0], match_dist

        # %A match is bad if there's no ground truth point within 150 pixels or
        # %if nearest ground truth correspondence offset isn't within 25 pixels
        # %of the estimated correspondence offset.
        #fprintf(' g.t. point %4.0f px. Match error %4.0f px.', dists(1), match_dist);
        print "g.t. point %.2f px. Match error %.2f px." % (dists[0],match_dist[0])

        if dists[0]>150 or match_dist[0]>25:
            good_matches[i] = 0
            edgeColor = np.array([1,0,0])
            print "incorrect\n"
        else:
            good_matches[i] = 1
            edgeColor = np.array([0,1,0])
            print "correct\n"
        
        # plotting 
        cur_color = np.random.rand(3,1)
        
        plt.subplot(1,2,1)
        plt.plot(x1_est[i],y1_est[i], marker='o', mec = edgeColor, mfc=cur_color, ms=6)

        plt.subplot(1,2,2);
        plt.plot(x2_est[i],y2_est[i], marker='o', mec = edgeColor, mfc=cur_color, ms=6)
    print "%d total good matches, %d total bad matches\n" % (sum(good_matches),len(x1_est) - sum(good_matches))
    print "Saving visualization to eval.jpg\n"

    fig.savefig('eval.jpg')

    return fig




