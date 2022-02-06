import { useState, useEffect } from "react";
import { RepoItem } from "./RepoItem";

import "../styles/repo.scss";

interface Repo {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

export function RepoList() {
  const [repositories, setRepositories] = useState<Repo[]>([]);

  useEffect(() => {
    async function getContent() {
      try {
        const response = await fetch(
          "https://api.github.com/users/leanderson01/repos"
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
            <a href="https://github.com/Leanderson01/" target="_blank">
              Repositórios
            </a>
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
