export interface Finding<Type> {
  name: string;
  details?: Type[];
  //advanceFindings?: AdvancedFinding[];
}

export interface AdvancedFinding {
  line: number;
  finding: string;
}

//TODO: to validate...
/*
export interface Finding<Type> {
  name: string;
  details?: Type[];

}

export interface AdvancedFinding {
  line: number;
  finding: string;
}


let finding01 = new Finding<string>();
finding01.name = "finding01";
finding01.details = ["01", "02", "03"];

console.log(finding01.name);
console.log(finding01.details);

let finding02 = new Finding<AdvancedFinding>();
finding02.name = "finding02";
finding02.details = [{line: 1, finding: "line 01"}, {line: 2, finding: "line 02"}, {line: 3, finding: "line 03"}];

console.log(finding02.name);
console.log(finding02.details);
*/
