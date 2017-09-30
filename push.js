var fs=require("fs");
fs.readFile("language.json",function(err,data){
    var d=JSON.parse(data);
    var a=d.a;
    fs.readFile("followers.json",function(err1,data1){
        var d1=JSON.parse(data1);
        var b=d1.b;
        var s={a:d,b:d1};
        var ap=JSON.stringify(s);
        fs.appendFile("read.json",ap);
    });
});
