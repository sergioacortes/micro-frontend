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

### 2.2- Update the routing of the shell project (app.routes.ts)

Find the file app.routes.ts and update it to add the default route that target the home component created.

```
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent, 
    pathMatch: 'full'
}];
```

### 2.3- Clean the html code from the app.component.html file in the shell application

In the shell application, clean the html code from the app.component.html file leaving the <span>router-outlet<span> tag.

```
<h1>Shell application</h1>
<router-outlet />
```