import fetch from "node-fetch";
import { Comment } from "../@types/comment";
import { User } from "../@types/user";

class UserRepository {
  baseUrl = process.env.BASE_URL;

  getAll(): Promise<User[]> {
    return fetch(`${this.baseUrl}/users`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((users) => {
        return users;
      });
  }

  getOne(id: number): Promise<User> {
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((user) => {
        return user;
      });
  }

  getUserComments(id: number): Promise<Comment[]> {
    return fetch(`${this.baseUrl}/users/${id}/comments`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((userComments) => {
        return userComments;
      });
  }

  create(params: User): Promise<User> {
    return fetch(`${this.baseUrl}/users`, {
      method: "POST",
      body: JSON.stringify({
        name: `${params.name}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((newUser) => {
        return newUser;
      });
  }

  update(id: number, params: User): Promise<User> {
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: `${params.name}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((updateUser) => {
        return updateUser;
      });
  }

  delete(id: number): Promise<User> {
    return fetch(`${this.baseUrl}/users/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((deleteUser) => {
        return deleteUser;
      });
  }
}

// Leave the line below for tests to work
export { UserRepository };
