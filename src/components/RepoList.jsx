import { useState, useEffect } from "react";
import { RepoItem } from "./RepoItem";
import regeneratorRuntime from "regenerator-runtime";

import "../styles/repo.scss";

export function RepoList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function getContent() {
      try {
        const response = await fetch(
          "https://api.github.com/orgs/rocketseat/repos"
        );
        const data = await response.json();
        setRepositories(data);
      } catch (err) {
        console.error(err);
      }
    }
    getContent();
  }, []);

  return (
    <main>
      <nav>
        <h1>
          Lista de{" "}
          <span>
            <a href="https://github.com/orgs/rocketseat/">Repositórios</a>
          </span>
        </h1>
        <hr className="hr" />
      </nav>
      <section className="repolist">
        <ul>
          {repositories.map((repository) => (
            <RepoItem key={repository.id} repository={repository} />
          ))}
        </ul>
      </section>
    </main>
  );
}
