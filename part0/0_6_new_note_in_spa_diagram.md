```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {content: "spa testing 3", date: "2025-06-03T16:15:45.540Z"}
    deactivate server
```
