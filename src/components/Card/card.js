import React, { useState } from 'react';
import styles from './Card.module.css';

export default function Card({ youtubeId, title }) {
  const [playing, setPlaying] = useState(false);

  const thumb = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div className={styles.card}>
      {!playing ? (
        <div className={styles.thumbWrap} onClick={() => setPlaying(true)} role="button">
          <img src={thumb} alt={title || 'thumbnail'} className={styles.thumb} />
          <div className={styles.badgePlay}>▶</div>
          <div className={styles.cardTitle}>{title}</div>
        </div>
      ) : (
        <div className={styles.player}>
          <iframe
            title={title || youtubeId}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
