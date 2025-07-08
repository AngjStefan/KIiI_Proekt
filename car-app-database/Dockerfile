# Use the official PostgreSQL image
FROM postgres:15

# Copy all SQL files into the init directory
COPY *.sql /docker-entrypoint-initdb.d/

# Optional: expose port (for documentation and Docker Compose)
EXPOSE 5432



