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
                     
                   var a2=[link1[0],followers];
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
                            if(link3[1]>0)
                            {
                                h=link3[1];
                            }
                            else
                            {
                                h=0;
                            }
                            
                            s=index3;
                            x=1;
                        }
                        else
                        {
                            
                        }
                    });
                    if(x==0)
                    {
                     
                        var a1=[link1[0],followers];
                        languages.push(a1);
                    }
                    else
                    {
                       
                      
                        var a3=[link1[0],h+followers];
                        languages[s]=a3;
                    }
                }
            });
           
        });
        var g=JSON.stringify(languages);
        fs.appendFile("followers.json",g);
    }
});