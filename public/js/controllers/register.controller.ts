namespace application.controllers{
    export class registerController{

        public formData;

        constructor(public userService: services.userService){}

        public register(){
            this.userService.registerUser(this.formData);
        }            
    }
}