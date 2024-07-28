$ErrorActionPreference = 'Stop'

$packageName = 'ChatALL'
$toolsDir = "$(Split-Path -parent $MyInvocation.MyCommand.Definition)"
$exePath = Join-Path $toolsDir 'ChatALL.exe'

Install-ChocolateyShortcut -shortcutFilePath "$env:ChocolateyBinRoot\ChatALL.lnk" -targetPath $exePath
