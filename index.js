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
                                var value = "";
                var curr = 0;
                for (i; i < 100; i++) {
                    if (allText[i] === ',' || allText[i] === '\n') {
                        console.log(value + "INTO " + matches_colname[curr]);
                        matches_json[matches_colname[curr]].push(value);
                        value = "";
                        curr = (curr + 1) % matches_colname.length;
                    }
                    else {
                        value += allText[i];
                    }
                }

              
            }
        }
    }
    rawFile.send(null);
}
readTextFile("matches.csv");
