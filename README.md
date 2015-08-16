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
        <title>Super awesome shopping cart</title>
    </head>

    <body>

        <div>

            <p>
                Please click the products you want
            </p>

            <ul id='products'>
                <li data-price='1.25'>Apple - $1.25</li>
                <li data-price='1.45'>Banana - $1.45</li>
                <li data-price='1.95'>Orange - $1.95</li>
                <li data-price='2.99'>Plum - $2.99</li>
            </ul>

        </div>

        <div>

            <p>
                Your shopping cart
            </p>

            <ul id='cart'>
            </ul>

            <div class='prices'>
                Sub total: <span id='subtotal'>$0.00</span>
                <br />
                Tax (7%): <span id='tax'>$0.00</span>
                <br />
                Total: <span id='total'>$0.00<span>
            </div>
        </div>

    </body>

</html>
```

#### Writing the CSS
1. Add a new file and call it "styles.css"
2. Paste the following line in index.html in between ```<head>``` and ```</head>```
```
<link href='style.css' rel='stylesheet'>
```
3. Paste the following code into styles.css
```
div {
    border: black solid 2px;
    margin: 30px;
    padding: 30px;
}

div p {
    font-weight: bold;
    font-size: 20px
}

#products li:hover {
    cursor: pointer;
    text-decoration: underline;
}

.prices {
    background-color: yellow;
}
```

#### Writing the JS
1. Add a new file and call it "scripts.js"
2. Paste the following lines in index.html right before ```</body>```
```
<script src='https://code.jquery.com/jquery-2.1.4.min.js' type='text/javascript'></script>
<script src='scripts.js' type='text/javascript'></script>
```
3. Paste the following code into scripts.js
```
$(function() {
    var subtotal = 0.0;

    function updateTotal(price) {
        subtotal += price;

        var tax = subtotal * .07;
        var total = subtotal + tax;

        //display the updated figures
        $('#subtotal').text('$' + (Math.round(subtotal * 100) / 100));
        $('#tax').text('$' + (Math.round(tax * 100) / 100));
        $('#total').text('$' + (Math.round(total * 100) / 100));
    }

    $('#products li').click(function(event) {

       //move the product into the shopping cart
       $('#cart').append(event.target);

        var price = parseFloat($(event.target).data('price'));

        updateTotal(price);
    });
});
```
