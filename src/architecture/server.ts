import express,{Express} from "express";
import loanRouter from "../loans/infraestructure/driving/routes/router";
class Server{

    private app: Express;

    constructor(){
        this.app = express();
        this.routes();
    }

    start(){
        this.app.listen(3000,() => console.log("Server listening on port 3000"));
    }

    routes(){
        this.app.use(loanRouter);
    }

}

const server = new Server();
server.start();