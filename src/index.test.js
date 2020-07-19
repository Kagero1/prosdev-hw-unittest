const { gradeClassifier } = require('./index');

describe('Scenario', () => {
  it('When the grade is between 95.00 and 100, then it should display a message "O - Outstanding"', () => {
    const grade = gradeClassifier(100);
    expect(grade).toBe("O - Outstanding")
  });
  it('When the grade is between 90.00 and 94.99, then it should display a message "V - Very Good"', () => {
    const grade = gradeClassifier(92);
    expect(grade).toBe("V - Very Good")
  });
  it('When the grade is between 85.00 and 89.99, then it should display a message "G - Good"', () => {
    const grade = gradeClassifier(87);
    expect(grade).toBe("G - Good")
  });
  it('When the grade is between 80.00 and 84.99, then it should display a message "S - Satisfactory"', () => {
    const grade = gradeClassifier(82);
    expect(grade).toBe("S - Satisfactory")
  });
  it('When the grade is between 75.00 and 79.99, then it should display a message "N - Needs Improvement"', () => {
    const grade = gradeClassifier(77);
    expect(grade).toBe("N - Needs Improvement")
  });
  it('When the grade is below 74.99, then it should display a message "D - Did not Meet Expectation"', () => {
    const grade = gradeClassifier(73);
    expect(grade).toBe("D - Did not Meet Expectation")
  });
});
