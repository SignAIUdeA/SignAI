### Backend SignAI:

Para poder trabajar en este proyecto es necesario usar entornos virtuales, por lo cual escriba los siguientes comandos:

    Para linux:
    python -m venv .env
    source .env/bin/activate

    Para windows: 
    python -m venv .env 
    .env\Scripts\activate
    
Una vez creado el entorno virtual en cualquier sistema operativo, corremos el siguiente comando para instalar las dependencias que el proyecto requiere.

    pip install -r requirements.txt

Para correr el proyecto, ejecute:

    uvicorn main:app --reload
