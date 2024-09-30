import { CareerCategory } from '@apps/public-data/src/public-data/entities/career-category.entity';
import { PositionCategory } from '@apps/public-data/src/public-data/entities/position-category.entity';
import { ProjectCategory } from '@apps/public-data/src/public-data/entities/project-category.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  public user_id: number;

  @Column('varchar', { length: 255, unique: true, nullable: false })
  public nickname: string;

  @Column('varchar', { length: 255, unique: true, nullable: false })
  public email: string;

  @Column('simple-array')
  public stack_category_id: number[];

  @ManyToOne(() => PositionCategory)
  @JoinColumn({ name: 'position_category_id' })
  public position_category_id: PositionCategory;

  @ManyToOne(() => ProjectCategory)
  @JoinColumn({ name: 'project_category_id' })
  public project_category_id: ProjectCategory;

  @ManyToOne(() => CareerCategory)
  @JoinColumn({ name: 'career_category_id' })
  public career_category_id: CareerCategory;
}
