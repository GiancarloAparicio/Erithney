import os
import shutil


def sort_images(directory_path, extensions):

    count = 0

    for file in os.listdir(directory_path):

        # Obtiene la extensión del archivo
        extension = os.path.splitext(file)[1].lower()

        if extension in extensions:

            # Obtiene la ruta completa del archivo
            file_path = os.path.join(directory_path, file)

            # Asigna el separador según la extensión
            if extension == ".jpg":
                separator = "_"
            elif extension == ".jpeg":
                separator = "-"
            elif extension == ".mp4":
                separator = "-"
            else: 
                print(f"El archivo {file} no cumple con el criterio de extensión")
                continue

            # Crea la nueva fecha del archivo
            date = file.split(separator)[1]
            year = date[:4]
            month = date[4:6]

            # Crear carpeta, si es que existe lo ignora
            new_folder_path = os.path.join(directory_path, year, month)
            os.makedirs(new_folder_path, exist_ok=True)

            # Mueve el archivo a la nueva carpeta
            new_file_path = os.path.join(new_folder_path, file)
            shutil.move(file_path, new_file_path)

            count += 1

    print(f"Se han movido {count} archivos")
    

DIRECTORY_PATH = "helpers/media"
EXTENSIONS = [".jpg", ".jpeg", ".mp4"]

sort_images(DIRECTORY_PATH, EXTENSIONS)




