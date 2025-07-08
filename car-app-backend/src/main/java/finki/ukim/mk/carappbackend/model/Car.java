package finki.ukim.mk.carappbackend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String make;

    @Column(nullable = false)
    private String model;

    @Column(nullable = false)
    private Integer year_manufactured;

    @Column(nullable = false)
    private Integer price_in_euros;

    public Car(){}

    public Car(String make, String model, Integer year_manufactured, Integer price_in_euros) {
        this.make = make;
        this.model = model;
        this.year_manufactured = year_manufactured;
        this.price_in_euros = price_in_euros;
    }
}
