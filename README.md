<h1> Patient Registering App </h1>

# Project Overview

It is a platform where psychiatrists can register their patients through a mobile/ web portal. Each psychiatrist belongs to a hospital.
Users can Fetch all the psychiatrists, their count along with IDs and patient details for a hospital.

## How to run locally

#### setting up database

inside database folder first run DataSchema.sql in MySql.<br/>
Then add Sample Data by running DummmyData.sql in MySql.

#### starting server

run `npm init` in thre root directory to install all the required packages.
run `npm start` to start the server.

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/30927476-e1c07127-78c4-4906-9a22-33feb575c7c2?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D30927476-e1c07127-78c4-4906-9a22-33feb575c7c2%26entityType%3Dcollection%26workspaceId%3D7e7f5a37-91e1-49c8-9a26-47d0b12ebbac)

# Libraries/ Framework used

<ul>
  <li>Node JS, Express JS for REST API</li>
  <li> SQL Database for storing data </li>
  <li> bcryptjs package for password encryption </li>
  <li> Postman for API testing </li>
</ul>

# API Endpoints

| Endpoint                 | Method | URL Path  | Request Body                                                                            | Response Format                                                                                              |
| ------------------------ | ------ | --------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Register a patient       | POST   | /patients | `{ name, address, email, phone_number, password, photo, psychiatrist_id, hospital_id }` | `{ message: 'Patient registered successfully' }` or `{ errors: { field1: 'error message' } }`                |
| Fetch data of a hospital | GET    | /patients | `{ hospital_id }`                                                                       | `{ HospitalName, TotalPsychiatristCount, TotalPatientsCount, PsychiatristDetails: [{Id,Name,PatientsCount}]} |
