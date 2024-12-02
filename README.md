# Full Stack User Management Application

## Technologies
- **Frontend:** React
- **Backend:** Spring Boot (Gradle)
- **Database:** MySQL

## Prerequisites
- Java 17+
- Node.js 14+
- MySQL 8.0+
- Gradle
- npm

## Project Structure
```
user-management-app/
│
├── backend/                # Spring Boot backend
│   ├── src/
│   ├── build.gradle
│   └── README.md
│
├── frontend/                # React frontend
│   ├── src/
│   ├── package.json
│   └── README.md
│
└── README.md
```

## Backend Setup (Gradle)

Gradle Build Configuration (`build.gradle`):
```gradle
plugins {
    id 'org.springframework.boot' version '3.1.5'
    id 'io.spring.dependency-management' version '1.1.3'
    id 'java'
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'mysql:mysql-connector-java'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```

### Running Backend
```bash
cd backend
gradle clean build
gradle bootRun
```

## Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Key Features
- User Registration
- Authentication
- Profile Management
- User CRUD Operations


## Testing
```bash
# Backend
gradle test

# Frontend
npm test
```

## Deployment
- Backend: Build JAR with `gradle build`
- Frontend: `npm run build`

## Contributing
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push branch
5. Open Pull Request

## License
MIT License

