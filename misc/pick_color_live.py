import os
import itertools
import numpy as np
import cv2

os.chdir(os.path.dirname(__file__))

DEBUG = False

def pick_color(filename):
    colors = []

    im0 = cv2.imread(filename)
    for y, x in itertools.product(range(5), range(12)):
        x1, y1 = [ x * 34 + 16, y * 34 + 16 ]

        color = im0[y1, x1]
        colors.append("#" + format(sum(x << (i * 8) for i, x in enumerate(color)), '06x'))

        if DEBUG:
            cv2.circle(im0, (x1, y1), 12, (0, 0, 0), 1)
    if DEBUG:
        cv2.imshow('preview', im0)
        cv2.waitKey(0)

    return colors

print(pick_color('060-119.png'))
