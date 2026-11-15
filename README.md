# NovaStore API

A small NestJS backend for the NovaStore demo. It uses in-memory sample data, so changes are lost when the server restarts. The existing `index.html` is not connected to this API.

## Run

```bash
npm install
npm run start:dev
```

The API listens on `http://localhost:3000/api`.

## Endpoints

- `GET /api/products` — list all products
- `GET /api/products?category=Fashion&search=shoes` — filter by category and/or search name/category
- `GET /api/products/:id` — get a product; returns `404` when it does not exist
- `GET /api/reviews` — list reviews
- `POST /api/reviews` — add a review

Example review body:

```json
{
  "author": "Alex Johnson",
  "rating": 5,
  "comment": "Great quality and fast delivery."
}
```

Review input is validated; invalid or unexpected fields return `400 Bad Request`.
