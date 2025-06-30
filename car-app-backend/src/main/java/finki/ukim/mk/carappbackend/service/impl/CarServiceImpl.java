package finki.ukim.mk.carappbackend.service.impl;

import finki.ukim.mk.carappbackend.model.Car;
import finki.ukim.mk.carappbackend.model.dto.CarDto;
import finki.ukim.mk.carappbackend.repository.CarRepository;
import finki.ukim.mk.carappbackend.service.CarService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarServiceImpl implements CarService {

    private final CarRepository carRepository;

    public CarServiceImpl(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public List<Car> findAll() {
        return carRepository.findAll();
    }

    @Override
    public Optional<Car> findById(Long id) {
        return carRepository.findById(id);
    }

    @Override
    public Optional<Car> update(Long id, CarDto car) {
        return carRepository.findById(id)
                .map(existingCar -> {
                    if (car.getMake() != null) {
                        existingCar.setMake(car.getMake());
                    }
                    if (car.getModel() != null) {
                        existingCar.setModel(car.getModel());
                    }
                    if (car.getYear_manufactured() != null) {
                        existingCar.setYear_manufactured(car.getYear_manufactured());
                    }
                    if (car.getPrice_in_euros() != null) {
                        existingCar.setPrice_in_euros(car.getPrice_in_euros());
                    }
                    return carRepository.save(existingCar);
                });

    }

    @Override
    public Optional<Car> save(CarDto car) {
        if (car != null) {
            return Optional.of(carRepository.save(new Car(car.getMake(), car.getModel(), car.getYear_manufactured(), car.getPrice_in_euros())));
        }
        return Optional.empty();

    }

    @Override
    public void deleteById(Long id) {
        carRepository.deleteById(id);
    }
}
