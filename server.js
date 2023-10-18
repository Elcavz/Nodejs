import * as http from "node:http";
console.log('Starting Nodejs Server');
http.createServer(myServer).listen(1234)

function myServer(request,response){
    response.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Random Jokes</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    </head>
    <body class="bg-dark">
        <div class="vh-100 d-flex justify-content-center align-items-center">
            <div>
                <button id="btn" class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Generate Joke</button>
            </div>
        </div>

        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">I have a Joke</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id="joke1" class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">More Jokes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">I have a Joke</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id="joke2" class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">More Jokes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel3">I have a Joke</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id="joke3" class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal">More Jokes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel4" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel4">I have a Joke</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id="joke4" class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal">More Jokes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel5" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel5">I have a Joke</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id="joke5" class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" aria-label="Close" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <script>
        document.addEventListener("DOMContentLoaded", function(){
            fetch("https://official-joke-api.appspot.com/jokes/random").then(function(result) {
                return result.json()
            }).then(function(result) {
                let j1 = document.getElementById('joke1')
                btn.onclick = function() {
                    j1.innerHTML = ("<b>" + result.setup + "</b>" + "<br>" + result.punchline);
                }
            })
        
            fetch("https://official-joke-api.appspot.com/jokes/random").then(function(result2) {
                return result2.json()
            }).then(function(result2) {
                let j2 = document.getElementById('joke2')
                j2.innerHTML = ("<b>" + result2.setup + "</b>" + "<br>" + result2.punchline);
            });

            fetch("https://official-joke-api.appspot.com/jokes/random").then(function(result3) {
                return result3.json()
            }).then(function(result3) {
                let j3 = document.getElementById('joke3')
                j3.innerHTML = ("<b>" + result3.setup + "</b>" + "<br>" + result3.punchline);
            });

            fetch("https://official-joke-api.appspot.com/jokes/random").then(function(result4) {
                return result4.json()
            }).then(function(result4) {
                let j4 = document.getElementById('joke4')
                j4.innerHTML = ("<b>" + result4.setup + "</b>" + "<br>" + result4.punchline);
            });

            fetch("https://official-joke-api.appspot.com/jokes/random").then(function(result5) {
                return result5.json()
            }).then(function(result5) {
                let j5 = document.getElementById('joke5')
                j5.innerHTML = ("<b>" + result5.setup + "</b>" + "<br>" + result5.punchline);
            });
        });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </body>
    </html>
    `);

    response.end();
}