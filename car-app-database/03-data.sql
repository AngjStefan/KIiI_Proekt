--INSERT INTO cars (make, model, year_manufactured, price_in_euros) VALUES
--('Toyota', 'Corolla', 2020, 18500),
--('Volkswagen', 'Golf', 2018, 15000),
--('Ford', 'Focus', 2019, 16000);

INSERT INTO cars (make, model, year_manufactured, price_in_euros)
SELECT * FROM (
    SELECT 'Toyota', 'Corolla', 2020, 18500
    UNION ALL
    SELECT 'Volkswagen', 'Golf', 2018, 15000
    UNION ALL
    SELECT 'Ford', 'Focus', 2019, 16000
) AS new_cars(make, model, year_manufactured, price_in_euros)
WHERE NOT EXISTS (
    SELECT 1 FROM cars c
    WHERE c.make = new_cars.make
      AND c.model = new_cars.model
      AND c.year_manufactured = new_cars.year_manufactured
      AND c.price_in_euros = new_cars.price_in_euros
);
