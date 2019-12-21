function score(s, t){
    return (-14.009*s**4+40.075*s**3-47.792*s**2+25.881*s-4.1549) * (-432.794*t**8+2292.462*t**7-4547.893*t**6+4203.463*t**5-1920.123*t**4+608.067*t**3-276.101*t**2+75.967*t);
}

function score_to_grade(grade_number){
    if(grade_number > 6){return "A";}
    else if (grade_number > 5){return "B";}
    else if (grade_number > 4){return "C";}
    else if (grade_number > 3){return "D";}
    else if (grade_number > 2){return "E";}
    else if (grade_number > 1){return "F";}
    else {return "Invalid";}
}

/*

def score_to_grade(grade_number: float) -> str:
    grading_scheme = {'A': 6,
                      'B': 5,
                      'C': 4,
                      'D': 3,
                      'E': 2,
                      'F': 1}
    grade = 'Invalid'
    for key in grading_scheme:
        if grade_number > grading_scheme[key]:
            if grade == 'Invalid':
                grade = key
            break
    return grade

 */