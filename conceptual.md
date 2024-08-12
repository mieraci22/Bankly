### Conceptual Exercise

Here are some brief answers to those questions, which you can expand upon and refine for your own responses:

Conceptual Exercise

1. What is a JWT?

 • A JWT (JSON Web Token) is a compact, URL-safe token that encodes claims and is often used for authentication and information exchange. It consists of three parts: header, payload, and signature.

2. What is the signature portion of the JWT? What does it do?

 • The signature is created by combining the encoded header and payload, then signing it with a secret key using a specified algorithm (e.g., HMAC SHA256). The signature ensures the token’s integrity, verifying that the content hasn’t been altered.

3. If a JWT is intercepted, can the attacker see what’s inside the payload?

 • Yes, the payload is base64-encoded but not encrypted, so if intercepted, the attacker can see the contents. However, they cannot modify it without invalidating the signature unless they have the secret key.

4. How can you implement authentication with a JWT? Describe how it works at a high level.

 • To implement authentication with a JWT, the server generates a token after verifying the user’s credentials. This token is then sent to the client, who includes it in the Authorization header of subsequent requests. The server verifies the token on each request, ensuring the user is authenticated without rechecking credentials.

5. Compare and contrast unit, integration, and end-to-end tests.

 • Unit Tests: Test individual units or components of the code in isolation, focusing on a specific function or method.
 • Integration Tests: Test the interaction between multiple components to ensure they work together correctly.
 • End-to-End Tests: Simulate real user scenarios by testing the entire application flow from start to finish, ensuring the system behaves as expected.

6. What is a mock? What are some things you would mock?

 • A mock is a simulated object that mimics the behavior of real objects in controlled ways. Mocks are used to isolate the unit being tested by replacing dependencies like databases, API calls, or third-party services.

7. What is continuous integration?

 • Continuous integration (CI) is a development practice where code changes are automatically tested and integrated into the main branch frequently, often multiple times a day. CI ensures that the codebase remains stable and reduces integration issues.

8. What is an environment variable, and what are they used for?

 • Environment variables are variables defined outside of the application code, typically in the system environment. They are used to store configuration settings, such as API keys, database URLs, and other sensitive information, allowing the same codebase to be deployed in different environments (e.g., development, testing, production) with different configurations.

9. What is TDD? What are some benefits and drawbacks?

 • Test-Driven Development (TDD) is a software development process where tests are written before the code that makes the tests pass. The cycle typically involves writing a test, coding to pass the test, and then refactoring the code.
 • Benefits:
 • Encourages simple, clean, and bug-free code.
 • Helps ensure that all features are covered by tests, reducing the likelihood of bugs.
 • Improves the design and architecture of the code since it forces you to think about the requirements before implementation.
 • Drawbacks:
 • Can be time-consuming, especially for complex features.
 • May lead to an excessive number of tests, some of which may become redundant or obsolete.
 • Can be challenging to apply in situations where the requirements are unclear or rapidly changing.

10. What is the value of using JSONSchema for validation?

 • JSONSchema provides a standard way to validate JSON data against a schema. It ensures that the JSON data structure is correct, adheres to expected types, and contains all required fields. This is valuable for:
 • Data Integrity: Ensuring that the data being processed is correctly structured and valid.
 • Error Handling: Providing clear and consistent error messages when the data does not meet the schema.
 • Documentation: Serving as a self-documenting format for JSON data structures.

11. What are some ways to decide which code to test?

 • Critical Path: Test the parts of the code that are essential to the application’s core functionality.
 • High Risk Areas: Focus on areas of the code that are complex, prone to bugs, or have failed in the past.
 • Frequently Used Code: Test functions or components that are heavily used or have many dependencies.
 • New Features: Prioritize testing new features to ensure they work as expected.
 • Edge Cases: Test edge cases and boundary conditions to handle unusual or unexpected inputs.

12. What does RETURNING do in SQL? When would you use it?

 • The RETURNING clause in SQL allows you to retrieve values from rows that were inserted, updated, or deleted as part of a SQL statement. This can be useful when you need to know the values of auto-incremented fields or other computed columns immediately after an operation without having to run a separate query.
 • Example Use Cases:
 • After an INSERT, to get the ID of the newly created record.
 • After an UPDATE, to see the new values of the modified columns.
 • After a DELETE, to confirm which records were deleted.

13. What are some differences between WebSockets and HTTP?

 • HTTP:
 • Protocol: Request-response protocol where the client sends a request and the server sends a response.
 • Connection: Typically short-lived; a new connection is established for each request-response cycle.
 • Communication: One-way communication where the client requests and the server responds.
 • WebSockets:
 • Protocol: Full-duplex communication protocol that allows continuous, two-way communication between the client and the server over a single, long-lived connection.
 • Connection: Connection remains open, allowing real-time data exchange.
 • Communication: Both the client and server can send and receive messages independently at any time, enabling real-time applications like chat apps or live updates.

14. Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

 • I prefered using Flask