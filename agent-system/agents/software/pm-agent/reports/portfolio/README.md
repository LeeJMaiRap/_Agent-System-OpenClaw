# Portfolio Dashboard Foundation

This folder contains PM Agent portfolio dashboard snapshots/foundation files.

## Current files

- `portfolio-summary.md` — portfolio-level summary.
- `active-projects-dashboard.md` — active project snapshot.
- `on-hold-projects-dashboard.md` — on-hold project snapshot.
- `stopped-projects-dashboard.md` — stopped project snapshot.
- `archived-projects-dashboard.md` — archived project snapshot.

## Current implementation status

These dashboards are manual/static foundation snapshots, not an automated live dashboard. Some entries reference historical projects that are not present as root `projects/` folders in the current workspace snapshot.

## Intended data source

When project lifecycle folders exist, dashboards should be regenerated from project metadata such as `projects/*/*/project.yaml` plus PM Agent reports/evidence.

## Next work

Build or wire a generator, then reconcile historical dashboard entries with live filesystem project folders.
