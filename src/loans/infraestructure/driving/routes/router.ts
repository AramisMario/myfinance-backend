import {Router} from "express";
export class LoanRouter{
    public router: Router

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/loans',(req,res) => {
            console.log("list of loans");
            res.json({message:"SUCCESS"})
        })
    }
}

const loanRouter = new LoanRouter();
export default loanRouter.router;