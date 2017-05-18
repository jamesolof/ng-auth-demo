namespace application.controllers{
    export class homeController{

        public formData;

        public secret;

        constructor(public userService: services.userService){
            console.log("welcome home");
            this.secret = this.userService.secret;
        }

        public secrets(): boolean{
            if(this.secret === "none"){
                return false;
            }
            else return true;
        }
        
    }
}