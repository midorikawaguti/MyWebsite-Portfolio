/*2. Import Project Model*/

import {Projects} from './app/shared/models/Projects';

export const sample_projects: Projects[] = [
  { _id:'1',
    name:'Learning React',
    imageUrl:['assets/money-finance.jpeg','assets/money-finance.jpeg'],
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    description: 'Developed a dynamic web application facilitating streamlined financial management for users. Employed MongoDB for both user authentication and data storage, ensuring a secure and efficient experience. '
  },
  { _id:'2',
  name:'Coffee Shop App',
  imageUrl:['assets/coffee.jpeg'],
  tags: ['HTML', 'CSS', 'JavaScript'],
  description: ''
  },
  { _id:'3',
  name:'ToDo List',
  imageUrl:['assets/to-do-list.jpg'],
  tags: ['JavaScript', 'HTML', 'CSS'],
  description: ''
  },

]
