<#
.SYNOPSIS
    Compiles real-time CV LaTeX sources (.tex) into production-ready PDFs using MiKTeX XeLaTeX.

.DESCRIPTION
    Compiles English (cv/CV_Hao_Chen.tex) and Traditional Chinese (cv/CV_Hao_Chen_zh.tex)
    using the hao-chen-style layout (Georgia serif + Microsoft JhengHei, 0.8pt dividers,
    #FF4747 location accents).

.PARAMETER Language
    'en', 'zh', or 'all' (default: 'all')

.PARAMETER CleanAux
    If switch is present, cleans up auxiliary files (.aux, .log, .out) after successful compilation.

.EXAMPLE
    .\scripts\compile_cv.ps1
    .\scripts\compile_cv.ps1 -Language en
    .\scripts\compile_cv.ps1 -Language zh
#>

param(
    [ValidateSet('en', 'zh', 'all')]
    [string]$Language = 'all',

    [switch]$CleanAux = $true
)

$ErrorActionPreference = 'Stop'
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
$CvDir = Join-Path $ProjectRoot 'cv'

# 1. Locate XeLaTeX executable
$xelatexPaths = @(
    "C:\Users\J8426\AppData\Local\Programs\MiKTeX\miktex\bin\x64\xelatex.exe",
    "$env:LOCALAPPDATA\Programs\MiKTeX\miktex\bin\x64\xelatex.exe",
    (Get-Command xelatex.exe -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source -First 1)
)

$XeLaTeX = $null
foreach ($p in $xelatexPaths) {
    if ($p -and (Test-Path $p)) {
        $XeLaTeX = $p
        break
    }
}

if (-not $XeLaTeX) {
    Write-Error "XeLaTeX executable was not found. Please ensure MiKTeX is installed."
    exit 1
}

Write-Host "Found XeLaTeX compiler: $XeLaTeX" -ForegroundColor Cyan

# 2. Determine target files
$targets = @()
if ($Language -eq 'en' -or $Language -eq 'all') {
    $targets += @{
        Name = 'English CV'
        Tex = (Join-Path $CvDir 'CV_Hao_Chen.tex')
        Pdf = (Join-Path $CvDir 'CV_Hao_Chen.pdf')
    }
}
if ($Language -eq 'zh' -or $Language -eq 'all') {
    $targets += @{
        Name = 'Traditional Chinese CV'
        Tex = (Join-Path $CvDir 'CV_Hao_Chen_zh.tex')
        Pdf = (Join-Path $CvDir 'CV_Hao_Chen_zh.pdf')
    }
}

# 3. Compile each target
foreach ($t in $targets) {
    Write-Host "`n============================================================" -ForegroundColor Yellow
    Write-Host " Compiling $($t.Name): $($t.Tex)" -ForegroundColor Yellow
    Write-Host "============================================================" -ForegroundColor Yellow

    if (-not (Test-Path $t.Tex)) {
        Write-Warning "Source file not found: $($t.Tex)"
        continue
    }

    $process = Start-Process -FilePath $XeLaTeX `
        -ArgumentList "-interaction=nonstopmode", "-output-directory=`"$CvDir`"", "`"$($t.Tex)`"" `
        -Wait -NoNewWindow -PassThru

    if ($process.ExitCode -eq 0 -and (Test-Path $t.Pdf)) {
        $fileSize = (Get-Item $t.Pdf).Length
        Write-Host "SUCCESS: $($t.Name) compiled successfully -> $($t.Pdf) ($([Math]::Round($fileSize / 1KB, 1)) KB)" -ForegroundColor Green
    } else {
        Write-Error "Compilation failed for $($t.Name) with exit code $($process.ExitCode). Check $($CvDir)\*.log for details."
    }
}

# 4. Clean auxiliary files if requested
if ($CleanAux) {
    Write-Host "`nCleaning up auxiliary files (.aux, .log, .out)..." -ForegroundColor Gray
    Get-ChildItem -Path $CvDir -Include *.aux, *.log, *.out -Recurse | Remove-Item -Force -ErrorAction SilentlyContinue
    Write-Host "Auxiliary files cleaned." -ForegroundColor Gray
}

Write-Host "`nAll CV compilations finished." -ForegroundColor Green

