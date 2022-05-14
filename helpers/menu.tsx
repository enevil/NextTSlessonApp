import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import SchoolIcon from './icons/school.svg';
import StudentsIcon from './icons/students.svg';
import { TopLevelCategory } from '../interfaces/page.interface';

export const firstLevelMenuData: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, _id: TopLevelCategory.Courses },
  { route: 'serives', name: 'Сервисы', icon: <ServicesIcon />, _id: TopLevelCategory.Services },
  { route: 'school', name: 'Для школьников', icon: <SchoolIcon />, _id: TopLevelCategory.School },
  { route: 'students', name: 'Для студентов', icon: <StudentsIcon />, _id: TopLevelCategory.Students },
];
