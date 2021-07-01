from os import listdir
from os.path import join
import json
from PIL import Image

files = list(listdir("./photos/"))
previous_data = json.load(open('meta.json', 'r'))
previous_data = {line['original']: line for line in previous_data}
data = []
for f in files:
  im = Image.open('./thumbnails/' + f)
  width, height = im.size
  original_path = 'assets/imgs/photos/' + f
  if original_path in previous_data:
    data.append(previous_data[original_path])
  else:
    data.append({'original': original_path, 'thumbnail': 'assets/imgs/thumbnails/' + f, 'ratio': float(height)/width, 'caption': ""})

data.reverse()
json.dump(data, open('./meta.json', 'w'))
