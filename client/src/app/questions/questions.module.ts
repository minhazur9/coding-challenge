import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { QuestionsComponent } from "./questions.component";
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [QuestionsComponent],
    imports: [CommonModule, HttpClientModule],
    exports: [QuestionsComponent]
})

export class QuestionsModule { }
