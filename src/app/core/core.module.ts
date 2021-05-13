import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from './service/skill/skill.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [ CommonModule, HttpClientModule ],
    exports: [],
    providers: [SkillService]
})
export class CoreModule {}
