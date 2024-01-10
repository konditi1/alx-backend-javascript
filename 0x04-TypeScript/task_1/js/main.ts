interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  class Teacher {
    private readonly firstName: string;
    private readonly lastName: string;
    private readonly fullTimeEmployee: boolean;
    private readonly yearsOfExperience?: number;
    private readonly location: string;
    [key: string]: any; // Index signature for dynamic properties
  
    constructor(
      firstName: string,
      lastName: string,
      fullTimeEmployee: boolean,
      location: string,
      yearsOfExperience?: number
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullTimeEmployee = fullTimeEmployee;
      this.location = location;
      this.yearsOfExperience = yearsOfExperience;
    }
  }
// function PrintTeacher(firstName: string, lastName: string) {
//     console.log(`${firstName[0]}. ${lastName}`);
//   }

  interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implementation of the printTeacher function
  const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullName = `${firstLetter}. ${lastName}`;
    return fullName;
  };
  