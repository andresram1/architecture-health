export interface Finding {
  name: string;
  findings?: string[];
  advanceFindings?: AdvancedFinding[];
}

export interface AdvancedFinding {
  line: number;
  finding: string;
}
