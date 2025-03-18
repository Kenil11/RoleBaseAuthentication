# RoleBaseAuthentication

This project implements **role-based authentication** to secure admin routes in a web application, ensuring that only users with the proper roles, like "Admin," can access sensitive or restricted routes. Role-based authentication (RBA) helps manage access by assigning users specific roles, each granting different permissions within the application.

## Project Details 

### :star: Give A Star

You can also give this repository a star to help others discover and use this project.

---

## 🏠 Built With:

<div style="display: flex; gap: 10px;">
  <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg" width="60" height="60" alt="JavaScript"/>
  <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nodejs/nodejs-original.svg" width="60" height="60" alt="Node.js"/>
  <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/express/express-original-wordmark.svg" width="60" height="60" alt="Express"/>
  <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mongodb/mongodb-original.svg" width="60" height="60" alt="MongoDB"/>
</div>

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Prisma
- **Authentication**: JWT, Role-Based Authentication
- **Tools**: Postman (for testing API routes)
- **Languages**: JavaScript

---

## How It Works

### Role-Based Authentication

This project uses **Role-Based Authentication (RBA)** to ensure that only authorized users with specific roles can access certain admin routes. The middleware checks the user's role before allowing access to restricted areas of the application.

### Example of Middleware

```js
function checkAdminRole(req, res, next) {
  const user = req.user;  // The user object is typically populated after authentication
  if (user.role !== 'Admin') {
    return res.status(403).json({ message: 'Access Denied' });
  }
  next();
}
