document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const employeeId = document.getElementById('signupEmployeeId').value;
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const phone = document.getElementById('signupPhone').value;
            const address = document.getElementById('signupAddress').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
  
            const emailDomain = email.split('@')[1];
            if (emailDomain !== 'admin.com' && emailDomain !== 'employee.com') {
                alert('Email must be either @admin.com or @employee.com domain!');
                return;
            }
  
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some(user => user.employeeId === employeeId || user.email === email);
            if (userExists) {
                alert('User with this employee ID or email already exists!');
                return;
            }
  
            const user = { employeeId, name, email, password, phone, address };
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
  
            alert('Signup successful! Redirecting to login page...');
            signupForm.reset();
            window.location.href = 'login.html';
        });
    }
  
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const employeeId = document.getElementById('loginEmployeeId').value;
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
  
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.employeeId === employeeId && user.email === email && user.password === password);
  
            if (user) {
                const emailDomain = email.split('@')[1];
                if (emailDomain === 'admin.com') {
                    window.location.href = 'index.html';
                } else if (emailDomain === 'employee.com') {
                    window.location.href = 'client-index.html';
                }
            } else {
                alert('Invalid login credentials!');
            }
            const darkModeToggle = document.getElementById('darkModeToggle');
            const body = document.body;
            const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
            if (isDarkMode) {
                body.classList.add('dark-mode');
                darkModeToggle.checked = true;
            }
            darkModeToggle.addEventListener('change', () => {
                if (darkModeToggle.checked) {
                    body.classList.add('dark-mode');
                    localStorage.setItem('darkMode', 'enabled');
                } else {
                    body.classList.remove('dark-mode');
                    localStorage.setItem('darkMode', 'disabled');
                }
            });
        });
    }
  });