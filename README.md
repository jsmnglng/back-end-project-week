# Lambda Notes API

Server-side of the Lambda Notes app

## API Endpoints

### Sanity check:

`GET` `/`

### Notes Routes

| Type   | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| GET    | /api/notes        | Get all of notes        |
| GET    | /api/notes/:id    | Get notes by id         |
| POST   | /api/notes/create | Create a new note       |
| PUT    | /api/notes/:id    | Update an existing note |
| DELETE | /api/notes/:id    | Delete an existing note |

### User Routes

| Type | Endpoints          | Description            |
| ---- | ------------------ | ---------------------- |
| POST | /api/auth/register | Create a new user      |
| POST | /api/auth/login    | Login an existing user |
