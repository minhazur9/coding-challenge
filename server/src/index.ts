import cors from "cors";
import "dotenv/config";
import express from "express";
import Controller from "./controllers"
import { UserRecommendation } from "./types/UserRecommendationInterface";

class CodingChallenge {
  private port = process.env.PORT;
  public app: express.Application;
  private ctrl = new Controller();
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public start(): void {
    this.app.listen(this.port, () =>
      console.log(`Example app listening on port ${this.port}!`)
    );
  }
  public routes(): void {
    this.app.get("/", (req, res) => this.ctrl.getRecommendation().then((result: UserRecommendation) => res.send(result)));
  }

  public config() {
    this.app.set("port", this.port);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }
}

const codingChallenge = new CodingChallenge();
codingChallenge.start();
