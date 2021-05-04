import { gql, useQuery } from "@apollo/client";

const ALL_PEOPLE = gql`
  query AllPeople {
    people @client {
      name
    }
  }
`;

export default function App() {
  const {
    loading,
    data,
  } = useQuery(ALL_PEOPLE);

  let index = 0;

  return (
    <main>
      <h1>Apollo Client Issue Reproduction</h1>
      <p>
        This application can be used to demonstrate an error in Apollo Client.
      </p>

      <h2>Names</h2>
      {loading ? (
        <p>Loading…</p>
      ) : (
        <ul>
          {data?.people.map(person => (
            <li key={index++}>{person.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
