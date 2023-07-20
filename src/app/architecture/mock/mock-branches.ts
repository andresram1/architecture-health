import {Summary} from "../model/summary.model";

export const BRANCHES : Summary =
  {
    repo_name: "access-control",
    scan_date: "03/06/2022",
    total_files: 9,
    total_issues: 6,
    finding_list: [
      {name: "origin/HEAD -> origin/master", details: []},
      {name: "origin/bugfix/Issue46", details: []},
      {name: "origin/bugfix/cleanup", details: []},
      {name: "origin/bugfix/delete-legal-entity", details: []},
      {name: "origin/bugfix/dependency-cleanup", details: []},
      {name: "origin/bugfix/empty-job-roles", details: []},
      {name: "origin/bugfix/fix-linkLegalEntityToRealm-multiple-execution", details: []},
      {name: "origin/bugfix/fix_leak_in_web_client", details: []},
      {name: "origin/bugfix/improve-user-service-creation-errors", details: []},
      {name: "origin/bugfix/log-levels", details: []},
      {name: "origin/bugfix/mixed-up-job-roles", details: []},
      {
        name: "origin/dependabot/maven/stream-sdk/stream-parent/stream-test-support/junit-junit-4.13.1",
        details: ["This branch doesn't follow a proper naming convention"]
      },
      {
        name: "origin/dependabot/maven/stream-sdk/stream-starter-parents/stream-sdk-starter-core/org.hibernate.validator-hibernate-validator-6.0.20.Final",
        details: ["This branch doesn't follow a proper naming convention"]
      },
      {name: "origin/develop", details: []},
      {name: "origin/feature/add-transaction-module", details: []},
      {name: "origin/feature/addSupportForSingleSAandCreatorLE", details: []},
      {name: "origin/feature/add_additions", details: []},
      {name: "origin/feature/add_product_catalog_client", details: []},
      {name: "origin/feature/add_service_agreement_additions", details: []},
      {name: "origin/feature/backbase-bom-2021.09", details: []},
      {name: "origin/feature/compositions-api-renaming", details: []},
      {name: "origin/feature/handle-partial-product-error", details: []},
      {name: "origin/feature/ingestion_mode_config", details: []},
      {name: "origin/feature/ingestioncursor", details: []},
      {name: "origin/feature/json-logging-support", details: []},
      {name: "origin/feature/le-to-realm-linking", details: []},
      {name: "origin/feature/legal-entity-composition-upgrade", details: []},
      {name: "origin/feature/product-catalog-upgrade", details: []},
      {name: "origin/feature/product-composition", details: []},
      {name: "origin/feature/realm-linking", details: []},
      {name: "origin/feature/remove-incorrect-boat-plugin-version", details: []},
      {name: "origin/feature/streams-v3", details: []},
      {name: "origin/feature/transaction-compositions", details: []},
      {name: "origin/feature/update-product-ingestion-typo", details: []},
      {name: "origin/feature/upgrade-from-master-mar2022", details: []},
      {name: "origin/hotfix/2.34.1-add-CheckImageAvialbility-property", details: []},
      {name: "origin/hotfix/delete_encrypt_values", details: []},
      {name: "origin/master", details: []},
      {name: "origin/support/2.39.x", details: []},
      {name: "test", details: ["This branch doesn't follow a proper naming convention", "Name is too short"]}
    ]
  };
