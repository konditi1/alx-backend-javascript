/**
 * Determines whether the given line is the
 * row header in the dataset or not.
 *
 * @param {string} - The line to inspect.
 *
 * @returns A boolean indicating whether the
 * given line is the row header or not.
 */
const isRowHeader = (line) => {
    const heading = 'firstname,lastname,age,field';
  
    if (line.includes(heading)) return (true);
    return (false);
  };
  
  /**
   * Retrieves a Set of fields from a list
   * of rows.
   *
   * @param {array} - An array of strings
   * representing records of students.
   *
   * @returns A set containing the fields
   * of all the students.
   *
   */
  const getFields = (lines) => {
    const fields = new Set();
  
    lines.forEach((line) => {
      if (line !== '') {
        if (!isRowHeader(line)) {
          // Fields are the fourth item in
          // the CSV file.
          fields.add(line.split(',')[3]);
        }
      }
    });
  
    return (fields);
  };
  
  /**
   * Count the total number of students in the
   * given records.
   *
   * @param {map} - A dictionary containing
   * the various student fields and the students
   * pursuing those fields.
   *
   * @returns A count of all student records.
   *
   */
  const getTotalRecords = (map) => {
    let count = 0;
  
    map.forEach((value) => { count += value.length; });
  
    return (count);
  };
  
  /**
   * Extract the field of a student from the
   * sntire student record represented
   * as a line of string.
   *
   * @param {string} - The line containing
   * the entire student record.
   *
   * @returns The field of study the
   * student belongs.
   *
   */
  const getField = (line) => (line.split(',')[3]);
  
  /**
   * Extract the name of a student from the
   * sntire student record represented
   * as a line of string.
   *
   * @param {string} - The line containing
   * the entire student record.
   *
   * @returns The name of the student.
   *
   */
  const getName = (line) => (line.split(',')[0]);
  
  const printRecordsSummary = (records) => {
    console.log(`Number of students: ${getTotalRecords(records)}`);
    records.forEach((value, key) => console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`));
  };
  
  /*
   * Fetch student records from the given
   * CSV file.
   *
   * @param {string} - The path to the file
   * containing students records..
   *
   * @throws Error instance when the given
   * file cannot be found.
   *
   */
  const fs = require('fs');
  
  const countStudents = (filePath) => {
    const promise = new Promise((resolve, reject) => {
      try {
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const lines = fileContents.split('\n');
        const fields = getFields(lines);
        const records = new Map();
  
        fields.forEach((field) => {
          lines.forEach((line) => {
            if (getField(line) === field) {
              const ____name = getName(line);
  
              if (!records.get(field)) records.set(field, [____name]);
              else records.get(field).push(____name);
            }
          });
        });
  
        resolve(printRecordsSummary(records));
      } catch (err) {
        reject(new Error('Cannot load the database'));
      }
    });
  
    return (promise);
  };
  
  module.exports = countStudents;