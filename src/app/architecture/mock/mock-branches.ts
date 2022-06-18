import {Summary} from "../model/summary.model";

export const BRANCHES : Summary =
  {
    repo_name: "access-control",
    scan_date: "03/06/2022",
    total_files: 9,
    total_issues: 6,
    finding_list: [
      {name: "origin/HEAD -> origin/master", findings: []},
      {name: "origin/bugfix/Issue46", findings: []},
      {name: "origin/bugfix/cleanup", findings: []},
      {name: "origin/bugfix/delete-legal-entity", findings: []},
      {name: "origin/bugfix/dependency-cleanup", findings: []},
      {name: "origin/bugfix/empty-job-roles", findings: []},
      {name: "origin/bugfix/fix-linkLegalEntityToRealm-multiple-execution", findings: []},
      {name: "origin/bugfix/fix_leak_in_web_client", findings: []},
      {name: "origin/bugfix/improve-user-service-creation-errors", findings: []},
      {name: "origin/bugfix/log-levels", findings: []},
      {name: "origin/bugfix/mixed-up-job-roles", findings: []},
      {
        name: "origin/dependabot/maven/stream-sdk/stream-parent/stream-test-support/junit-junit-4.13.1",
        findings: ["This branch doesn't follow a proper naming convention"]
      },
      {
        name: "origin/dependabot/maven/stream-sdk/stream-starter-parents/stream-sdk-starter-core/org.hibernate.validator-hibernate-validator-6.0.20.Final",
        findings: ["This branch doesn't follow a proper naming convention"]
      },
      {name: "origin/develop", findings: []},
      {name: "origin/feature/add-transaction-module", findings: []},
      {name: "origin/feature/addSupportForSingleSAandCreatorLE", findings: []},
      {name: "origin/feature/add_additions", findings: []},
      {name: "origin/feature/add_product_catalog_client", findings: []},
      {name: "origin/feature/add_service_agreement_additions", findings: []},
      {name: "origin/feature/backbase-bom-2021.09", findings: []},
      {name: "origin/feature/compositions-api-renaming", findings: []},
      {name: "origin/feature/handle-partial-product-error", findings: []},
      {name: "origin/feature/ingestion_mode_config", findings: []},
      {name: "origin/feature/ingestioncursor", findings: []},
      {name: "origin/feature/json-logging-support", findings: []},
      {name: "origin/feature/le-to-realm-linking", findings: []},
      {name: "origin/feature/legal-entity-composition-upgrade", findings: []},
      {name: "origin/feature/product-catalog-upgrade", findings: []},
      {name: "origin/feature/product-composition", findings: []},
      {name: "origin/feature/realm-linking", findings: []},
      {name: "origin/feature/remove-incorrect-boat-plugin-version", findings: []},
      {name: "origin/feature/streams-v3", findings: []},
      {name: "origin/feature/transaction-compositions", findings: []},
      {name: "origin/feature/update-product-ingestion-typo", findings: []},
      {name: "origin/feature/upgrade-from-master-mar2022", findings: []},
      {name: "origin/hotfix/2.34.1-add-CheckImageAvialbility-property", findings: []},
      {name: "origin/hotfix/delete_encrypt_values", findings: []},
      {name: "origin/master", findings: []},
      {name: "origin/support/2.39.x", findings: []},
      {name: "test", findings: ["This branch doesn't follow a proper naming convention", "Name is too short"]}
    ]
  };
