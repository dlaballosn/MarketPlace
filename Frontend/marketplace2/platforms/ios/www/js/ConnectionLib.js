
var Connector = function(){

    this.server_url = "http://mp.clsweb.webfactional.com/market";

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


var Product = function(){
    var connector = new Connector();

    this.listProducts = function(latlon, keyword, category){
        connector.makeRequest({latlon: latlon[0]+","+latlon[1],
                               keyword: keyword,
                               category: category},
                              "/product/list/",
                              "GET",
                              callback);
    }
}


var Photo = function(){
    var connection = new Connector();

    this.uploadPhoto = function(base64image, callback){
        connection.makeRequest({data: base64image},
                               "/photo/",
                               "POST",
                               callback);
    }
}


var Store = function(){
    var connection = new Connector();

    this.createStore = function(name, location, owner, callback){
        connection.makeRequest({name:name, location:location, owner:owner},
                               "/store/",
                               "POST",
                               callback)
    }

}