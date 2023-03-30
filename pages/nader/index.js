import styles from "../../styles/Nader.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const token = process.env.NEXT_PUBLIC_GIT_HUB_TOKEN;
getGitHubProfile(token);
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
  return data;
}

const List = () => {
  const [repos, setRepos] = useState([]);
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
            <div className={styles.single} key={repo.id}>
              <h3> {repo.name}</h3>
              <Link
                href={`https://github.com/Nader-SH/${repo.name}`}
                target="_blank"
                className={styles.iconCss}
              >
                <AiFillGithub
                  style={{
                    fontSize: "40px",
                  }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
