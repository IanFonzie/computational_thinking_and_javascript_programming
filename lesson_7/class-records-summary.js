var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // an array of score objects, with both exams and exercises
  var scoreData = Object.keys(scores).map(function(student) {
    return scores[student].scores;
  });

  // transform the above score objects to be an array of arrays for exam scores
  var examData = scoreData.map(function(score) {
    return score.exams;
  });

  return {
    studentGrades: scoreData.map(function(scoreObj) {
      return getStudentScore(scoreObj);
    }),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  var examScore = getAverage(scoreObj.exams);
  var exerciseScore = getStudentExerciseScore(scoreObj.exercises);
  var totalScore = getStudentTotalScore(examScore, exerciseScore);
  return String(totalScore) + ' (' + gradeLookup(totalScore) + ')';
}

function getStudentExerciseScore(exercises) {
  return exercises.reduce(function(sum, exerciseScore) {
    return sum + exerciseScore;
  });
}

function getAverage(array) {
  return array.reduce(function(sum, value) {
    return sum + value;
  }) / array.length;
}

// Advised against using magical numbers, so also not sure about this
function getStudentTotalScore(examScore, exerciseScore) {
  return Math.round(examScore * 0.65 + exerciseScore * 0.35);
}

// Can't think of an abstraction that's more effecient than this
function gradeLookup(score) {
  switch (true) {
    case (score >= 93): return 'A';
    case (score >= 85): return 'B';
    case (score >= 77): return 'C';
    case (score >= 69): return 'D';
    case (score >= 60): return 'E';
    default: return 'F';
  } 
}

// Not sure about the abstraction here but I don't see any other way
function getExamSummary(examData) {
  return examData[0].map(function(exam, index) {
    var studentScores = getExamMarks(examData, index);
    return {
      average: getAverage(studentScores),
      mininum: getMinimum(studentScores),
      maximum: getMaximum(studentScores),
    };
  });
}

function getExamMarks(exams, number) {
  return exams.map(function(exam) {
    return exam[number];
  });
}

function getMinimum(array) {
  return array.reduce(function(smallest, current) {
    return current <= smallest ? current : smallest;
  });
}

function getMaximum(array) {
  return array.reduce(function(largest, current) {
    return current >= largest ? current : largest;
  });
}

generateClassRecordSummary(studentScores);

// returns:

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }

// Thinking in abstractions

// reduce the exam scores and divide by 4
// reduce the total exercise score
// write function to determine weighted average
// write function to round
// filter for the letter grade 
// reduce to combine the percent grade and letter grade

// Their thinking in abstractions:

// Look at the desired return value, we know we need two pieces of data:

// An array of student grades, in a specific format. We must compute the student percentage grade from the
// student's exam and exercise scores, then combine it with the equivalent letter grade.

// An array of exam summary objects. we calculate each exam summary object from all student scores for the
// respective exam. For instance, we determine the second exam summary object from each studentt's second
// exam.

// Now that we've broken the bigger problem into two much smaller problems, you can follow a similar process
// to decompose each of these problems into smaller and smaller problems to get to your eventual solution.

// function generateClassRecordSummary(scores) {
//   var scoreData = Object.keys(scores).map(function(student) {
//     return scores[student].scores;
//   });

//   var examData = scoreData.map(function(score) {
//     return score.exams;
//   });

//   return {
//     studentGrades: scoreData.map(function(scoreObj)  {
//       return getStudentScore(scoreObj);
//     }),
//     exams: getExamSummary(examData),
//   };
// }

// function getStudentScore(scoreObj) {
//   var lookupLetter = function(percentageGrade) {
//     if (percentageGrade >= 93) {
//       return "A";
//     } else if (percentageGrade >= 85 && percentageGrade < 93) {
//       return "B";
//     } else if (percentageGrade >= 77 && percentageGrade < 85) {
//       return "C";
//     } else if (percentageGrade >= 69 && percentageGrade < 77) {
//       return "D";
//     } else if (percentageGrade >= 60 && percentageGrade < 69) {
//       return "E";
//     } else {
//       return "F";
//     }
//   }

//   var examsAvg = computeExamsAverage(scoreObj.exams);
//   var exercisesAvg = computeExercisesScore(scoreObj.exercises);
//   var percentageGrade = Math.round(examsAvg * 0.65 + exercisesAvg * 0.35);

//   return percentageGrade + " (" + lookupLetter(percentageGrade) + ")";
// }

// function computeExamsAverage(exams) {
//   return exams.reduce(function(total, score) {
//     return total + score;
//   }) / exams.length;
// }

// function computeExercisesScore(exercises) {
//   return exercises.reduce(function(total, score) {
//     return total + score;
//   });
// }

// function getExamSummary(examScoresPerStudent) {
//   var scoresPerExam = transpose(examScoresPerStudent);

//   return scoresPerExam.map(function(examScores) {
//     return {
//       average: getExamAverage(examScores),
//       minimum: getExamMinimum(examScores),
//       maximum: getExamMaximum(examScores),
//     }
//   });
// }

// // goes through the first array to get the number, only fetches column because we need it
// // to get the index. Then for each row (array of student exam scores) it will fetch the 
// // value of the row at the current index after the inner function has fetched the value
// // at each list at the specified index, the index will increment by one.
// function transpose(array) {
//   return array[0].map(function(col, columnIdx) {
//     return array.map(function(row) {
//       return row[columnIdx];
//     });
//   });
// }

// function getExamAverage(scores) {
//   return scores.reduce(function(total, score) {
//     return total + score;
//   }) / scores.length;
// }

// function getExamMinimum(scores) {
//   return scores.reduce(function(min, score) {
//     return min <= score ? min : score;
//   });
// }

// function getExamMaximum(scores) {
//   return scores.reduce(function(max, score) {
//     return max >= score ? max : score;
//   });
// }

// Our solutions weren't actually too different, major differences occured at get getExamSummary,
// where they opted to build an array of exam scores per exam whereas I built the object with the 
// current exam object each time. Probably a better level of abstraction on their end.

// another difference was that instead of having a grade lookup function, they made a function expression
// within the getStudentScore function. They also chose to not make a function for the following expression:
// Math.round(examsAvg * 0.65 + exercisesAvg * 0.35);.

// I can explain the transposition but I'm not sure about the other too. Probably just a design choice.
