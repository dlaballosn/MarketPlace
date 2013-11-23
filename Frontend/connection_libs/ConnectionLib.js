
var Connector = function(){

    this.server_url = "http://mp.clsweb.webfactional.com";

    this.makeRequest = function(data, url, method, callback){
        $.ajax({
            type: method,
            url: this.server_url + url,
            data: data,
            cache: false,
            success: function(json) {
               callback(eval(json));
            },
            error: function(e) {
               console.log(e.message);
            }
        });
    }
}


var User = function(){
    var connector = new Connector();

    this.getUser = function(user, password, type, callback){
        connector.makeRequest({username: user,
                               password: password,
                               type: type},
                              "/user/",
                              "GET",
                              callback)
    }

    this.createUser = function(user, password, type, email, callback){
        connector.makeRequest({username: user,
                               password: password,
                               email: email,
                               type: type},
                              "/user/",
                              "POST",
                              callback)
    }
}

user = new User();

user.createUser("nacho", "nacho", "seller", "ijgentile@gmail.com", function(json){ alert(json.success); });
user.getUser("nacho", "nacho", "seller", function(json){ alert(json.success); });