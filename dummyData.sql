use  patient_registration;

-- dummy data ***************************

insert into psychiatrists (name, hospital_id) VALUES
('Dr. Thapa', 1),
  ('Dr. Smith', 1),
  ('Dr. Patel', 1),
  ('Dr. Johnson', 1),
  ('Dr. Lee', 1),
  ('Dr. Brown', 1),
  ('Dr. Singh', 2),
  ('Dr. Kumar', 2),
  ('Dr. Khan', 2),
  ('Dr. Das', 2),
  ('Dr. Roy', 2),
  ('Dr. Sharma', 3),
  ('Dr. Asmita', 3),
  ('Dr. Anuska', 3),
    ('Dr. Sures', 3),
  ('Dr. Rao', 3),
  ('Dr. Iyer', 3),
  ('Dr. Reddy', 3),
  ('Dr. Mehta', 3),
  ('Dr. Gupta', 4),
  ('Dr. Mukherjee', 4),
  ('Dr. Chatterjee', 4),
  ('Dr. Banerjee', 4),
  ('Dr. Ghosh', 4);

select * from psychiatrists;

INSERT INTO patients (name, address, email, phone_number, password, psychiatrist_id, hospital_id) VALUES
  -- Hospital 1: Apollo Hospitals (5 patients)
  ('John Doe', '123 Main St', 'johndoe@example.com', '123-456-7890', 'password123', 1, 1),
  ('Jane Smith', '456 Elm St', 'janesmith@example.com', '987-654-3210', 'abc123', 2, 1),
  ('Peter Jones', '789 Oak St', 'peterjones@example.com', '555-1212', 'StrongPassword1!', 3, 1),
  ('Mary Brown', '101 Maple St', 'marybrown@example.com', '444-1111', 'SecurePass#2023', 4, 1),
  ('David Miller', '555 Pine St', 'davidmiller@example.com', '333-2222', 'Password12345!', 5, 1),

  -- Hospital 2: Jawaharlal Nehru Medical College and Hospital (5 patients)
  ('Susan Jackson', '666 Birch St', 'susanjackson@example.com', '222-3333', 'SuperSecurePassword99', 6, 1),
  ('Robert Williams', '888 Cedar St', 'robertwilliams@example.com', '111-4444', 'ComplexPassword$@#', 7, 2),
  ('Jennifer Taylor', '999 Elm St', 'jennifertaylor@example.com', '000-5555', 'VeryStrongPassword123!@#', 8, 2),
  ('Michael Lee', '1111 Oak St', 'michaellee@example.com', '777-8888', 'HardToGuess@123', 9, 2),
  ('Elizabeth Garcia', '2222 Maple St', 'elizabethgarcia@example.com', '666-9999', 'TopSecretPassw0rd!', 10, 2),

  -- Hospital 3: Indira Gandhi Institute of Medical Sciences (IGIMS) (5 patients)
  ('Daniel Wilson', '3333 Pine St', 'danielwilson@example.com', '555-0000', 'Unbreakable123!', 11, 2),
   ('Daniel Wilson', '3333 Pine St', 'danielwilsson@example.com', '555-0000', 'Unbreakable123!', 11, 2),
  ('Sarah Thompson', '4444 Birch St', 'sarahthompson@example.com', '444-5555', 'SuperStrong#2024', 12, 3),
  ('Matthew Garcia', '5555 Cedar St', 'matthewgarcia@example.com', '333-6666', 'HardestPasswordEver$', 13, 3),
  ('Catherine Johnson', '6666 Elm St', 'catherinejohnson@example.com', '222-7777', 'Secure&Unique2023', 14, 3),
  ('Christopher Brown', '7777 Oak St', 'christopherbrown@example.com', '111-8888', 'LongButComplicated1!', 15, 3),

  -- Hospital 4: AIIMS - All India Institute Of Medical Science (4 patients)
  ('Amanda Davis', '8888 Pine St', 'amandadavis@example.com', '000-0000', 'ImpossibleToCrack!', 16, 3),
  ('William Hernandez', '9999 Birch St', 'williamhernandez@example.com', '999-1111', 'SuperSecurePass$#2023', 17, 3),
  ('Emily Williams', '1010 Cedar St', 'emilywilliams@example.com', '888-22','SuperSecurePass$#2023', 17, 3),
    ('Thapa', 'jorhat', 'thapa@example.com', '7662850000','SuperSecurePass$#2023', 17, 3);
