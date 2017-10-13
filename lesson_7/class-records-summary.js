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
  var examScore = getStudentExamScore(scoreObj.exams);
  var exerciseScore = getStudentExerciseScore(scoreObj.exercises);
  var totalScore = getStudentTotalScore(examScore, exerciseScore);
  return String(totalScore) + ' (' + gradeLookup(totalScore) + ')';
}

function getStudentExamScore(exams) {
  return exams.reduce(function(sum, examScore) {
    return sum + examScore;
  }) / 4;
}

function getStudentExerciseScore(exercises) {
  return exercises.reduce(function(sum, exerciseScore) {
    return sum + exerciseScore;
  });
}

function getStudentTotalScore(examScore, exerciseScore) {
  return Math.round(examScore * 0.65 + exerciseScore * 0.35);
}

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

function getExamSummary(examData) {
  [0, 1, 2, 3].map(function(examNumber) {
    return {
      average: getExamAverage(examData, examNumber),
      mininum: getExamMinimum(examData, examNumber),
      maximum: getExamMaximum(examData, examNumber),
    };
  });
}

function getExamAverage(exams, number) {
  var scores = getExamMarks(exams, number);
  return scores.reduce(function(sum, mark) {
    return sum + mark;
  }) / exams.length;
}

function getExamMarks(exams, number) {
  return exams.map(function(exam) {
    return exam[number];
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