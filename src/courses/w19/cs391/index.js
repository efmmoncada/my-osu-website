import { generateSitePath } from '../../../lib/SitePath';

import topics from './topics';
import assignments from './assignments';
import tas from './tas';

const courseDetails = {
  number: 'CS 391',
  title: 'Social and Ethical Issues in CS',
  term: 'Winter 2019',
  instructor: {
    name: 'Rob Hess',
    email:'hessro@oregonstate.edu'
  },

  officeHours: [
    {
      day: 'Tues.',
      time: '10:00am &ndash; 12:00pm',
      location: 'KEC 1109'
    },
    {
      day: 'Wed.',
      time: '10:00 &ndash; 11:00am',
      location: 'KEC 1109'
    }
  ],

  lectures: {
    '001': {
      day: 'MWF',
      time: '3:00 &ndash; 3:50pm',
      location: 'KEC 1001'
    }
  },

  syllabusLink: '#',

  links: [
    {
      text: 'CS 391 on Piazza',
      link: 'https://piazza.com/oregonstate/winter2019/cs391'
    },
    {
      text: 'Establishing a positive classroom community',
      link: generateSitePath("/teaching/community")
    }
  ],

  topics: topics,

  assignments: assignments,

  tas: tas
};

export default courseDetails;
