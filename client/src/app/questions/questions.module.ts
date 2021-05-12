import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { QuestionsComponent } from "./questions.component";

@NgModule({
    declarations: [QuestionsComponent],
    imports: [HttpClientModule,CommonModule],
    exports: [QuestionsComponent],
})

export class QuestionsModule { }
