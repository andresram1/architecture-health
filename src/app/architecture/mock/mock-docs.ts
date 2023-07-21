
import { Finding } from "../model/finding.model";
import {Summary} from "../model/summary.model";


export const DOCS_MOCK : Summary<string> =
  {
    repo_name: "access-control",
    scan_date:  "03/06/2022",
    total_files: 9,
    total_issues: 6,
    finding_list: [
      {
        "name":"./README.md",
        "details":[]
      },
      {
        "name":"./SECURITY.md",
        "details":[]
      },
      {
        "name":"./stream-transactions/transactions-generator-processor/readme.md",
        "details":[]
      },
      {
        "name":"./stream-approvals/readme.md",
        "details":[
          "No subtitle were found"
        ]
      },
      {
        "name":"./stream-approvals/approvals-bootstrap-task/readme.md",
        "details":[
          "No title were found",
          "No subtitle were found",
          "No code snippet were found",
          "The files doesn't provide enough info about its purpose"
        ]
      },
      {
        "name":"./stream-dbs-clients/readme.md",
        "details":[
          "No subtitle were found",
          "No code snippet were found",
          "The files doesn't provide enough info about its purpose"
        ]
      },
      {
        "name":"./stream-product-catalog/product-catalog-http/readme.md",
        "details":[
          "No code snippet were found",
          "The files doesn't provide enough info about its purpose"
        ]
      },
      {
        "name":"./stream-legal-entity/legal-entity-bootstrap-task/readme.md",
        "details":[
          "No title were found",
          "No subtitle were found",
          "No code snippet were found",
          "The files doesn't provide enough info about its purpose"
        ]
      },
      {
        "name":"./stream-models/product-catalog-model/target/generated-sources/openapi/README.md",
        "details":[
          "No code snippet were found",
          "The files doesn't provide enough info about its purpose"
        ]
      }
    ]
  }



