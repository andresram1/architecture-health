import {Finding} from "./finding.model";

export interface Summary {
  repo_name: string,
  scan_date:  string,
  total_files: number,
  total_issues: number,
  finding_list: Finding[]
}
