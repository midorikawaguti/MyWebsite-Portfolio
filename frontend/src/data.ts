/*2. Import Project Model*/

import {Projects} from './app/shared/models/Projects';

export const sample_projects: Projects[] = [
  { _id:'1',
    name:'Expense Tracker',
    imageUrl:['assets/money-finance.jpeg','assets/money-finance.jpeg'],
    tags: ['HTML', 'CSS', 'MongoDB', 'Angular', 'Express', 'Node JS']
  },
  { _id:'2',
  name:'Coffee Shop App',
  imageUrl:['assets/coffee.jpeg'],
  tags: ['HTML', 'CSS', 'MongoDB', 'Angular','Object Oriented']
  },
  { _id:'3',
  name:'ToDo List',
  imageUrl:['assets/to-do-list.jpg'],
  tags: ['JavaScript', 'HTML', 'CSS']
  }
]
