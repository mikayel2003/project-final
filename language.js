var readline = require('readline');
var fs=require("fs");
var request=require("request");
var forEach = require('async-foreach').forEach;
fs.readFile("final.json","utf8",function(err,data){
    if(!err)
    {
        var languages=[];
        var array=data.split("\n");
        forEach(array,function(link,index,arr){
            link=JSON.parse(link);
            var followers=link.followers_url;
            var userlanguages=link.repos;
            forEach(userlanguages,function(link1,index1,arr1){
                if(languages.length==0)
                 {
                     r1=0;
                    if(followers>0)
                    {
                        r1=followers*followers*followers*followers;
                    }
                   var a2=[link1[0],link1[1]+r1];
                   languages.push(a2);
                 }
                 else
                {
                    var x=0;
                    var h=0;
                    var s=0;
                    forEach(languages,function(link3,index3,arr3){
                        if(link3[0]==link1[0])
                        {
                            h=link3[1];
                            s=index3;
                            x=1;
                        }
                        else
                        {
                            
                        }
                    });
                    if(x==0)
                    {
                        var r2=0;
                        if(followers>0)
                            {
                                r2=followers*followers*followers*followers;
                            }
                        var a1=[link1[0],link1[1]+r2];
                        languages.push(a1);
                    }
                    else
                    {
                        var r3=0;
                        if(followers>0)
                            {
                                r3=followers*followers*followers*followers;
                            }
                        var a3=[link1[0],h+link1[1]+r3];
                        languages[s]=a3;
                    }
                }
            });
           
        });
        var g=JSON.stringify(languages);
        fs.appendFile("language.json",g);
    }
});