interface RepoItemProps {
  repository: {
    name?: string;
    description?: string;
    html_url: string;
  };
}

export function RepoItem(props: RepoItemProps) {
  return (
    <li>
      <strong>
        {props.repository?.name ?? "O repositório não tem nome :("}
      </strong>

      <p>
        {props.repository?.description ?? "O repositório não tem descrição :("}
      </p>

      <a href={props.repository?.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}
