function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const foundGrade = newGrades.find((grade) => grade.studentId === student.id);

      if (foundGrade && foundGrade.grade !== undefined) {
        return {
          ...student,
          grade: foundGrade.grade,
        };
      }
      // Handle the case where the grade is undefined
      return {
        ...student,
        grade: 'N/A', // or any default value or handle accordingly
      };
    });
}

export default updateStudentGradeByCity;
