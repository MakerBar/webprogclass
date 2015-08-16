# webprogclass
A simple shopping cart example to teach HTML, JS, and CSS

#### Setting up IDE
1. Create a folder for the source code on your computer
2. Open a new tab in Chrome
3. Go to Menu -> More Tools -> Developer Tools
4. Open the Sources Tab
5. Right click the sources list and click "Add Folder to Workspace" and add your source code folder
6. Click allow at the top of the screen

#### Writing the HTML
1. Right click on the source code folder in sources and click "New File"
2. Rename the file "index.html"
3. Right click index.html and press "Copy Link Address," paste into the address bar, and press Enter
4. Right click index.html in the source code folder and press "Map to Network resource," double click "index.html" then press OK in the dialog.
5. Paste the following into index.html
```
<html>

    <head>

    </head>

    <body>

        <ul id='products'>
            <li>Apple</li>
            <li>Banana</li>
            <li>Orange</li>
            <li>Plum</li>
        </ul>

        <ul id='cart'>
        </ul>

    </body>

</html>
```

#### Writing the CSS
1. Add a new file and call it "styles.css"
2. Paste the following line in index.html in between <head> and </head>
```
<link href='style.css' rel='stylesheet'>
```
3. Paste the following code into styles.css
```
#products li:hover {
    cursor: pointer;
    text-decoration: underline;
}
```

#### Writing the JS
1. Add a new file and call it "scripts.js"
2. Paste the following lines in index.html right before </body>
```
<script src='https://code.jquery.com/jquery-2.1.4.min.js' type='text/javascript'></script>
<script src='scripts.js' type='text/javascript'></script>
```
3. Paste the following code into scripts.js
```
$(function() {
   $('#products li').click(function(e) {
       $('#cart').append(e.target);
   }) 
});
```
