import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';
import { SkillComponent } from '../skill/skill.component';
import { JavaIconComponent } from '../icons/java-icon/java-icon.component';
import { SqlIconComponent } from '../icons/sql-icon/sql-icon.component';
import { SpringBootIconComponent } from '../icons/spring-boot-icon/spring-boot-icon.component';
import { PostgreSQLIconComponent } from '../icons/postgresql-icon/postgresql-icon.component';
import { MySQLIconComponent } from '../icons/mysql-icon/mysql-icon.component';
import { MongoDBIconComponent } from '../icons/mongodb-icon/mongodb-icon.component';
import { FirestoreIconComponent } from '../icons/firestore-icon/firestore-icon.component';

@Component({
  selector: 'app-backend-skills',
  imports: [
    SkillCardComponent,
    SkillComponent,
    JavaIconComponent,
    SqlIconComponent,
    SpringBootIconComponent,
    PostgreSQLIconComponent,
    MySQLIconComponent,
    FirestoreIconComponent,
    MongoDBIconComponent,
  ],
  templateUrl: './backend-skills.component.html',
  styleUrl: './backend-skills.component.css',
})
export class BackendSkillsComponent {}
