namespace application.controllers{
    export class registerController{

        static $inject = ['userService', '$state']

        public formData;

        constructor(public userService: services.userService, public $state: ng.ui.IStateService){}

        public register(){
            this.userService.registerUser(this.formData)
            .then((result) => {this.$state.go('Login')})
            .catch((err) => console.log(err));
        }            
    }
}