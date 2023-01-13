/* 

    In this exercise, you will define four functions. 
    
    One will create a student object, 
    and the other three will add a grade for a subject to the student object.

    createStudent() should return a new student object. 

    The name of the student, 
    and which grade the student is in, 
    must be passed to the function as arguments. 
    The returned object should have a name property and a grade property.

    addMathGrade() should add a new "math" property to the student with a value of "B".

    addHistoryGrade() should add a new "history" property to the student with a value of "C".

    addScienceGrade() should add a new "science" property to the student with a value of "A".

*/ 

/*

    Remember to follow the flow that you learned about in the last chapter

    Each function should define a parameter to hold the object.
    Each function should be invoked with an object provided as an argument.
    Each function should return the object after the property is added.
    The return value of the function should be stored in a variable.
    
*/

// The function creates a student to add grades for 

const createStudent = (studentName,studentGrade) => {
    const studentObject = {
        name: studentName, 
        grade: studentGrade
    }
    return studentObject 
}

let student = createStudent("John Doe",11)
console.log(student) 
// logs {name: 'John Doe', grade: 11}

// The function adds a math grade for the student

const addMathGrade = (mathGrade) => {
    student.math = mathGrade
    return student 
} 

const studentMathGrade = addMathGrade("B")
console.log(studentMathGrade) 
// logs {name: 'John Doe', grade: 11, math: 'B'}

// The function adds a history grade for the student 

const addHistoryGrade = (historyGrade) => {
    student.history = historyGrade
    return student
}

const studentMathHistoryGrade = addHistoryGrade("C")
console.log(studentMathHistoryGrade) 
// logs {name: 'John Doe', grade: 11, math: 'B', history: 'C'}

// The function adds a science grade for the student 

const addScienceGrade = (scienceGrade) => {
    student.science = scienceGrade
    return student
}

// This shows all of the grade properties added to the final object 

let studentMathHistoryScienceGrade = addScienceGrade("A")
console.log(studentMathHistoryScienceGrade) 
// logs {name: 'John Doe', grade: 11, math: 'B', history: 'C', science: 'A'}