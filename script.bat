@echo off
set "imagem=%~dp0fundo.png"

:: Verifica se a imagem existe na mesma pasta
if not exist "%imagem%" (
    echo Erro: O arquivo fundo.png nao foi encontrado na mesma pasta do script.
    pause
    exit
)

:: Altera o Papel de Parede (Registro do Usuário)
:: Style 10 = Preencher (Fill) | Tile 0 = Nao repetir
reg add "HKEY_CURRENT_USER\Control Panel\Desktop" /v Wallpaper /t REG_SZ /d "%imagem%" /f
reg add "HKEY_CURRENT_USER\Control Panel\Desktop" /v WallpaperStyle /t REG_SZ /d 10 /f
reg add "HKEY_CURRENT_USER\Control Panel\Desktop" /v TileWallpaper /t REG_SZ /d 0 /f

:: Forca a atualizacao do sistema
RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters

:: Reinicia o Windows Explorer para aplicar visualmente
echo Atualizando area de trabalho...
taskkill /f /im explorer.exe
start explorer.exe

echo Concluido! A imagem foi definida para preencher a tela.
pause