var readline = require('readline');
var fs=require("fs");
var request=require("request");
var forEach = require('async-foreach').forEach;
var myInterface = readline.createInterface({
  input: fs.createReadStream('userfollowers.json')
});
myInterface.on('line', function (line) {
  
  var infouser=JSON.parse(line);
  var langcount=[];
  var url1=infouser.repos+"?client_id=8b2ff24f5e8375cc1370&client_secret=274a2fab95eb963bb9eb40eb8d4771fe4aecf304";
  var options={
                     url:url1,
                     headers:{
                        'User-Agent':'request'
                      }
              };
  request(options,function(err,response,json){
    if(!err)
      {
      var reqinfo=JSON.parse(json);
      
      if(reqinfo.length==0)
      {
        var app={
          id:infouser.id,
          login:infouser.login,
          repos:0,
          followers_url:infouser.followers_url
           };
        app=JSON.stringify(app)+"\n"; 
        fs.appendFile("final.json",app);
      }
      else
      {
          forEach(reqinfo,function(link,index,arr){
            var url2="https://api.github.com/repos/"+infouser.login+"/"+link.name+"/languages"+"?client_id=8b2ff24f5e8375cc1370&client_secret=274a2fab95eb963bb9eb40eb8d4771fe4aecf304";
            var options1=
            {
               url:url2,
              headers:{
                'User-Agent':'request'
                  }
            };
            request(options1,function(err1,response1,json1){
              if(!err1)
              {
              var languageinfo=JSON.parse(json1);
              var result = Object.keys(languageinfo).map(function(key) {
                return [key, languageinfo[key]];
              });
              forEach(result,function(link3,index3,arr3){
                    var jsonparse=[];
                    jsonparse.push(link3[0]);
                    jsonparse.push(link3[1]);
                    langcount.push(jsonparse);
                   
                    if(index==reqinfo.length-1&&index3==result.length-1)
                    {
                     
                      var oop={
                        id:infouser.id,
                        login:infouser.login,
                        repos:langcount,
                        followers_url:infouser.followers_url
                       };
                      var databasefinal=JSON.stringify(oop)+"\n";
                    
                      fs.appendFile("final.json",databasefinal);
                    }
              });
             }
            });
          
          });
          
          
      }
    }
  });
  
});
