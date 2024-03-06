param([string]$fileName)
tsc $fileName
node ($fileName -replace '\.ts$', '.js')