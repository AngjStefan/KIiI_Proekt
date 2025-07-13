package finki.ukim.mk.carappbackend.web;

import finki.ukim.mk.carappbackend.model.Car;
import finki.ukim.mk.carappbackend.model.dto.CarDto;
import finki.ukim.mk.carappbackend.service.CarService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = {
    "http://car-app-frontend",
    "http://localhost:5173"
})
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping
    public List<Car> findAll() {
        return carService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> findById(@PathVariable Long id) {
        return carService.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Car> save(@RequestBody CarDto carDto) {
        return carService.save(carDto)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/edit")
    public ResponseEntity<Car> update(@PathVariable Long id, @RequestBody CarDto carDto) {
        return carService.update(id, carDto)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (carService.findById(id).isPresent()) {
            carService.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
