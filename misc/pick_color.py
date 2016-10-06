import os
import itertools
import numpy as np
import cv2

os.chdir(os.path.dirname(__file__))

DEBUG = False

def pick_color(filename):
    colors = []

    im0 = cv2.imread(filename)
    im0 = cv2.resize(im0, (960, 960))
    for y, x in itertools.product(range(8), range(8)):
        x1, x2 = [ x * 86 + 146, x * 86 + 210 ]
        y1, y2 = [ y * 86 + 146, y * 86 + 210 ]
        color = cv2.resize(np.array([ [
            cv2.resize(im0[y1+2:y2-2, x1+2:x1+14], (1, 1))[0, 0],
            cv2.resize(im0[y1+2:y2-2, x2-14:x2-2], (1, 1))[0, 0],
            cv2.resize(im0[y1+2:y1+14, x1+2:x2-2], (1, 1))[0, 0],
            cv2.resize(im0[y2-14:y2-2, x1+2:x2-2], (1, 1))[0, 0],
        ] ], np.uint8), (1, 1))[0, 0]

        colors.append("#" + format(sum(x << (i * 8) for i, x in enumerate(color)), '06x'))

        if DEBUG:
            im0[y1+16:y2-16, x1+16:x2-16] = color
            im0[:, x1] = [64, 255, 64]
            im0[:, x2] = [64, 255, 64]
            im0[y1, :] = [64, 255, 64]
            im0[y2, :] = [64, 255, 64]
    if DEBUG:
        cv2.imshow('preview', im0)
        cv2.waitKey(0)

    return colors

print(pick_color('001-063.jpg') + pick_color('064-127.jpg'))
