/*2. Import Project Model*/

import {Projects} from './app/shared/models/Projects';

export const sample_projects: Projects[] = [
  { id:'1',
    name:'Expense Tracker',
    imageUrl:'assets/money-finance.jpeg',
    tags: ['HTML', 'CSS', 'MongoDB', 'Angular','Object Oriented']
  },
  { id:'2',
  name:'Coffee Shop App',
  imageUrl:'assets/coffee.jpeg',
  tags: ['HTML', 'CSS', 'MongoDB', 'Angular','Object Oriented']
  },
  { id:'3',
  name:'ToDo List',
  imageUrl:'assets/to-do-list.jpg',
  tags: ['JavaScript', 'HTML', 'CSS']
  }
]
