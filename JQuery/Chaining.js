< !DOCTYPE html >
    <html>
        <head>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
            <script>
                $(document).ready(function(){
                    $("button").click(function () {
                        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
                    });
                });
            </script>
        </head>
        <body>

            <p id="p1">jQuery is fun!!</p>

            <button>Click me</button>

        </body>
    </html>
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_chaining