from os import listdir
from os.path import join
import json

files = list(listdir("./photos/"))
data = []
for f in files:
  data.append({'original': 'assets/imgs/photos/' + f, 'thumbnail': 'assets/imgs/thumbnails/' + f})

json.dump(data, open('./meta.json', 'w'))
