package finki.ukim.mk.carappbackend.model.dto;

import lombok.Data;

@Data
public class CarDto {

    private String make;

    private String model;

    private Integer year_manufactured;

    private Integer price_in_euros;

    public CarDto(){}

    public CarDto(String make, String model, Integer year_manufactured, Integer price_in_euros) {
        this.make = make;
        this.model = model;
        this.year_manufactured = year_manufactured;
        this.price_in_euros = price_in_euros;
    }
}
