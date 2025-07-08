FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
#ARG JAR_FILE=target/*.jar
#COPY ./target/car-app-backend-0.0.1-SNAPSHOT.jar app.jar
#COPY --from=build /app/target/car-app-backend-0.0.1-SNAPSHOT.jar /app.jar
COPY --from=build /app/target/*.jar /app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
