export interface Finding {
  name: string;
  details?: string[];
  advanceFindings?: AdvancedFinding[];
}

export interface AdvancedFinding {
  line: number;
  finding: string;
}
