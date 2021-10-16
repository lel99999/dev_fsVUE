# dev_fsVUE
Vue.js 2.x development and prototyping

#### NPM equivalent mechaniszm like python requirements.txt ($pip freeze > requirements.txt, $pip install -r requirements.txt)
- similar to pip freeze > requirements.txt (however, does not save version numbers)
```
$ls "$(npm root -g)" > npm-requirements.txt
```
- To install globally from a text file, npm-requirements.txt
```
$sed 's/#.*//' npm-requirements.txt | xargs npm install -g
```
