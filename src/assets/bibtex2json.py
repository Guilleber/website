import bibtexparser
import json

with open('biblio.bib') as bibtex_file:
    bib_database = bibtexparser.load(bibtex_file)

bib = bib_database.entries
for entry in bib:
    authors = entry['author'].split(' and ')
    authors[-1] = 'and ' + authors[-1]
    entry['author'] = ', '.join(authors)

print(bib)
json.dump(bib, open('./biblio.json', 'w'))
