document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // // Set up event listeners for navigation links
    // setupNavigationLinks();

    // // Render the page based on the current path
    // renderPage();

    // // Handle browser back and forward navigation
    // window.addEventListener('popstate', renderPage);

    // // Function to set up navigation link event listeners
    // const setupNavigationLinks = () => {
    //     const signupForm = document.getElementById('signupForm');
    //     const memberLink = document.getElementById('memberLink');
    //     const form = document.getElementById('form');
    //     const signUpLink = document.getElementById('signUpLink');

    //     if (signupForm) {
    //         signupForm.addEventListener('submit', (e) => {
    //             e.preventDefault();
    //             navigateTo('/login');
    //         });
    //     }

    //     if (memberLink) {
    //         memberLink.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             navigateTo('/login');
    //         });
    //     }

    //     if (form) {
    //         form.addEventListener('submit', (e) => {
    //             e.preventDefault();
    //             navigateTo('/todos');
    //         });
    //     }

    //     if (signUpLink) {
    //         signUpLink.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             navigateTo('/signup');
    //         });
    //     }
    // }

    // // Function to handle navigation
    // function navigateTo(path) {
    //     window.history.pushState({}, '', path);  // Change the URL
    //     renderPage();  // Render the appropriate page
    // }

    // Function to render pages based on the URL path
    // function renderPage() {
    //     const path = window.location.pathname;

    //     // Render the appropriate page based on the path
    //     if (path === '/signup') {
    //         renderRegisterPage();
    //     } else if (path === '/login') {
    //         renderLoginPage();  
    //     } else {
    //         renderLoginPage() // Default to login page
    //     }
    // }

    const renderRegisterPage = () => {

        app.innerHTML = '';

        // Create and append HTML elements
        const container = document.createElement('div');
        container.className = 'container';

        const header = document.createElement('div');
        header.className = 'header';
        header.innerHTML = '<h1>ToDoist</h1>';
        container.appendChild(header);

        const signupForm = document.createElement('div');
        signupForm.className = 'signup-form';
        signupForm.innerHTML = `
              <h2>Sign up </h2>
              <button class="social-signup google">Sign Up with Google</button>
              <button class="social-signup github">Sign Up with GitHub</button>
              <p>Or sign up with email</p>
              <form id="signupForm">
                <input type="email" id="email" placeholder="Email" required>
                <input type="password" id="password" placeholder="Password" required>
                <label>
                  <input type="checkbox" required> I agree to ToDoist's Terms of Service and Privacy Policy
                </label>
                <button type="submit">Register</button>
              </form>
              <a href="/login" id="memberLink">I am already a member</a>
            `;
        container.appendChild(signupForm);

        app.appendChild(container);

        // Add event listener for form submission
        document.getElementById('signupForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

        //     // Call your backend API to register the user
        //     // const response = await fetch('/register', {
        //     //     method: 'POST',
        //     //     headers: { 'Content-Type': 'application/json' },
        //     //     body: JSON.stringify({ email, password })
        //     // });

        //     // if (response.ok) {
        //     //     alert('Registration successful!');
        //     //     window.location.href = '/login';
        //     // } else {
        //     //     alert('Registration failed!');
        //     // }
            renderLoginPage()
        //     // window.location.replace('/login');
        //     // window.location.href = '/login';
            // window.history.pushState({}, '', '/login')
            // renderPage();
        });

        document.getElementById('memberLink').addEventListener('click', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            renderLoginPage()
        //     // window.location.replace('/login');
        //     // window.location.href = '/login';
            // window.history.pushState({}, '', '/login')
            // renderPage();
        });

        // setupNavigationLinks()
    }

    const renderLoginPage = () => {

        app.innerHTML = '';

        // Create and append HTML elements
        const container = document.createElement('div');
        container.className = 'login-container';

        const heading = document.createElement('h2');
        heading.textContent = 'Welcome back,';
        container.appendChild(heading);

        const form = document.createElement('form');
        form.id = 'loginForm';

        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.id = 'email';
        emailInput.placeholder = 'EMAIL';
        emailInput.required = true;
        form.appendChild(emailInput);

        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.id = 'password';
        passwordInput.placeholder = 'PASSWORD';
        passwordInput.required = true;
        form.appendChild(passwordInput);

        // const forgotPasswordLink = document.createElement('a');
        // forgotPasswordLink.href = '#';
        // forgotPasswordLink.id = 'forgotPassword';
        // forgotPasswordLink.textContent = 'Forgot password?';
        // form.appendChild(forgotPasswordLink);

        const signInButton = document.createElement('button');
        signInButton.type = 'submit';
        signInButton.textContent = 'SIGN IN';
        form.appendChild(signInButton);

        container.appendChild(form);

        const signUpParagraph = document.createElement('p');
        signUpParagraph.textContent = "Don't have an account? ";

        const signUpLink = document.createElement('a');
        signUpLink.href = '/signup';
        signUpLink.id = 'signUpLink';
        signUpLink.textContent = 'Sign Up';
        signUpParagraph.appendChild(signUpLink);

        container.appendChild(signUpParagraph);

        app.appendChild(container);

        // Add event listener for form submission
        // form.addEventListener('submit', async (e) => {
        //     e.preventDefault();
        //     const email = document.getElementById('email').value;
        //     const password = document.getElementById('password').value;

        //     // Validate user credentials from backend
        //     const response = await fetch('/login', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ email, password })
        //     });

        //     if (response.ok) {
        //         const result = await response.json();
        //         if (result.success) {
        //             // Redirect to the To-Do List page
        //             window.location.href = '/todos';
        //         } else {
        //             alert('Invalid email or password');
        //         }
        //     } else {
        //         alert('Error validating credentials');
        //     }
        // });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Validate user credentials from backend
            // window.location.replace ('/login')
            // window.location.href = '/login';
            // window.history.pushState({}, '', '/todos')
            // renderPage();
            renderTodoPage()
        });


        signUpLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Redirect to the Sign-Up page
            // window.location.replace ('/signup');
            // window.location.href = '/signup';
            // window.history.pushState({}, '', '/signup')
            // renderPage();
            renderRegisterPage()
        });

        // setupNavigationLinks();  // Set up links again

    };

    const renderTodoPage = () => {
        document.addEventListener('DOMContentLoaded', () => {
            renderPage();
        
            document.body.addEventListener('click', (event) => {
                if (event.target.id === 'addTaskBtn') {
                    addTask();
                } else if (event.target.classList.contains('edit-task')) {
                    editTask(event.target.dataset.id);
                } else if (event.target.classList.contains('delete-task')) {
                    deleteTask(event.target.dataset.id);
                } else if (event.target.id === 'saveTasksBtn') {
                    saveTasks();
                } else if (event.target.id === 'logoutBtn') {
                    logout();
                }
            });
        
            fetchTasks();  // Load tasks from the server
        });
        
        function renderPage() {
            document.body.innerHTML = `
                <div class="todos-bg-container">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1>Todos</h1>
                                <h1>Create Task</h1>
                                <input type="text" id="newTask" placeholder="What needs to be done?" />
                                <button id="addTaskBtn">Add</button>
                                <h1>My Tasks</h1>
                                <ul id="taskList"></ul>
                                <div style="display: flex; justify-content: space-between;">
                                    <button id="saveTasksBtn">Save</button>
                                    <button id="logoutBtn">Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        function fetchTasks() {
            fetch('/api/tasks')
                .then(response => response.json())
                .then(tasks => {
                    const taskList = document.getElementById('taskList');
                    taskList.innerHTML = '';
                    tasks.forEach(task => {
                        const taskItem = document.createElement('li');
                        taskItem.innerHTML = `
                            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask('${task.id}')">
                            <span contenteditable="true">${task.title}</span>
                            <button class="edit-task" data-id="${task.id}">✎</button>
                            <button class="delete-task" data-id="${task.id}">🗑️</button>
                        `;
                        taskList.appendChild(taskItem);
                    });
                })
                .catch(err => console.error(err));
        }
        
        function addTask() {
            const newTaskInput = document.getElementById('newTask');
            const title = newTaskInput.value.trim();
        
            if (title === '') return alert('Task cannot be empty.');
        
            fetch('/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title })
            })
                .then(response => response.json())
                .then(task => {
                    newTaskInput.value = '';
                    fetchTasks();
                })
                .catch(err => console.error(err));
        }
        
        function editTask(id) {
            const taskItem = document.querySelector(`[data-id='${id}']`).parentElement;
            const title = taskItem.querySelector('span').innerText.trim();
        
            fetch(`/api/tasks/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title })
            })
                .then(response => response.json())
                .then(updatedTask => {
                    fetchTasks();
                })
                .catch(err => console.error(err));
        }
        
        function deleteTask(id) {
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(() => {
                    fetchTasks();
                })
                .catch(err => console.error(err));
        }
        
        function saveTasks() {
            alert('Tasks saved to the database!');
            // Implement actual save functionality if needed
        }
        
        function logout() {
            window.location.href = '/login';
        }
        
    };

    renderLoginPage()  // Default to login page

});
