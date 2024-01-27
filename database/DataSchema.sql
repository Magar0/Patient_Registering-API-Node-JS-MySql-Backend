create database patient_registration;
use  patient_registration;

create table hospitals(
id int auto_increment primary key,
name varchar(255) not null unique
);

create table psychiatrists (
id int auto_increment primary key,
name varchar(50) not null,
hospital_id int,
foreign key (hospital_id) references hospitals(id)
);

create table patients(
id int auto_increment primary key,
name varchar(50) not null,
address varchar(255) not null,
email varchar(255) not null unique,
phone_number varchar(15),
password varchar(255) not null,
photo blob,
psychiatrist_id int,
hospital_id int,
foreign key (psychiatrist_id) references psychiatrists(id),
foreign key (hospital_id) references hospitals(id)
);


insert into hospitals(name) value("Apollo Hospitals"),
("Jawaharlal Nehru Medical College and Hospital"),
("Indira Gandhi Institute of Medical Sciences (IGIMS)"),
("AIIMS - All India Institute Of Medical Science");


show tables;
select * from hospitals order by id ;
select * from psychiatrists;
select * from patients;
