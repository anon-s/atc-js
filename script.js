// Main Logic Start

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

function st_to_grade(s, t){
    return score_to_grade(score(s, t));
}

function get_s(length_of_skirt, length_of_waist_to_knee){
    return length_of_skirt / length_of_waist_to_knee;
}

function get_t(length_of_gap, length_of_socks){
    return t = length_of_gap / length_of_socks;
}

function four_to_score(length_of_skirt, length_of_waist_to_knee, length_of_gap, length_of_socks){
    let s = get_s(length_of_skirt, length_of_waist_to_knee);
    let t = get_t(length_of_gap, length_of_socks);
    return score(s, t);
}

function four_to_grade(length_of_skirt, length_of_waist_to_knee, length_of_gap, length_of_socks){
    let score = four_to_score(length_of_skirt, length_of_waist_to_knee, length_of_gap, length_of_socks);
    return score_to_grade(score);
}

// Main Logic Stop

// Web Logic Start
