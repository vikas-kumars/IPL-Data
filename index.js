var matches_json = {};
var matches_colname = [];
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                
                var colname = "";
                var i = 0;
                for (i = 0; i < allText.length && allText[i] != "\n"; i++) {
                    if (allText[i] == ",") {
                        matches_colname.push(colname);
                        matches_json[colname] = [];
                        colname = "";
                    } else if (allText[i] == " ") {
                        colname += allText[i];
                    }
                    else {
                        colname += allText[i];
                    }
                }
                

              
            }
        }
    }
    rawFile.send(null);
}
readTextFile("matches.csv");
