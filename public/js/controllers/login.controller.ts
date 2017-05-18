namespace application.controllers{
    export class loginController{

        public formData: models.loginUser;

        constructor(public userService: services.userService){}

        public login(){
            this.userService.loginUser(this.formData);
        }
        
    }
}