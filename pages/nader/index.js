import styles from "../../styles/Nader.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";

const token =
  "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";
async function getGitHubProfile(token) {
  const response = await fetch(`https://api.github.com/users/Nader-SH`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}

console.log(getGitHubProfile(token));

async function getAllRepos(token) {
  const response = await fetch(
    `https://api.github.com/users/Nader-SH/repos?type=all&per_page=1000`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  let myArray = [];
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    if (data[i].owner.login === "Nader-SH") {
      myArray.push(data[i]);
      console.log(myArray);
    }
  }
  console.log(myArray);
}

const List = () => {
  const [repos, setRepos] = useState([]);
  console.log(repos);
  useEffect(() => {
    getAllRepos(token);
  }, []);
  async function getAllRepos(token) {
    const response = await fetch(
      `https://api.github.com/users/Nader-SH/repos?type=all&per_page=1000`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let myArray = [];
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
      if (data[i].owner.login === "Nader-SH") {
        myArray.push(data[i]);
      }
    }
    myArray.reverse();
    setRepos(myArray);
  }

  return (
    <>
      <Head>
        <title>Nader | Nader List</title>
      </Head>
      <div>
        <h1>Nader List Repositories </h1>
      </div>
      <div>
        {repos.map((repo) => {
          return (
            <Link
              key={repo.id}
              href={`https://github.com/Nader-SH/${repo.name}`}
              className={styles.single}
              target="_blank"
            >
              <h3> {repo.name}</h3>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default List;
