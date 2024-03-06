param([string]$fileName)
$filePath = Resolve-Path $fileName
tsc $filePath
node ($filePath -replace '\.ts$', '.js')