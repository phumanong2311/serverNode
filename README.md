Certainly! Here's a compressed version of the steps into a single Markdown block:

```markdown
# Setting up PostgreSQL Database with Docker and Running Schema Creation Script

This guide provides step-by-step instructions on how to set up a PostgreSQL database using Docker, create a database named "warehouse-management", and execute a schema creation script to define tables within the database.

## Prerequisites

Before proceeding, ensure you have Docker installed on your system. You can download and install Docker from [Docker's official website](https://www.docker.com/get-started).

## Steps

1. **Pull PostgreSQL Docker Image**:  
   ```bash
   docker pull postgres
   ```

2. **Run PostgreSQL Container**:  
   ```bash
   docker run --name warehouse-db -e POSTGRES_PASSWORD=YOUR_POSTGRES_PASSWORD -d -p 5432:5432 postgres
   ```

3. **Connect to PostgreSQL**:  
   ```bash
   docker exec -it warehouse-db psql -U postgres
   ```

4. **Create Database**:  
   ```sql
   CREATE DATABASE warehouse_management;
   ```

5. **Copy SQL Script to Container**:  
   ```bash
   docker cp /path/to/create_table_script.sql warehouse-db:/create_table_script.sql
   ```

6. **Execute SQL Script**:  
   ```bash
   docker exec -it warehouse-db psql -U postgres -d warehouse_management -f create_table_script.sql
   ```

Now, you have successfully set up a PostgreSQL database with Docker and executed the schema creation script to define tables within the database.
```