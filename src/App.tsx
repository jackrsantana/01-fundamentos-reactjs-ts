import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";

import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/jackrsantana.png",
      name: "Jackson Santana",
      role: "Programador Front-end",
    },
    content: [
      { type: "paragraph", content: "Fala dev 👋👋" },
      {
        type: "paragraph",
        content:
          "As melhores práticas para desenvolver um sistema completa você encontra no meu GitHub",
      },
      { type: "link", content: "https://github.com/jackrsantana" },
    ],
    publishedAt: new Date("2023-03-25 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3G.png",
      name: "Diego Fernandez",
      role: "Engenheira de Software",
    },
    content: [
      { type: "paragraph", content: "Olá pessoal!" },
      {
        type: "paragraph",
        content:
          "Acabei de publicar um artigo sobre como melhorar a performance do seu sistema utilizando cache.",
      },
      { type: "link", content: "https://github.com/jackrsantana" },
    ],
    publishedAt: new Date("2023-03-24 12:30:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "MaYk Brito",
      role: "Desenvolvedor Back-end",
    },
    content: [
      { type: "paragraph", content: "E aí galera, tudo certo?" },
      {
        type: "paragraph",
        content:
          "Recentemente publiquei um artigo sobre boas práticas de segurança em aplicações web.",
      },
      { type: "link", content: "https://github.com/jackrsantana" },
    ],
    publishedAt: new Date("2023-02-23 08:45:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
