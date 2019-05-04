<!DOCTYPE html>
<html lang="en">
<head>

<!-- 
Thw website, when finished, will have a MySQL to keep track 
who has RSVP'd. Add more information and css. PHP will be 
used for the form. javascript will be used for page effects.
 -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="main.css">
    <link rel="icon" href="#.jpeg" type="image/x-icon">
    <script type="text/javascript" src="main.js"></script>
    <title>Jonael's Baby Shower</title>
</head>
<body>
    <h1 id="invite">You're Invited! <br> July 21st, 2019 </h1>
    
    <img src="images/babybear.png" alt="babybear" id="babybear">
    <div>
        <h2>Things you should know:</h2>
        <ul id="list">
            <li>What's the gender?</li>
            <li>Where will the Baby Shower be?</li>
            <a href=""><li id="flash_date">When is it?</li></a>
            <li>Where should I RSVP?</li>
        </ul>  
    </div>

    <form action="/rsvp.php" method="get" id="rsvp" >
        Full Name: <input type="text" name="name"><br>
        Email:     <input type="text" name="email"><br>
        <input type="submit" value="Submit">
    </form>
    


    <footer id="footer">
        <a href="mailto:kf9979a@student.american.edu">Click to send me an email!</a><br>
        If you would like to send a gift: <br>
        5901 Montrose Rd <br>
        Rockville, Maryland 20852<br>
        <a href="https://www.amazon.com/baby-reg/2XFESHVZR1BLY">Registry Link</a>
    </footer>
</body>
</html>