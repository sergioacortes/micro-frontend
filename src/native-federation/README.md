# Native federation sample application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## 1.- Create the angular workspace without any project

```
ng new native-federation --create-application false
```

When the workspace is created remember to change to the workspace directory

```
cd native-federation
```

## 2.- Create the shell angular application 

```
ng g application shell --routing true --style scss
```

### 2.1- Add a home component to the shell project

```
ng g c home --project shell
```
