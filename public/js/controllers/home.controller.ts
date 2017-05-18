namespace application.controllers{
    export class homeController{

        public formData;

        public secret = "you have not unlocked any secrets";

        constructor(public userService: services.userService){
            console.log("welcome home");
            this.secret = this.userService.secret;
        }

        
    }
}