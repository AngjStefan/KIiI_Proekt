package finki.ukim.mk.carappbackend.repository;

import finki.ukim.mk.carappbackend.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
}
