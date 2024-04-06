CREATE DATABASE IF NOT EXISTS hdb;
CREATE TABLE person(
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

CREATE TABLE disease(
	disease_id INT,
    disease_name VARCHAR(40),
    PRIMARY KEY (disease_id)
);

CREATE TABLE symptom(
	symptom_id INT,
    symptom_name VARCHAR(40),
    PRIMARY KEY (symptom_id)
);

CREATE TABLE disease_symptom(
	disease_id INT,
    symptom_id INT,
    PRIMARY KEY (disease_id, symptom_id),
    FOREIGN KEY (disease_id) REFERENCES disease(disease_id),
    FOREIGN KEY (symptom_id) REFERENCES symptom(symptom_id)
);

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
    FOREIGN KEY (user_id) REFERENCES person(user_id) ON DELETE CASCADE,
    FOREIGN KEY (insurance_id) REFERENCES insurance(insurance_id),
    CONSTRAINT unique_user_id UNIQUE (user_id)
);


CREATE TABLE patient_symptom(
    patient_id INT NOT NULL,
    symptom_id INT,
    PRIMARY KEY (patient_id, symptom_id),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    FOREIGN KEY (symptom_id) REFERENCES symptom(symptom_id)
);



CREATE TABLE hospital(
	hospital_id INT AUTO_INCREMENT,
    hospital_name VARCHAR(50),
    street_address VARCHAR(50),
    state_address CHAR(2),
    zipcode_address VARCHAR(10),
    phone_number CHAR(10),
    PRIMARY KEY (hospital_id)
);

CREATE TABLE receptionist (
    user_id INT NOT NULL,
    hospital_id INT,
    receptionist_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (receptionist_id),
    UNIQUE(user_id),
    FOREIGN KEY (user_id) REFERENCES person(user_id) ON DELETE CASCADE,
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id)
);

CREATE TABLE doctor(
	user_id INT NOT NULL,
    hospital_id INT,
	doctor_id INT NOT NULL AUTO_INCREMENT,
    specialization VARCHAR(30),
    PRIMARY KEY (doctor_id),
    FOREIGN KEY (user_id) REFERENCES person(user_id) ON DELETE CASCADE,
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id)
);


CREATE TABLE doctor_availability(
    availability_id INT AUTO_INCREMENT,
    doctor_id INT NOT NULL,
    day_of_week VARCHAR(20),
    start_time TIME,
    end_time TIME,
    PRIMARY KEY (availability_id),
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id)
);

CREATE TABLE room(
    hospital_id INT,
    room_number INT NOT NULL,
    PRIMARY KEY (room_number, hospital_id),
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id)
);

CREATE TABLE appointment(
	appointment_id INT AUTO_INCREMENT,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    hospital_id INT,
    room_number INT,
    start_time DATETIME,
    end_time DATETIME,
    appointment_fee DECIMAL(10,2) DEFAULT 25.00,
    PRIMARY KEY (appointment_id),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id),
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id),
    FOREIGN KEY (room_number) REFERENCES room(room_number)
);

CREATE TABLE doctor_disease (
    doctor_id INT NOT NULL,
    disease_id INT NOT NULL,
    PRIMARY KEY (doctor_id, disease_id),
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id),
    FOREIGN KEY (disease_id) REFERENCES disease(disease_id)
);

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
