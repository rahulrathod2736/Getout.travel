### Getout.Travel Coding Chanllenge

```Folder Structure```
```
+---public
|       favicon.ico
|       index.html
|       logo192.png
|       logo512.png
|       manifest.json
|       robots.txt
|       
\---src
    |   App.css
    |   App.js
    |   App.test.js
    |   index.css
    |   index.js
    |   logo.svg
    |   setupTests.js
    |   
    +---assets
    |   +---fonts
    |   |       Poppins-Regular.ttf
    |   |       
    |   \---images
    |       \---category
    |               clothing.png
    |               fashion.png
    |               living-room.png
    |               man.png
    |               sale-tag.png
    |               wardrobe.png
    |               
    +---components
    |   +---bottomNavigation
    |   |       bottomNavigation.css
    |   |       bottomNavigation.js
    |   |       
    |   +---category
    |   |       category.css
    |   |       category.js
    |   |       
    |   +---icon
    |   |       icon.css
    |   |       icon.js
    |   |       
    |   +---navBar
    |   |       navBar.css
    |   |       navBar.js
    |   |       
    |   \---productListing
    |           products.css
    |           products.js
    |           
    +---pages
    +---seedData
    |       seedData.js
    |       
    \---__tests__
            category.test.js
            icon.test.js
            navbar.test.js
            products.test.js
            
```

### Let's run a Project with yarn

- command : ```yarn start```

After run this command hit url on browser ```http://localhost:3000```

### Run Test Cases for Project

- command : ```yarn test```

This command will run all test case located inside ```__tests__``` directory.
- you will get below output.
```
D:\projects\Getout.travel\getout.travel-codingchallenge>yarn test
yarn run v1.22.17
$ react-scripts test
 PASS  src/__tests__/category.test.js
 PASS  src/App.test.js
 PASS  src/__tests__/navbar.test.js
 PASS  src/__tests__/icon.test.js
 PASS  src/__tests__/products.test.js

Test Suites: 5 passed, 5 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        5.55 s, estimated 6 s
Ran all test suites.
```

Now we will do something crazy

- Run Command : ```yarn coverage```

```
D:\projects\Getout.travel\getout.travel-codingchallenge>yarn coverage
yarn run v1.22.17
$ react-scripts test --coverage
 PASS  src/__tests__/category.test.js
 PASS  src/App.test.js
 PASS  src/__tests__/navbar.test.js
 PASS  src/__tests__/icon.test.js
 PASS  src/__tests__/products.test.js
---------------------------------|---------|----------|---------|---------|-------------------
File                             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------------|---------|----------|---------|---------|-------------------
All files                        |   89.28 |    88.88 |   91.66 |   88.88 |                  
 src                             |   57.14 |       50 |   66.66 |   57.14 |                  
  App.js                         |      80 |       50 |   66.66 |      80 | 14               
  index.js                       |       0 |      100 |     100 |       0 | 6-7              
 src/components/bottomNavigation |     100 |      100 |     100 |     100 |                  
  bottomNavigation.js            |     100 |      100 |     100 |     100 |                  
 src/components/category         |     100 |      100 |     100 |     100 |                  
  category.js                    |     100 |      100 |     100 |     100 |                  
 src/components/icon             |     100 |      100 |     100 |     100 |                  
  icon.js                        |     100 |      100 |     100 |     100 |                  
 src/components/navBar           |     100 |    88.88 |     100 |     100 |                  
  navBar.js                      |     100 |    88.88 |     100 |     100 | 13               
 src/components/productListing   |     100 |      100 |     100 |     100 |                  
  products.js                    |     100 |      100 |     100 |     100 |                  
 src/seedData                    |     100 |      100 |     100 |     100 |                  
  seedData.js                    |     100 |      100 |     100 |     100 |                  
---------------------------------|---------|----------|---------|---------|-------------------

```

##### This is the output of our test case. like,
- All test case cover 89.28% codes of Whole Projects.
- All test case cover 91.66% functions of Whole Projects.

Output Images

