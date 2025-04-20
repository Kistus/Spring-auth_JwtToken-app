
<h1 align="center">
  <br>
  <br>
  JwtAuthentication App using Spring
  <br>
</h1>

<h4 align="center">Application created as a mine pet project</h4>


## Key Technologies

* JWT Tokens authentication and authorization
* Maven
* Spring  
* Launched with Postgres
* Tested with Postman and React app
* REady to be hosted (already contenirized with Docker)
* Kubernetes via Minicube


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone repository url

# Go into the repository
$ cd Spring-auth-JWTToken-app

# Install dependencies

# Run the app starting from entry point
```

## 3. 🐳 Build Docker Images inside Minikube

### Start Minikube:

```bash
minikube start --driver=docker

eval $(minikube docker-env)
cd Spring-auth_JWTToken-app
docker build -t springjwt:latest .

cd website-public-main
docker build -t frontend:latest .
cd ../k8s

# Deploy all services and deployments
kubectl apply -f postgres-deployment.yml
kubectl apply -f postgres-service.yml

kubectl apply -f backend-deployment.yml
kubectl apply -f backend-service.yml

kubectl apply -f frontend-deployment.yml
kubectl apply -f frontend-service.yml
kubectl rollout restart deployment frontend
kubectl rollout restart deployment spring-backend
minikube service frontend
```

> SCREENS
## SignUp
<img src="screens/signup.png"/>
SignIn
<img src="screens/signin.png">
Database state
<img src="screens/database.png">
Getting secured user
<img src="screens/getSecuredUser.png">
<h2 align="center">Connecting with React</h2>
<img src="screens/kennygif.gif"/>








