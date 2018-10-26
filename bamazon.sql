ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test'; 

DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(200) NOT NULL,
  department_name VARCHAR (200) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  stock_quantity INT NOT NULL, 
  PRIMARY KEY (item_id)
) ;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dog costume (t-rex)", "pets", 19.99, 50),
       ("green skittles (apple flavored) 12 oz.", "food and beverages", 5.00, 100),
       ("cat costume (cowboy)", "pets", 12.99, 25),
       ("generic sweater (large)", "clothing", 25.99, 300),
       ("holiday sweater (medium)", "clothing", 22.95, 250),
       ("rainbow socks (2 pair)", "clothing", 5.99, 275),
       ("water kettle", "home and kitchen", 19.50, 100),
       ("large tent", "outdoors", 65.95, 20),
       ("hard-shell laptop case (mac)", "electronic accessories", 16.99, 400),
       ("12 pk. case of austin water", "food and beverages", 3.99, 10);
       
SELECT * FROM products; 