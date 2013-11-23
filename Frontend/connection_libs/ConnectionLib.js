
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
    var = connection = new Connector();

    this.uploadPhoto(base64image){
        connector.makeRequest({data: base64image},,
                               "/photo/",
                               "POST",
                               callback);
    }
}


user = new User();

user.createUser("nacho", "nacho", "seller", "ijgentile@gmail.com", function(json){ alert(json.success); });
user.getUser("nacho", "nacho", "seller", function(json){ alert(json.success); });

product = new Product();

product.listProducts([lat,lon], product_keyword, category)

photo = new Photo();

photo.uploadPhoto(base64image, function(json){alert(json.success);});