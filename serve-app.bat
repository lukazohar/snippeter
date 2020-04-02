:: Exectues files that start services needed for MEAN stack

start cmd /k call "./start-files/serve-frontend.bat" 4444
start cmd /k call "./start-files/serve-backend.bat" 5555
start cmd /k call "./start-files/open-code.bat" 6666

exit 0