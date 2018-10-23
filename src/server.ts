import { Request } from "express";
import { Response } from "express";
import express from "express";


export default class Server{
    readonly port : number
 constructor(port : number){
     this.port=port
 }
 start() {
     const app = express()
     app.get('/' ,function (req: Request, res: Response){
         res.send("Holla")
     })
     app.listen(this.port , function(){
         console.log('server Start')
     })
    }
    
}