# dev_fsVUE
Vue.js v2.x/v3.x development and prototyping

#### NPM equivalent mechaniszm like python requirements.txt ($pip freeze > requirements.txt, $pip install -r requirements.txt)
- similar to pip freeze > requirements.txt (however, does not save version numbers)
```
$ls "$(npm root -g)" > npm-requirements.txt
```
- To install globally from a text file, npm-requirements.txt
```
$sed 's/#.*//' npm-requirements.txt | xargs npm install -g
```

##### Install VUE
- Make sure node, npm installed
  ```
  $node -v
  $npm -v
  ```
- Install vue, vue-cli  # --save (development & production) --save-dev (development only)
  ```
  $npm i -g @vue/cli
  ```
- Create project with VUE
  ```
  $vue create <project_name>
  ```
  ![https://github.com/lel99999/dev_fsVUE/blob/main/vue_create_project-01.png](https://github.com/lel99999/dev_fsVUE/blob/main/vue_create_project-01.png) <br/>
