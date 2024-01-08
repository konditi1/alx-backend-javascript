function getStudentsByLocation(listStudent, city) {
  if (!Array.isArray(listStudent)) {
    return [];
  }
  return listStudent.filter((student) => student.location === city);
}

export default getStudentsByLocation;
