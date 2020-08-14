---
id: apis
title: APIs
---

UX Writing guidelines aren't just suited for a product's UI. For our tech-heavy users, API's are the VTEX interface that they deal with. Their Developer Experience is a component of the general User Experience that we build, and influences how our brand and product is perceived. A well designed API, with clear terminology, that applies UX Writing practices is the frictionless, polished experience we want our users to have.

## API: Information Architecture

> Be mindful of the system's information architecture when building the API calls. This is the basis for an excellent and  intuitive  Developer Experience.  

- Routes, URLs, attributes, request and response bodies are an API's structural definitions. They directly affect the developer's experience, and how the documentation is built and consumed.   
- Be consistent while naming attributes, always mirror what the user would see in the UI.    
- Be consistent when defining data structure.     

💡Examples: an object that represents a gift card should be the same in all endpoints, throughout VTEX.    


## API: Endpoint Titles

> Quickly clarify the action of the endpoint.


- Make the endpoint recognizable. The user should grasp its function by reading the title.    
- Titles can follow this format:  

`Verb` (indicates the action taking place) + `Entity` (indicates what the action will affect) + `Complement` (to further specify the endpoint)    

| Operation | Verb Examples                 |
|-----------|-------------------------------|
| GET       | Get, List, Retrieve, List all |
| POST      | Create, Add, Insert           |
| PUT       | Update, Insert                |
| DEL       | Cancel, Delete                |


💡Examples: List Product Review Rate, Create SKU Service Type, Update Cart Items.  

- If what differentiates endpoints is a certain query param, add it as a complement.     
Ex. Get frequency options by subscriptionId.    
- Use terminology consistent with the endpoint's attributes.  




## API: Endpoint Descriptions

> Contextualize the user about the purpose of the given endpoint.  

- Provide details and context about the endpoint's use cases, adding any relevant particularities.    
- Assume that the user doesn't have any context about the given API, be thorough.    


💡Examples:  Update Product, Get Product Review Rate


## API: Response Descriptions

> Inform user about the possible response codes (200, 401, etc).  

- Avoid using internal codes, prefer plain language.   


💡Examples:
