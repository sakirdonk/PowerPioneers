import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./ArticleList.css";
import articles from "./DataArticles";

const ArticleList = () => {
  // const [artikel, setArtikel] = useState("");

  // useEffect(() => {
  //   async function getData() {
  //     const response = await axios.get("http://localhost:8000/api/artikel");
  //     setArtikel(response.data.result);
  //   }
  //   getData();
  // }, []);

  // const rekomendasiArticles = artikel.filter(
  //   (artikel) =>
  //     artikel.kategori === "Rekomendasi" || artikel.kategori === "Tips"
  // );
  // const artikelArticles = artikel.filter(
  //   (article) => article.kategori === "Artikel"
  // );

  const rekomendasiArticles = articles.filter(
    (article) => article.tag === "Rekomendasi" || article.tag === "Tips"
  );
  const artikelArticles = articles.filter(
    (article) => article.tag === "Artikel"
  );

  const ArticleItem = ({ article }) => {
    const tagClassName = article.tag ? article.tag.toLowerCase() : "";

    return (
      <div className="article-item">
        <img
          src={article.image}
          alt={article.title}
          className="article-image"
        />
        <span className={`tag ${tagClassName}`}>{article.tag}</span>
        <Link to={`/articles/${article.id}`}>
          <h2>{article.title}</h2>
        </Link>
      </div>
    );
  };

  return (
    <div className="article-list">
      <div className="article-list-container">
        <div className="left-container">
          {rekomendasiArticles.map((artikel) => (
            <ArticleItem key={artikel.id} article={artikel} />
          ))}
        </div>
        <div className="right-container">
          <div className="left-article-content">
            {artikelArticles.map((article) => (
              <div key={article.id} className="article-details">
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-image"
                />
                <span className={`tag ${article.tag.toLowerCase()}`}>
                  {article.tag}
                </span>
                <div className="artikel-detail-content">
                  <Link to={`/articles/${article.id}`}>
                    <h2>{article.title}</h2>
                  </Link>
                  {artikelArticles.includes(article) && (
                    <p>{article.excerpt}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
