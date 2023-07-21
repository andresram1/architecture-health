import {Summary} from "../model/summary.model";
import {AdvancedFinding} from "../model/finding.model";

export const SECURITY_MOCK: Summary<AdvancedFinding> =
  {
    "repo_name": "access-control",
    "scan_date": "03/06/2022",
    "total_files": 6,
    "total_issues": 3,
    "finding_list":
      [
        {
          name: "./stream-dbs-clients/target/classes/META-INF/openapi/openapi.yaml",
          details: [
            {
              line: 1262,
              finding: "It looks like a clear text password was found"
            },
            {
              line: 1263,
              finding: "It looks like a clear text password was found"
            }
          ]
        },
        {
          name: "./stream-dbs-clients/target/yaml/identity/identity-integration-outbound-api-v1.0.2.yaml",
          details: [
            {
              line: 1262,
              finding: "It looks like a clear text password was found"
            },
            {
              line: 1263,
              finding: "It looks like a clear text password was found"
            }
          ]
        },
        {
          name: "./stream-dbs-clients/target/yaml/user-manager/user-manager-client-api-v2.3.0.yaml",
          details: [
            {
              line: 1667,
              finding: "It looks like a clear text password was found"
            },
            {
              line: 1668,
              "finding": "It looks like a clear text password was found"
            }
          ]
        },
        {
          name: "./stream-dbs-clients/target/classes/META-INF/openapi/openapi_2.yaml",
          details: []
        },
        {
          name: "./stream-dbs-clients/target/yaml/identity/identity-integration-outbound-api-v1.0.2_2.yaml",
          details: []
        },
        {
          name: "./stream-dbs-clients/target/yaml/user-manager/user-manager-client-api-v2.3.0_2.yaml",
          details: []
        }
      ]
  }

