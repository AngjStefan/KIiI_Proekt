package finki.ukim.mk.carappbackend.service;

import finki.ukim.mk.carappbackend.model.Car;
import finki.ukim.mk.carappbackend.model.dto.CarDto;

import java.util.List;
import java.util.Optional;

public interface CarService {

    List<Car> findAll();

    Optional<Car> findById(Long id);

    Optional<Car> update(Long id, CarDto car);

    Optional<Car> save(CarDto car);

    void deleteById(Long id);
}
