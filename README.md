# To-Do List React App

This is a simple To-Do list web application built using React. You can use it to manage your tasks and keep track of your to-dos. The app allows you to add, complete, and reset tasks.


Deployed Link: https://todo-arijit.netlify.app



## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new to-dos.
- Mark to-dos as completed.
- View active and completed to-dos.
- Reset all to-dos.
- Data persistence using `localforage`.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-react.git
   ```

2. Change into the project directory:

   ```bash
   cd todo-react
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

3. You can now use the To-Do app to manage your tasks.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Material-UI: A popular React UI framework for building responsive and attractive UIs.
- `localforage`: A library for storing data in the browser.

## Folder Structure

The project folder structure is as follows:

```
todo-react
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── TodoInput.jsx
│   │   ├── TodoList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
```

## Contributing

Contributions are welcome. If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to your branch: `git push origin feature-name`.
5. Create a pull request.

Please make sure to follow the [Code of Conduct](CODE_OF_CONDUCT.md) in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to add more details and customize the README as per your needs. Don't forget to replace `your-username` in the clone URL with your actual GitHub username and add a screenshot link.
