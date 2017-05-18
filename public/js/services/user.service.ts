namespace application.services {
    export class userService {

        static $inject = ['$http'];

        private specialSecret = "none";

        public get secret(){
            return this.specialSecret
        }

        constructor(public $http: ng.IHttpService) { }

        public registerUser(user: models.registerUser) {
            return this.$http.post('/api/users/register', user)
                .then((result) => {console.log("register success")})
                .catch((err) => console.log("register fail", err));
        }

        public loginUser(user: models.loginUser){
            return this.$http.post('/api/users/login', user)
                .then((result) => {
                    console.log("login success")
                    this.getSecret(result.data);
                })
                .catch((err) => console.log("oops!"));
        }

        public getSecret(token){
            this.$http.get('/api/profile',{
                headers: {'authorization': `bearer ${token}`}})
            .then((result) => this.specialSecret = JSON.stringify(result.data))
            .catch((err) => console.log(err))
        }
    }
}