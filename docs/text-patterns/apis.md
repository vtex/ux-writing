---
id: apis
title: APIs
---

## API: Information Architecture

> Be mindful of the system's information architecture when building the API calls. This is the basis for an outstanding and  intuitive  Developer Experience.

- Routes, URLs, attributes, request and response bodies are an API's structural definitions. They directly affect the developer's experience, and how the documentation is built and consumed. 
- Be consistent while naming attributes, always mirror what the user would see in the UI.  
- Be consistent when defining data structure.   

💡Examples: an object that represents a gift card should be the same in all endpoints, throughout VTEX.  


## API: Endpoint Titles

> Quickly clarify the action of the endpoint.

- Indicate the endpoint's operation, or action.  
- Make that endpoint recognizable. The user should grasp its function by reading the title.  
- Prefer verbs like: Get, List, Update, Delete, Create, Cancel, Insert.  
- If what differentiates endpoints is a certain query param, add it in the title.   
Ex. Get frequency options by subscriptionId.  
- Use terminology consistent with the endpoint's attributes.

💡Example:  Update Product, Get Product Review Rate


## API: Endpoint Descriptions

> Contextualize the user about the purpose of the given endpoint.

- Provide details and context about the endpoint's use cases, adding any relevant particularities.  
- Assume that the user doesn't have any context about the given API, be thorough.  


💡Example:  Update Product, Get Product Review Rate


## API: Response Descriptions

> Inform user about the possible response codes (200, 401, etc).

- Avoid using internal codes, prefer plain language. 
-

💡Examples
