# Hello Angular with Bootstrap and Material UI

Display a table in Angular styled with Bootstrap CSS and Material UI.

## What is it?

This project demonstrates how to use Angular and TypeScript to render a table of data using Bootstrap CSS and Material UI. The data is loaded from an Angular service hosted on localhost using `json-server` and rendered in the table.

This project is an extension of [Hello World, Angular](https://github.com/primaryobjects/hello-angular), which was originally designed as an isomorphic web application using Angular on the frontend and a C# .NET Core REST API as the backend. This project simplifies the example using `json-server` as the backend to serve a local JSON file as a datasource, and demonstrates the differences in style between Bootstrap and Material UI.

## Screenshots

![Screenshot 1](./cap1.png)
![Screenshot 2](./cap2.png)

## Quick Start

To launch the application, follow these steps:

1. Install the dependencies:

    ```bash
    npm install
    ```

2. Start the `json-server` to serve the data:

    ```bash
    npx json-server --watch db.json
    ```

3. In a separate terminal, start the Angular development server:

    ```bash
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200/`.

## Additional Commands

### Adding a New Angular Component

To generate a new Angular component, run:

```bash
ng generate component component-name
```

## Adding a New Angular Service

To generate a new Angular service, run:

```bash
ng generate service service-name
```

## Adding a New Angular Interface

To generate a new Angular interface, run:

```bash
ng generate interface interface-name
```

## Tech Stack

- Angular
- TypeScript
- VSCode
- json-server: A full fake REST API
- Bootstrap CSS
- Material UI

## License

MIT

## Author

Kory Becker http://www.primaryobjects.com/kory-becker