DROP DATABASE IF EXISTS Restaurant;
CREATE DATABASE Restaurant;
USE Restaurant;

CREATE TABLE Food (
    foodId INT PRIMARY KEY AUTO_INCREMENT,
    foodName VARCHAR(45) NOT NULL,
    foodSize VARCHAR(45) NOT NULL,
    foodPrice DECIMAL(45) NOT NULL,
    foodDescription VARCHAR(200) NOT NULL
) Engine=InnoDB;

CREATE TABLE Drink (
    drinkId INT PRIMARY KEY AUTO_INCREMENT,
    drinkName VARCHAR(45) NOT NULL,
    drinkSize VARCHAR(45) NOT NULL,
    drinkPrice DECIMAL(45) NOT NULL,
    drinkDescription VARCHAR(200) NOT NULL
) Engine=InnoDB;

CREATE TABLE Employee (
    employeeId INT AUTO_INCREMENT,
    employeeName VARCHAR(45) NOT NULL,
    employeePosition VARCHAR(45) NOT NULL,
    employeePhone VARCHAR(45) NOT NULL,
    employeePasscode VARCHAR(45) NOT NULL,

    PRIMARY KEY (employeeId, employeePasscode)
) Engine=InnoDB;

CREATE TABLE EmployeeAccount(
    employeeId INT AUTO_INCREMENT,
    employeePasscode VARCHAR(45) NOT NULL,
    employeePasscodePassword VARCHAR(200) NOT NULL,

    FOREIGN KEY (employeeId,employeePasscode) REFERENCES Employee(employeeId,employeePasscode) ON UPDATE CASCADE ON DELETE CASCADE
) Engine=InnoDB;

CREATE TABLE Seat (
    seatId INT PRIMARY KEY AUTO_INCREMENT, 
    seatName VARCHAR(45) NOT NULL,
    seatOccupied TINYINT(1) NOT NULL
) Engine=InnoDB;

CREATE TABLE Orders(
    orderId INT PRIMARY KEY AUTO_INCREMENT,
    seatId INT NOT NULL ,
    employeeId INT NOT NULL,
    orderTime DATETIME NOT NULL,
    totalPrice DECIMAL(65) NOT NULL,
    orderPaid TINYINT(1) NOT NULL,

    FOREIGN KEY (seatId) REFERENCES Seat(seatId) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (employeeId) REFERENCES Employee(employeeId) ON UPDATE CASCADE ON DELETE CASCADE
) Engine=InnoDB;

CREATE TABLE FoodOrder(
    foodOrderId INT PRIMARY KEY AUTO_INCREMENT, 
    orderId INT NOT NULL,
    foodId INT NOT NULL,
    foodQuantity INT NOT NULL,
    totalPrice DECIMAL(65) NOT NULL,

    FOREIGN KEY (orderId) REFERENCES Orders(orderId) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (foodId) REFERENCES Food(foodId) ON UPDATE CASCADE ON DELETE CASCADE
) Engine=InnoDB;

CREATE TABLE DrinkOrder(
    drinkOrderId INT PRIMARY KEY AUTO_INCREMENT,
    orderId INT NOT NULL,
    drinkId INT NOT NULL,
    drinkQuantity INT NOT NULL,
    totalPrice DECIMAL(65) NOT NULL,

    FOREIGN KEY (orderId) REFERENCES Orders(orderId) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (drinkId) REFERENCES Drink(drinkId) ON UPDATE CASCADE ON DELETE CASCADE
) Engine=InnoDB;


/*Food Data*/
insert into Food (foodId, foodName, foodSize, foodPrice, foodDescription) values (1,'Bang Bang G Salad', 'R', 8.00, 'chicken breast, onion, cucumber, and jelly fish salad w/ sesame dressing');
insert into Food (foodId, foodName, foodSize, foodPrice, foodDescription) values (2,'Edamame_Samll', 'S', 5.00, 'simply boiled and sea salted');
insert into Food (foodId, foodName, foodSize, foodPrice, foodDescription) values (3,'Edamame_Regular', 'R', 8.00, 'simply boiled and sea salted');
insert into Food (foodId, foodName, foodSize, foodPrice, foodDescription) values (4,'Ingen Fries_Small', 'S', 6.00, 'green bean tempura served w/ side japanese mayo');
insert into Food (foodId, foodName, foodSize, foodPrice, foodDescription) values (5,'Ingen Fries_Regular', 'R', 10.00, 'green bean tempura served w/ side japanese mayo');
insert into Food (foodId, foodName, foodSize, foodPrice, foodDescription) values (6,'Cauliflower Karaage_Small', 'S', 7.00, '“konbu” marinated cauliflower karaage w/ side japanese mayo');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (7,'Cauliflower Karaage_Regular', 'R', 12.00, '“konbu” marinated cauliflower karaage w/ side japanese mayo');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (8,'Mekyabetsu', 'R', 7.00, 'deep-fried brussel sprouts w/ garlic salt');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (9,'Nasu Agebitashi', 'R', 6.00, 'ginger soy marinated eggplant topped with scallion and "shichimi" pepper');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (10,'Nankotsu_Small', 'S', 6.00, 'deep-fried chicken knee cartilage with side salta&pepper');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (11,'Nankotsu_Regular', 'R', 10.00, 'deep-fried chicken knee cartilage with side salta&pepper');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (12,'Miso Calamari_Small', 'S', 7.00, 'deep-fried "ume" marinated squid with black "haccho-miso" sauce');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (13,'Miso Calamari_Regular', 'R', 12.00, 'deep-fried "ume" marinated squid with black "haccho-miso" sauce');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (14,'Chicken Karaage_5pcs', '5pcs', 8.00, 'deep-fried chicken thigh with side garlic mayo');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (15,'Chicken Karaage_10pcs', '10pcs', 14.00, 'deep-fried chicken thigh with side garlic mayo');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (16,'Chicken Karaage_15pcs', '15pcs', 19.00, 'deep-fried chicken thigh with side garlic mayo');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (17,'Chicken Karaage_20pcs', '20pcs', 23.00, 'deep-fried chicken thigh with side garlic mayo');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (18,'Tontoro_Small', 'S', 9.00, 'sea salted grilled pork cheek with yuzu ponzu');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (19,'Tontoro_Regular', 'R', 16.00, 'sea salted grilled pork cheek with yuzu ponzu');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (20,'Tuna Tataki_Small', 'S', 10.00, 'ponzu dressed seared tuna sashimi on sliced onions, topped with scallion & garlic chips');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (21,'Tuna Tataki_Regular', 'R', 18.00, 'ponzu dressed seared tuna sashimi on sliced onions, topped with scallion & garlic chips');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (22,'Ebi Mayo_Small', 'S', 10.00, 'prawn tempura with chilli mayo');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (23,'Ebi Mayo_Regular', 'R', 18.00, 'prawn tempura with chilli mayo');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (24,'Takoyaki', 'R', 6.50, 'deep fried octopus battered balls with tonkatsu sauce, mustard mayo, seaweed, and bonito flakes');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (25,'Agedashi Mozzarella', 'R', 7.00, '"agedashi" mozzarella in dashi broth, topped with nori seaweed&green onion');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (26,'Duck Breast cha-shu', 'R', 12.00, 'roasted "Cha-Shu" duck breast w/ seared miso mayo');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (27,'DBeef Tongue', 'R', 14.00, '"garlic, soy, and butter pan-fried beef tongue steak');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (28,'Saba Shima Sushi', 'R', 10.00, '8 pieces of seared pickled mackerel sushi served with Japanese mustard and shiso');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (29,'Salmon Oshi Sushi', 'R', 11.00, 'six pieces of block shaped, cajun seared sockeye salmon sushi topped with sliced onion & ponzu');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (30,'Kimchi Fried Rice', 'R', 11.00, 'spicy fried rice with pork, kimchi, and egg, topped with scallion and seaweed');
insert into Food (foodId, foodName, foodSize, foodPrice,foodDescription) values (31,'Yaki Udon', 'R', 12.00, 'pan fried udon noodles with beef, mushrooms, and scallion, and topped with bonito flakes and seaweed');

/*Drink Data*/
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (1,'Guuud! Ale', 'R', 12.50, 'Our Guuud! Ale is an extra pale ale made by Russel Brewery Company exclusively for Guu, crafted from four types of malted barley and two hop varieties. 5%ABV 650ml');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (2,'Garden Rice Lager by Steel & Oak_Pint', 'Pint', 6.50, 'Our Rice Lager has been crafted with the highest quality ingredients including rice, grains and hops to ensure a delicate balance of flavors. It drinks smooth and finishes dry and crisp. ABV 4.5%');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (3,'Garden Rice Lager by Steel & Oak_Mega', 'Mega', 10.00, 'Our Rice Lager has been crafted with the highest quality ingredients including rice, grains and hops to ensure a delicate balance of flavors. It drinks smooth and finishes dry and crisp. ABV 4.5%');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (4,'Garden Rice Lager by Steel & Oak_Pitcher', 'Pitcher', 20.00, 'Our Rice Lager has been crafted with the highest quality ingredients including rice, grains and hops to ensure a delicate balance of flavors. It drinks smooth and finishes dry and crisp. ABV 4.5%');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (5,'Bomber Brewery Pixie Cut Pale Ale_Pint', 'Pint', 7.50, 'Laid back malts and hopped, this English West Coast hybrid style is a light pale ale with a moderate bitterness. ABV 5.0% IBU 25');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (6,'Bomber Brewery Pixie Cut Pale Ale_Mega', 'Mega', 11.50, 'Laid back malts and hopped, this English West Coast hybrid style is a light pale ale with a moderate bitterness. ABV 5.0% IBU 25');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (7,'Bomber Brewery Pixie Cut Pale Ale_Pitcher', 'Pitcher', 23.00, 'Laid back malts and hopped, this English West Coast hybrid style is a light pale ale with a moderate bitterness. ABV 5.0% IBU 25');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (8,'Desert Hills Merlot 2016_5oz', '5oz_Glass', 9.50, 'Desert Hills Merlot 2016');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (9,'Desert Hills Merlot 2016_Bottle', 'Bottle', 45.00, 'Desert Hills Merlot 2016');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (10,'Kettle Valley Pinot Noir_5oz', '5oz_Glass', 10.50, 'Kettle Valley Pinot Noir');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (11,'Kettle Valley Pinot Noir_Bottle', 'Bottle', 50.00, 'Kettle Valley Pinot Noir');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (12,'House Sake_Cold', '10oz House Cold', 9.00, 'House Sake');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (13,'House Sake_Hot', '10oz House Hot', 9.00, 'House Sake');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (14,'House Sake_60oz_Cold', '60oz House Cold', 60.00, 'House Sake');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (15,'NIKKA Coffey Grain_1oz', 'R', 10.50, '1oz Nikka C.Grain');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (16,'NIKKA Coffey Grain_2oz', 'R', 19.50, '2oz Nikka C.Grain');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (17,'Macallan Gold Double Cask_1oz', 'R', 9.50, '1oz Macallan');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (18,'Macallan Gold Double Cask_2oz', 'R', 16.50, '1oz Macallan');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (19,'Makers Mark_1oz', 'R', 7.50, '1oz Makers Mark');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (20,'Makers Mark_2oz', 'R', 12.50, '1oz Makers Mark');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (21,'Jameson_1oz', 'R', 6.50, '1oz Jameson');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (22,'Jameson_2oz', 'R', 10.50, '1oz Jameson');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (23,'Jack Daniels_1oz', 'R', 6.00, '1oz Jack Daniels');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (24,'Jack Daniels_2oz', 'R', 9.50, '1oz Jack Daniels');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (25,'Crown Royal_1oz', 'R', 5.50, '1oz Crown Royal');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (26,'Crown Royal_2oz', 'R', 8.50, '1oz Crown Royal');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (27,'Frozen Sake Bellini', 'R', 10.00, 'sake, peach puree & soda');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (28,'Frozen Moscow Mule', 'R', 10.00, 'vodka & ginger beer in a traditional copper mug');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (29,'Guuud! Caesar_1oz', 'R', 8.00, 'vodka, clamato, yuzu jalapeno, worcester sauce, garnished with green bean tempura with 1oz Guuud! Ceasar');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (30,'Guuud! Caesar_2oz', 'R', 11.00, 'vodka, clamato, yuzu jalapeno, worcester sauce, garnished with green bean tempura with 2oz Guuud! Ceasar');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (31,'Melon Soda Float_1oz', 'R', 8.00, 'melon liqueur, 7up & sake ice cream with 1oz Melon Soda Float');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (32,'Melon Soda Float_2oz', 'R', 11.00, 'melon liqueur, 7up & sake ice cream with 2oz Melon Soda Float');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (33,'Yuzu Collins_1oz', 'R', 8.00, 'gin, yuzu syrup, lemon juice & tonic with 1oz Yuzu Collins');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (34,'Yuzu Collins_2oz', 'R', 11.00, 'gin, yuzu syrup, lemon juice & tonic with 2oz Yuzu Collins');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (35,'Matcha Lua Milk_1oz', 'R', 8.00, 'kahlua, milk & matcha green tea with 1oz Matcha Lua Milk');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (36,'Matcha Lua Milk_2oz', 'R', 11.00, 'kahlua, milk & matcha green tea with 2oz Matcha Lua Milk');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (37,'Strawberry Season_1oz', 'R', 8.00, 'raspberry liqueur, peach liqueur, strawberry puree & tonic with 1oz Strawberry Season');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (38,'Strawberry Season_2oz', 'R', 11.00, 'raspberry liqueur, peach liqueur, strawberry puree & tonic with 2oz Strawberry Season');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (39,'Snow White_1oz', 'R', 8.00, 'lychee liqueur, calpico & ramune with 1oz Snow White');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (40,'Snow White_2oz', 'R', 11.00, 'lychee liqueur, calpico & ramune with 2oz Snow White');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (41,'Last Samurai_1oz', 'R', 8.00, 'tan taka tan, ramune, sour plum "ume" & shiso
MORE with 1oz Last Samurai');
insert into Drink (drinkId, drinkName, drinkSize, drinkPrice, drinkDescription) values (42,'Last Samurai_2oz', 'R', 11.00, 'ltan taka tan, ramune, sour plum "ume" & shiso
MORE with 2oz Last Samurai');

/*Employee Data*/
insert into Employee (employeeId, employeeName, employeePosition, employeePhone, employeePasscode)values(1, 'Yasu', 'Owner', '000-000-0000', '0000');
insert into Employee (employeeId, employeeName, employeePosition, employeePhone, employeePasscode)values(2, 'Tomo', 'Manager', '111-111-1111', '1111');
insert into Employee (employeeId, employeeName, employeePosition, employeePhone, employeePasscode)values(3, 'Hiro', 'Cook', '222-222-2222', '2222');
insert into Employee (employeeId, employeeName, employeePosition, employeePhone, employeePasscode)values(4, 'Robert', 'Cook', '333-333-3333', '3333');
insert into Employee (employeeId, employeeName, employeePosition, employeePhone, employeePasscode)values(5, 'Yuhei', 'Cook', '111-111-1111', '4444');
insert into Employee (employeeId, employeeName, employeePosition, employeePhone, employeePasscode)values(6, 'Bryce', 'Cook', '555-555-5555', '5555');
insert into Employee (employeeId, employeeName, employeePosition, employeePhone, employeePasscode)values(7, 'Shun', 'Cook', '666-666-6666', '6666');
insert into Employee (employeeId, employeeName, employeePosition, employeePhone, employeePasscode)values(8, 'Jason', 'Server', '777-777-7777', '7777');
insert into Employee (employeeId, employeeName, employeePosition, employeePhone, employeePasscode)values(9, 'Satomi', 'Server', '888-888-8888', '8888');
insert into Employee (employeeId, employeeName, employeePosition, employeePhone, employeePasscode)values(10, 'Yoko', 'Server', '999-999-9999', '9999');

/*EmployeeAccount Data
Use SHA256 
*/
insert into EmployeeAccount (employeeId,employeePasscode, employeePasscodePassword) values (1,'0000','9af15b336e6a9619928537df30b2e6a2376569fcf9d7e773eccede65606529a0');
insert into EmployeeAccount (employeeId,employeePasscode, employeePasscodePassword) values (2,'1111','0ffe1abd1a08215353c233d6e009613e95eec4253832a761af28ff37ac5a150c');
insert into EmployeeAccount (employeeId,employeePasscode, employeePasscodePassword) values (3,'2222','edee29f882543b956620b26d0ee0e7e950399b1c4222f5de05e06425b4c995e9');
insert into EmployeeAccount (employeeId,employeePasscode, employeePasscodePassword) values (4,'3333','318aee3fed8c9d040d35a7fc1fa776fb31303833aa2de885354ddf3d44d8fb69');
insert into EmployeeAccount (employeeId,employeePasscode, employeePasscodePassword) values (5,'4444','79f06f8fde333461739f220090a23cb2a79f6d714bee100d0e4b4af249294619');
insert into EmployeeAccount (employeeId,employeePasscode, employeePasscodePassword) values (6,'5555','c1f330d0aff31c1c87403f1e4347bcc21aff7c179908723535f2b31723702525');
insert into EmployeeAccount (employeeId,employeePasscode, employeePasscodePassword) values (7,'6666','d7697570462f7562b83e81258de0f1e41832e98072e44c36ec8efec46786e24e');
insert into EmployeeAccount (employeeId,employeePasscode, employeePasscodePassword) values (8,'7777','41c991eb6a66242c0454191244278183ce58cf4a6bcd372f799e4b9cc01886af');
insert into EmployeeAccount (employeeId,employeePasscode, employeePasscodePassword) values (9,'8888','2926a2731f4b312c08982cacf8061eb14bf65c1a87cc5d70e864e079c6220731');
insert into EmployeeAccount (employeeId,employeePasscode, employeePasscodePassword) values (10,'9999','888df25ae35772424a560c7152a1de794440e0ea5cfee62828333a456a506e05');



/*Seat Data*/
insert into Seat (seatId, seatName, seatOccupied) value (1, 'Z1',1);
insert into Seat (seatId, seatName, seatOccupied) value (2, 'Z2',1);
insert into Seat (seatId, seatName, seatOccupied) value (3, 'Z3',1);
insert into Seat (seatId, seatName, seatOccupied) value (4, 'T1',0);
insert into Seat (seatId, seatName, seatOccupied) value (5, 'T2',0);
insert into Seat (seatId, seatName, seatOccupied) value (6, 'T3',0);
insert into Seat (seatId, seatName, seatOccupied) value (7, 'T4',0);
insert into Seat (seatId, seatName, seatOccupied) value (8, 'T5',0);
insert into Seat (seatId, seatName, seatOccupied) value (9, 'M1',0);
insert into Seat (seatId, seatName, seatOccupied) value (10, 'M2',0);
insert into Seat (seatId, seatName, seatOccupied) value (11, 'M3',0);
insert into Seat (seatId, seatName, seatOccupied) value (12, 'M4',0);
insert into Seat (seatId, seatName, seatOccupied) value (13, 'P1',0);
insert into Seat (seatId, seatName, seatOccupied) value (14, 'P2',0);
insert into Seat (seatId, seatName, seatOccupied) value (15, 'P3',0);
insert into Seat (seatId, seatName, seatOccupied) value (16, 'P4',0);
insert into Seat (seatId, seatName, seatOccupied) value (17, 'P5',0);
insert into Seat (seatId, seatName, seatOccupied) value (18, 'P6',0);
insert into Seat (seatId, seatName, seatOccupied) value (19, 'P7',0);
insert into Seat (seatId, seatName, seatOccupied) value (20, 'P8',0);
insert into Seat (seatId, seatName, seatOccupied) value (21, 'P9',0);
insert into Seat (seatId, seatName, seatOccupied) value (22, 'P10',0);

/*Orders Data*/
/*insert into Orders (orderId, seatId, employeeId, orderTime, totalPrice, orderPaid) values (1,1,1,'2020-09-28',8.00,0);*/

/*FoodOrder Data */
/*insert into FoodOrder (foodOrderId, orderId, foodId, foodQuantity, totalPrice) values(1,1,1,1,8.00);*/