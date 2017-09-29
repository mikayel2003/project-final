var fs=require("fs");
var request=require("request");
var forEach = require('async-foreach').forEach;
var array=[1];
var final=[];
function usser(link){
var options = {
  url: 'https://api.github.com/users?since='+link,
  headers: {
    'User-Agent': 'request'
  }
};

    request(options,function(err,response,json_d){
        if(!err)
        {
            var json=JSON.parse(json_d);
            forEach(json,function(link1,index1,arr1){
                var a={
                    id:link1.id,
                    login:link1.login,
                    repos:link1.repos_url,
                    followers_url:link1.followers_url
                };
                final.push(a);
                if(index1==arr1.length-1&&final.length!=1000)
                {
                    usser(link1.id);
                }
                if(final.length==1000)
                {
                    var aaz=JSON.stringify(final);
                    fs.appendFile("usersfinals.json",aaz);
                }
               
            });
           
        }
        
    });
   
}
usser(0);
