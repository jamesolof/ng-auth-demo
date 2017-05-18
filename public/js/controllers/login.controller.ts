namespace application.controllers{
    export class loginController{

        static $inject = ['userService', '$state'] 
                
        public formData: models.loginUser;


        constructor(public userService: services.userService, public $state: ng.ui.IStateService){}

        public login(){
            this.userService.loginUser(this.formData)
                .then((result) => this.$state.go('Home'))
                .catch((err) => console.log(err))
        }
        
    }
}