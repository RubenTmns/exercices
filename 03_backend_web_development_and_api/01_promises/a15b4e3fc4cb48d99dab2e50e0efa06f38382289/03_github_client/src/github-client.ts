import { getReposUrlByNickname, listRepos, getOneRepoInfos } from "../utils";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string> {
    return getReposUrlByNickname(nickname)
      .then((userData) => {
        return userData.repos_url;
      })
      .catch((error) => {
        throw error;
      });
  }

  static getRepos() {
    // You code goes here
  }

  static printRepos() {
    // You code goes here
  }

  static printRepository() {
    // You code goes here
  }

  static getProjectInformations() {
    // You code goes here
  }
}
