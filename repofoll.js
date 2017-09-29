var request=require("request");
var fs=require("fs");
var forEach = require('async-foreach').forEach;

fs.readFile("usersfinals.json","utf8",function(err,data){
        var users=JSON.parse(data);
        var i=0;
        forEach(users,function(link,index,arr){
                var url1=link.followers_url+"?client_id=8b2ff24f5e8375cc1370&client_secret=274a2fab95eb963bb9eb40eb8d4771fe4aecf304";
                var array=0;
                var options={
                     url:url1,
                     headers:{
                        'User-Agent':'request'
                      }
                };
                ///////////////////
               
                request(options,function(err,response,json){
                        if(!err)
                         {

                        var file=JSON.parse(json);
                        
                        array=file.length;
                        var app={
                                id:link.id,
                                login:link.login,
                                repos:link.repos,
                                followers_url:array
                        };                     
                       
                        i++;
                        console.log(i); 
                        var appen=JSON.stringify(app)+"\n";
                       
                       
                        
                                fs.appendFile("userfollowers.json",appen);
                        
                                     
                         }
                });
                
                //////////////
        });
        
});