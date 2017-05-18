namespace application.services {
    export class userService {

        static $inject = ['$http'];

        public secret = "none";

        constructor(public $http: ng.IHttpService) { }

        public registerUser(user: models.registerUser) {
            this.$http.post('/api/users/register', user)
                .then((result) => {console.log("register success")})
                .catch((err) => console.log("register fail", err));
        }

        public loginUser(user: models.loginUser){
            this.$http.post('/api/users/login', user)
                .then((result) => {
                    console.log("login success")
                    this.getSecret(result.data);
                })
                .catch((err) => console.log("oops!"));
        }
        //$http.post('/api/users/login', formdata)

        public getSecret(token){
            this.$http.get('/api/profile',{
                headers: {'authorization': `bearer ${token}`}
            }).then((result) => {
                this.secret = JSON.stringify(result.data)
                console.log(this.secret)
            }).catch((err) => console.log(err))
        }
    }
}