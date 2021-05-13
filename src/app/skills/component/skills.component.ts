import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/models/skill.model';
import { SkillService } from 'src/app/core/service/skill/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {

  skills: Skill[] = [];

  constructor(private skillService: SkillService) { }

  ngAfterViewInit(): void {
    this.skillService.getAllSkills().subscribe(skills => {
      this.skills = skills;
    });
  }

  ngOnInit(): void {
  }

}
