### Backend SignAI:

Para poder trabajar en este proyecto es necesario usar entornos virtuales, por lo cual escriba los siguientes comandos:

    python -m venv .env

    source .env/bin/activate

    pip install -r requirements.txt

Para correr el proyecto, ejecute:

    uvicorn main:app --reload