import React from "react";

const Blog = () => {
  return (
    <div className="grid md:grid-cols-2 m-28">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p>
            Answer: An access token is a credential that is used to authorize
            and access protected resources on an application or API. It is
            typically a JSON Web Token (JWT) that contains encoded information
            about the user and their permissions. Access tokens have an
            expiration time and are used for short-term authentication. On the
            other hand refresh token is a credential used to obtain a new access
            token once the current access token expires. It is typically a
            long-lived token with a longer expiration time compared to access
            tokens. Refresh tokens are used for secure token refreshment without
            requiring the user to re-authenticate. Common storage options for
            access token include browser cookies with the httpOnly and secure
            flags set, or in browser storage mechanisms like localStorage or
            sessionStorage. The recommended approach is to store refresh tokens
            as HTTP-only cookies with the secure flag set
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">2. Compare SQL and NoSQL databases?</h2>
          <p>
            Answer: SQL databases are based on the relational model and use
            structured query language (SQL) for defining and manipulating the
            data. Data is organized into tables with predefined schemas and
            relationships between tables. SQL databases provide strong
            consistency, ACID (Atomicity, Consistency, Isolation, Durability)
            transactions, and support for complex joins and relationships. They
            are suitable for complex queries and scenarios where data integrity
            and consistency are critical. Examples: MySQL, PostgreSQL, Oracle.{" "}
            <br /> NoSQL databases are designed to handle large volumes of
            unstructured and semi-structured data. They do not rely on a fixed
            schema and use various data models such as key-value, document,
            columnar, or graph. NoSQL databases provide flexible and scalable
            data storage, high availability, and horizontal scalability. They
            are suitable for applications with rapidly changing data
            requirements, high scalability needs, and distributed
            architectures.MongoDB, Cassandra, Redis are the examples of NoSQL
            database .
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mt-6">
        <div className="card-body">
          <h2 className="card-title">
            3. What is express js? What is Nest JS ?
          </h2>
          <p>
            Answer: Express.js is a fast and minimalist web application
            framework for Node.js. It provides a set of features and middleware
            for building web applications and APIs. Express.js focuses on
            simplicity and allows developers to create server-side applications
            with ease. It is widely used in the Node.js ecosystem. <br />
            Nest.js is a progressive and opinionated Node.js framework for
            building scalable and maintainable server-side applications. It is
            built on top of Express.js and provides a higher level of
            abstraction, structured architecture, and dependency injection.
            Nest.js follows the modular design pattern and is suitable for
            developing large-scale enterprise applications.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mt-6">
        <div className="card-body">
          <h2 className="card-title">
            1.What is MongoDB aggregate and how does it work?
          </h2>
          <p>
            Answer: MongoDB's Aggregation Framework is a powerful tool for
            performing advanced data processing and analysis operations on
            MongoDB collections. It provides a way to perform complex queries,
            transformations, and aggregations on the data stored in MongoDB. The
            Aggregation Framework operates on a collection of documents and
            processes them through a pipeline of stages. Each stage performs a
            specific operation on the documents, and the output of one stage
            becomes the input for the next stage. The stages can include
            operations like filtering, grouping, projecting, sorting, joining,
            and more.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
