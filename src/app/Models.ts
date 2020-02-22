import * as moment from 'moment';

export class Education {
  startDate: number;
  endDate: number;
  info: string;
  name: string;

}

export class WorkExp {
  startDate: number;
  endDate: number;
  info: string;
  projectName: string;
}

export class Skills {
  name: string;
  level: number;
}

export class Achievements {
  information: string;
}


export class Hobbies {
  name: string;
}

export class PersonalDetails {
  first_name: string;
  last_name: string;
  designation: string;
  dob: string | number;
  number: number;
}

export class AddressDetails {
  line1: string;
  line2: string;
  city: string;
  state: string;
  pinCode: number;
}


export class SocialAccounts {
  linkedin?: string;
  github?: string;
  personalWebsite?: string;
  personalBlog?: string;
  gmail?: string;
  introduction?: string;
}

export class User {
  details?: PersonalDetails;
  address?: AddressDetails;
  socailDetails?: SocialAccounts;
  education?: Education[];
  workExp?: WorkExp[];
  skills?: Skills[];
  hobbies?: Hobbies[];
  achievements?: Achievements[];
}

export class DateUtils {

  static stringFormat(value) {
    return moment(value).format('YYYY-MM-DD').toString()
  }

  static birthDate(value) {
    return moment(value).format('MMMM Do YYYY');
  }
}
