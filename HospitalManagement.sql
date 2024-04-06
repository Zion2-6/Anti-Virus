CREATE DATABASE IF NOT EXISTS hospitalmanagement;
CREATE TABLE user(
	user_id INT NOT NULL AUTO_INCREMENT,
    user_role VARCHAR(12),
    username VARCHAR(20) NOT NULL,
	user_password VARCHAR(80) NOT NULL,
    email VARCHAR(50),
    first_name VARCHAR(20),
    last_name VARCHAR(50),
    phone_number CHAR(10),
    date_of_birth DATE,
    age TINYINT UNSIGNED,
    street_address VARCHAR(50),
    state_address CHAR(2),
    zipcode_address VARCHAR(10),
    PRIMARY KEY (user_id)
);
INSERT INTO user (user_id, user_role, username, user_password, email, first_name, last_name, phone_number, date_of_birth, age, street_address, state_address, zipcode_address) VALUES
(1, 'Patient', 'leleponce', md5('dreamcatcher123'), 'leleponce@gmail.com', 'Lele', 'Ponce', '7708224821','2000-06-29', 23, '1589 Sugarhill Rd, Buford', 'GA', '30054'),
(2, 'Patient', 'billybob', md5('dolphin2456'), 'billybob123@gmail.com', 'Billy', 'Bob', '9119119119','2000-01-22', 24, '1676 Sunside Valley, Gainesville', 'GA','38888'),
(3,'Patient', 'tiffanybrooks', md5('iguana54o'), 'tiffanybb33@gmail.com', 'Tiffany', 'Brooks', '2342345454','1998-04-22', 25, '1999 Margate Dr, Sandy Springs', 'GA','30102'),
(4,'Doctor', 'daphenehiggs', md5('theweeknd8989'), 'daphene_pizza45@gmail.com', 'Daphene', 'Higgs', '1234567899','1976-09-23', 47, '1892 Hillside Rd, Lawrenceville', 'GA',  '31589'),
(5, 'Patient', 'scarlett45_v', md5('landlineloner1'), 'scarletletter8@gmail.com', 'Scarlett', 'Rose', '8888198492','1960-01-01', 64, '1200 Principal Ct, Peachtree Corners', 'GA','30067'),
(6, 'Receptionist', 'tylerfibbs', md5('personalrecp104'), 'tylerfibbs29@gmail.com', 'Tyler', 'Fibbs', '2435556789','1990-12-25', 33, '1988 Hasdale Ct, San Antonio', 'TX','41522'),
(7, 'Doctor', 'jakesmith', md5('doctorsmithson1'), 'jake_smith@gmail.com', 'Jake', 'Smith', '2923334444','1990-12-25', 33, '1988 Hasdale Ct, San Antonio', 'TX','41522'),
(8, 'Doctor', 'lesliemaxwell', md5('purpledragonfruit2'), 'leslie_maxwell22@gmail.com', 'Lesie', 'Maxwell', '8289990000','1980-12-25', 43, '1911 Colonial Ct, San Antonio', 'TX','41724'),
(9, 'Doctor', 'abelwilliam', md5('orangewilliam89'), 'abelwilliam0@gmail.com', 'Abel', 'William', '9990009999','1971-12-02', 52, '1111 Big Dipper Ct ,Houston', 'TX','41922'),
(10, 'Doctor', 'carlosvargas', md5('Lagsongam3s'), 'carlos_vargas@gmail.com', 'Carlos', 'Vargas', '4048229191','1986-03-03', 37, '242 Brooks Rd, New York', 'NY','82822'),
(11, 'Doctor', 'jacksonhaven', md5('havenHeaven444'), 'jackson.haven@gmail.com', 'Jackson', 'Haven', '1112223334','1988-02-29', 35, '888 Yorkshire Rd, New York', 'NY','82823'),
(12, 'Doctor', 'naomirodriguez', md5('burgerking222'), 'naomi_rodirguez33@gmail.com', 'Naomi', 'Rodriguez', '9782234567','1984-06-29', 39, '1555 Magshire Hill Rd, Lawrenceville', 'GA','39111'),
(13, 'Doctor', 'violetelrod', md5('eldorado89gold89'), 'violetel22@gmail.com', 'Violet', 'Elrod', '4248889249','1984-08-25', 39, '1931 Martin Luther Rd, Atlanta', 'GA','38388'),
(14, 'Receptionist', 'taylorlaughtner', md5('twilightzone383'), 'taylorlaughtner@gmail.com', 'Taylor', 'Laughtner', '2229991234','1998-04-22', 25, '889 Yorkshire Rd, New York', 'NY','82823'),
(15, 'Patient', 'zackzeigler', md5('zacksterzach1'), 'zackzeigler@gmail.com', 'Zack', 'Zeigler', '1119092345','2000-05-21', 23, '818 Hufflepuff Ct, New York', 'NY','81999'),
(16, 'Patient', 'mariezeigler', md5('mariemay22222'), 'mariezeigler@gmail.com', 'Marie', 'Zeigler', '1118082345','2000-09-19', 23, '818 Hufflepuff Ct, New York', 'NY','81999'),
(17, 'Patient', 'jackjeff', md5('personalrecp104'), 'jackjeff59@gmail.com', 'Jack', 'Jeff', '7778889999','1965-01-01', 59, '1999 Square Ct, San Antonio', 'TX','42332');

CREATE TABLE disease(
	disease_id INT,
    disease_name VARCHAR(40),
    PRIMARY KEY (disease_id)
);
INSERT INTO disease(disease_id, disease_name) VALUES
(1, 'Flu'),
(2, 'COVID'),
(3, 'Pneumonia'),
(4, 'Malaria'),
(5, 'HIV/AIDS'),
(6, 'Tuberculosis'),
(7, 'E.coli'),
(8, 'Whooping Cough'),
(9, 'Common cold'),
(10, 'Lyme disease'),
(11, 'STDs'),
(12, "Asthma");

CREATE TABLE symptom(
	symptom_id INT,
    symptom_name VARCHAR(40),
    PRIMARY KEY (symptom_id)
);

INSERT INTO symptom (symptom_id, symptom_name) VALUES
(1,'Fever'),
(2,'Diarrhea'),
(3,'Fatigue'),
(4,'Muscle aches'),
(5,'Wheezing'),
(6,'Depression'),
(7,'Headache'),
(8,'Cough'),
(9,'Sore throat'),
(10,'Nausea'),
(11,'Vomiting'),
(12,'Runny nose'),
(13,'Stuffy nose'),
(14,'Chest pain'),
(15,'Rash'),
(16,'Shortness of breath'),
(17,'Joint pain'),
(18,'Weight loss or gain'),
(19,'Difficult sleeping'),
(20,'Memory problems or confusion'),
(21,'Change in bowel movements'),
(22,'Pelvic pain'),
(23, 'Dizziness'),
(24, 'Sudden numbness');

CREATE TABLE disease_symptom(
	disease_id INT,
    symptom_id INT,
    PRIMARY KEY (disease_id, symptom_id),
    FOREIGN KEY (disease_id) REFERENCES disease(disease_id),
    FOREIGN KEY (symptom_id) REFERENCES symptom(symptom_id)
);
INSERT INTO disease_symptom(disease_id, symptom_id) VALUES
(1, 1), -- Flu - Fever
(1, 7), -- Flu - Headache
(1, 8), -- Flu - Cough
(1, 9), -- Flu - Sore throat
(1, 10), -- Flu - Nausea
(1, 11), -- Flu - Vomiting
(1, 12), -- Flu - Runny nose
(1, 14), -- Flu - Chest pain

(2, 1), -- COVID - Fever
(2, 7), -- COVID - Headache
(2, 8), -- COVID - Cough
(2, 9), -- COVID - Sore throat
(2, 10), -- COVID - Nausea
(2, 11), -- COVID - Vomiting
(2, 12), -- COVID - Runny nose
(2, 16), -- COVID - Shortness of breath
(2, 20), -- COVID - Memory problems or confusion

(3, 1), -- Pneumonia - Fever
(3, 7), -- Pneumonia - Headache
(3, 8), -- Pneumonia - Cough
(3, 9), -- Pneumonia - Sore throat
(3, 10), -- Pneumonia - Nausea
(3, 11), -- Pneumonia - Vomiting
(3, 12), -- Pneumonia - Runny nose
(3, 14), -- Pneumonia - Chest pain
(3, 16), -- Pneumonia - Shortness of breath

(4, 1), -- Malaria - Fever
(4, 2), -- Malaria - Diarrhea
(4, 3), -- Malaria - Fatigue
(4, 4), -- Malaria - Muscle aches
(4, 10), -- Malaria - Nausea
(4, 11), -- Malaria - Vomiting

(5, 1), -- HIV/AIDS - Fever
(5, 3), -- HIV/AIDS - Fatigue
(5, 17), -- HIV/AIDS - Joint pain
(5, 18), -- HIV/AIDS - Weight loss or gain

(6, 1), -- Tuberculosis - Fever
(6, 3), -- Tuberculosis - Fatigue
(6, 8), -- Tuberculosis - Cough
(6, 16), -- Tuberculosis - Shortness of breath

(7, 2), -- E.coli - Diarrhea
(7, 3), -- E.coli - Fatigue
(7, 10), -- E.coli - Nausea

(8, 8), -- Whooping Cough - Cough
(8, 14), -- Whooping Cough - Chest pain

(9, 1), -- Common cold - Fever
(9, 7), -- Common cold - Headache
(9, 8), -- Common cold - Cough
(9, 9), -- Common cold - Sore throat
(9, 10), -- Common cold - Nausea
(9, 11), -- Common cold - Vomiting
(9, 12), -- Common cold - Runny nose
(9, 13), -- Common cold - Stuffy nose

(10, 15), -- Lyme disease - Rash
(10, 17), -- Lyme disease - Joint pain
(10, 18), -- Lyme disease - Weight loss or gain
(10, 20), -- Lyme disease - Memory problems or confusion

(11, 22), -- STDs - Pelvic pain
(11, 21), -- STDs - Change in bowel movements
(11, 15), -- STDs - Rash
(11, 18), -- STDs - Weight loss or gain
(11, 20), -- STDs - Memory problems or confusion

(12, 5), -- Asthma - Shortness of breath
(12, 8), -- Asthma - Cough
(12, 14); -- Asthma - Chest pain

CREATE TABLE insurance(
	insurance_id INT AUTO_INCREMENT,
    insurance_name VARCHAR(50),
    insurance_phone CHAR(10),
    street_address VARCHAR(50),
    state_address CHAR(2),
    zipcode_address VARCHAR(10),
    co_pay DECIMAL(10,2),
    PRIMARY KEY (insurance_id)
);

INSERT INTO insurance (insurance_id, insurance_name, insurance_phone, street_address, state_address, zipcode_address, co_pay) VALUES 
(1,'Affordable Medicare Solutions','7709455261','3525 Suwanee Rd, Suwannee', 'GA','30024', 100.00),
(2,'Healthcare Providers','4048926233','4519 Health Ct, Canton', 'GA', '3899', 250.00),
(3, 'Primary Health', '8888198423','4444 Concern Valley, San Antonio', 'TX', '42332', 50.00);

CREATE TABLE patient(
	user_id INT NOT NULL,
	patient_id INT NOT NULL AUTO_INCREMENT,
    SSN VARCHAR(11),
    Gender CHAR(1),
    insurance_id INT,
    isInsured BOOLEAN,
    severity_level VARCHAR(8),
    isVIP BOOLEAN,
    medical_history VARCHAR(255),
    PRIMARY KEY (patient_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (insurance_id) REFERENCES insurance(insurance_id),
    CONSTRAINT unique_user_id UNIQUE (user_id)
);

INSERT INTO patient(user_id, patient_id, SSN, insurance_id, isInsured, severity_level, isVIP, medical_history) VALUES
(1, 1, '123456789', 'F', 1, true, 'low', false , 'N/A'),
(2, 2, '232323232', 'M',2, true, 'moderate', false , 'Diabetes'),
(5, 3, '898989898', 'F', NULL, false, 'high', true, 'Stroke'),
(15, 4, '999999999', 'M', NULL, false, 'moderate', false, 'Allergic to insulin'),
(16, 5, '101001010', 'F', NULL, false, 'low', false, 'N/A'),
(17, 6, '333448282', 'M', 3, true, 'high', true, 'COVID-19');

CREATE TABLE patient_symptom(
    patient_id INT NOT NULL,
    symptom_id INT,
    PRIMARY KEY (patient_id, symptom_id),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    FOREIGN KEY (symptom_id) REFERENCES symptom(symptom_id)
);
INSERT INTO patient_symptom (patient_id, symptom_id) VALUES
(1, 1), -- fever
(1, 3), -- fatigue
(1, 8), -- muscle aches

(2, 10), -- nausea
(2, 11), -- vomiting
(2, 17), -- joint pain
(2, 18), -- weight loss or weight gain

(3, 16), -- shortness of breath
(3, 19), -- difficulty breathing
(3, 20), -- memory problems and confusion
(3, 7), -- headache
(3, 23), -- dizziness
(3, 24), -- sudden numbness

(4, 2), -- diarrhea
(4, 11), -- vomitting
(4, 18), -- weight loss or weight gain
(4, 21), -- change in bowel movements

(5, 7), -- headache
(5, 8), -- cough
(5, 9), -- sore throat

(6, 22), -- pelvic pain
(6, 21), -- change in bowel movements
(6, 19), -- difficulty sleeping
(6, 10), -- nausea
(6, 2); -- diarrhea


CREATE TABLE hospital(
	hospital_id INT AUTO_INCREMENT,
    hospital_name VARCHAR(50),
    street_address VARCHAR(50),
    state_address CHAR(2),
    zipcode_address VARCHAR(10),
    phone_number CHAR(10),
    PRIMARY KEY (hospital_id)
);
INSERT INTO hospital(hospital_id, hospital_name, street_address, state_address, zipcode_address, phone_number) VALUES 
(1000, 'Northside Hospital', '1000 Johnson Ferry Rd NE, Atlanta', 'GA', '30342', '4048205444'),
(1001, 'St. Luke Baptist Hospital', '7930 Floyd Curl Dr, San Antonio', 'TX', '42112', '2102975000'),
(1002, 'New York Presbyterian Hospital', 'Praveen Hospital Lane, New York', 'NY', '82199', '2123052500');

CREATE TABLE receptionist (
    user_id INT NOT NULL,
    hospital_id INT,
    receptionist_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (receptionist_id),
    UNIQUE(user_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id)
);
INSERT INTO receptionist (user_id, hospital_id, receptionist_id) VALUES
(3, 1000, 1), (6, 1001, 2), (14, 1002, 3);

CREATE TABLE doctor(
	user_id INT NOT NULL,
    hospital_id INT,
	doctor_id INT NOT NULL AUTO_INCREMENT,
    specialization VARCHAR(30),
    PRIMARY KEY (doctor_id),
    UNIQUE(user_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id)
);

INSERT INTO doctor (user_id, hospital_id, doctor_id, specialization) VALUES
(4, 1000, 100, 'General Medicine'),
(7, 1001, 101, 'Urology'),
(8, 1001, 102, 'Orthopedics'),
(9, 1001, 103, 'Pediatrics'),
(10, 1002, 104, 'Gastroenterology'),
(11, 1002, 105, 'General Medicine'),
(12, 1000, 106, 'Hematology'),
(13, 1000, 107, 'Ophtalmology');

CREATE TABLE doctor_availability(
    availability_id INT AUTO_INCREMENT,
    doctor_id INT NOT NULL,
    day_of_week VARCHAR(20),
    start_time TIME,
    end_time TIME,
    PRIMARY KEY (availability_id),
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id)
);
INSERT INTO doctor_availability(availability_id, doctor_id, day_of_week, start_time,end_time) VALUES
(1, 100, 'Monday', '09:00:00', '17:00:00'),
(2, 100, 'Tuesday', '09:00:00', '17:00:00'),
(3, 100, 'Wednesday', '09:00:00', '17:00:00'),
(4, 100, 'Thursday', '09:00:00', '17:00:00'),
(5, 100, 'Friday', '09:00:00', '17:00:00');

INSERT INTO doctor_availability(availability_id, doctor_id, day_of_week, start_time,end_time) VALUES
(6, 101, 'Monday', '09:00:00', '17:00:00'),
(7, 101, 'Tuesday', '09:00:00', '17:00:00'),
(8, 101, 'Wednesday', '09:00:00', '17:00:00'),
(9, 101, 'Thursday', '09:00:00', '17:00:00'),
(10, 101, 'Friday', '09:00:00', '17:00:00');

INSERT INTO doctor_availability(availability_id, doctor_id, day_of_week, start_time,end_time) VALUES
(11, 102, 'Monday', '09:00:00', '17:00:00'),
(12, 102, 'Tuesday', '09:00:00', '17:00:00'),
(13, 102, 'Wednesday', '09:00:00', '17:00:00'),
(14, 102, 'Thursday', '09:00:00', '17:00:00'),
(15, 102, 'Friday', '09:00:00', '17:00:00');

INSERT INTO doctor_availability(availability_id, doctor_id, day_of_week, start_time,end_time) VALUES
(16, 103, 'Monday', '09:00:00', '17:00:00'),
(17, 103, 'Tuesday', '09:00:00', '17:00:00'),
(18, 103, 'Wednesday', '09:00:00', '17:00:00'),
(19, 103, 'Thursday', '09:00:00', '17:00:00'),
(20, 103, 'Friday', '09:00:00', '17:00:00');

INSERT INTO doctor_availability(availability_id, doctor_id, day_of_week, start_time,end_time) VALUES
(21, 104, 'Monday', '09:00:00', '17:00:00'),
(22, 104, 'Tuesday', '09:00:00', '17:00:00'),
(23, 104, 'Wednesday', '09:00:00', '17:00:00'),
(24, 104, 'Thursday', '09:00:00', '17:00:00'),
(25, 104, 'Friday', '09:00:00', '17:00:00');

INSERT INTO doctor_availability(availability_id, doctor_id, day_of_week, start_time,end_time) VALUES
(26, 105, 'Monday', '09:00:00', '17:00:00'),
(27, 105, 'Tuesday', '09:00:00', '17:00:00'),
(28, 105, 'Wednesday', '09:00:00', '17:00:00'),
(29, 105, 'Thursday', '09:00:00', '17:00:00'),
(30, 105, 'Friday', '09:00:00', '17:00:00');

INSERT INTO doctor_availability(availability_id, doctor_id, day_of_week, start_time,end_time) VALUES
(31, 106, 'Monday', '09:00:00', '17:00:00'),
(32, 106, 'Tuesday', '09:00:00', '17:00:00'),
(33, 106, 'Wednesday', '09:00:00', '17:00:00'),
(34, 106, 'Thursday', '09:00:00', '17:00:00'),
(35, 106, 'Friday', '09:00:00', '17:00:00');

INSERT INTO doctor_availability(availability_id, doctor_id, day_of_week, start_time,end_time) VALUES
(36, 107, 'Monday', '09:00:00', '17:00:00'),
(37, 107, 'Tuesday', '09:00:00', '17:00:00'),
(38, 107, 'Wednesday', '09:00:00', '17:00:00'),
(39, 107, 'Thursday', '09:00:00', '17:00:00'),
(40, 107, 'Friday', '09:00:00', '17:00:00');

CREATE TABLE room(
    hospital_id INT,
    room_number INT NOT NULL,
    PRIMARY KEY (room_number, hospital_id),
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id)
);
INSERT INTO room(hospital_id, room_number) VALUES
(1000, 100),
(1000, 101),
(1000, 102),
(1000, 103),
(1000, 104),
(1000, 200),
(1000, 201),
(1000, 202),
(1000, 203),
(1000, 204),

(1001, 111),
(1001, 112),
(1001, 113),
(1001, 114),
(1001, 115),
(1001, 222),
(1001, 223),
(1001, 224),
(1001, 225),
(1001, 226),

(1002, 141),
(1002, 151),
(1002, 161),
(1002, 171),
(1002, 181),
(1002, 209),
(1002, 210),
(1002, 212),
(1002, 214),
(1002, 216);
   
CREATE TABLE appointment(
	appointment_id INT AUTO_INCREMENT,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    hospital_id INT,
    room_number INT,
    start_time TIME,
    end_time TIME,
    appointment_fee DECIMAL(10,2),
    PRIMARY KEY (appointment_id),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id),
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id),
    FOREIGN KEY (room_number) REFERENCES room(room_number)
);
INSERT INTO appointment(appointment_id, patient_id, doctor_id, hospital_id, room_number, start_time, end_time, appointment_fee) VALUES
(1, 1, 100, 1000, 101, '09:30:00', '10:00:00', 50.00),
(2, 2,100, 1000, 104, '11:00:00', '11:45:00', 50.00),
(3, 3,100, 1000, 203, '12:00:00', '12:30:00', 50.00),
(4, 4, 104, 1002, 214, '12:30:00', '13:00:00', 50.00),
(5, 5, 105, 1002, 171, '12:30:00', '13:00:00', 50.00),
(6, 6, 101, 1001, 222, '10:15:00', '10:45:00', 50.00);  

CREATE TABLE doctor_disease (
    doctor_id INT NOT NULL,
    disease_id INT NOT NULL,
    PRIMARY KEY (doctor_id, disease_id),
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id),
    FOREIGN KEY (disease_id) REFERENCES disease(disease_id)
);

INSERT INTO doctor_disease (doctor_id, disease_id) VALUES
(100, 1), --  General Medicine, Flu
(100, 2), -- General Medicine, COVID
(100, 3), -- General Medicine, Pneumonia
(100, 9), --  General Medicine, Common cold
(101, 11), -- Urology, STDs
(102, 10), -- Orthopedics, Lyme disease
(103, 1), -- Pediatrics, Flu
(103, 2), -- Pediatrics, COVID
(103, 9), -- Pediatrics, Common cold
(103, 12), -- Pediatrics, Asthma
(104, 4), -- Gastroenterology, Malaria
(104, 7), -- Gastroenterology, E.coli
(105, 1), -- General Medicine, Flu
(105, 2), -- General Medicine, COVID
(105, 3), -- General Medicine, Pneumonia
(105, 9), -- General Medicine, Common cold
(106, 5), -- Hematology, HIV/AIDS
(106, 6); -- Hematology, Tuberculosis

CREATE TABLE prescription(
	prescription_id INT AUTO_INCREMENT,
	doctor_id INT NOT NULL,
    patient_id INT NOT NULL,
    medicine_name VARCHAR(20),
    dosage_desc VARCHAR(20),
    prescription_fee DECIMAL(10,2),
    additional_notes VARCHAR(255),
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    PRIMARY KEY (prescription_id)
);
INSERT INTO prescription(prescription_id, doctor_id, patient_id, medicine_name, dosage_desc, prescription_fee, additional_notes) VALUES
(1, 100, 1, NULL, NULL, NULL, 'Buy over the counter Advil'),
(2, 100, 2, 'Insulin', NULL, 80.00, 'Ensure your blood level is not low'),
(3, 100, 3, 'Azilsartan ', '50 mg', 90.00, 'Take medication every 4-5 hours'),
(4, 104, 4, NULL, NULL, NULL, 'Buy over the counter Antacids'),
(5, 105, 5, NULL, NULL, NULL, 'Buy over the counter Aspirin and rest plenty'),
(6, 101, 6, 'Oxytrol','30 mg', 100.00, 'Take medication after every meal');

CREATE TABLE billing(
	billing_id INT AUTO_INCREMENT,
    patient_id INT NOT NULL,
    appointment_id INT,
    prescription_id INT NULL,
    insurance_id INT NULL,
    total_fee DECIMAL(10,2),
    bill_date TIMESTAMP,
    bill_due DATE,
    PRIMARY KEY (billing_id),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    FOREIGN KEY (appointment_id) REFERENCES appointment(appointment_id),
    FOREIGN KEY (prescription_id) REFERENCES prescription(prescription_id),
    FOREIGN KEY (insurance_id) REFERENCES insurance(insurance_id)
);  
INSERT INTO billing(billing_id, patient_id, appointment_id, prescription_id, insurance_id, total_fee, bill_date, bill_due) VALUES
(100, 1, 1, 1, 1, 0.00, '2024-02-20 16:00:00', '2024-02-23'),
(101, 2, 2, 2, 2, 0.00, '2024-02-20 16:00:00', '2024-02-23'),
(102, 3, 3, 3, NULL, 140.00, '2024-02-20 16:00:00', '2024-02-23'),
(103, 4, 4, 4, NULL, 50.00, '2024-02-23 16:00:00', '2024-02-26'),
(104, 5, 5, 5, NULL, 50.00, '2024-02-23 16:00:00', '2024-02-26'),
(105, 6, 6, 6, 3, 100.00, '2024-02-23 16:00:00', '2024-02-26');

CREATE TABLE payment(
	payment_id INT AUTO_INCREMENT,
	patient_id INT NOT NULL,
    billing_id INT,
    payment_date TIMESTAMP,
    payment_amount DECIMAL(10,2),
    payment_card_type VARCHAR(25),
    payment_card VARCHAR(120),
    PRIMARY KEY (payment_id),
	FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    FOREIGN KEY (billing_id) REFERENCES billing(billing_id)
);

INSERT INTO payment(payment_id, patient_id, billing_id, payment_date, payment_amount, payment_card_type, payment_card) VALUES
(100, 1, 100, '2024-02-20 16:00:00', 0.00, NULL, NULL),
(101, 2, 101, '2024-02-20 16:00:00', 0.00, NULL, NULL),
(102, 3, 102 ,'2024-02-21 15:34:00', 140.00,'Discover Card',md5('1111222233334444')),
(103, 4, 103, '2024-02-25 12:18:00', 50.00,'Ameris Card', md5('9999888877776666')),
(104, 5, 104, '2024-02-24 09:33:21',50.00,'Wells Fargo Card' ,md5('1212343455667788')),
(105, 6, 105, '2024-02-23 19:54:18', 100.00, 'Chase Card',md5('9292878745452323'));
