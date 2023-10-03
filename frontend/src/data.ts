/*2. Import Project Model*/

import {Projects} from './app/shared/models/Projects';

export const sample_projects: Projects[] = [
  { id:'1',
    name:'Project 1',
    imageUrl:'assets/wish-1.jpg',
    tags: ['C#', 'Object Oriented'],
    price: 1000,
    favorite: true,
  },
  { id:'2',
  name:'Project 1',
  imageUrl:'assets/wish-2.jpg',
  tags: ['PL/SQL', 'Oracle Database', 'Java'],
  price: 1000,
  favorite: true,
  },
  { id:'3',
  name:'Project 1',
  imageUrl:'assets/wish-3.jpeg',
  tags: ['Angular', 'CSS', 'HTML'],
  price: 1000,
  favorite: true,
  }
]
