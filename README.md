# Demonstration of possible ways to include react into existing .net mvc apps

## dotnet 5.0

## Docker compose file
  - Launches a containerized postgresql db with persistent data
  - db in linux
  - persistent data in windows project directory

## \DNR.Data\ - Data Layer
- Entity Framework Core 5.0.10
- Code Migrations
- PostgreSQL

## \DNR.Business\ - Business Layer
- Simple services for dependency injection

## \DNR.Reactjsnet\ - MVC project demo using Reactjs.net nuget package

## \DNR.ReactStandalone\ - MVC project demo using a standalone react project compiled to js

## \DNR.ReactIntegrated\ - MVC project demo manually integrating react into the project

## \DNR.MSReactTemplate\ - Sample project using dotnet react template
