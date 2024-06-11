```sql

    CREATE DATABASE admintareas;

    CREATE TABLE tareas (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        descripcion TEXT
    );

```