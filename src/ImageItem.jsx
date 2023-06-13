import styles from './ImageItem.module.css';

const ImageItem = ({ imageInfo }) => (
  <div className={styles.div}>
    <img className={styles.img} src={imageInfo.media.m} alt={imageInfo.title} />
    <p className={styles.p}>
      On {imageInfo.published}, {imageInfo.author} posted this image with the
      subject &quot;{imageInfo.title}&quot;.
    </p>
  </div>
);

export default ImageItem;
