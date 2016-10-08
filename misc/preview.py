import os
import numpy as np
import cv2

os.chdir(os.path.dirname(__file__))

im0 = cv2.imread('preview.png')
im1 = cv2.cvtColor(im0, cv2.COLOR_BGR2GRAY)

template = np.array([
    [  30,  30,  30,  30,  30,  30,  30,  30 ],
    [  30,  30,  30,  30,  30,  30,  30,  30 ],
    [  30, 100, 164, 146, 114, 209, 215, 178 ],
    [  30, 160, 246, 246, 246, 246, 246, 246 ],
    [  30, 155, 246, 246, 245, 190, 239, 246 ],
    [  30, 155, 246, 246, 173,  30, 166, 246 ],
    [  30, 155, 246, 244,  82,  30, 155, 246 ],
    [  30, 155, 246, 236,  62,  30, 155, 246 ]
], np.uint8)

res = cv2.matchTemplate(im1, template, cv2.TM_CCOEFF)

x1, y1 = np.array(cv2.minMaxLoc(res)[3]) + [ -1, -6 ]
x2, y2 = x1 + 1248, y1 + 826

im0 = im0[y1:y2, x1:x2]

cv2.imwrite('preview.png', im0)
