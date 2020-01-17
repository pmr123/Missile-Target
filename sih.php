<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript">


                //
            // var xhr = new XMLHttpRequest();
            // var url = "";
            // xhr.open("POST", url, true);
            // xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.onreadystatechange = function () {
            //     if (xhr.readyState === 4 && xhr.status === 200) {
            //         var json = JSON.parse(xhr.responseText);
            //         alert(json.email + ", " + json.password);
            //     }
            // };
            // var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
            // xhr.send(data);



                //CSV TO JSON

                function csvUpload(csvText){
                        //Split all the text into seperate lines on new lines and carriage return feeds
                        var allTextLines = csvText.split(/\r\n|\n/);
                        //Split per line on tabs and commas
                        var headers = allTextLines[0].split(/\t|,/);
                        var lines = [];
                        var objs = [];

                        for (var i=1; i<allTextLines.length; i++) {
                            var data = allTextLines[i].split(/\t|,/);
                             
                            if (data.length == headers.length) {
                            
                            var obj = {"NAME":data[0], "SURNAME":data[1]};
                           
                            objs.push(obj);
                            

                            }

                        }
                        return JSON.stringify(objs);
                   }

                function loadFile(o)
                {
                    var fr = new FileReader();
                    fr.onload = function(e)
                        {
                            showDataFile(e, o);
                        };
                    fr.readAsText(o.files[0]);
                }

                function showDataFile(e, o)
                {
                    var res=e.target.result;
                    

                    // var a=res.split("-");
                    // for(var i=0;i<a.length;i++){
                    //    var s= a[i].split(",");
                    //    alert(s[0]);
                    // }
                    document.getElementById("data").innerText = csvUpload(res);
                }
            </script>

        </script>
    </head>
    <body>
        Select file to read <input type="file" onchange="loadFile(this)">
        <pre id="data"></pre>
    </body>
</html> 