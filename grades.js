let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// let numbers = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let F = [];
let D = [];
let C = [];
let B = [];
let A = [];

function giveGrades (grade){
	for (let i = 0; i < scores.length; i++){
		let currentGrade = grade[i];
			if (currentGrade <= 60 ){
			F.push(currentGrade);
			}else if(currentGrade <= 70){
			D.push(currentGrade);
			}else if(currentGrade <= 80){
			C.push(currentGrade);
			}else if(currentGrade <= 90){
			B.push(currentGrade);
			}else {
			A.push(currentGrade);
		}}};
		
		function max (scores) {
			 return Math.max.apply(null, scores); }
 console.log ( max (scores) );

 	function min (scores) {
			 return Math.min.apply(null, scores); }
 console.log ( min (scores) );

giveGrades(scores);
gradeF = F.length;
gradeD = D.length;
gradeC = C.length;
gradeB = B.length;
gradeA = A.length;

console.log(`there are ${gradeF} F's`);
console.log(`there are ${gradeD} D's `);
console.log(`there are ${gradeC} C's `);
console.log(`there are ${gradeB} B's `);
console.log(`there are ${gradeA} A's `);
// console.log(`bottom scrore${}`);
// console.log(`top score ${topScore}`);


