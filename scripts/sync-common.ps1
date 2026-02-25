<#
.SYNOPSIS
    Update the _common git submodule to the latest commit on its remote.

.DESCRIPTION
    Fetches and merges the latest changes from the upstream
    https://github.com/nilayparikh/_tuts_common.git into _common/.

    Run this after the common repo receives new framework components or
    doc updates and you want to pull them into this tutorial repo.

    After running, review the changes with `git diff --submodule` and
    then commit to pin the new submodule SHA:
        git add _common
        git commit -m "chore: update _common submodule"

.EXAMPLE
    ./scripts/sync-common.ps1
#>

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $PSScriptRoot

Push-Location $ProjectRoot
try {
    Write-Host "`n━━━ Updating _common submodule ━━━" -ForegroundColor Cyan
    git submodule update --remote --merge _common 2>&1 | Write-Host
    Write-Host "`n[OK] _common is up to date" -ForegroundColor Green
    Write-Host "Review changes: git diff --submodule" -ForegroundColor DarkGray
    Write-Host "Commit update:  git add _common && git commit -m 'chore: update _common'" -ForegroundColor DarkGray
} finally {
    Pop-Location
}
